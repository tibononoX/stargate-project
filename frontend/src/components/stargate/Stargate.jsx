/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect, useContext } from "react";
import axios from "@services/axios";
import "@styles/stargate/main.scss";
import SG1Render from "@components/graphics/Stargate/SG1Render";
import UserContext from "@contexts/UserContext";
import PlanetContext from "@contexts/PlanetContext";
import { rollCalc, handleChev } from "@services/dial";
import Dhd from "./Dhd";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const chevInit = [false, false, false, false, false, false, false, false];

export const Stargate = ({ addressList, windowWidth }) => {
  const { userData, socket } = useContext(UserContext);
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
  const [prevPlanet, setPrevPlanet] = useState(currentPlanet.planetName);

  const [offworld, setOffworld] = useState(false);

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
      setDestinationInfo({});
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

  const compareAddresses = async () => {
    try {
      const addressesToCompare = addressList.filter(
        (address) => address.id !== currentPlanet.id
      );
      const destAddress = inputAddress
        .map((symbol) => symbol.letter)
        .toString()
        .replace(/,/g, "");

      return await addressesToCompare.some((destination) => {
        const { gateAddress } = destination;

        if (gateAddress === destAddress) {
          setDestinationInfo(destination);
          console.log("dest updated", destination);
          socket.emit("destinationInfo", {
            planetName: currentPlanet.planetName,
            destination,
          });
          socket.emit("destLock", {
            planetName: currentPlanet.planetName,
            destinationName: destination.planetName,
          });
          return true;
        }
        return false;
      });
    } catch (err) {
      return console.log(err);
    }
  };

  const lockDest = async () => {
    if (currentPlanet.dialMode === "EARTH") {
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
  };

  const lockFail = async () => {
    if (currentPlanet.dialMode === "EARTH") {
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

    console.warn("wrong Address");
    return false;
  };

  const handleRoll = async (poo) => {
    const rollValues = rollCalc(poo, ringPosition);
    setRingPosition(rollValues.position);
    setRollData(rollValues);

    await timeout(rollValues.timing);
  };

  const checkMatching = async (poo) => {
    try {
      if (!currentPlanet) {
        return null;
      }
      setPooActive(poo);
      if (currentPlanet.dialMode !== "EARTH") {
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/dhd/dhd_usual_${inputAddress.length}.wav`
        ).play();
      }
      if (currentPlanet.dialMode === "EARTH") {
        await handleRoll(poo);
      }
      const match = await compareAddresses();

      if (currentPlanet.pooLetter !== poo.letter) {
        return console.warn("wrong poo");
      }

      if (!match) {
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

  const syncDestLock = () => {
    return setDestLock(true);
  };

  const updateDestination = (newDestination) => {
    return setDestinationInfo(newDestination);
  };

  const openGate = async () => {
    try {
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

  const openSequence = () => {
    const inbound = currentPlanet.planetName;
    const outbound = destinationInfo.planetName;

    if (isOpen || !destLock) {
      return null;
    }

    socket.emit("openGate", {
      planetName: inbound,
      destinationName: outbound,
    });

    return openGate();
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
      return await resetGate();
    } catch (err) {
      return console.warn(err);
    }
  };

  const closingSequence = () => {
    const inbound = prevPlanet;
    const outbound = destinationInfo.planetName;

    if (!isOpen) {
      return null;
    }

    socket.emit("closeGate", {
      planetName: inbound,
      destinationName: outbound,
    });

    return closeGate();
  };

  const offworldSequence = async () => {
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_1.wav`
    ).play();
    handleChev(1, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_2.wav`
    ).play();
    handleChev(2, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_3.wav`
    ).play();
    handleChev(3, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_4.wav`
    ).play();
    handleChev(4, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_5.wav`
    ).play();
    handleChev(5, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_6.wav`
    ).play();
    handleChev(6, setChevrons);
    await timeout(200);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_7.wav`
    ).play();
    return setDestLock(true);
  };

  const wrongAddress = async () => {
    try {
      await timeout(1200);
      return resetGate();
    } catch (err) {
      return console.warn(err);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on("user join", (user) => {
        console.warn(`${user.user} joined ${user.planet}`);
      });
      socket.on("user left", (user) => {
        console.warn(`${user.user} left ${user.planet}`);
      });
      socket.on("newInput", (data) => {
        setInputAddress(data);
      });
      socket.on("destinationInfo", (data) => {
        updateDestination(data);
      });
      socket.on("wrongAddress", async () => {
        await wrongAddress();
      });
      socket.on("lockFail", async () => {
        await lockFail();
      });
      socket.on("destLock", () => {
        syncDestLock();
      });
      socket.on("openGate", () => {
        openGate();
      });
      socket.on("closeGate", () => {
        closeGate();
      });
      socket.on("offworldLock", () => {
        setOffworld(true);
        offworldSequence();
      });
      socket.on("offworldClose", () => {
        setOffworld(false);
        closeGate();
      });
    }
  }, [socket]);

  useEffect(() => {
    if (inputAddress.length > 0 && !resetting && !isRolling) {
      handleInput();
    }
  }, [inputAddress]);

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

  const joinPlanet = (planetName) => {
    socket.emit("join planet", planetName);
  };

  const leavePlanet = (planetName) => {
    socket.emit("leave planet", planetName);
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
      setPrevPlanet(currentPlanet.planetName);
      leavePlanet(currentPlanet.planetName);
      setCurrentPlanet(destinationInfo);
      setOffworld(true);
      await timeout(5000);
      return closingSequence();
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
    setPrevPlanet(currentPlanet.planetName);
    leavePlanet(currentPlanet.planetName);
    setCurrentPlanet(destinationInfo);
    setOffworld(true);
    await timeout(5000);
    return closingSequence();
  };

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
        destinationInfo={destinationInfo}
        isOpen={isOpen}
        openSequence={openSequence}
        closingSequence={closingSequence}
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
