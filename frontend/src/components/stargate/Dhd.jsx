/* eslint-disable jsx-a11y/control-has-associated-label */
import { useRef, useContext, useEffect } from "react";
import symbols from "@services/gateSymbols";
import audioSelector from "@services/audio";
import PlanetContext from "@contexts/PlanetContext";
import UserContext from "@contexts/UserContext";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Dhd = ({
  dhdOpen,
  setDhdOpen,
  gateState,
  dispatch,
  openSequence,
  closingSequence,
  wrongAddress,
  prevPlanet,
  traveled,
}) => {
  const { audioVolume, socket } = useContext(UserContext);
  const { currentPlanet } = useContext(PlanetContext);

  const handleDhdClassName = (type, id) => {
    switch (type) {
      case "redButton":
        return "red";
      case "symbButton":
        if (
          gateState.inputAddress.some((symbol) => symbol.id === id) ||
          gateState.pooActive?.id === id
        ) {
          return "symbButton active";
        }
        if (gateState.isOpen || gateState.destLock) {
          return "symbButton noClick";
        }
        return "symbButton";
      default:
        return null;
    }
  };

  const dhdFail = () => {
    return wrongAddress();
  };

  const dhdOpenGate = () => {
    audioSelector(audioVolume, "dhdOpen");
    dispatch({ type: "dhdActive", payload: true });
    return openSequence();
  };

  const dhdCloseGate = async () => {
    closingSequence(prevPlanet, gateState.destinationInfo.planetName);
    await timeout(2700);
    dispatch({ type: "dhdActive", payload: false });
    return dispatch({ type: "pooActive", payload: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (traveled && gateState.isOpen) {
        return dhdCloseGate();
      }
      if (
        gateState.offworld ||
        gateState.opening ||
        gateState.closing ||
        gateState.isRolling ||
        gateState.isLocking
      ) {
        return null;
      }
      if (gateState.isOpen) {
        return dhdCloseGate();
      }
      if (
        gateState.inputAddress.length === 0 ||
        gateState.inputAddress.length === 7
      ) {
        return null;
      }
      if (
        (gateState.inputAddress.length < 6 &&
          gateState.inputAddress.length !== 0) ||
        !gateState.destLock
      ) {
        socket.emit("wrongAddress", { planetName: currentPlanet.planetName });
        return dhdFail();
      }
      if (!gateState.destinationInfo) {
        return null;
      }
      if (!gateState.ready) {
        return null;
      }
      return dhdOpenGate();
    } catch (err) {
      return console.warn(err);
    }
  };

  const handleClick = async (dhdSymbol) => {
    const newInputAddress = [...gateState.inputAddress, dhdSymbol];
    if (
      gateState.inputAddress.length === 7 ||
      gateState.inputAddress.some((symbol) => symbol.id === dhdSymbol.id) ||
      gateState.pooActive ||
      gateState.isRolling ||
      gateState.processingInput ||
      gateState.isLocking ||
      gateState.destLock ||
      gateState.isOpen ||
      gateState.offworld
    ) {
      return null;
    }
    if (gateState.inputAddress.length === 6) {
      socket.emit("lastChev", {
        planetName: currentPlanet.planetName,
        poo: dhdSymbol,
      });
      dispatch({ type: "isLocking", payload: true });
      return dispatch({ type: "pooActive", payload: dhdSymbol });
    }
    socket.emit("newInput", {
      planetName: currentPlanet.planetName,
      inputAddress: newInputAddress,
    });
    return dispatch({
      type: "inputAddress",
      payload: newInputAddress,
    });
  };

  useEffect(() => {
    socket.on("wrongAddress", () => {
      dhdFail();
    });

    return () => {
      socket.off("wrongAddress");
    };
  }, []);

  const dhdHeight = useRef();
  console.log(dhdHeight?.current?.clientHeight);

  return (
    <div
      ref={dhdHeight}
      className={dhdOpen ? "dhd open" : "dhd"}
      style={{
        bottom: dhdOpen ? "0px" : `-${dhdHeight?.current?.clientHeight - 22}px`,
      }}
    >
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
            if (currentPlanet?.id !== 1 && symbol.id === 1) {
              return null;
            }
            if (currentPlanet?.id !== 2 && symbol.id === 40) {
              return null;
            }
            return (
              <li className="buttonItem" key={symbol.id}>
                <button
                  className={handleDhdClassName("symbButton", symbol.id)}
                  title={`${symbol.letter} - ${symbol.label}`}
                  type="button"
                  onClick={() => {
                    return handleClick(symbol);
                  }}
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
            (gateState.dhdActive && gateState.destLock) || gateState.destLock
              ? "dhdButton active"
              : "dhdButton"
          }
        />
      </form>
    </div>
  );
};

export default Dhd;
