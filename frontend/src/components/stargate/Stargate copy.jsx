/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect, useContext, createContext } from "react";
import symbols from "@services/gateSymbols";
import "@styles/stargate/main.scss";
import ReactAudioPlayer from "react-audio-player";
import SG1Render from "@components/graphics/Stargate/SG1Render";
import PlanetContext from "@contexts/PlanetContext";

export const RollContext = createContext();

export const Stargate = ({ addressList }) => {
  const { currentPlanet, setCurrentPlanet } = useContext(PlanetContext);
  const [inputAddress, setInputAddress] = useState("");
  const [lockedAddress, setLockedAddress] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [destinationInfo, setDestinationInfo] = useState({});
  const [destLock, setDestLock] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dhdActive, setDhdActive] = useState(false);
  const [dhdOpen, setDhdOpen] = useState(false);
  const activeChevrons = inputAddress.length;
  const [ringRoll, setRingRoll] = useState(false);
  const [timeToRoll, setTimeToRoll] = useState();
  const [currentSymbol, setCurrentSymbol] = useState({
    id: 1,
    letter: "A",
    poi: [],
    label: "Earth",
    position: 0,
  });
  console.log(lockedAddress);
  const resetDhd = () => {
    setInputAddress("");
    return setLockedAddress([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  };

  const inputCheck = async () => {
    if (currentPlanet.dialMode === "DHD") {
      const destAddress = inputAddress.slice(0, 6);
      const poo = inputAddress[6];

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
        setDestLock(false);
        new Audio(`../../src/assets/sounds/stargate/chev_usual_7.wav`).play();
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
      }, 500);
      return true;
    }
  };

  const handleChev = (rollTime) => {
    return setTimeout(() => {
      setLockedAddress(
        lockedAddress,
        (lockedAddress[inputAddress.length] = true)
      );
    }, rollTime);
  };

  const handleSymbolPress = (symbol, timing) => {
    if (
      activeChevrons === 7 ||
      inputAddress.includes(symbol.letter) ||
      ringRoll
    ) {
      return null;
    }

    if (currentPlanet.dialMode === "EARTH") {
      if (activeChevrons < 7) {
        setInputAddress(`${inputAddress}${symbol.letter}`);

        if (symbol.id > 39) {
          setCurrentSymbol(symbol);
        } else {
          setCurrentSymbol(symbol);
        }

        if (activeChevrons === 6) {
          return null;
        }

        handleChev(timing);

        return new Audio(
          `../../src/assets/sounds/stargate/chev_usual_${
            activeChevrons + 1
          }.wav`
        ).play();
      }

      if (activeChevrons < 7) {
        setInputAddress(`${inputAddress}${symbol.letter}`);
        new Audio(
          `../../src/assets/sounds/dhd/dhd_usual_${activeChevrons + 1}.wav`
        ).play();

        if (activeChevrons === 6) {
          return null;
        }
        setCurrentSymbol(1);
        return new Audio(
          `../../src/assets/sounds/stargate/chev_usual_${
            activeChevrons + 1
          }.wav`
        ).play();
      }
      return null;
    }
  };

  useEffect(() => {
    if (activeChevrons === 7 && !destLock) {
      inputCheck();
    }
  }, [inputAddress.length === 7]);

  const closeGate = () => {
    new Audio(`../../src/assets/sounds/stargate/gateClose.wav`).play();
    setTimeout(() => {
      setDestinationInfo({});
      setDhdActive(false);
      setIsOpen(false);
    }, 2500);
    setTimeout(() => {
      setDestLock(false);
      return resetDhd();
    }, 2600);
  };
  const openGate = () => {
    setTimeout(() => {
      new Audio(`../../src/assets/sounds/stargate/gateOpen.wav`).play();
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

  const wrongAddress = () => {
    new Audio(`../../src/assets/sounds/dhd/dhd_usual_fail.mp3`).play();
    setCurrentSymbol({
      id: 1,
      letter: "A",
      poi: [],
      label: "Earth",
      position: 0,
    });
    setTimeout(() => {
      resetDhd();
    }, 1200);
    return console.warn("Wrong address");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isOpen) {
      return closeGate();
    }
    if (activeChevrons === 0) {
      return null;
    }
    if ((activeChevrons <= 6 && activeChevrons !== 0) || !destLock) {
      return wrongAddress();
    }
    new Audio(`../../src/assets/sounds/dhd/dhd_usual_dial.wav`).play();
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
    <RollContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ringRoll,
        setRingRoll,
        timeToRoll,
        setTimeToRoll,
        handleSymbolPress,
        handleChev,
      }}
    >
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
            chevrons={lockedAddress}
            destLock={destLock}
            currentSymbol={currentSymbol}
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
                  <li className="buttonItem" key={symbol.id}>
                    <button
                      className={handleDhdClassName(
                        "symbButton",
                        symbol.letter
                      )}
                      title={`${symbol.letter} - ${symbol.label}`}
                      type="button"
                      onClick={() =>
                        currentPlanet.dialMode === "EARTH"
                          ? setCurrentSymbol(symbol)
                          : handleSymbolPress(symbol)
                      }
                    >
                      {symbol.letter}
                    </button>
                  </li>
                );
              })}
              <li className="buttonItem">
                <button
                  className={handleDhdClassName(
                    "symbButton",
                    currentPlanet.poo
                  )}
                  title="n - Abydos"
                  type="button"
                  onClick={() =>
                    currentPlanet.dialMode === "EARTH"
                      ? setCurrentSymbol(currentPlanet)
                      : handleSymbolPress(currentPlanet)
                  }
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
    </RollContext.Provider>
  );
};

export default { RollContext, Stargate };
