/* eslint-disable no-await-in-loop */
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
  selectedAddress,
  setSelectedAddress,
  setAddressBookOpen,
  gateState,
  dispatch,
  openSequence,
  closingSequence,
  wrongAddress,
  prevPlanet,
  traveled,
  handleIris,
}) => {
  const { audioVolume, socket, userData, windowWidth } =
    useContext(UserContext);
  const { currentPlanet } = useContext(PlanetContext);

  const handleDhdClassName = (type, id, letter) => {
    const { inputAddress } = gateState;

    switch (type) {
      case "redButton":
        if (
          gateState.preselectedSymbols.length === 7 &&
          selectedAddress !== "" &&
          !gateState.autoDial
        ) {
          return "dhdButton next";
        }

        if ((gateState.dhdActive && gateState.destLock) || gateState.destLock) {
          if (selectedAddress !== "") {
            return "dhdButton active next";
          }
          return "dhdButton active";
        }
        return "dhdButton";
      case "symbButton":
        if (currentPlanet.dialMode === "EARTH") {
          if (gateState.preselectedSymbols.some((symbol) => symbol.id === id)) {
            return "symbButton active";
          }
          if (gateState.preselectedSymbols.length === 7) {
            return "symbButton noClick";
          }
        }
        if (
          (letter === selectedAddress[inputAddress.length] ||
            (gateState.preselectedSymbols.length > 0 &&
              letter ===
                selectedAddress[gateState.preselectedSymbols.length])) &&
          !gateState.destLock &&
          !gateState.isLocking
        ) {
          return "symbButton next";
        }
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

  const handleClick = async (dhdSymbol, autoDial = false) => {
    const newInputAddress = [...gateState.inputAddress, dhdSymbol];
    const newPreselectedSymbols = [...gateState.preselectedSymbols, dhdSymbol];
    if (
      gateState.inputAddress.length === 7 ||
      (gateState.preselectedSymbols.length === 7 && !autoDial) ||
      gateState.inputAddress.some((symbol) => symbol.id === dhdSymbol.id) ||
      (gateState.preselectedSymbols.some(
        (symbol) => symbol.id === dhdSymbol.id
      ) &&
        !autoDial) ||
      gateState.pooActive ||
      gateState.isRolling ||
      gateState.processingInput ||
      gateState.isLocking ||
      gateState.destLock ||
      gateState.isOpen ||
      gateState.offworld ||
      gateState.aborting
    ) {
      return null;
    }
    if (
      currentPlanet.dialMode === "EARTH" &&
      gateState.preselectedSymbols.length < 7
    ) {
      return dispatch({
        type: "preselectedSymbols",
        payload: newPreselectedSymbols,
      });
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

    if (dhdSymbol.letter !== selectedAddress[gateState.inputAddress?.length]) {
      setSelectedAddress("");
    }
    if (
      selectedAddress !== "" &&
      gateState.inputAddress?.length === 0 &&
      windowWidth <= 650
    ) {
      setAddressBookOpen(false);
    }

    return dispatch({
      type: "inputAddress",
      payload: newInputAddress,
    });
  };

  const handleEarthSubmit = async (sequence, rollDelay, signal) => {
    if (
      gateState.pooActive !== false ||
      !gateState.autoDial ||
      gateState.aborting
    ) {
      return;
    }

    if (sequence && gateState.autoDial) {
      await new Promise((resolve) => {
        const interval = setInterval(
          () => {
            if (!gateState.processingInput) {
              clearInterval(interval);
              resolve();
            }
          },
          gateState.inputAddress.length === 0 ? 1400 : 1000
        );

        signal.addEventListener("abort", () => {
          clearInterval(interval);
          resolve(); // Resolve the promise when the abort signal is triggered.
        });
      });

      const symbol = sequence[gateState.inputAddress.length]; // Get the first symbol and remove it from the array
      await handleClick(symbol, true);
      await timeout(rollDelay); // Add a small delay if needed
    }
  };

  const autoSequenceController = new AbortController();
  const { signal } = autoSequenceController;

  const abortDialing = async () => {
    autoSequenceController.abort();
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (!gateState.processingInput) {
          clearInterval(interval);
          resolve();
        }
      }, 1000);
    });

    return dhdFail();
  };

  useEffect(() => {
    if (gateState.autoDial && !gateState.aborting) {
      const sequence = [...gateState.preselectedSymbols];
      handleEarthSubmit(sequence, gateState.rollData.timing + 1000, signal);
    }

    if (gateState.aborting) {
      abortDialing();
    }

    return () => {
      autoSequenceController.abort();
    };
  }, [
    gateState.autoDial,
    gateState.pooActive,
    gateState.processingInput,
    gateState.aborting,
  ]);

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      if (traveled && gateState.isOpen) {
        return dhdCloseGate();
      }
      if (gateState.isOpen) {
        return dhdCloseGate();
      }
      if (currentPlanet.dialMode === "EARTH" && gateState.autoDial) {
        return dispatch({ type: "aborting", payload: true });
      }
      if (
        currentPlanet.dialMode === "EARTH" &&
        gateState.inputAddress.length !== 7
      ) {
        if (gateState.preselectedSymbols.length !== 7) {
          return dispatch({ type: "preselectedSymbols", payload: [] });
        }
        audioSelector(audioVolume, "startAutoDial");
        return dispatch({ type: "autoDial", payload: true });
      }
      if (
        gateState.aborting ||
        gateState.offworld ||
        gateState.opening ||
        gateState.closing ||
        gateState.isRolling ||
        gateState.isLocking
      ) {
        return null;
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

  useEffect(() => {
    if (gateState.ready && currentPlanet.dialMode === "EARTH") {
      dhdOpenGate();
    }
  }, [gateState.ready]);

  useEffect(() => {
    if (selectedAddress !== "" && gateState.preselectedSymbols.length !== 0) {
      setAddressBookOpen(false);
    }
  }, [gateState.preselectedSymbols, selectedAddress]);

  useEffect(() => {
    socket.on("wrongAddress", () => {
      dhdFail();
    });

    return () => {
      socket.off("wrongAddress");
    };
  }, []);

  const dhdHeight = useRef();

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
                  className={handleDhdClassName(
                    "symbButton",
                    symbol.id,
                    symbol.letter
                  )}
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
        {currentPlanet.planetName === "Earth" && userData && (
          <button
            type="button"
            title={
              gateState.irisOpen
                ? "Click to close the iris"
                : "Click to open the iris"
            }
            className={
              !gateState.irisOpen || gateState.irisOperating
                ? "iris closed"
                : "iris"
            }
            onClick={() => {
              if (!gateState.irisOperating) {
                socket.emit("handleIrisState", {
                  planetName: currentPlanet.planetName,
                  newIrisState: !gateState.irisOpen,
                });
                return handleIris(!gateState.irisOpen, true);
              }
              return null;
            }}
          >
            IRIS
          </button>
        )}
        <button
          type="submit"
          title="Big red button woosh woosh"
          className={handleDhdClassName("redButton")}
        />
      </form>
    </div>
  );
};

export default Dhd;
