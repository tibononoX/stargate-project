/* eslint-disable no-promise-executor-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useRef, useState, useEffect, useContext, useReducer } from "react";
import axios from "@services/axios";
import "@styles/stargate/main.scss";
import SG1Render from "@components/graphics/Stargate/SG1Render";
import UserContext from "@contexts/UserContext";
import PlanetContext from "@contexts/PlanetContext";
import symbols from "@services/gateSymbols";
import { rollCalc, handleChev } from "@services/dial";
import audioSelector from "@services/audio";
import Dhd from "./Dhd";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const createGateInitialState = (position) => ({
  inputAddress: [],
  preselectedSymbols: [],
  processingInput: false,
  pooActive: false,
  resetting: false,
  ringPosition: position,
  rollData: { timing: 0, position },
  isRolling: false,
  dhdActive: false,
  ready: false,
  opening: false,
  isOpen: false,
  closing: false,
  lockChev: false,
  isLocking: false,
  locking: false,
  chevrons: [false, false, false, false, false, false, false, false],
  destLock: false,
  destinationInfo: {},
  offworldIncoming: false,
  offworld: false,
  irisOpen: true,
  irisAnim: false,
  irisOperating: false,
  autoDial: false,
  autoDialFromSocket: false,
  aborting: false,
  failLock: false,
});

const gateReducer = (state, action) => {
  switch (action.type) {
    case "initial":
      return action.payload;
    case "resetGate":
      return {
        ...createGateInitialState(action.payload),
        irisOpen: state.irisOpen,
        irisAnim: state.irisAnim,
        irisOperating: state.irisOperating,
      };
    case "destinationInfoReset":
      return { ...state, destinationInfo: {} };
    default:
      return { ...state, [action.type]: action.payload };
  }
};

export const Stargate = ({
  addressList,
  windowWidth,
  windowHeight,
  dhdOpen,
  setDhdOpen,
  selectedAddress,
  setSelectedAddress,
  setAddressBookOpen,
}) => {
  const { audioVolume, userData, socket } = useContext(UserContext);
  const { currentPlanet, setCurrentPlanet, hosting } =
    useContext(PlanetContext);

  const [gateState, dispatch] = useReducer(
    gateReducer,
    createGateInitialState(currentPlanet.poo.position)
  );
  const [prevPlanet, setPrevPlanet] = useState(currentPlanet.planetName);
  const [traveled, setTraveled] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const dhdRef = useRef();
  // Local cumulative ring rotation – used only to compute correct timing
  // for await calls in earthDialSequence/resetGate. NOT synced.
  const cumulativeRef = useRef(currentPlanet.poo.position);
  // AbortController for the currently-running earthDialSequence
  const earthDialAbortRef = useRef(null);
  // Track the abort continuation roll so resetGate can wait for it
  const abortRollTimingRef = useRef(0);
  const abortRollStartRef = useRef(0);
  // Timestamp of when the current ring roll animation started,
  // used to compute remaining visual distance on abort
  const rollStartTimeRef = useRef(0);

  useEffect(() => {
    cumulativeRef.current = currentPlanet.poo.position;
    dispatch({ type: "ringPosition", payload: currentPlanet.poo.position });
    dispatch({
      type: "rollData",
      payload: { timing: 0, position: currentPlanet.poo.position },
    });
  }, [currentPlanet]);

  const handleEarthSelectedAddress = async () => {
    if (selectedAddress === "" && gateState.inputAddress.length === 0) {
      return dispatch({
        type: "preselectedSymbols",
        payload: [],
      });
    }
    if (
      selectedAddress !== "" &&
      currentPlanet.dialMode === "EARTH" &&
      gateState.inputAddress.length === 0 &&
      !gateState.autoDial &&
      !gateState.autoDialFromSocket
    ) {
      const symbolsToPreselect = [...selectedAddress].map((letter) =>
        symbols.find((symbol) => symbol.letter === letter)
      );

      return dispatch({
        type: "preselectedSymbols",
        payload: symbolsToPreselect,
      });
    }
  };

  useEffect(() => {
    handleEarthSelectedAddress();
  }, [selectedAddress]);

  const handleIris = async (state) => {
    dispatch({ type: "irisOperating", payload: true });
    if (!state) {
      dispatch({ type: "irisAnim", payload: true });
      audioSelector(audioVolume, "irisClose");
      await timeout(2600);
    }
    if (state) {
      dispatch({ type: "irisAnim", payload: false });
      audioSelector(audioVolume, "irisOpen");
      await timeout(2800);
    }
    dispatch({ type: "irisOperating", payload: false });
    return dispatch({ type: "irisOpen", payload: state });
  };

  const resetGate = async () => {
    const currentDialMode = currentPlanet.dialMode;
    try {
      if (currentDialMode === "EARTH") {
        await handleChev(null, dispatch);
        dispatch({ type: "inputAddress", payload: [] });
        dispatch({
          type: "preselectedSymbols",
          payload: [],
        });
        setSelectedAddress("");
        dispatch({ type: "failLock", payload: false });
        if (gateState.destinationInfo?.id) {
          socket.emit(
            "offworldFail",
            currentPlanet.planetName,
            gateState.destinationInfo.planetName
          );
        }
      }
      if (
        gateState.rollData.position === currentPlanet.poo.position &&
        gateState.ringPosition === currentPlanet.poo.position
      ) {
        // If an abort-continuation roll is still in progress, let it finish
        if (abortRollTimingRef.current > 0) {
          const elapsed = Date.now() - abortRollStartRef.current;
          const remaining = abortRollTimingRef.current - elapsed - 200;
          if (remaining > 0) await timeout(remaining);
          abortRollTimingRef.current = 0;
          abortRollStartRef.current = 0;
        }
        audioSelector(audioVolume, "chevEnd");
      }
      if (
        gateState.rollData.position !== currentPlanet.poo.position &&
        gateState.ringPosition !== currentPlanet.poo.position
      ) {
        // CW, noExtraSpin=true so the reset roll is fast
        const rollValues = rollCalc(
          currentPlanet.poo,
          cumulativeRef.current,
          1,
          false,
          true
        );
        cumulativeRef.current = rollValues.position;
        dispatch({ type: "ringPosition", payload: currentPlanet.poo.position });
        dispatch({
          type: "rollData",
          payload: {
            position: currentPlanet.poo.position,
            timing: rollValues.timing,
            direction: 1,
            reset: true,
          },
        });

        await timeout(rollValues.timing - 200);
        audioSelector(audioVolume, "chevEnd");
        await timeout(200);
      }
      if (currentDialMode !== "EARTH") {
        await handleChev(null, dispatch);
        audioSelector(audioVolume, "chevEnd");
        if (gateState.destinationInfo?.id) {
          socket.emit(
            "offworldFail",
            currentPlanet.planetName,
            gateState.destinationInfo.planetName
          );
        }
      }
      setTraveled(false);
      setPrevPlanet(currentPlanet.planetName);
      setSelectedAddress("");
      cumulativeRef.current = currentPlanet.poo.position;
      return dispatch({
        type: "resetGate",
        payload: currentPlanet.poo.position,
      });
    } catch (err) {
      return console.warn(err);
    }
  };

  const handleDestOffworld = async () => {
    try {
      const addressesToCompare = addressList.filter(
        (address) => address.id !== currentPlanet.id
      );
      const destAddress = gateState.inputAddress
        .map((symbol) => symbol.letter)
        .toString()
        .replace(/,/g, "");

      const match = await addressesToCompare
        .filter((destination) => {
          const { gateAddress } = destination;

          return gateAddress.includes(destAddress);
        })
        .map((destination) => {
          const [poo] = symbols.filter(
            (symbol) => symbol.letter === destination.pooLetter
          );
          const newPlanet = { ...destination, poo };
          delete newPlanet.pooLetter;
          return newPlanet;
        });

      if (match.length > 1) {
        return null;
      }

      if (match.length === 0 && gateState.destinationInfo.id) {
        socket.emit(
          "offworldFail",
          currentPlanet.planetName,
          gateState.destinationInfo.planetName
        );
        dispatch({ type: "destinationInfoReset" });
      }

      if (match.length === 0) {
        return null;
      }

      dispatch({ type: "destinationInfo", payload: match[0] });
      return socket.emit("offworldChev", {
        planetName: currentPlanet.planetName,
        destinationName: match[0].planetName,
        chevLocked: gateState.inputAddress.length,
      });
    } catch (err) {
      return console.warn(err);
    }
  };

  const earthDialSequence = async () => {
    // Fresh controller for this chevron lock — aborted by the aborting useEffect
    const controller = new AbortController();
    earthDialAbortRef.current = controller;
    const { signal } = controller;

    const abortableTimeout = (ms) =>
      new Promise((resolve, reject) => {
        const id = setTimeout(resolve, ms);
        signal.addEventListener(
          "abort",
          () => {
            clearTimeout(id);
            reject(new DOMException("Aborted", "AbortError"));
          },
          { once: true }
        );
      });

    dispatch({ type: "processingInput", payload: true });
    const symbolToProcess = gateState.inputAddress
      .map((address) => address)
      .pop();
    // direction alternates per chevron: odd index = CW, even index = CCW
    const dir = gateState.inputAddress.length % 2 === 0 ? -1 : 1;
    const rollValues = rollCalc(symbolToProcess, cumulativeRef.current, dir);
    cumulativeRef.current = rollValues.position;

    rollStartTimeRef.current = Date.now();
    dispatch({ type: "ringPosition", payload: symbolToProcess.position });
    dispatch({
      type: "rollData",
      payload: {
        position: symbolToProcess.position,
        timing: rollValues.timing,
        direction: dir,
      },
    });

    try {
      await abortableTimeout(rollValues.timing - 50);

      audioSelector(audioVolume, "earthChev");
      await abortableTimeout(420);
      dispatch({ type: "locking", payload: true });
      await abortableTimeout(300);
      dispatch({ type: "lockChev", payload: true });
      await abortableTimeout(500);
      await handleChev(gateState.inputAddress.length, dispatch);
      await handleDestOffworld();
      await abortableTimeout(250);
      dispatch({ type: "locking", payload: false });
      await abortableTimeout(300);
      dispatch({ type: "lockChev", payload: false });
      dispatch({ type: "processingInput", payload: false });
    } catch (e) {
      if (e.name === "AbortError") {
        // Clean up mid-sequence state immediately
        dispatch({ type: "locking", payload: false });
        dispatch({ type: "lockChev", payload: false });
        dispatch({ type: "processingInput", payload: false });

        // Continue the ring in the same direction straight to POO —
        // no direction reversal, no jarring speed change.
        const pooRoll = rollCalc(
          currentPlanet.poo,
          cumulativeRef.current,
          dir,
          false,
          true // noExtraSpin: go directly to POO
        );
        cumulativeRef.current = pooRoll.position;

        // The CSS animation was mid-way through the interrupted roll.
        // Extend the POO-return timing by the remaining visual travel time
        // so the ring continues at the same angular speed without speeding up.
        const rollElapsed = Date.now() - rollStartTimeRef.current;
        const remainingRollTime = Math.max(0, rollValues.timing - rollElapsed);
        const adjustedTiming = pooRoll.timing + remainingRollTime;

        abortRollTimingRef.current = adjustedTiming;
        abortRollStartRef.current = Date.now();
        dispatch({ type: "ringPosition", payload: currentPlanet.poo.position });
        dispatch({
          type: "rollData",
          payload: {
            position: currentPlanet.poo.position,
            timing: adjustedTiming, // used for abortRollTimingRef / chevEnd timing
            direction: dir,
            reset: true,
            abortReturn: true, // tells Ring.jsx to read DOM visual position
          },
        });
      }
    }
  };

  useEffect(() => {
    if (gateState.offworld) {
      if (!gateState.chevrons[5]) {
        handleChev(6, dispatch, audioVolume);
      }
      if (gateState.ringPosition !== currentPlanet.poo.position) {
        const rollValues = rollCalc(
          currentPlanet.poo,
          cumulativeRef.current,
          1,
          false,
          true // noExtraSpin – quick return to poo
        );
        cumulativeRef.current = rollValues.position;
        dispatch({ type: "ringPosition", payload: currentPlanet.poo.position });
        dispatch({
          type: "rollData",
          payload: {
            position: currentPlanet.poo.position,
            timing: rollValues.timing,
            direction: 1,
          },
        });
      }
    }
  }, [gateState.offworld, gateState.chevrons, gateState.rollData.position]);

  // Abort any running earthDialSequence the moment the user cancels
  useEffect(() => {
    if (gateState.aborting) {
      earthDialAbortRef.current?.abort();
    }
  }, [gateState.aborting]);

  // Ring.jsx feeds back the actual DOM-based animation timing after an abort.
  // Update the refs so resetGate waits exactly the right amount of time.
  useEffect(() => {
    if (gateState.abortRollActualTiming) {
      abortRollTimingRef.current = gateState.abortRollActualTiming.timing;
      abortRollStartRef.current = gateState.abortRollActualTiming.startedAt;
    }
  }, [gateState.abortRollActualTiming]);

  const handleInput = async () => {
    try {
      if (gateState.destLock || gateState.aborting || gateState.offworld) {
        return null;
      }
      if (currentPlanet?.dialMode === "EARTH") {
        return earthDialSequence();
      }

      dispatch({
        type: "processingInput",
        payload: true,
      });

      audioSelector(
        audioVolume,
        "dhdInput",
        gateState.inputAddress.length === 0
          ? 1
          : gateState.inputAddress.length + 1
      );

      await timeout(300);
      await handleChev(gateState.inputAddress.length, dispatch, audioVolume);
      await handleDestOffworld();
      return dispatch({
        type: "processingInput",
        payload: false,
      });
    } catch (err) {
      return console.warn(err);
    }
  };

  const checkBusy = (planetName) =>
    new Promise((resolve) => {
      socket.emit("isGateBusy", currentPlanet.planetName, planetName, (value) =>
        resolve(Boolean(value))
      );
    });

  const lockDest = async () => {
    if (gateState.destLock) {
      return null;
    }
    if (currentPlanet.dialMode === "EARTH") {
      if (gateState.aborting) {
        return null;
      }
      audioSelector(audioVolume, "earthLock");
      dispatch({ type: "locking", payload: true });
      await timeout(400);
      dispatch({ type: "destLock", payload: true });
      socket.emit("destLock", {
        planetName: currentPlanet.planetName,
        destinationName: gateState.destinationInfo.planetName,
      });
      await timeout(600);
      dispatch({ type: "locking", payload: false });
      await timeout(200);
      dispatch({ type: "isLocking", payload: false });
      if (gateState.autoDial) {
        dispatch({ type: "autoDial", payload: false });
      }
      dispatch({
        type: "processingInput",
        payload: false,
      });
      return dispatch({ type: "ready", payload: true });
    }
    await timeout(800);
    audioSelector(audioVolume, "dhdLock");
    dispatch({ type: "destLock", payload: true });
    socket.emit("destLock", {
      planetName: currentPlanet.planetName,
      destinationName: gateState.destinationInfo.planetName,
    });
    dispatch({ type: "isLocking", payload: false });
    if (gateState.autoDial) {
      dispatch({ type: "autoDial", payload: false });
    }
    dispatch({
      type: "processingInput",
      payload: false,
    });
    return dispatch({ type: "ready", payload: true });
  };

  const lockFail = async () => {
    if (currentPlanet.dialMode === "EARTH") {
      if (gateState.aborting) {
        return null;
      }
      console.warn("wrong Address");
      audioSelector(audioVolume, "earthLockFail");
      dispatch({ type: "locking", payload: true });
      await timeout(400);
      dispatch({ type: "destLock", payload: false });
      dispatch({ type: "failLock", payload: true });
      await timeout(600);
      dispatch({ type: "isLocking", payload: false });
      setSelectedAddress("");
      if (gateState.autoDial) {
        dispatch({ type: "autoDial", payload: false });
      }
      dispatch({
        type: "processingInput",
        payload: false,
      });
      return false;
    }

    console.warn("Wrong address");
    dispatch({ type: "isLocking", payload: false });
    return false;
  };

  const handleRollPoo = async (poo) => {
    const rollValues = rollCalc(poo, gateState.ringPosition);
    dispatch({ type: "ringPosition", payload: rollValues.position });
    dispatch({ type: "rollData", payload: rollValues });
    await timeout(rollValues.timing);
  };

  const checkPoo = (poo) => {
    if (currentPlanet.poo.letter !== poo.letter) {
      return false;
    }
    return true;
  };

  const wrongAddress = async (offworld) => {
    if (offworld) {
      console.warn("Inbound activation canceled");
      if (!gateState.autoDial && !gateState.autoDialFromSocket) {
        dispatch({ type: "locking", payload: false });
        return dispatch({ type: "resetting", payload: true });
      }
    }

    console.warn("Dialing failed");
    audioSelector(audioVolume, "dialFail");
    try {
      await timeout(1200);
      dispatch({ type: "locking", payload: false });
      return dispatch({ type: "resetting", payload: true });
    } catch (err) {
      return console.warn(err);
    }
  };

  const checkMatching = async (poo) => {
    setSelectedAddress("");

    try {
      if (gateState.offworld || gateState.inputAddress.length < 6) {
        return null;
      }

      if (currentPlanet.dialMode !== "EARTH") {
        audioSelector(
          audioVolume,
          "dhdInput",
          gateState.inputAddress.length === 0
            ? 1
            : gateState.inputAddress.length + 1
        );
      }

      if (currentPlanet.dialMode === "EARTH") {
        dispatch({ type: "processingInput", payload: true });
        await handleRollPoo(poo);
      }

      const validPoo = checkPoo(poo);
      if (!validPoo) {
        return lockFail();
      }

      const destBusy = await checkBusy(gateState.destinationInfo.planetName);
      if (!gateState.destinationInfo?.id || destBusy === true) {
        dispatch({ type: "destinationInfoReset" });
        await lockFail();
        return socket.emit("lockFail", {
          planetName: currentPlanet.planetName,
          poo,
        });
      }

      return lockDest();
    } catch (err) {
      return console.warn(err);
    }
  };

  const openGate = async () => {
    try {
      audioSelector(audioVolume, "gateOpen");
      await timeout(1200);
      dispatch({ type: "isOpen", payload: true });
      await timeout(1500);
      return dispatch({ type: "opening", payload: false });
    } catch (err) {
      return console.warn(err);
    }
  };

  const openSequence = () => {
    const inbound = currentPlanet.planetName;
    const outbound = gateState.destinationInfo.planetName;

    console.warn("Opening link from", inbound, "to", outbound);

    if (gateState.isOpen || !gateState.destLock) {
      return null;
    }
    dispatch({ type: "opening", payload: true });

    socket.emit("openGate", {
      planetName: inbound,
      destinationName: outbound,
    });
    setSelectedAddress("");
    return openGate();
  };

  const closeGate = async (state = null) => {
    try {
      if (state === "locked") {
        audioSelector(audioVolume, "dialFail");
        await timeout(1200);
        return await resetGate();
      }
      audioSelector(audioVolume, "gateClose");
      await timeout(2400);
      dispatch({ type: "isOpen", payload: false });
      await timeout(500);
      dispatch({ type: "closing", payload: false });
      return await resetGate();
    } catch (err) {
      return console.warn(err);
    }
  };

  const closingSequence = (inbound, outbound) => {
    console.warn("Closing link from", inbound, "to", outbound);
    if (!gateState.isOpen) {
      return null;
    }
    dispatch({ type: "closing", payload: true });
    socket.emit("closeGate", {
      planetName: inbound,
      destinationName: outbound,
    });
    setSelectedAddress("");
    return closeGate();
  };

  const offworldSequence = async (state, chevLocked) => {
    if (gateState.autoDial) {
      dispatch({ type: "autoDial", payload: false });
    }
    if (gateState.autoDialFromSocket) {
      dispatch({ type: "autoDialFromSocket", payload: false });
    }
    if (state === "dialing" && gateState.inputAddress.length === 0) {
      const chevDiff =
        chevLocked - gateState.chevrons.filter((chev) => chev === true).length;

      if (
        chevDiff > 1 &&
        gateState.chevrons.filter((chev) => chev === true).length === 0
      ) {
        for (let i = 0; i < chevDiff; i++) {
          await handleChev(i, dispatch, audioVolume);
          await timeout(200);
        }
      }

      return handleChev(chevLocked, dispatch, audioVolume);
    }

    if (state === "locked") {
      dispatch({ type: "inputAddress", payload: [] });
      dispatch({ type: "preselectedSymbols", payload: [] });
      setSelectedAddress("");
      dispatch({ type: "pooActive", payload: false });
      await handleChev(6, dispatch);
      dispatch({ type: "destLock", payload: true });
      audioSelector(audioVolume, "dhdLock");
      dispatch({ type: "offworld", payload: true });
      return dispatch({ type: "isOpen", payload: false });
    }

    if (state === "open") {
      dispatch({ type: "inputAddress", payload: [] });
      dispatch({ type: "pooActive", payload: false });
      await handleChev(6, dispatch);
      dispatch({ type: "destLock", payload: true });
      dispatch({ type: "offworld", payload: true });
      return dispatch({ type: "isOpen", payload: true });
    }

    return null;
  };

  useEffect(() => {
    if (socket) {
      socket.on("offworldSequence", (state, chevLocked, instant = false) => {
        dispatch({ type: "offworldIncoming", payload: true });

        if (
          (!gateState.autoDial &&
            !gateState.autoDialFromSocket &&
            gateState.inputAddress.length === 0) ||
          state === "locked"
        ) {
          offworldSequence(state, chevLocked, instant);
        }
      });
    }
    return () => {
      socket.off("offworldSequence");
    };
  }, [gateState.chevrons]);

  useEffect(() => {
    if (gateState.resetting) {
      resetGate();
    }
  }, [gateState.resetting]);

  const emitGateState = (clientId) => {
    socket.emit("sendGateStatus", clientId, gateState);
  };

  useEffect(() => {
    if (socket) {
      socket.on("getGateState", (clientId) => {
        emitGateState(clientId);
      });
      socket.on("newGateState", (gateStatus) => {
        dispatch({ type: "initial", payload: gateStatus });
        setInitialized(true);
      });
    }
    return () => {
      socket.off("getGateState");
      socket.off("newGateState");
    };
  }, [gateState]);

  // Push gate state to server whenever it changes so new clients get it instantly
  useEffect(() => {
    if (hosting) {
      socket.emit("updateGateState", {
        planetName: currentPlanet.planetName,
        gateState,
      });
    }
  }, [gateState]);

  useEffect(() => {
    if (socket) {
      socket.on("newInput", (data) => {
        dispatch({ type: "inputAddress", payload: data });
      });
      socket.on("autoDial", (data) => {
        dispatch({ type: "preselectedSymbols", payload: data });
        dispatch({ type: "autoDialFromSocket", payload: true });
      });
      socket.on("destinationInfo", (data) => {
        dispatch({ type: "destinationInfo", payload: data });
      });
      socket.on("lockFail", async () => {
        await lockFail();
      });
      socket.on("lastChev", (poo) => {
        dispatch({ type: "pooActive", payload: poo });
      });
      socket.on("wrongAddressStraight", (offworld = false) => {
        wrongAddress(offworld);
      });
      socket.on("playerTravels", () => {
        audioSelector(audioVolume, "travelWormhole");
      });
      socket.on("playerHit", () => {
        audioSelector(audioVolume, "irisHit");
      });
      socket.on("openGate", () => {
        openGate();
      });
      socket.on("closeGate", (state = null) => {
        closeGate(state);
      });
      socket.on("updateIris", (newIrisState) => {
        handleIris(newIrisState);
      });
      socket.on("offworldLock", (state, chevLocked, instant = false) => {
        offworldSequence(state, chevLocked, instant);
      });
      socket.on("offworldClose", () => {
        dispatch({ type: "offworld", payload: false });
        closeGate();
      });
    }

    return () => {
      socket.off("newInput");
      socket.off("autoDial");
      socket.off("destinationInfo");
      socket.off("lockFail");
      socket.off("lastChev");
      socket.off("wrongAddressStraight");
      socket.off("playerTravels");
      socket.off("playerHit");
      socket.off("openGate");
      socket.off("closeGate");
      socket.off("updateIris");
      socket.off("offworldLock");
      socket.off("offworldClose");
    };
  }, []);

  useEffect(() => {
    if (gateState.pooActive !== false) {
      checkMatching(gateState.pooActive);
    }
  }, [gateState.pooActive]);

  useEffect(() => {
    if (
      gateState.inputAddress.length > 0 &&
      !gateState.resetting &&
      !gateState.isRolling
    ) {
      handleInput();
    }
  }, [gateState.inputAddress]);

  useEffect(() => {
    if (gateState.isOpen) {
      const autoClose = setTimeout(() => {
        closingSequence();
      }, 2280000);
      return () => clearTimeout(autoClose);
    }
  }, [gateState.isOpen]);

  useEffect(() => {
    if (gateState.destLock && !gateState.isOpen && gateState.ready) {
      const expires = setTimeout(() => {
        if (gateState.ready) {
          socket.emit("gateAutoReset", {
            planetName: currentPlanet.planetName,
            destinationName: gateState.destinationInfo.planetName,
          });
          if (gateState.destinationInfo?.id) {
            socket.emit(
              "offworldFail",
              currentPlanet.planetName,
              gateState.destinationInfo.planetName
            );
          }
          wrongAddress();
        }
      }, 15000);
      return () => clearTimeout(expires);
    }
  }, [
    gateState.destLock,
    gateState.isOpen,
    gateState.ready,
    gateState.destinationInfo,
  ]);

  useEffect(() => {
    if (gateState.offworld && !gateState.isOpen) {
      const expires = setTimeout(() => {
        if (!gateState.isOpen) {
          socket.emit("wrongAddressStraight", {
            planetName: currentPlanet.planetName,
          });
          wrongAddress();
        }
      }, 15800);
      return () => clearTimeout(expires);
    }
  }, [gateState.offworld, gateState.isOpen]);

  useEffect(() => {
    if (
      !gateState.destLock &&
      !gateState.isOpen &&
      gateState.inputAddress.length > 0 &&
      !gateState.isRolling
    ) {
      const expires = setTimeout(() => {
        if (gateState.inputAddress.length > 0) {
          socket.emit("wrongAddressStraight", {
            planetName: currentPlanet.planetName,
          });
          if (gateState.destinationInfo?.id) {
            socket.emit(
              "offworldFail",
              currentPlanet.planetName,
              gateState.destinationInfo.planetName
            );
          }
          wrongAddress();
        }
      }, 30000);
      return () => clearTimeout(expires);
    }
  }, [
    gateState.destLock,
    gateState.isOpen,
    gateState.inputAddress.length,
    gateState.isRolling,
    gateState.destinationInfo,
  ]);

  const leavePlanet = (planetName, destinationName) => {
    socket.emit("leave planet", planetName, destinationName);
  };

  useEffect(() => {
    setPrevPlanet(currentPlanet.planetName);
  }, [userData]);

  const travelGate = async (blocked = false) => {
    if (gateState.offworld) {
      audioSelector(audioVolume, "robloxDeath");
      return audioSelector(audioVolume, "travelWormhole");
    }

    if (blocked) {
      audioSelector(audioVolume, "travelWormhole");
      await timeout(100);
      audioSelector(audioVolume, "robloxDeath");
      await timeout(400);
      socket.emit("playerHit", {
        destinationName: gateState.destinationInfo.planetName,
      });
      return audioSelector(audioVolume, "irisHit");
    }

    audioSelector(audioVolume, "travelWormhole");
    dispatch({ type: "preselectedSymbols", payload: [] });
    if (userData) {
      const changeLocation = await axios.put(
        `/users/${userData.id}`,
        {
          currentLocationId: gateState.destinationInfo.id,
        },
        { withCredentials: true }
      );
      if (!changeLocation) {
        console.warn("User location not updated");
      }
    }

    setPrevPlanet(currentPlanet.planetName);
    console.warn("prev planet:", currentPlanet.planetName);
    leavePlanet(currentPlanet.planetName, gateState.destinationInfo.planetName);
    setCurrentPlanet(gateState.destinationInfo);
    console.warn("new planet:", gateState.destinationInfo.planetName);
    dispatch({ type: "offworld", payload: true });
    // Instant snap to destination POO – no animation on arrival
    const destPooPos = gateState.destinationInfo.poo.position;
    cumulativeRef.current = destPooPos;
    dispatch({ type: "ringPosition", payload: destPooPos });
    dispatch({
      type: "rollData",
      payload: { timing: 0, position: destPooPos, direction: 1 },
    });
    dispatch({ type: "inputAddress", payload: [] });
    dispatch({ type: "pooActive", payload: null });
    socket.emit("playerTravels", {
      planetName: currentPlanet.planetName,
      destinationName: gateState.destinationInfo.planetName,
    });
    setSelectedAddress("");
    return setTraveled(true);
  };

  const checkGateBlocked = () => {
    return socket.emit(
      "isGateBlocked",
      gateState.destinationInfo.planetName,
      (response) => travelGate(response)
    );
  };

  useEffect(() => {
    const openVortexAudio = document.getElementById("wormholeLoopAudio");
    if (openVortexAudio !== null) {
      openVortexAudio.volume = audioVolume;
      openVortexAudio.play();
    }
    const sgcAlarmAudio = document.getElementById("sgcAlarmAudio");
    if (sgcAlarmAudio !== null) {
      sgcAlarmAudio.volume = audioVolume;
      sgcAlarmAudio.play();
    }
    const sgcOffworldAlarmAudio = document.getElementById(
      "sgcOffworldAlarmAudio"
    );
    if (sgcOffworldAlarmAudio !== null) {
      sgcOffworldAlarmAudio.volume = audioVolume;
      sgcOffworldAlarmAudio.play();
    }
  }, [
    userData,
    gateState.isOpen,
    gateState.inputAddress,
    gateState.offworld,
    gateState.offworldIncoming,
  ]);

  const handleSGCDisplay = () => {
    if (!dhdRef.current) return null;

    const condition = (index, last = false) =>
      last
        ? gateState.pooActive?.id === gateState.preselectedSymbols[6]?.id &&
          gateState.destLock &&
          !gateState.offworld
        : gateState.inputAddress.some(
            (inputSymbol) =>
              gateState.preselectedSymbols[index]?.id === inputSymbol.id
          ) && gateState.chevrons[index];

    const offworldCondition =
      (gateState.offworld || gateState.offworldIncoming) &&
      !gateState.autoDial &&
      !gateState.autoDialFromSocket &&
      gateState.inputAddress.length === 0;

    return (
      <div
        className={`displayContainer ${dhdOpen ? "" : "dhdClosed"}`}
        style={{
          marginBottom:
            windowWidth < 650
              ? dhdOpen
                ? dhdRef.current.clientHeight + 5
                : 50
              : "0",
        }}
      >
        <div className="inputSequence">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <p
              className={`symbolLetter ${
                offworldCondition
                  ? "offworld"
                  : gateState.failLock
                  ? "fail"
                  : condition(i, gateState.pooActive)
                  ? "active"
                  : ""
              }`}
              key={i}
            >
              {offworldCondition
                ? ["O", "F", "F", "W", "R", "L", "D"][i]
                : gateState.failLock
                ? ["N", "O", "", "L", "O", "C", "K"][i]
                : gateState.preselectedSymbols[i]?.letter}
            </p>
          ))}
        </div>
      </div>
    );
  };

  const handleTopInfo = () => {
    return gateState.aborting ? (
      <span className="headText abort">ABORTING SEQUENCE</span>
    ) : gateState.offworld && gateState.isOpen ? (
      <span className="headText offworld">OFFWORLD WORMHOLE</span>
    ) : (gateState.offworldIncoming || gateState.offworld) &&
      !gateState.closing ? (
      <span className="headText offworld">OFFWORLD INCOMING</span>
    ) : !gateState.isOpen ? (
      <span className="headText planet">
        {`Current planet: ${currentPlanet?.planetName}`}
      </span>
    ) : (
      gateState.destinationInfo &&
      gateState.isOpen && (
        <span className="headText planet">{`Wormhole open to ${gateState.destinationInfo?.planetName}`}</span>
      )
    );
  };

  if (initialized || hosting) {
    return (
      <div className="gameContainer">
        {currentPlanet.dialMode === "EARTH" && handleSGCDisplay()}
        <p className="topInfo">{handleTopInfo()}</p>
        <div className="stargate">
          {gateState.isOpen && (
            <audio loop id="wormholeLoopAudio">
              <source src="./src/assets/sounds/stargate/wormholeLoop.wav" />
            </audio>
          )}
          {(gateState.autoDial ||
            gateState.aborting ||
            gateState.inputAddress.length !== 0) &&
            currentPlanet?.id === 1 &&
            !gateState.offworld &&
            !gateState.offworldIncoming && (
              <audio loop id="sgcAlarmAudio">
                <source src="./src/assets/sounds/alarms/sgc_alarm.wav" />
              </audio>
            )}
          {gateState.offworld ||
            (gateState.offworldIncoming && currentPlanet?.id === 1 && (
              <audio loop id="sgcOffworldAlarmAudio">
                <source src="./src/assets/sounds/alarms/sgc_offworld-alarm.wav" />
              </audio>
            ))}
          <SG1Render
            windowWidth={windowWidth}
            windowHeight={windowHeight}
            gateState={gateState}
            dispatch={dispatch}
            checkGateBlocked={checkGateBlocked}
          />
        </div>
        <Dhd
          dhdRef={dhdRef}
          dhdOpen={dhdOpen}
          setDhdOpen={setDhdOpen}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          setAddressBookOpen={setAddressBookOpen}
          gateState={gateState}
          dispatch={dispatch}
          openSequence={openSequence}
          closingSequence={closingSequence}
          wrongAddress={wrongAddress}
          prevPlanet={prevPlanet}
          traveled={traveled}
          handleIris={handleIris}
        />
      </div>
    );
  }
};

export default Stargate;
