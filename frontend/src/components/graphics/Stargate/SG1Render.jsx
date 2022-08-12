import { useEffect } from "react";
import {
  ChevOne,
  ChevTwo,
  ChevThree,
  ChevFour,
  ChevFive,
  ChevSix,
  ChevSeven,
  ChevEight,
  ChevNine,
} from "./dynamic/Chevrons";
import Ring from "./dynamic/Ring";
import Wormhole from "./dynamic/Wormhole";
import GateBg from "./GateBg";
import GateFrame from "./GateFrame";
import SvgDef from "./SvgDef";

function SG1Render({
  windowWidth,
  rollData,
  setIsRolling,
  chevrons,
  lockChev,
  destLock,
  locking,
  isOpen,
  travelGate,
}) {
  useEffect(() => {}, [chevrons]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={windowWidth >= 650 ? "650" : windowWidth}
      height={windowWidth >= 650 ? "650" : windowWidth}
      version="1.1"
      viewBox="0 0 800 800"
    >
      <SvgDef />
      {isOpen && <Wormhole travelGate={travelGate} />}
      <GateBg />
      <Ring rollData={rollData} setIsRolling={setIsRolling} />
      <GateFrame locking={locking} lockChev={lockChev} destLock={destLock} />
      {chevrons[0] && <ChevOne />}
      {chevrons[1] && <ChevTwo />}
      {chevrons[2] && <ChevThree />}
      {chevrons[3] && <ChevFour />}
      {chevrons[4] && <ChevFive />}
      {chevrons[5] && <ChevSix />}
      {chevrons[6] && <ChevSeven />}
      {chevrons[7] && <ChevEight />}
      {(lockChev || destLock) && <ChevNine locking={locking} />}
    </svg>
  );
}

export default SG1Render;
