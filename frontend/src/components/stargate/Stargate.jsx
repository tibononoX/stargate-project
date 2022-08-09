/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect, useContext, useRef } from "react";
import symbols from "@services/gateSymbols";
import "@styles/stargate/main.scss";
import ReactAudioPlayer from "react-audio-player";
import SG1Render from "@components/graphics/Stargate/SG1Render";
import PlanetContext from "@contexts/PlanetContext";
import Dhd from "./Dhd";
import { rollCalc, handleChev } from "@services/dial";
import GateContext from "@contexts/GateContext";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const chevInit = [false, false, false, false, false, false, false, false];

export const Stargate = ({ addressList }) => {
  const { currentPlanet, setCurrentPlanet } = useContext(PlanetContext);
  const [inputAddress, setInputAddress] = useState([]);
  const [processingInput, setProcessingInput] = useState(false);
  const [resetting, setResetting] = useState(false);

  const [ringPosition, setRingPosition] = useState(0);
  const [rollData, setRollData] = useState({});
  const [isRolling, setIsRolling] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [lockChev, setLockChev] = useState(false); //Lock chevron light
  const [locking, setLocking] = useState(false); //Lock chevron animation
  const [chevrons, setChevrons] = useState(chevInit);

  const [destLock, setDestLock] = useState(false);
  const [destinationInfo, setDestinationInfo] = useState({});

  const handleInput = async () => {
    setProcessingInput(true);
    const symbolToProcess = inputAddress.map((address) => address).pop();
    const rollValues = rollCalc(symbolToProcess, ringPosition);
    setRingPosition(rollValues.position);
    setRollData(rollValues);

    await timeout(rollValues.timing);
    new Audio(`../../src/assets/sounds/stargate/chev_lock1.mp3`).play();
    setLocking(true);
    await timeout(700);
    setLockChev(true);
    handleChev(inputAddress.length, setChevrons);
    await timeout(350);
    setLocking(false);
    await timeout(620);
    setLockChev(false);
    return setProcessingInput(false);
  };

  const checkMatching = async (poo) => {
    const rollValues = rollCalc(poo, ringPosition);
    setRingPosition(rollValues.position);
    setRollData(rollValues);

    await timeout(rollValues.timing);

    const destAddress = inputAddress
      .map((symbol) => symbol.letter)
      .toString()
      .replace(/,/g, "");

    if (currentPlanet.gateAddress === destAddress) {
      return false;
    }

    const match = addressList.some((destination) => {
      const { gateAddress } = destination;

      if (gateAddress === destAddress) {
        setDestinationInfo(destination);
        return true;
      }
      return false;
    });
    if (!match) {
      console.warn("wrong Address");
      new Audio(`../../src/assets/sounds/stargate/chev_usual_1.wav`).play();
      setDestLock(false);
      return false;
    }
    if (currentPlanet.poo !== poo.letter) {
      console.warn("wrong Poo");
      return false;
    }

    new Audio(`../../src/assets/sounds/stargate/chev_usual_lock2.wav`).play();
    setLocking(true);
    await timeout(400);
    setDestLock(true);
    await timeout(600);
    setLocking(false);
  };

  useEffect(() => {
    if (inputAddress.length > 0 && !resetting && !isRolling) {
      handleInput();
    }
  }, [inputAddress]);

  const resetGate = async () => {
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
    new Audio(`../../src/assets/sounds/stargate/chev_usual_end.wav`).play();
    await timeout(150);
    handleChev(null, setChevrons);
    setDestLock(false);
    setInputAddress([]);
    return setResetting(false);
  };

  const openGate = async () => {
    new Audio(`../../src/assets/sounds/stargate/gateOpen.wav`).play();
    await timeout(1200);
    setIsOpen(true);
  };

  const closeGate = async () => {
    new Audio(`../../src/assets/sounds/stargate/gateClose.wav`).play();
    await timeout(2400);
    setIsOpen(false);
    await timeout(100);
    return resetGate();
  };

  const wrongAddress = () => {
    return resetGate();
  };

  return (
    <div className="gameContainer">
      <p className="currentPlanet">
        Current planet: {currentPlanet.planetName}
      </p>
      <div className="stargate">
        {isOpen && (
          <ReactAudioPlayer
            src="../../src/assets/sounds/stargate/wormholeLoop.wav"
            autoPlay
            loop
          />
        )}
        <SG1Render
          rollData={rollData}
          setIsRolling={setIsRolling}
          chevrons={chevrons}
          lockChev={lockChev}
          destLock={destLock}
          locking={locking}
          isOpen={isOpen}
        />
      </div>
      <Dhd
        inputAddress={inputAddress}
        setInputAddress={setInputAddress}
        processingInput={processingInput}
        isRolling={isRolling}
        destLock={destLock}
        isOpen={isOpen}
        openGate={openGate}
        closeGate={closeGate}
        wrongAddress={wrongAddress}
        checkMatching={checkMatching}
      />
    </div>
  );
};

export default { Stargate };
