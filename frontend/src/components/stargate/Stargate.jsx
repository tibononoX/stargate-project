/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect, useContext } from "react";
import "@styles/stargate/main.scss";
import ReactAudioPlayer from "react-audio-player";
import wormholeSound from "@assets/sounds/stargate/wormholeLoop.wav";
import SG1Render from "@components/graphics/Stargate/SG1Render";
import PlanetContext from "@contexts/PlanetContext";
import { rollCalc, handleChev } from "@services/dial";
import Dhd from "./Dhd";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const chevInit = [false, false, false, false, false, false, false, false];

export const Stargate = ({ addressList }) => {
  const { currentPlanet, setCurrentPlanet } = useContext(PlanetContext);
  const [inputAddress, setInputAddress] = useState([]);
  const [processingInput, setProcessingInput] = useState(false);
  const [pooActive, setPooActive] = useState(false);
  const [resetting, setResetting] = useState(false);

  const [ringPosition, setRingPosition] = useState(0);
  const [rollData, setRollData] = useState({});
  const [isRolling, setIsRolling] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [lockChev, setLockChev] = useState(false); // Lock chevron light
  const [locking, setLocking] = useState(false); // Lock chevron animation
  const [chevrons, setChevrons] = useState(chevInit);

  const [destLock, setDestLock] = useState(false);
  const [destinationInfo, setDestinationInfo] = useState({});

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
    setInputAddress([]);
    return setResetting(false);
  };

  const handleInput = async () => {
    if (currentPlanet.dialMode === "EARTH") {
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

    setProcessingInput(true);
    new Audio(
      `${import.meta.env.VITE_FRONTEND_SRC_URL}/assets/sounds/dhd/dhd_usual_${
        inputAddress.length
      }.wav`
    ).play();
    await timeout(300);
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/chev_usual_${inputAddress.length}.wav`
    ).play();
    handleChev(inputAddress.length, setChevrons);
    return setProcessingInput(false);
  };

  const checkMatching = async (poo) => {
    if (currentPlanet.dialMode !== "EARTH") {
      new Audio(
        `${import.meta.env.VITE_FRONTEND_SRC_URL}/assets/sounds/dhd/dhd_usual_${
          inputAddress.length
        }.wav`
      ).play();
    }
    if (currentPlanet.dialMode === "EARTH") {
      const rollValues = rollCalc(poo, ringPosition);
      setRingPosition(rollValues.position);
      setRollData(rollValues);

      await timeout(rollValues.timing);
    }

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

    if (currentPlanet.dialMode === "EARTH") {
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
    if (currentPlanet.poo !== poo.letter) {
      console.warn("wrong Poo");
      return false;
    }
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

  useEffect(() => {
    if (inputAddress.length > 0 && !resetting && !isRolling) {
      handleInput();
    }
  }, [inputAddress]);

  const openGate = async () => {
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
  };

  const closeGate = async () => {
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/gateClose.wav`
    ).play();
    await timeout(2400);
    setIsOpen(false);
    await timeout(100);
    return resetGate();
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
    await timeout(1200);
    return resetGate();
  };

  const travelGate = () => {
    new Audio(
      `${
        import.meta.env.VITE_FRONTEND_SRC_URL
      }/assets/sounds/stargate/teleport_${Math.floor(
        Math.random() * (8 - 1) + 1
      )}.mp3`
    ).play();
    return setCurrentPlanet(destinationInfo);
  };

  return (
    <div className="gameContainer">
      <p className="currentPlanet">
        Current planet: {currentPlanet.planetName}
      </p>
      <div className="stargate">
        {isOpen && <ReactAudioPlayer src={wormholeSound} autoPlay loop />}
        {/* {isOpen && currentPlanet.id === 1 && (
          <ReactAudioPlayer
            src={`${
              import.meta.env.VITE_FRONTEND_SRC_URL
            }/assets/sounds/alarms/sgc_alarm.wav`}
            autoPlay
            loop
          />
        )} */}
        <SG1Render
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
      />
    </div>
  );
};

export default { Stargate };
