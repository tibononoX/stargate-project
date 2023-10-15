/* eslint-disable no-promise-executor-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect, useContext, useReducer } from "react";
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

  const gateInitialState = {
    inputAddress: [],
    preselectedSymbols: [],
    processingInput: false,
    pooActive: false,
    resetting: false,
    ringPosition: currentPlanet.poo.position,
    rollData: {
      timing: 0,
      position: currentPlanet.poo.position,
    },
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
  };

  const updateGateState = (state, action) => {
    switch (action.type) {
      case "initial":
        return action.payload;
      case "resetGate":
        return {
          ...gateInitialState,
          irisOpen: state.irisOpen,
          irisAnim: state.irisAnim,
          irisOperating: state.irisOperating,
        };
      case "inputAddress":
        return { ...state, inputAddress: action.payload };
      case "preselectedSymbols":
        return { ...state, preselectedSymbols: action.payload };
      case "processingInput":
        return { ...state, processingInput: action.payload };
      case "pooActive":
        return { ...state, pooActive: action.payload };
      case "resetting":
        return { ...state, resetting: action.payload };
      case "ringPosition":
        return { ...state, ringPosition: action.payload };
      case "rollData":
        return { ...state, rollData: action.payload };
      case "isRolling":
        return { ...state, isRolling: action.payload };
      case "dhdActive":
        return { ...state, dhdActive: action.payload };
      case "ready":
        return { ...state, ready: action.payload };
      case "opening":
        return { ...state, opening: action.payload };
      case "isOpen":
        return { ...state, isOpen: action.payload };
      case "closing":
        return { ...state, closing: action.payload };
      case "lockChev":
        return { ...state, lockChev: action.payload };
      case "isLocking":
        return { ...state, isLocking: action.payload };
      case "locking":
        return { ...state, locking: action.payload };
      case "chevrons":
        return { ...state, chevrons: action.payload };
      case "destLock":
        return { ...state, destLock: action.payload };
      case "destinationInfoReset":
        return { ...state, destinationInfo: gateInitialState.destinationInfo };
      case "destinationInfo":
        return { ...state, destinationInfo: action.payload };
      case "offworldIncoming":
        return { ...state, offworldIncoming: action.payload };
      case "offworld":
        return { ...state, offworld: action.payload };
      case "irisOpen":
        return { ...state, irisOpen: action.payload };
      case "irisAnim":
        return { ...state, irisAnim: action.payload };
      case "irisOperating":
        return { ...state, irisOperating: action.payload };
      case "autoDial":
        return { ...state, autoDial: action.payload };
      case "autoDialFromSocket":
        return { ...state, autoDialFromSocket: action.payload };
      case "aborting":
        return { ...state, aborting: action.payload };
      case "failLock":
        return { ...state, failLock: action.payload };
      default:
        return state;
    }
  };
  const [gateState, dispatch] = useReducer(updateGateState, gateInitialState);
  const [prevPlanet, setPrevPlanet] = useState(currentPlanet.planetName);
  const [traveled, setTraveled] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    dispatch({ type: "ringPosition", payload: currentPlanet.poo.position });
    dispatch({
      type: "rollData",
      payload: { ...gateState.rollData, position: currentPlanet.poo.position },
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
      const symbolsToPreselect = [];

      for (let i = 0; i < selectedAddress.length; i++) {
        const letter = selectedAddress[i];
        const [object] = symbols.filter((symbol) => symbol.letter === letter);
        symbolsToPreselect.push(object);
      }

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
        audioSelector(audioVolume, "chevEnd");
      }
      if (
        gateState.rollData.position !== currentPlanet.poo.position &&
        gateState.ringPosition !== currentPlanet.poo.position
      ) {
        const rollValues = rollCalc(currentPlanet.poo, gateState.ringPosition);
        dispatch({ type: "ringPosition", payload: rollValues.position });
        dispatch({ type: "rollData", payload: { ...rollValues, reset: true } });

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
      return dispatch({
        type: "resetGate",
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
    dispatch({
      type: "processingInput",
      payload: true,
    });
    const symbolToProcess = gateState.inputAddress
      .map((address) => address)
      .pop();
    const rollValues = rollCalc(symbolToProcess, gateState.ringPosition);
    dispatch({
      type: "ringPosition",
      payload: rollValues.position,
    });
    dispatch({
      type: "rollData",
      payload: rollValues,
    });
    await timeout(rollValues.timing - 50);
    audioSelector(audioVolume, "earthChev");
    await timeout(420);
    dispatch({
      type: "locking",
      payload: true,
    });
    await timeout(300);
    dispatch({
      type: "lockChev",
      payload: true,
    });
    await timeout(500);
    await handleChev(gateState.inputAddress.length, dispatch);
    await handleDestOffworld();
    await timeout(250);
    dispatch({
      type: "locking",
      payload: false,
    });
    await timeout(300);
    dispatch({
      type: "lockChev",
      payload: false,
    });
    return dispatch({
      type: "processingInput",
      payload: false,
    });
  };

  const handleInput = async () => {
    try {
      if (gateState.destLock || gateState.aborting) {
        return null;
      }
      if (currentPlanet?.dialMode === "EARTH") {
        return earthDialSequence();
      }

      dispatch({
        type: "processingInput",
        payload: true,
      });

      if (currentPlanet.dialMode !== "EARTH") {
        audioSelector(
          audioVolume,
          "dhdInput",
          gateState.inputAddress.length === 0
            ? 1
            : gateState.inputAddress.length + 1
        );
      }

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

  const checkBusy = async (planetName) => {
    const promise = await new Promise((resolve) => {
      socket.emit(
        "isGateBusy",
        currentPlanet.planetName,
        planetName,
        (value) => {
          if (value) {
            resolve(true);
          }
          resolve(false);
        }
      );
    }).then((result) => {
      if (!result) {
        return false;
      }
      return true;
    });
    if (!promise) {
      return false;
    }
    return true;
  };

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

  const updateDestination = (newDestination) => {
    return dispatch({ type: "destinationInfo", payload: newDestination });
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

      await handleChev(chevLocked, dispatch, audioVolume);
      return dispatch({ type: "offworldIncoming", payload: true });
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
    const stateToEmit = gateState;
    socket.emit("sendGateStatus", clientId, stateToEmit);
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
        updateDestination(data);
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
    const rollValues = rollCalc(
      gateState.destinationInfo.poo,
      gateState.ringPosition,
      true
    );
    dispatch({ type: "ringPosition", payload: rollValues.position });
    dispatch({ type: "rollData", payload: rollValues });
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
    const condition = (index, last = false) => {
      if (last) {
        return (
          gateState.pooActive?.id === gateState.preselectedSymbols[6]?.id &&
          gateState.destLock &&
          !gateState.offworld
        );
      }
      return (
        gateState.inputAddress.some(
          (inputSymbol) =>
            gateState.preselectedSymbols[index].id === inputSymbol.id
        ) && gateState.chevrons[index]
      );
    };
    const offworldCondition =
      (gateState.offworld || gateState.offworldIncoming) &&
      gateState.autoDial &&
      gateState.autoDialFromSocket &&
      gateState.inputAddress.length === 0;

    return (
      <div
        className={dhdOpen ? "displayContainer" : "displayContainer dhdClosed"}
      >
        <div className="inputSequence">
          <p
            className={
              offworldCondition
                ? "symbolLetter offworld"
                : `symbolLetter ${
                    gateState.failLock ? "fail" : condition(0) ? "active" : ""
                  }`
            }
          >
            {offworldCondition
              ? "O"
              : gateState.failLock
              ? "N"
              : gateState.preselectedSymbols[0]?.letter}
          </p>
          <p
            className={
              offworldCondition
                ? "symbolLetter offworld"
                : `symbolLetter ${
                    gateState.failLock ? "fail" : condition(1) ? "active" : ""
                  }`
            }
          >
            {offworldCondition
              ? "F"
              : gateState.failLock
              ? "O"
              : gateState.preselectedSymbols[1]?.letter}
          </p>
          <p
            className={
              offworldCondition
                ? "symbolLetter offworld"
                : `symbolLetter ${
                    gateState.failLock ? "fail" : condition(2) ? "active" : ""
                  }`
            }
          >
            {offworldCondition
              ? "F"
              : gateState.failLock
              ? ""
              : gateState.preselectedSymbols[2]?.letter}
          </p>
          <p
            className={
              offworldCondition
                ? "symbolLetter offworld"
                : `symbolLetter ${
                    gateState.failLock ? "fail" : condition(3) ? "active" : ""
                  }`
            }
          >
            {offworldCondition
              ? "W"
              : gateState.failLock
              ? "L"
              : gateState.preselectedSymbols[3]?.letter}
          </p>
          <p
            className={
              offworldCondition
                ? "symbolLetter offworld"
                : `symbolLetter ${
                    gateState.failLock ? "fail" : condition(4) ? "active" : ""
                  }`
            }
          >
            {offworldCondition
              ? "R"
              : gateState.failLock
              ? "O"
              : gateState.preselectedSymbols[4]?.letter}
          </p>
          <p
            className={
              offworldCondition
                ? "symbolLetter offworld"
                : `symbolLetter ${
                    gateState.failLock ? "fail" : condition(5) ? "active" : ""
                  }`
            }
          >
            {offworldCondition
              ? "L"
              : gateState.failLock
              ? "C"
              : gateState.preselectedSymbols[5]?.letter}
          </p>
          <p
            className={
              offworldCondition
                ? "symbolLetter offworld"
                : `symbolLetter ${
                    gateState.failLock
                      ? "fail"
                      : condition(6, true)
                      ? "active"
                      : ""
                  }`
            }
          >
            {offworldCondition
              ? "D"
              : gateState.failLock
              ? "K"
              : gateState.preselectedSymbols[6]?.letter}
          </p>
        </div>
      </div>
    );
  };

  const handleTopInfo = () => {
    return gateState.aborting ? (
      <span className="headText abort">ABORTING SEQUENCE</span>
    ) : gateState.offworld ? (
      <span className="headText offworld">OFFWORLD WORMHOLE</span>
    ) : gateState.offworldIncoming ? (
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

export default { Stargate };
