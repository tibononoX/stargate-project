const rollSpeed = 40;

export const updateInput = (inputAddress, letter) => {
  const updatedInput = inputAddress + letter;
  return updatedInput;
};

export const rollCalc = (symbol, ringPosition) => {
  const diff = Math.abs((ringPosition - symbol.position) / 9.23);
  const timing = rollSpeed * diff;

  return { timing, position: symbol.position };
};

export const rollRing = (rollValues) => {
  return rollValues;
};

export const handleChev = (chev, setChevrons) => {
  switch (chev) {
    case 1:
      return setChevrons([
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]);
    case 2:
      return setChevrons([
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
      ]);
    case 3:
      return setChevrons([true, true, true, false, false, false, false, false]);
    case 4:
      return setChevrons([true, true, true, true, false, false, false, false]);
    case 5:
      return setChevrons([true, true, true, true, true, false, false, false]);
    case 6:
      return setChevrons([true, true, true, true, true, true, false, false]);
    case 7:
      return setChevrons([true, true, true, true, true, true, true, false]);
    case 8:
      return setChevrons([true, true, true, true, true, true, true, true]);

    default:
      return setChevrons([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]);
  }
};

export default { updateInput, rollCalc, handleChev };
