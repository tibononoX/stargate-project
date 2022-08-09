const LockChev = ({ locking }) => {
  return (
    <>
      <g
        style={{
          transform: locking ? `translateY(-0.4%)` : "",
          transitionDuration: `300ms`,
          transformOrigin: "center",
          transitionTimingFunction: "cubic-bezier( 0., 0, 1, 1 )",
        }}
      >
        <path
          fill="#473e39"
          fillOpacity="1"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M403.537 48.625l11.875-34.407c-10.293-.045-20.587-.02-30.88 0l11.874 34.407h7.131z"
        />
      </g>
      <g
        style={{
          transform: locking ? `translateY(1.5%)` : "",
          transitionDuration: `300ms`,
          transformOrigin: "center",
          transitionTimingFunction: "cubic-bezier( 0., 0, 1, 1 )",
        }}
      >
        <path
          fill="gray"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M380.5 32.138l-16.531-.044 28.187 53.187h15.656L436 32.094l-16.532.044-12.593 36.706h-13.75z"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M393.253 68.775l-1.198 4.42"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M406.655 68.775l1.198 4.42"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M408.899 83.08h-17.903"
        />
        <path
          fill="gray"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M400.822 83.225v-9.9l-.833-.956-.833.956v9.9l.833.838z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M365.213 34.244h15.955l.75 2.022h-15.656z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M367.313 38.444h15.255l.75 2.022h-14.956z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M369.614 42.644h14.254l.75 2.022h-13.956z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M371.814 46.844h13.754l.65 2.022h-13.356z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M374.014 51.044h12.954l.65 2.022h-12.556z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M376.314 55.244h12.154l.65 2.022h-11.756z"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M376.842 32.15l15.043 41.155h7.415"
        />
        <path
          fill="#520"
          fillOpacity="1"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M434.78 34.244h-15.954l-.75 2.022h15.656z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M432.68 38.444h-15.254l-.75 2.022h14.956z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M430.38 42.644h-14.254l-.749 2.022h13.955z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M428.18 46.844h-13.754l-.65 2.022h13.356z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M425.98 51.044h-12.954l-.65 2.022h12.556z"
        />
        <path
          fill="#520"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M423.68 55.244h-12.154l-.65 2.022h11.756z"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M423.43 32.15l-15.043 41.155h-7.415"
        />
      </g>
    </>
  );
};

export default LockChev;
