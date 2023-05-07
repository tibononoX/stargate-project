import audioSelector from "./audio";

const rollSpeed = import.meta.env.VITE_GATE_ROLL_SPEED;
// const rollSpeed = 340;

export const rollCalc = (symbol, ringPosition, instant = false) => {
  const diff = Math.abs((ringPosition - symbol.position) / 9.23);
  const { position } = symbol;
  const timing = instant ? 0 : rollSpeed * diff;

  return { timing, position };
};

export const handleChev = (chev, dispatch, volume = 0.0) => {
  if (chev) {
    audioSelector(volume, "dhdChev", chev);
  }
  switch (chev) {
    case 1:
      return dispatch({
        type: "chevrons",
        payload: [true, false, false, false, false, false, false, false],
      });
    case 2:
      return dispatch({
        type: "chevrons",
        payload: [true, true, false, false, false, false, false, false],
      });
    case 3:
      return dispatch({
        type: "chevrons",
        payload: [true, true, true, false, false, false, false, false],
      });
    case 4:
      return dispatch({
        type: "chevrons",
        payload: [true, true, true, true, false, false, false, false],
      });
    case 5:
      return dispatch({
        type: "chevrons",
        payload: [true, true, true, true, true, false, false, false],
      });
    case 6:
      return dispatch({
        type: "chevrons",
        payload: [true, true, true, true, true, true, false, false],
      });
    case 7:
      return dispatch({
        type: "chevrons",
        payload: [true, true, true, true, true, true, true, false],
      });
    case 8:
      return dispatch({
        type: "chevrons",
        payload: [true, true, true, true, true, true, true, true],
      });

    default:
      return dispatch({
        type: "chevrons",
        payload: [false, false, false, false, false, false, false, false],
      });
  }
};

export default { rollCalc, handleChev };
