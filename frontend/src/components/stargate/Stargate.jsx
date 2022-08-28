/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect, useContext } from "react";
import axios from "@services/axios";
import socketIOClient from "socket.io-client";
import "@styles/stargate/main.scss";
import SG1Render from "@components/graphics/Stargate/SG1Render";
import PlanetContext from "@contexts/PlanetContext";
import { rollCalc, handleChev } from "@services/dial";
import Dhd from "./Dhd";
import UserContext from "@contexts/UserContext";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const chevInit = [false, false, false, false, false, false, false, false];

export const Stargate = ({ addressList, windowWidth }) => {
  const { userData } = useContext(UserContext);
  const { currentPlanet, setCurrentPlanet } = useContext(PlanetContext);
  const [inputAddress, setInputAddress] = useState([]);
  const [processingInput, setProcessingInput] = useState(false);
  const [pooActive, setPooActive] = useState(false);
  const [resetting, setResetting] = useState(false);

  const [ringPosition, setRingPosition] = useState(0);
  const [rollData, setRollData] = useState({});
  const [isRolling, setIsRolling] = useState(false);

  const [dhdActive, setDhdActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [lockChev, setLockChev] = useState(false); // Lock chevron light
  const [locking, setLocking] = useState(false); // Lock chevron animation
  const [chevrons, setChevrons] = useState(chevInit);

  const [destLock, setDestLock] = useState(false);
  const [destinationInfo, setDestinationInfo] = useState({});

  const [offworld, setOffworld] = useState(false);

  const [socket, setSocket] = useState(null);

  const emitVortex = () => {
    socket.emit("destLock", { destId: destinationInfo.id });
  };
  const emitCloseVortex = () => {
    socket.emit("close", { destId: destinationInfo.id });
  };

  const resetGate = async () => {
    try {
      setResetting(true);
      const rollValues = rollCalc(
        {
          id: 1,
          letter: "A",
          label: "Earth",
          position: 0,
        },
        ringPosition
      );
      setRingPosition(rollValues.position);
      setRollData({ ...rollValues, reset: true });
      await timeout(rollValues.timing);
      new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_end.wav`
      ).play();
      await timeout(150);
      handleChev(null, setChevrons);
      setLocking(false);
      setDestLock(false);
      setPooActive(false);
      // setDestinationInfo({});
      setOffworld(false);
      setInputAddress([]);
      return setResetting(false);
    } catch (err) {
      return console.warn(err);
    }
  };

  const handleInput = async () => {
    try {
      if (currentPlanet?.dialMode === "EARTH") {
        setProcessingInput(true);
        const symbolToProcess = inputAddress.map((address) => address).pop();
        const rollValues = rollCalc(symbolToProcess, ringPosition);
        setRingPosition(rollValues.position);
        setRollData(rollValues);

        await timeout(rollValues.timing - 200);
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/chev_lock1.mp3`
        ).play();
        setLocking(true);
        await timeout(700);
        setLockChev(true);
        handleChev(inputAddress.length, setChevrons);
        await timeout(350);
        setLocking(false);
        await timeout(620);
        setLockChev(false);
        return setProcessingInput(false);
      }
      new Audio(
        `${import.meta.env.VITE_FRONTEND_SRC_URL}/assets/sounds/dhd/dhd_usual_${
          inputAddress.length
        }.wav`
      ).play();
      setProcessingInput(true);
      await timeout(300);
      new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_${inputAddress.length}.wav`
      ).play();
      handleChev(inputAddress.length, setChevrons);
      return setProcessingInput(false);
    } catch (err) {
      return console.warn(err);
    }
  };

  const checkMatching = async (poo) => {
    try {
      if (currentPlanet?.dialMode !== "EARTH") {
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/dhd/dhd_usual_${inputAddress.length}.wav`
        ).play();
      }
      if (currentPlanet?.dialMode === "EARTH") {
        const rollValues = rollCalc(poo, ringPosition);
        setRingPosition(rollValues.position);
        setRollData(rollValues);

        await timeout(rollValues.timing);
      }

      const destAddress = inputAddress
        .map((symbol) => symbol.letter)
        .toString()
        .replace(/,/g, "");

      if (currentPlanet?.gateAddress === destAddress) {
        return false;
      }

      const match = await addressList.some((destination) => {
        const { gateAddress } = destination;

        if (gateAddress === destAddress) {
          setDestinationInfo(destination);
          return true;
        }
        return false;
      });

      if (currentPlanet?.dialMode === "EARTH") {
        if (!match) {
          console.warn("wrong Address");
          new Audio(
            `${
              import.meta.env.VITE_FRONTEND_SRC_URL
            }/assets/sounds/stargate/chev_usual_2.wav`
          ).play();
          setLocking(true);
          await timeout(400);
          setDestLock(false);
          await timeout(600);
          return false;
        }
      }

      if (!match) {
        console.warn("wrong Address");
        return false;
      }
      if (currentPlanet?.pooLetter !== poo.letter) {
        console.warn("wrong Poo");
        return false;
      }
      if (currentPlanet?.dialMode === "EARTH") {
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/chev_usual_lock2.wav`
        ).play();
        setLocking(true);
        await timeout(400);
        setDestLock(true);
        await timeout(600);
        return setLocking(false);
      }
      await timeout(800);
      new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_7.wav`
      ).play();
      return setDestLock(true);
    } catch (err) {
      return console.warn(err);
    }
  };

  useEffect(() => {
    if (inputAddress.length > 0 && !resetting && !isRolling) {
      handleInput();
    }
  }, [inputAddress]);

  const offworldVortex = async () => {
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_7.wav`
    ).play();
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/gateOpen.wav`
    ).play();

    await timeout(1200);
    return setIsOpen(true);
  };

  const openGate = async () => {
    try {
      if (!destLock || inputAddress.length === 0) {
        return null;
      }

      new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/gateOpen.wav`
      ).play();
      await timeout(1200);
      return setIsOpen(true);
    } catch (err) {
      return console.warn(err);
    }
  };

  const closeGate = async () => {
    try {
      new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/gateClose.wav`
      ).play();
      await timeout(2400);
      setIsOpen(false);
      await timeout(100);
      return resetGate();
    } catch (err) {
      return console.warn(err);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const autoClose = setTimeout(() => {
        closeGate();
      }, 2280000);
      return () => clearTimeout(autoClose);
    }
  }, [isOpen]);

  useEffect(() => {
    if (destLock && !isOpen) {
      const expires = setTimeout(() => {
        resetGate();
      }, 60000);
      return () => clearTimeout(expires);
    }
  }, [destLock, isOpen]);

  const wrongAddress = async () => {
    try {
      await timeout(1200);
      return resetGate();
    } catch (err) {
      return console.warn(err);
    }
  };

  const travelGate = async () => {
    if (offworld) {
      new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/roblox-death.mp3`
      ).play();
      return new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/teleport_${Math.floor(
          Math.random() * (8 - 1) + 1
        )}.mp3`
      ).play();
    }
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/teleport_${Math.floor(
        Math.random() * (8 - 1) + 1
      )}.mp3`
    ).play();
    if (!userData) {
      return setCurrentPlanet(destinationInfo);
    }
    const changeLocation = await axios.put(
      `/users/${userData.id}`,
      {
        currentLocationId: destinationInfo.id,
      },
      { withCredentials: true }
    );
    if (!changeLocation) {
      return console.warn("location not updated");
    }
    return setCurrentPlanet(destinationInfo);
  };

  const offworldSequence = async () => {
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_${inputAddress.length}.wav`
    ).play();
    handleChev(1, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_${inputAddress.length}.wav`
    ).play();
    handleChev(2, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_${inputAddress.length}.wav`
    ).play();
    handleChev(3, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_${inputAddress.length}.wav`
    ).play();
    handleChev(4, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_${inputAddress.length}.wav`
    ).play();
    handleChev(5, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_${inputAddress.length}.wav`
    ).play();
    handleChev(6, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_${inputAddress.length}.wav`
    ).play();
    return setDestLock(true);
  };

  const [offId, setOffId] = useState(null);

  const offworldActivation = async () => {
    setOffworld(true);
    await offworldSequence();
    await timeout(400);
    return offworldVortex();
  };

  useEffect(() => {
    if (destinationInfo && socket && !isOpen) {
      emitVortex();
    }
    if (destinationInfo && socket && isOpen) {
      emitCloseVortex();
    }
  }, [dhdActive]);

  useEffect(() => {
    if (offId && offId?.destId === currentPlanet.id) {
      offworldActivation();
    }
  }, [offId]);

  useEffect(() => {
    if (!socket) {
      const socketServer = socketIOClient(`${import.meta.env.VITE_BACKEND}`);
      setSocket(socketServer);
    }

    if (socket) {
      socket.on("offworld", (socketData) => {
        setOffId(socketData);
      });
      socket.on("close", () => {
        setOffId(null);
        closeGate();
      });
    }
  }, [socket]);

  return (
    <div className="gameContainer">
      <p className="currentPlanet">
        {offworld ? (
          <span className="offworld">OFFWORLD ACTIVATION</span>
        ) : (
          `Current planet: ${currentPlanet?.planetName}`
        )}
      </p>
      <div className="stargate">
        {isOpen && (
          <audio loop autoPlay id="wormholeLoop">
            <source src="./src/assets/sounds/stargate/wormholeLoop.wav" />
          </audio>
        )}
        {isOpen && currentPlanet?.id === 1 && !offworld && (
          <audio loop autoPlay id="sgcAlarm">
            <source src="./src/assets/sounds/alarms/sgc_alarm.wav" />
          </audio>
        )}
        {offworld && currentPlanet?.id === 1 && (
          <audio loop autoPlay id="sgcAlarm">
            <source src="./src/assets/sounds/alarms/sgc_offworld-alarm.wav" />
          </audio>
        )}
        <SG1Render
          windowWidth={windowWidth}
          rollData={rollData}
          setIsRolling={setIsRolling}
          chevrons={chevrons}
          lockChev={lockChev}
          destLock={destLock}
          locking={locking}
          isOpen={isOpen}
          travelGate={travelGate}
        />
      </div>
      <Dhd
        inputAddress={inputAddress}
        setInputAddress={setInputAddress}
        processingInput={processingInput}
        pooActive={pooActive}
        setPooActive={setPooActive}
        isRolling={isRolling}
        destLock={destLock}
        isOpen={isOpen}
        openGate={openGate}
        closeGate={closeGate}
        wrongAddress={wrongAddress}
        checkMatching={checkMatching}
        dhdActive={dhdActive}
        setDhdActive={setDhdActive}
        offworld={offworld}
      />
    </div>
  );
};

export default { Stargate };
