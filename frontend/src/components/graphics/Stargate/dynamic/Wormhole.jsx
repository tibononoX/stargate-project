const Wormhole = ({ checkGateBlocked }) => {
  return (
    <path
      className="wormhole"
      fill="url(#radialGradient10079)"
      fillOpacity="1"
      fillRule="nonzero"
      stroke="#000"
      strokeDasharray="none"
      strokeDashoffset="0"
      strokeLinecap="butt"
      strokeLinejoin="round"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="1"
      d="M693.427 398.305a293.427 293.427 0 11-586.854 0 293.427 293.427 0 11586.854 0z"
      onClick={() => checkGateBlocked()}
    />
  );
};

export default Wormhole;
