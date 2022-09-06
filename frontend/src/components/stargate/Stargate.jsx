/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect, useContext } from "react";
import axios from "@services/axios";
import "@styles/stargate/main.scss";
import SG1Render from "@components/graphics/Stargate/SG1Render";
import UserContext from "@contexts/UserContext";
import PlanetContext from "@contexts/PlanetContext";
import { rollCalc, handleChev } from "@services/dial";
import audioSelector from "@services/audio";
import Dhd from "./Dhd";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const chevInit = [false, false, false, false, false, false, false, false];

export const Stargate = ({ addressList, windowWidth }) => {
  const { audioVolume, userData, socket } = useContext(UserContext);
  const { currentPlanet, setCurrentPlanet } = useContext(PlanetContext);
  const [inputAddress, setInputAddress] = useState([]);
  const [processingInput, setProcessingInput] = useState(false);
  const [pooActive, setPooActive] = useState(false);
  const [resetting, setResetting] = useState(false);

  const [ringPosition, setRingPosition] = useState(0);
  const [rollData, setRollData] = useState({});
  const [isRolling, setIsRolling] = useState(false);

  const [dhdActive, setDhdActive] = useState(false);

  const [ready, setReady] = useState(false);
  const [opening, setOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const [lockChev, setLockChev] = useState(false); // Lock chevron light
  const [locking, setLocking] = useState(false); // Lock chevron animation
  const [chevrons, setChevrons] = useState(chevInit);

  const [destLock, setDestLock] = useState(false);
  const [destinationInfo, setDestinationInfo] = useState({});
  const [prevPlanet, setPrevPlanet] = useState(currentPlanet.planetName);

  const [offworld, setOffworld] = useState(false);

  const resetGate = async () => {
    try {
      handleChev(null, setChevrons);
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
      audioSelector(audioVolume, "chevEnd");
      await timeout(150);
      setLocking(false);
      setDestLock(false);
      setPooActive(false);
      setDestinationInfo({});
      setOffworld(false);
      setInputAddress([]);
      setReady(false);
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
        audioSelector(audioVolume, "earthChev");
        setLocking(true);
        await timeout(700);
        setLockChev(true);
        handleChev(inputAddress.length, setChevrons);
        await timeout(350);
        setLocking(false);
        await timeout(700);
        setLockChev(false);
        return setProcessingInput(false);
      }

      setProcessingInput(true);
      await timeout(300);
      audioSelector(
        audioVolume,
        "dhdChev",
        inputAddress.length === 0 ? 1 : inputAddress.length + 1
      );
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
      return console.warn(err);
    }
  };

  const lockDest = async () => {
    if (currentPlanet.dialMode === "EARTH") {
      audioSelector(audioVolume, "earthLock");
      setLocking(true);
      await timeout(400);
      setDestLock(true);
      await timeout(600);
      setReady(true);
      return setLocking(false);
    }
    await timeout(800);
    audioSelector(audioVolume, "dhdLock");
    setReady(true);
    return setDestLock(true);
  };
  const lockFail = async () => {
    if (currentPlanet.dialMode === "EARTH") {
      console.warn("wrong Address");
      audioSelector(audioVolume, "earthLockFail");
      setLocking(true);
      await timeout(400);
      setDestLock(false);
      await timeout(600);
      return false;
    }

    console.warn("Wrong address");
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
      if (currentPlanet.dialMode === "EARTH") {
        await handleRoll(poo);
      }
      const match = await compareAddresses();

      if (currentPlanet.pooLetter !== poo.letter) {
        await lockFail();
        return console.warn("Wrong poo");
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

  const updateDestination = (newDestination) => {
    return setDestinationInfo(newDestination);
  };

  const openGate = async () => {
    try {
      audioSelector(audioVolume, "gateOpen");
      await timeout(1200);
      setIsOpen(true);
      await timeout(1500);
      return setOpening(false);
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

    setOpening(true);
    socket.emit("openGate", {
      planetName: inbound,
      destinationName: outbound,
    });

    return openGate();
  };

  const closeGate = async () => {
    try {
      audioSelector(audioVolume, "gateClose");
      await timeout(2400);
      setIsOpen(false);
      await timeout(100);
      setClosing(false);
      return await resetGate();
    } catch (err) {
      return console.warn(err);
    }
  };

  const closingSequence = (inbound, outbound) => {
    console.log(inbound, outbound);
    if (!isOpen) {
      return null;
    }

    setClosing(true);
    socket.emit("closeGate", {
      planetName: inbound,
      destinationName: outbound,
    });
    return closeGate();
  };

  const offworldSequence = async () => {
    const volume = audioVolume;
    audioSelector(volume, "dhdChev", 1);
    handleChev(1, setChevrons);
    await timeout(250);
    audioSelector(volume, "dhdChev", 2);
    handleChev(2, setChevrons);
    await timeout(250);
    audioSelector(volume, "dhdChev", 3);
    handleChev(3, setChevrons);
    await timeout(250);
    audioSelector(volume, "dhdChev", 4);
    handleChev(4, setChevrons);
    await timeout(250);
    audioSelector(volume, "dhdChev", 5);
    handleChev(5, setChevrons);
    await timeout(250);
    audioSelector(volume, "dhdChev", 6);
    handleChev(6, setChevrons);
    await timeout(300);
    audioSelector(volume, "dhdChev", 7);
    return setDestLock(true);
  };

  const wrongAddress = async () => {
    console.warn("Dialing failed");
    audioSelector(audioVolume, "dialFail");
    try {
      await timeout(1200);
      setLocking(false);
      return setResetting(true);
    } catch (err) {
      return console.warn(err);
    }
  };

  useEffect(() => {
    if (resetting) {
      resetGate();
    }
  }, [resetting]);

  useEffect(() => {
    if (socket) {
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
      socket.on("lastChev", (poo) => {
        setPooActive(poo);
      });
      socket.on("playerTravels", () => {
        audioSelector(audioVolume, "travelWormhole");
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
    if (pooActive !== false) {
      checkMatching(pooActive);
    }
  }, [pooActive]);

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
    if (destLock && !isOpen && ready) {
      const expires = setTimeout(() => {
        if (ready) {
          wrongAddress();
        }
      }, 60000);
      return () => clearTimeout(expires);
    }
  }, [destLock, isOpen, ready]);

  useEffect(() => {
    if (!destLock && !isOpen && inputAddress.length > 0) {
      const expires = setTimeout(() => {
        if (inputAddress.length > 0) {
          wrongAddress();
        }
      }, 60000);
      return () => clearTimeout(expires);
    }
  }, [destLock, isOpen, inputAddress.length]);

  const leavePlanet = (planetName, destinationName) => {
    socket.emit("leave planet", planetName, destinationName);
  };

  useEffect(() => {
    setPrevPlanet(currentPlanet.planetName);
  }, [userData]);

  const travelGate = async () => {
    if (offworld) {
      audioSelector(audioVolume, "robloxDeath");
      return audioSelector(audioVolume, "travelWormhole");
    }
    audioSelector(audioVolume, "travelWormhole");
    if (!userData) {
      setPrevPlanet(currentPlanet.planetName);
      console.log("prev planet:", currentPlanet.planetName);
      leavePlanet(currentPlanet.planetName);
      setCurrentPlanet(destinationInfo);
      console.log("next planet:", destinationInfo.planetName);
      setOffworld(true);
      socket.emit("playerTravels", {
        planetName: currentPlanet.planetName,
        destinationName: destinationInfo.planetName,
      });
      await timeout(5000);
      return closingSequence(
        currentPlanet.planetName,
        destinationInfo.planetName
      );
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
    console.log("prev planet:", currentPlanet.planetName);
    leavePlanet(currentPlanet.planetName, destinationInfo.planetName);
    setCurrentPlanet(destinationInfo);
    console.log("next planet:", destinationInfo.planetName);
    setOffworld(true);
    socket.emit("playerTravels", {
      planetName: currentPlanet.planetName,
      destinationName: destinationInfo.planetName,
    });
    await timeout(5000);
    return closingSequence(
      currentPlanet.planetName,
      destinationInfo.planetName
    );
  };
  useEffect(() => {
    const openVortexAudio = document.getElementById("wormholeLoopAudio");
    if (openVortexAudio !== null) {
      openVortexAudio.volume = audioVolume;
    }
    const sgcAlarmAudio = document.getElementById("sgcAlarmAudio");
    if (sgcAlarmAudio !== null) {
      sgcAlarmAudio.volume = audioVolume;
    }
    const sgcOffworldAlarmAudio = document.getElementById(
      "sgcOffworldAlarmAudio"
    );
    if (sgcOffworldAlarmAudio !== null) {
      sgcOffworldAlarmAudio.volume = audioVolume;
    }
  }, [isOpen, offworld]);

  return (
    <div className="gameContainer">
      <p className="currentPlanet">
        {offworld ? (
          <span className="offworld">OFFWORLD ACTIVATION</span>
        ) : !isOpen ? (
          `Current planet: ${currentPlanet?.planetName}`
        ) : (
          destinationInfo &&
          isOpen &&
          `Wormhole open to ${destinationInfo?.planetName}`
        )}
      </p>
      <div className="stargate">
        {isOpen && (
          <audio loop autoPlay id="wormholeLoopAudio">
            <source src="./src/assets/sounds/stargate/wormholeLoop.wav" />
          </audio>
        )}
        {isOpen && currentPlanet?.id === 1 && !offworld && (
          <audio loop autoPlay id="sgcAlarmAudio">
            <source src="./src/assets/sounds/alarms/sgc_alarm.wav" />
          </audio>
        )}
        {offworld && currentPlanet?.id === 1 && (
          <audio loop autoPlay id="sgcOffworldAlarmAudio">
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
        ready={ready}
        opening={opening}
        isOpen={isOpen}
        closing={closing}
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
