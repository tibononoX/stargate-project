/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useContext } from "react";
import symbols from "@services/gateSymbols";
import PlanetContext from "@contexts/PlanetContext";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Dhd = ({
  inputAddress,
  setInputAddress,
  processingInput,
  pooActive,
  setPooActive,
  isRolling,
  destLock,
  isOpen,
  openGate,
  closeGate,
  wrongAddress,
  checkMatching,
}) => {
  const { currentPlanet } = useContext(PlanetContext);
  const [dhdActive, setDhdActive] = useState(false);
  const [dhdOpen, setDhdOpen] = useState(false);

  const handleDhdClassName = (type, id) => {
    switch (type) {
      case "redButton":
        return "red";
      case "symbButton":
        if (
          inputAddress.some((symbol) => symbol.id === id) ||
          pooActive?.id === id
        ) {
          return "symbButton active";
        }
        if (isOpen || destLock) {
          return "symbButton noClick";
        }
        return "symbButton";
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isOpen) {
        setDhdActive(false);
        closeGate();
        await timeout(2700);
        return setPooActive(false);
      }
      if (inputAddress.length === 0 || inputAddress.length === 7) {
        return null;
      }
      if ((inputAddress.length < 6 && inputAddress.length !== 0) || !destLock) {
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/dhd/dhd_usual_fail.mp3`
        ).play();
        setPooActive(false);
        return wrongAddress();
      }

      new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/dhd/dhd_usual_dial.wav`
      ).play();
      setDhdActive(true);
      return openGate();
    } catch (err) {
      return console.warn(err);
    }
  };

  const handleClick = (dhdSymbol) => {
    if (
      inputAddress.length === 7 ||
      inputAddress.some((symbol) => symbol.id === dhdSymbol.id) ||
      isRolling ||
      processingInput ||
      destLock ||
      isOpen
    ) {
      return null;
    }
    if (inputAddress.length === 6) {
      setPooActive(dhdSymbol);
      return checkMatching(dhdSymbol);
    }
    return setInputAddress([...inputAddress, dhdSymbol]);
  };

  return (
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
            if (currentPlanet.id !== 1 && symbol.id === 1) {
              return null;
            }
            if (currentPlanet.id !== 2 && symbol.id === 40) {
              return null;
            }
            return (
              <li className="buttonItem" key={symbol.id}>
                <button
                  className={handleDhdClassName("symbButton", symbol.id)}
                  title={`${symbol.letter} - ${symbol.label}`}
                  type="button"
                  onClick={() => handleClick(symbol)}
                >
                  {symbol.letter}
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="submit"
          title="Big red button woosh woosh"
          className={
            (dhdActive && destLock) || destLock
              ? "dhdButton active"
              : "dhdButton"
          }
        />
      </form>
    </div>
  );
};

export default Dhd;
