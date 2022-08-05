/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from "react";
import symbols from "@services/gateSymbols";
import "@styles/stargate/main.scss";
import ReactAudioPlayer from "react-audio-player";
import SG1Render from "@components/graphics/Stargate/SG1Render";

const Stargate = ({ addressList }) => {
  const [currentPlanet, setCurrentPlanet] = useState({
    id: 1,
    gateAddress: "bZEjKc",
    poo: "A",
    planetName: "Earth",
  });
  const [inputAddress, setInputAddress] = useState("");
  const [destinationInfo, setDestinationInfo] = useState({});
  const [destLock, setDestLock] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dhdActive, setDhdActive] = useState(false);
  const [dhdOpen, setDhdOpen] = useState(false);

  const inputCheck = async () => {
    const destAddress = inputAddress.slice(0, 6);
    const poo = inputAddress[6];

    if (currentPlanet.gateAddress === destAddress) {
      console.warn("Cannot dial your own gate");
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
      setDestLock(false);
      return false;
    }
    if (currentPlanet.poo !== poo) {
      console.warn("wrong POI");
      return false;
    }

    setTimeout(() => {
      setDestLock(true);
      return new Audio(
        `../../src/assets/sounds/stargate/chevDhdLast.mp3`
      ).play();
    }, 800);
    return true;
  };

  const handleSymbolPress = (letter) => {
    if (inputAddress.length < 7) {
      setInputAddress(`${inputAddress}${letter}`);
    }

    if (inputAddress.length === 6) {
      new Audio(
        `../../src/assets/sounds/dhd/dhd${Math.floor(
          Math.random() * (7 - 1) + 1
        )}.mp3`
      ).play();
    }

    if (inputAddress.length === 7) {
      return null;
    }

    new Audio(
      `../../src/assets/sounds/dhd/dhd${Math.floor(
        Math.random() * (7 - 1) + 1
      )}.mp3`
    ).play();

    if (inputAddress.length === 6) {
      return null;
    }

    return new Audio(
      `../../src/assets/sounds/stargate/chevDhd${Math.floor(
        Math.random() * (7 - 1) + 1
      )}.mp3`
    ).play();
  };

  useEffect(() => {
    if (inputAddress.length === 7 && !destLock) {
      inputCheck();
    }
  }, [inputAddress]);

  const closeGate = () => {
    new Audio(`../../src/assets/sounds/stargate/gateClose.mp3`).play();
    setTimeout(() => {
      setDestinationInfo({});
      setDhdActive(false);
      setDestLock(false);
      setIsOpen(false);
    }, 2500);
    setTimeout(() => {
      return setInputAddress("");
    }, 3200);
  };

  const openGate = () => {
    setTimeout(() => {
      new Audio(`../../src/assets/sounds/stargate/gateOpen.mp3`).play();
    }, 500);
    setTimeout(() => {
      setIsOpen(true);
    }, 2000);
  };

  useEffect(() => {
    const openLimit = setTimeout(() => {
      if (!isOpen) {
        return null;
      }
      return closeGate();
    }, 38000);

    return () => clearTimeout(openLimit);
  }, [isOpen]);

  const resetDhd = () => {
    return setInputAddress("");
  };

  const wrongAddress = () => {
    setInputAddress([]);
    return console.warn("Wrong address");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isOpen) {
      return closeGate();
    }
    if (inputAddress.length === 0) {
      return null;
    }
    if (inputAddress.length <= 6 && inputAddress.length !== 0) {
      new Audio(`../../src/assets/sounds/dhd/dhdFail.mp3`).play();
      return resetDhd();
    }
    new Audio(`../../src/assets/sounds/dhd/dhdEngage.mp3`).play();
    if (!destLock) {
      new Audio(`../../src/assets/sounds/dhd/dhdFail.mp3`).play();
      return wrongAddress();
    }
    setDhdActive(true);
    return openGate();
  };

  const travelGate = () => {
    new Audio(
      `../../src/assets/sounds/stargate/teleport_${Math.floor(
        Math.random() * (8 - 1) + 1
      )}.mp3`
    ).play();
    return setCurrentPlanet(destinationInfo);
  };

  const handleDhdClassName = (type, letter) => {
    switch (type) {
      case "redButton":
        return "red";
      case "symbButton":
        if (inputAddress.includes(letter)) {
          return "symbButton active";
        }
        return "symbButton";
      default:
        return null;
    }
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
          isOpen={isOpen}
          travelGate={travelGate}
          chevrons={inputAddress.length}
          destLock={destLock}
        />
      </div>

      <div className={dhdOpen ? "dhd open" : "dhd"}>
        <button
          type="button"
          className={dhdOpen ? "showHide hide" : "showHide"}
          onClick={() => setDhdOpen(!dhdOpen)}
        >
          {dhdOpen ? "Hide DHD" : "Show DHD"}
        </button>
        <form onSubmit={handleSubmit}>
          <ul className="buttonList">
            {symbols.map((symbol) => {
              if (currentPlanet.poo === symbol.letter) {
                return null;
              }
              if (
                (currentPlanet.id !== 1 && symbol.id === 1) ||
                (currentPlanet.id !== 2 && symbol.id === 40)
              ) {
                return null;
              }
              return (
                <li className="buttonItem">
                  <button
                    className={handleDhdClassName("symbButton", symbol.letter)}
                    title={`${symbol.letter} - ${symbol.label}`}
                    type="button"
                    onClick={() => handleSymbolPress(symbol.letter)}
                  >
                    {symbol.letter}
                  </button>
                </li>
              );
            })}
            <li className="buttonItem">
              <button
                className={handleDhdClassName("symbButton", currentPlanet.poo)}
                title="n - Abydos"
                type="button"
                onClick={() => handleSymbolPress(currentPlanet.poo)}
              >
                {currentPlanet.poo}
              </button>
            </li>
          </ul>
          <button
            type="submit"
            title="Big red button woosh woosh"
            className={dhdActive ? "dhdButton active" : "dhdButton"}
          />
        </form>
      </div>
    </div>
  );
};

export default Stargate;
