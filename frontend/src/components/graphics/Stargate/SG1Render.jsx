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
import Iris from "./dynamic/Iris";
import GateBg from "./GateBg";
import GateFrame from "./GateFrame";
import SvgDef from "./SvgDef";

function SG1Render({
  windowHeight,
  windowWidth,
  gateState,
  dispatch,
  checkGateBlocked,
}) {
  return (
    <div
      className="gateContainer"
      style={{ top: windowWidth > 1920 || windowHeight > 1080 ? 110 : 0 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={windowWidth >= 650 ? "650" : windowWidth}
        height={windowWidth >= 650 ? "650" : windowWidth}
        version="1.1"
        viewBox="0 0 800 800"
      >
        <SvgDef />
        {gateState.isOpen && <Wormhole checkGateBlocked={checkGateBlocked} />}
        <Iris
          irisAnim={gateState.irisAnim}
          checkGateBlocked={checkGateBlocked}
        />
        <GateBg />
        <Ring rollData={gateState.rollData} dispatch={dispatch} />
        <GateFrame
          locking={gateState.locking}
          lockChev={gateState.lockChev}
          destLock={gateState.destLock}
        />
        {gateState.chevrons[0] && <ChevOne />}
        {gateState.chevrons[1] && <ChevTwo />}
        {gateState.chevrons[2] && <ChevThree />}
        {gateState.chevrons[3] && <ChevFour />}
        {gateState.chevrons[4] && <ChevFive />}
        {gateState.chevrons[5] && <ChevSix />}
        {gateState.chevrons[6] && <ChevSeven />}
        {gateState.chevrons[7] && <ChevEight />}
        {(gateState.lockChev || gateState.destLock) && (
          <ChevNine locking={gateState.locking} />
        )}
      </svg>
    </div>
  );
}

export default SG1Render;
