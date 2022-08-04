/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import symbols from "@services/gateSymbols";
import addressList from "@services/addressList";
import "@styles/stargate/main.scss";
import ReactAudioPlayer from "react-audio-player";

const Stargate = () => {
  const [currentPlanet, setCurrentPlanet] = useState({
    id: 1,
    address: ["20", "22", "26", "13", "14", "19"],
    poi: ["7"],
    planet: "Earth",
  });
  const [inputAddress, setInputAddress] = useState([]);
  const [destinationInfo, setDestinationInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [dhdActive, setDhdActive] = useState(false);

  const handleSymbolPress = (value, letter) => {
    if (inputAddress.length < 7) {
      setInputAddress([...inputAddress, { value, letter }]);
    }

    if (inputAddress.length === 6) {
      new Audio(
        `../../src/assets/sounds/dhd/dhd${Math.floor(
          Math.random() * (7 - 1) + 1
        )}.mp3`
      ).play();
      setTimeout(() => {
        return new Audio(
          `../../src/assets/sounds/stargate/chevDhdLast.mp3`
        ).play();
      }, 800);
    }

    if (inputAddress.length === 7) {
      return null;
    }

    new Audio(
      `../../src/assets/sounds/dhd/dhd${Math.floor(
        Math.random() * (7 - 1) + 1
      )}.mp3`
    ).play();

    return new Audio(
      `../../src/assets/sounds/stargate/chevDhd${Math.floor(
        Math.random() * (7 - 1) + 1
      )}.mp3`
    ).play();
  };

  const inputCheck = async () => {
    const destAddress = inputAddress.slice(0, 6);
    const poi = inputAddress[6];

    if (
      currentPlanet.address.every(
        (symbol, index) => symbol === inputAddress[index].value
      )
    ) {
      return false;
    }

    const match = addressList.some((destination) => {
      const { address } = destination;

      if (
        address.length === destAddress.length &&
        address.every((symbol, index) => {
          return (
            parseInt(symbol, 10) === parseInt(destAddress[index].value, 10)
          );
        })
      ) {
        setDestinationInfo(destination);
        return true;
      }
      return false;
    });
    if (!match) {
      return false;
    }
    if (parseInt(currentPlanet.poi, 10) !== parseInt(poi.value, 10)) {
      console.warn("wrong POI");
      return false;
    }
    return true;
  };

  const closeGate = () => {
    new Audio(`../../src/assets/sounds/stargate/gateClose.mp3`).play();
    return setTimeout(() => {
      setInputAddress([]);
      setDestinationInfo({});
      setDhdActive(false);
      return setIsOpen(false);
    }, 2500);
  };

  const openGate = () => {
    setTimeout(() => {
      new Audio(`../../src/assets/sounds/stargate/gateOpen.mp3`).play();
    }, 500);
    setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    setTimeout(() => {
      return closeGate();
    }, 38000);
  };

  const resetDhd = () => {
    return setInputAddress([]);
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
    const validInput = await inputCheck();
    if (!validInput) {
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

  const handleDhdClassName = (type, id) => {
    switch (type) {
      case "redButton":
        return "red";
      case "symbButton":
        if (inputAddress.some((symbol) => symbol.value === id.toString())) {
          return "symbButton active";
        }
        return "symbButton";
      default:
        return null;
    }
  };

  return (
    <div className="gameContainer">
      <p>Current planet: {currentPlanet.planet}</p>
      <div className="stargate">
        {isOpen && (
          <ReactAudioPlayer
            src="../../src/assets/sounds/stargate/wormholeLoop.wav"
            autoPlay
            loop
          />
        )}
        <ul className="chevrons">
          <li
            className={inputAddress.length >= 1 ? "chevron active" : "chevron"}
          >
            1
          </li>
          <li
            className={inputAddress.length >= 2 ? "chevron active" : "chevron"}
          >
            2
          </li>
          <li
            className={inputAddress.length >= 3 ? "chevron active" : "chevron"}
          >
            3
          </li>
          <li
            className={inputAddress.length >= 4 ? "chevron active" : "chevron"}
          >
            4
          </li>
          <li
            className={inputAddress.length >= 5 ? "chevron active" : "chevron"}
          >
            5
          </li>
          <li
            className={inputAddress.length >= 6 ? "chevron active" : "chevron"}
          >
            6
          </li>
          <li
            className={inputAddress.length >= 7 ? "chevron active" : "chevron"}
          >
            7
          </li>
          <li
            className={inputAddress.length >= 8 ? "chevron active" : "chevron"}
          >
            8
          </li>
          <li
            className={inputAddress.length >= 9 ? "chevron active" : "chevron"}
          >
            9
          </li>
        </ul>
        {isOpen && <span className="wormhole" onClick={() => travelGate()} />}
      </div>

      <ul className="inputAddress">
        {inputAddress.map((symbol) => symbol.letter)}
      </ul>

      <div className="dhd">
        <form onSubmit={handleSubmit}>
          <ul className="buttonList">
            {symbols.map((symbol) => (
              <li className="buttonItem">
                <button
                  className={handleDhdClassName("symbButton", symbol.id)}
                  title={`${symbol.id} - ${symbol.label}`}
                  type="button"
                  onClick={() =>
                    handleSymbolPress(symbol.id.toString(), symbol.letter)
                  }
                >
                  {symbol.id}
                </button>
              </li>
            ))}
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
