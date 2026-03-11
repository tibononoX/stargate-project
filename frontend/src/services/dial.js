import audioSelector from "./audio";

const rollSpeed = import.meta.env.VITE_GATE_ROLL_SPEED;
// const rollSpeed = 340;

const SYMBOL_SPACING = 9.23; // degrees between adjacent symbols
const CLOSE_THRESHOLD = 8 * SYMBOL_SPACING; // < 8 symbols away → extra full spin

/** Normalise any cumulative degree value back to the 0–360 range. */
export const normDeg = (deg) => ((deg % 360) + 360) % 360;

/**
 * Calculate ring roll data for the next symbol.
 *
 * The ring tracks an *unbounded* cumulative rotation so that CSS transitions
 * always animate in the intended direction and full extra-spins work correctly.
 *
 * @param {object}  symbol            - target symbol { position: 0–360 }
 * @param {number}  cumulativeRotation - current CSS rotation value (unbounded)
 * @param {number}  direction          - 1 = clockwise, -1 = counter-clockwise
 * @param {boolean} instant            - skip animation
 * @returns {{ timing: number, position: number }}
 */
/**
 * @param {boolean} noExtraSpin - skip the close-symbol extra spin (use for reset/return rolls)
 */
export const rollCalc = (
  symbol,
  cumulativeRotation,
  direction = 1,
  instant = false,
  noExtraSpin = false
) => {
  const targetPos = symbol.position;
  const currentNorm = normDeg(cumulativeRotation);

  let angularDist;
  if (direction > 0) {
    // Clockwise (+)
    angularDist = (targetPos - currentNorm + 360) % 360;
    if (angularDist === 0) angularDist = 360; // already at target: full spin
    if (!noExtraSpin && angularDist < CLOSE_THRESHOLD) angularDist += 360; // close: add extra spin
  } else {
    // Counter-clockwise (-)
    const ccwDist = (currentNorm - targetPos + 360) % 360;
    angularDist = -(ccwDist === 0 ? 360 : ccwDist);
    if (!noExtraSpin && Math.abs(angularDist) < CLOSE_THRESHOLD)
      angularDist -= 360; // close: add extra spin
  }

  const newCumulative = cumulativeRotation + angularDist;
  const timing = instant
    ? 0
    : rollSpeed * (Math.abs(angularDist) / SYMBOL_SPACING);

  return { timing, position: newCumulative };
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
