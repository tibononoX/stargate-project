/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useContext } from "react";
import symbols from "@services/gateSymbols";
import PlanetContext from "@contexts/PlanetContext";
import GateContext from "@contexts/GateContext";

const lastChevDhd = new Audio(
  `../../src/assets/sounds/stargate/chev_usual_7.wav`
);

const Dhd = ({
  inputAddress,
  setInputAddress,
  setInputPoo,
  processingInput,
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
        if (inputAddress.some((symbol) => symbol.id === id)) {
          return "symbButton active";
        }
        return "symbButton";
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOpen) {
      setDhdActive(false);
      return closeGate();
    }
    if (inputAddress.length === 0 || inputAddress.length === 7) {
      return null;
    }
    if ((inputAddress.length < 6 && inputAddress.length !== 0) || !destLock) {
      new Audio(`../../src/assets/sounds/dhd/dhd_usual_fail.mp3`).play();
      return wrongAddress();
    }

    new Audio(`../../src/assets/sounds/dhd/dhd_usual_dial.wav`).play();
    setDhdActive(true);
    return openGate();
  };

  const handleClick = (dhdSymbol) => {
    if (
      inputAddress.length === 7 ||
      inputAddress.some((symbol) => symbol.id === dhdSymbol.id) ||
      isRolling ||
      processingInput
    ) {
      return null;
    }
    if (inputAddress.length === 6) {
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
            if (currentPlanet.id === 1 && symbol.id === 40) {
              return null;
            }
            if (currentPlanet.id === 2 && symbol.id === 1) {
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
          className={dhdActive || destLock ? "dhdButton active" : "dhdButton"}
        />
      </form>
    </div>
  );
};

export default Dhd;
