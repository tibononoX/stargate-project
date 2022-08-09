import LockChev from "./dynamic/LockChev";

const GateFrame = ({ locking, lockChev, destLock }) => {
  return (
    <>
      <path
        fill="gray"
        fillOpacity="1"
        fillRule="nonzero"
        stroke="#000"
        strokeOpacity="1"
        d="M400 111.875c-158.197 0-286.438 128.24-286.438 286.438 0 158.196 128.241 286.437 286.438 286.437 158.197 0 286.438-128.24 286.438-286.438 0-158.196-128.241-286.437-286.438-286.437zm0 15.232c149.772 0 271.174 121.434 271.174 271.206 0 149.772-121.402 271.174-271.174 271.174S128.826 548.085 128.826 398.313 250.228 127.107 400 127.107z"
      />
      <g stroke="#000" strokeOpacity="1" transform="translate(0 102)">
        <path
          fill="#6e6e6e"
          fillOpacity="1"
          fillRule="nonzero"
          strokeWidth="1.203"
          d="M442.844-70.313l-21.125 39.938c64.216 4.18 123.392 26.791 172.344 62.563l10.25-43.72c-47.348-31.275-102.295-51.98-161.47-58.78z"
        />
        <g strokeLinecap="butt" transform="translate(0 20)">
          <path
            fill="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M427.219-60.781l-4.344 8.187c63.937 4.354 122.86 26.847 171.75 62.344l2.094-8.969c-48.592-34.518-106.628-56.585-169.5-61.562z"
          />
          <g transform="translate(0 -120)">
            <g strokeDasharray="none" strokeMiterlimit="4" strokeWidth="0.667">
              <g transform="scale(-.75 .75) rotate(-32.205 -56.17 2145.858)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-31.062 -55.723 2208.622)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g
                fill="#6e6e6e"
                fillOpacity="1"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="round"
                transform="scale(-.75 .75) rotate(-34.505 -56.98 2031.761)"
              >
                <path d="M404.393 45.166l-.007 15.972-6.264-.008 6.271-15.964z" />
                <path d="M402.438 50.143c.842 2.634 1.385 6.54 1.405 10.976l-5.698-.023 4.293-10.953z" />
                <path d="M401.16 53.915c1.117 1.178 1.953 3.944 1.99 7.183l-5.005-.002 2.843-7.299c.056.05.117.06.172.118z" />
              </g>
              <g transform="scale(-.75 .75) rotate(-33.362 -56.591 2086.513)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M404.353 37.444l.008 23.703-8.818-.02-.02-17.773 2.185-5.895 6.645-.015z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-27.605 -54.153 2429.479)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-26.462 -53.546 2514.84)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-29.905 -55.237 2277.009)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-28.762 -54.72 2349.744)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-23.005 -51.348 2823.963)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-21.862 -50.472 2947.229)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-25.305 -52.876 2609.083)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="matrix(-.6843 -.307 -.307 .6843 835.613 162.11)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-18.405 -47.164 3412.46)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-17.262 -45.783 3606.674)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-20.705 -49.486 3085.876)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-19.562 -48.4 3238.557)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-13.805 -40.22 4388.941)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-12.662 -37.72 4740.656)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-16.105 -44.185 3831.422)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-14.962 -42.367 4086.993)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-9.205 -26.383 6335.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-8.062 -20.507 7161.442)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-11.505 -34.68 5168.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-10.362 -31.019 5683.093)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-6.905 -12.572 8277.504)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-5.762 -1.623 9817.416)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M397.39 37.458l6.952 17.414.007 6.244-8.843.026-.002-23.675 1.887-.009z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26l.106-10.122"
                />
              </g>
            </g>
            <g strokeWidth="1">
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M597.281 121.188l-4.875 6.906"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M534.667 86.373l-3.32 7.775"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M540.674 89.049l-3.455 7.74"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M546.639 91.829l-3.627 7.68"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M552.502 94.727l-3.775 7.585"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M558.323 97.73l-3.887 7.512"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M564.14 100.861l-4.035 7.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M569.848 104.08l-4.177 7.351"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M575.514 107.403l-4.35 7.293"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M581.084 110.875l-4.467 7.19"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M586.607 114.422l-4.616 7.093"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M592.057 118.08l-4.727 7.021"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M466.7 64.467l-1.616 8.298"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M473.134 65.824l-1.756 8.292"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M479.549 67.292l-1.936 8.27"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M485.889 68.896l-2.101 8.208"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M492.21 70.612l-2.225 8.16"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M498.554 72.455l-2.39 8.097"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M504.81 74.405l-2.543 8.064"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M511.047 76.467l-2.724 8.043"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M517.222 78.695l-2.861 7.966"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M523.364 81.004l-3.026 7.904"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M529.46 83.438l-3.15 7.857"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M427.678 59.305l-.64 8.419"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M434.204 59.901l-.796 8.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M440.735 60.61l-.978 8.434"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M447.239 61.493l-1.127 8.39"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M453.73 62.464l-1.302 8.362"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M460.2 63.566l-1.433 8.342"
              />
            </g>
            <path
              fill="none"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="0.5"
              d="M439.969 35.094l-9.063 17.156c61.953 5.37 119.269 26.912 167.75 60.344l4.375-18.719C555.301 62.29 499.787 41.509 439.97 35.094z"
            />
          </g>
        </g>
      </g>
      <g
        stroke="#000"
        strokeOpacity="1"
        transform="rotate(-40 540.995 348.126)"
      >
        <path
          fill="#6e6e6e"
          fillOpacity="1"
          fillRule="nonzero"
          strokeWidth="1.203"
          d="M442.844-70.313l-21.125 39.938c64.216 4.18 123.392 26.791 172.344 62.563l10.25-43.72c-47.348-31.275-102.295-51.98-161.47-58.78z"
        />
        <g strokeLinecap="butt" transform="translate(0 20)">
          <path
            fill="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M427.219-60.781l-4.344 8.187c63.937 4.354 122.86 26.847 171.75 62.344l2.094-8.969c-48.592-34.518-106.628-56.585-169.5-61.562z"
          />
          <g transform="translate(0 -120)">
            <g strokeDasharray="none" strokeMiterlimit="4" strokeWidth="0.667">
              <g transform="scale(-.75 .75) rotate(-32.205 -56.17 2145.858)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-31.062 -55.723 2208.622)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g
                fill="#6e6e6e"
                fillOpacity="1"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="round"
                transform="scale(-.75 .75) rotate(-34.505 -56.98 2031.761)"
              >
                <path d="M404.393 45.166l-.007 15.972-6.264-.008 6.271-15.964z" />
                <path d="M402.438 50.143c.842 2.634 1.385 6.54 1.405 10.976l-5.698-.023 4.293-10.953z" />
                <path d="M401.16 53.915c1.117 1.178 1.953 3.944 1.99 7.183l-5.005-.002 2.843-7.299c.056.05.117.06.172.118z" />
              </g>
              <g transform="scale(-.75 .75) rotate(-33.362 -56.591 2086.513)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M404.353 37.444l.008 23.703-8.818-.02-.02-17.773 2.185-5.895 6.645-.015z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-27.605 -54.153 2429.479)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-26.462 -53.546 2514.84)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-29.905 -55.237 2277.009)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-28.762 -54.72 2349.744)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-23.005 -51.348 2823.963)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-21.862 -50.472 2947.229)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-25.305 -52.876 2609.083)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="matrix(-.6843 -.307 -.307 .6843 835.613 162.11)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-18.405 -47.164 3412.46)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-17.262 -45.783 3606.674)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-20.705 -49.486 3085.876)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-19.562 -48.4 3238.557)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-13.805 -40.22 4388.941)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-12.662 -37.72 4740.656)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-16.105 -44.185 3831.422)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-14.962 -42.367 4086.993)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-9.205 -26.383 6335.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-8.062 -20.507 7161.442)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-11.505 -34.68 5168.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-10.362 -31.019 5683.093)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-6.905 -12.572 8277.504)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-5.762 -1.623 9817.416)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M397.39 37.458l6.952 17.414.007 6.244-8.843.026-.002-23.675 1.887-.009z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26l.106-10.122"
                />
              </g>
            </g>
            <g strokeWidth="1">
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M597.281 121.188l-4.875 6.906"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M534.667 86.373l-3.32 7.775"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M540.674 89.049l-3.455 7.74"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M546.639 91.829l-3.627 7.68"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M552.502 94.727l-3.775 7.585"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M558.323 97.73l-3.887 7.512"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M564.14 100.861l-4.035 7.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M569.848 104.08l-4.177 7.351"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M575.514 107.403l-4.35 7.293"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M581.084 110.875l-4.467 7.19"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M586.607 114.422l-4.616 7.093"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M592.057 118.08l-4.727 7.021"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M466.7 64.467l-1.616 8.298"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M473.134 65.824l-1.756 8.292"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M479.549 67.292l-1.936 8.27"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M485.889 68.896l-2.101 8.208"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M492.21 70.612l-2.225 8.16"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M498.554 72.455l-2.39 8.097"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M504.81 74.405l-2.543 8.064"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M511.047 76.467l-2.724 8.043"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M517.222 78.695l-2.861 7.966"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M523.364 81.004l-3.026 7.904"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M529.46 83.438l-3.15 7.857"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M427.678 59.305l-.64 8.419"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M434.204 59.901l-.796 8.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M440.735 60.61l-.978 8.434"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M447.239 61.493l-1.127 8.39"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M453.73 62.464l-1.302 8.362"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M460.2 63.566l-1.433 8.342"
              />
            </g>
            <path
              fill="none"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="0.5"
              d="M439.969 35.094l-9.063 17.156c61.953 5.37 119.269 26.912 167.75 60.344l4.375-18.719C555.301 62.29 499.787 41.509 439.97 35.094z"
            />
          </g>
        </g>
      </g>
      <g
        stroke="#000"
        strokeOpacity="1"
        transform="rotate(-80 461.653 348.126)"
      >
        <path
          fill="#6e6e6e"
          fillOpacity="1"
          fillRule="nonzero"
          strokeWidth="1.203"
          d="M442.844-70.313l-21.125 39.938c64.216 4.18 123.392 26.791 172.344 62.563l10.25-43.72c-47.348-31.275-102.295-51.98-161.47-58.78z"
        />
        <g strokeLinecap="butt" transform="translate(0 20)">
          <path
            fill="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M427.219-60.781l-4.344 8.187c63.937 4.354 122.86 26.847 171.75 62.344l2.094-8.969c-48.592-34.518-106.628-56.585-169.5-61.562z"
          />
          <g transform="translate(0 -120)">
            <g strokeDasharray="none" strokeMiterlimit="4" strokeWidth="0.667">
              <g transform="scale(-.75 .75) rotate(-32.205 -56.17 2145.858)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-31.062 -55.723 2208.622)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g
                fill="#6e6e6e"
                fillOpacity="1"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="round"
                transform="scale(-.75 .75) rotate(-34.505 -56.98 2031.761)"
              >
                <path d="M404.393 45.166l-.007 15.972-6.264-.008 6.271-15.964z" />
                <path d="M402.438 50.143c.842 2.634 1.385 6.54 1.405 10.976l-5.698-.023 4.293-10.953z" />
                <path d="M401.16 53.915c1.117 1.178 1.953 3.944 1.99 7.183l-5.005-.002 2.843-7.299c.056.05.117.06.172.118z" />
              </g>
              <g transform="scale(-.75 .75) rotate(-33.362 -56.591 2086.513)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M404.353 37.444l.008 23.703-8.818-.02-.02-17.773 2.185-5.895 6.645-.015z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-27.605 -54.153 2429.479)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-26.462 -53.546 2514.84)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-29.905 -55.237 2277.009)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-28.762 -54.72 2349.744)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-23.005 -51.348 2823.963)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-21.862 -50.472 2947.229)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-25.305 -52.876 2609.083)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="matrix(-.6843 -.307 -.307 .6843 835.613 162.11)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-18.405 -47.164 3412.46)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-17.262 -45.783 3606.674)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-20.705 -49.486 3085.876)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-19.562 -48.4 3238.557)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-13.805 -40.22 4388.941)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-12.662 -37.72 4740.656)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-16.105 -44.185 3831.422)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-14.962 -42.367 4086.993)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-9.205 -26.383 6335.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-8.062 -20.507 7161.442)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-11.505 -34.68 5168.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-10.362 -31.019 5683.093)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-6.905 -12.572 8277.504)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-5.762 -1.623 9817.416)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M397.39 37.458l6.952 17.414.007 6.244-8.843.026-.002-23.675 1.887-.009z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26l.106-10.122"
                />
              </g>
            </g>
            <g strokeWidth="1">
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M597.281 121.188l-4.875 6.906"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M534.667 86.373l-3.32 7.775"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M540.674 89.049l-3.455 7.74"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M546.639 91.829l-3.627 7.68"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M552.502 94.727l-3.775 7.585"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M558.323 97.73l-3.887 7.512"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M564.14 100.861l-4.035 7.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M569.848 104.08l-4.177 7.351"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M575.514 107.403l-4.35 7.293"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M581.084 110.875l-4.467 7.19"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M586.607 114.422l-4.616 7.093"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M592.057 118.08l-4.727 7.021"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M466.7 64.467l-1.616 8.298"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M473.134 65.824l-1.756 8.292"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M479.549 67.292l-1.936 8.27"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M485.889 68.896l-2.101 8.208"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M492.21 70.612l-2.225 8.16"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M498.554 72.455l-2.39 8.097"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M504.81 74.405l-2.543 8.064"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M511.047 76.467l-2.724 8.043"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M517.222 78.695l-2.861 7.966"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M523.364 81.004l-3.026 7.904"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M529.46 83.438l-3.15 7.857"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M427.678 59.305l-.64 8.419"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M434.204 59.901l-.796 8.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M440.735 60.61l-.978 8.434"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M447.239 61.493l-1.127 8.39"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M453.73 62.464l-1.302 8.362"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M460.2 63.566l-1.433 8.342"
              />
            </g>
            <path
              fill="none"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="0.5"
              d="M439.969 35.094l-9.063 17.156c61.953 5.37 119.269 26.912 167.75 60.344l4.375-18.719C555.301 62.29 499.787 41.509 439.97 35.094z"
            />
          </g>
        </g>
      </g>
      <g
        stroke="#000"
        strokeOpacity="1"
        transform="rotate(-120 430.318 348.126)"
      >
        <path
          fill="#6e6e6e"
          fillOpacity="1"
          fillRule="nonzero"
          strokeWidth="1.203"
          d="M442.844-70.313l-21.125 39.938c64.216 4.18 123.392 26.791 172.344 62.563l10.25-43.72c-47.348-31.275-102.295-51.98-161.47-58.78z"
        />
        <g strokeLinecap="butt" transform="translate(0 20)">
          <path
            fill="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M427.219-60.781l-4.344 8.187c63.937 4.354 122.86 26.847 171.75 62.344l2.094-8.969c-48.592-34.518-106.628-56.585-169.5-61.562z"
          />
          <g transform="translate(0 -120)">
            <g strokeDasharray="none" strokeMiterlimit="4" strokeWidth="0.667">
              <g transform="scale(-.75 .75) rotate(-32.205 -56.17 2145.858)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-31.062 -55.723 2208.622)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g
                fill="#6e6e6e"
                fillOpacity="1"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="round"
                transform="scale(-.75 .75) rotate(-34.505 -56.98 2031.761)"
              >
                <path d="M404.393 45.166l-.007 15.972-6.264-.008 6.271-15.964z" />
                <path d="M402.438 50.143c.842 2.634 1.385 6.54 1.405 10.976l-5.698-.023 4.293-10.953z" />
                <path d="M401.16 53.915c1.117 1.178 1.953 3.944 1.99 7.183l-5.005-.002 2.843-7.299c.056.05.117.06.172.118z" />
              </g>
              <g transform="scale(-.75 .75) rotate(-33.362 -56.591 2086.513)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M404.353 37.444l.008 23.703-8.818-.02-.02-17.773 2.185-5.895 6.645-.015z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-27.605 -54.153 2429.479)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-26.462 -53.546 2514.84)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-29.905 -55.237 2277.009)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-28.762 -54.72 2349.744)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-23.005 -51.348 2823.963)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-21.862 -50.472 2947.229)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-25.305 -52.876 2609.083)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="matrix(-.6843 -.307 -.307 .6843 835.613 162.11)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-18.405 -47.164 3412.46)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-17.262 -45.783 3606.674)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-20.705 -49.486 3085.876)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-19.562 -48.4 3238.557)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-13.805 -40.22 4388.941)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-12.662 -37.72 4740.656)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-16.105 -44.185 3831.422)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-14.962 -42.367 4086.993)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-9.205 -26.383 6335.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-8.062 -20.507 7161.442)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-11.505 -34.68 5168.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-10.362 -31.019 5683.093)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-6.905 -12.572 8277.504)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-5.762 -1.623 9817.416)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M397.39 37.458l6.952 17.414.007 6.244-8.843.026-.002-23.675 1.887-.009z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26l.106-10.122"
                />
              </g>
            </g>
            <g strokeWidth="1">
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M597.281 121.188l-4.875 6.906"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M534.667 86.373l-3.32 7.775"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M540.674 89.049l-3.455 7.74"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M546.639 91.829l-3.627 7.68"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M552.502 94.727l-3.775 7.585"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M558.323 97.73l-3.887 7.512"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M564.14 100.861l-4.035 7.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M569.848 104.08l-4.177 7.351"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M575.514 107.403l-4.35 7.293"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M581.084 110.875l-4.467 7.19"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M586.607 114.422l-4.616 7.093"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M592.057 118.08l-4.727 7.021"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M466.7 64.467l-1.616 8.298"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M473.134 65.824l-1.756 8.292"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M479.549 67.292l-1.936 8.27"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M485.889 68.896l-2.101 8.208"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M492.21 70.612l-2.225 8.16"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M498.554 72.455l-2.39 8.097"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M504.81 74.405l-2.543 8.064"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M511.047 76.467l-2.724 8.043"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M517.222 78.695l-2.861 7.966"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M523.364 81.004l-3.026 7.904"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M529.46 83.438l-3.15 7.857"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M427.678 59.305l-.64 8.419"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M434.204 59.901l-.796 8.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M440.735 60.61l-.978 8.434"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M447.239 61.493l-1.127 8.39"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M453.73 62.464l-1.302 8.362"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M460.2 63.566l-1.433 8.342"
              />
            </g>
            <path
              fill="none"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="0.5"
              d="M439.969 35.094l-9.063 17.156c61.953 5.37 119.269 26.912 167.75 60.344l4.375-18.719C555.301 62.29 499.787 41.509 439.97 35.094z"
            />
          </g>
        </g>
      </g>
      <g
        stroke="#000"
        strokeOpacity="1"
        transform="rotate(-160 409.866 348.126)"
      >
        <path
          fill="#6e6e6e"
          fillOpacity="1"
          fillRule="nonzero"
          strokeWidth="1.203"
          d="M442.844-70.313l-21.125 39.938c64.216 4.18 123.392 26.791 172.344 62.563l10.25-43.72c-47.348-31.275-102.295-51.98-161.47-58.78z"
        />
        <g strokeLinecap="butt" transform="translate(0 20)">
          <path
            fill="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M427.219-60.781l-4.344 8.187c63.937 4.354 122.86 26.847 171.75 62.344l2.094-8.969c-48.592-34.518-106.628-56.585-169.5-61.562z"
          />
          <g transform="translate(0 -120)">
            <g strokeDasharray="none" strokeMiterlimit="4" strokeWidth="0.667">
              <g transform="scale(-.75 .75) rotate(-32.205 -56.17 2145.858)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-31.062 -55.723 2208.622)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g
                fill="#6e6e6e"
                fillOpacity="1"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="round"
                transform="scale(-.75 .75) rotate(-34.505 -56.98 2031.761)"
              >
                <path d="M404.393 45.166l-.007 15.972-6.264-.008 6.271-15.964z" />
                <path d="M402.438 50.143c.842 2.634 1.385 6.54 1.405 10.976l-5.698-.023 4.293-10.953z" />
                <path d="M401.16 53.915c1.117 1.178 1.953 3.944 1.99 7.183l-5.005-.002 2.843-7.299c.056.05.117.06.172.118z" />
              </g>
              <g transform="scale(-.75 .75) rotate(-33.362 -56.591 2086.513)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M404.353 37.444l.008 23.703-8.818-.02-.02-17.773 2.185-5.895 6.645-.015z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-27.605 -54.153 2429.479)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-26.462 -53.546 2514.84)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-29.905 -55.237 2277.009)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-28.762 -54.72 2349.744)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-23.005 -51.348 2823.963)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-21.862 -50.472 2947.229)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-25.305 -52.876 2609.083)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="matrix(-.6843 -.307 -.307 .6843 835.613 162.11)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-18.405 -47.164 3412.46)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-17.262 -45.783 3606.674)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-20.705 -49.486 3085.876)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-19.562 -48.4 3238.557)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-13.805 -40.22 4388.941)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-12.662 -37.72 4740.656)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-16.105 -44.185 3831.422)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-14.962 -42.367 4086.993)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-9.205 -26.383 6335.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-8.062 -20.507 7161.442)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-11.505 -34.68 5168.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-10.362 -31.019 5683.093)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-6.905 -12.572 8277.504)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-5.762 -1.623 9817.416)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M397.39 37.458l6.952 17.414.007 6.244-8.843.026-.002-23.675 1.887-.009z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26l.106-10.122"
                />
              </g>
            </g>
            <g strokeWidth="1">
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M597.281 121.188l-4.875 6.906"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M534.667 86.373l-3.32 7.775"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M540.674 89.049l-3.455 7.74"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M546.639 91.829l-3.627 7.68"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M552.502 94.727l-3.775 7.585"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M558.323 97.73l-3.887 7.512"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M564.14 100.861l-4.035 7.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M569.848 104.08l-4.177 7.351"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M575.514 107.403l-4.35 7.293"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M581.084 110.875l-4.467 7.19"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M586.607 114.422l-4.616 7.093"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M592.057 118.08l-4.727 7.021"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M466.7 64.467l-1.616 8.298"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M473.134 65.824l-1.756 8.292"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M479.549 67.292l-1.936 8.27"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M485.889 68.896l-2.101 8.208"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M492.21 70.612l-2.225 8.16"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M498.554 72.455l-2.39 8.097"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M504.81 74.405l-2.543 8.064"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M511.047 76.467l-2.724 8.043"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M517.222 78.695l-2.861 7.966"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M523.364 81.004l-3.026 7.904"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M529.46 83.438l-3.15 7.857"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M427.678 59.305l-.64 8.419"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M434.204 59.901l-.796 8.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M440.735 60.61l-.978 8.434"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M447.239 61.493l-1.127 8.39"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M453.73 62.464l-1.302 8.362"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M460.2 63.566l-1.433 8.342"
              />
            </g>
            <path
              fill="none"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="0.5"
              d="M439.969 35.094l-9.063 17.156c61.953 5.37 119.269 26.912 167.75 60.344l4.375-18.719C555.301 62.29 499.787 41.509 439.97 35.094z"
            />
          </g>
        </g>
      </g>
      <g stroke="#000" strokeOpacity="1" transform="rotate(160 391.88 348.126)">
        <path
          fill="#6e6e6e"
          fillOpacity="1"
          fillRule="nonzero"
          strokeWidth="1.203"
          d="M442.844-70.313l-21.125 39.938c64.216 4.18 123.392 26.791 172.344 62.563l10.25-43.72c-47.348-31.275-102.295-51.98-161.47-58.78z"
        />
        <g strokeLinecap="butt" transform="translate(0 20)">
          <path
            fill="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M427.219-60.781l-4.344 8.187c63.937 4.354 122.86 26.847 171.75 62.344l2.094-8.969c-48.592-34.518-106.628-56.585-169.5-61.562z"
          />
          <g transform="translate(0 -120)">
            <g strokeDasharray="none" strokeMiterlimit="4" strokeWidth="0.667">
              <g transform="scale(-.75 .75) rotate(-32.205 -56.17 2145.858)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-31.062 -55.723 2208.622)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g
                fill="#6e6e6e"
                fillOpacity="1"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="round"
                transform="scale(-.75 .75) rotate(-34.505 -56.98 2031.761)"
              >
                <path d="M404.393 45.166l-.007 15.972-6.264-.008 6.271-15.964z" />
                <path d="M402.438 50.143c.842 2.634 1.385 6.54 1.405 10.976l-5.698-.023 4.293-10.953z" />
                <path d="M401.16 53.915c1.117 1.178 1.953 3.944 1.99 7.183l-5.005-.002 2.843-7.299c.056.05.117.06.172.118z" />
              </g>
              <g transform="scale(-.75 .75) rotate(-33.362 -56.591 2086.513)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M404.353 37.444l.008 23.703-8.818-.02-.02-17.773 2.185-5.895 6.645-.015z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-27.605 -54.153 2429.479)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-26.462 -53.546 2514.84)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-29.905 -55.237 2277.009)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-28.762 -54.72 2349.744)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-23.005 -51.348 2823.963)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-21.862 -50.472 2947.229)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-25.305 -52.876 2609.083)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="matrix(-.6843 -.307 -.307 .6843 835.613 162.11)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-18.405 -47.164 3412.46)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-17.262 -45.783 3606.674)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-20.705 -49.486 3085.876)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-19.562 -48.4 3238.557)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-13.805 -40.22 4388.941)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-12.662 -37.72 4740.656)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-16.105 -44.185 3831.422)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-14.962 -42.367 4086.993)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-9.205 -26.383 6335.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-8.062 -20.507 7161.442)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-11.505 -34.68 5168.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-10.362 -31.019 5683.093)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-6.905 -12.572 8277.504)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-5.762 -1.623 9817.416)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M397.39 37.458l6.952 17.414.007 6.244-8.843.026-.002-23.675 1.887-.009z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26l.106-10.122"
                />
              </g>
            </g>
            <g strokeWidth="1">
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M597.281 121.188l-4.875 6.906"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M534.667 86.373l-3.32 7.775"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M540.674 89.049l-3.455 7.74"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M546.639 91.829l-3.627 7.68"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M552.502 94.727l-3.775 7.585"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M558.323 97.73l-3.887 7.512"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M564.14 100.861l-4.035 7.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M569.848 104.08l-4.177 7.351"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M575.514 107.403l-4.35 7.293"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M581.084 110.875l-4.467 7.19"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M586.607 114.422l-4.616 7.093"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M592.057 118.08l-4.727 7.021"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M466.7 64.467l-1.616 8.298"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M473.134 65.824l-1.756 8.292"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M479.549 67.292l-1.936 8.27"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M485.889 68.896l-2.101 8.208"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M492.21 70.612l-2.225 8.16"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M498.554 72.455l-2.39 8.097"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M504.81 74.405l-2.543 8.064"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M511.047 76.467l-2.724 8.043"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M517.222 78.695l-2.861 7.966"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M523.364 81.004l-3.026 7.904"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M529.46 83.438l-3.15 7.857"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M427.678 59.305l-.64 8.419"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M434.204 59.901l-.796 8.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M440.735 60.61l-.978 8.434"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M447.239 61.493l-1.127 8.39"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M453.73 62.464l-1.302 8.362"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M460.2 63.566l-1.433 8.342"
              />
            </g>
            <path
              fill="none"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="0.5"
              d="M439.969 35.094l-9.063 17.156c61.953 5.37 119.269 26.912 167.75 60.344l4.375-18.719C555.301 62.29 499.787 41.509 439.97 35.094z"
            />
          </g>
        </g>
      </g>
      <g
        stroke="#000"
        strokeOpacity="1"
        transform="rotate(120 371.428 348.126)"
      >
        <path
          fill="#6e6e6e"
          fillOpacity="1"
          fillRule="nonzero"
          strokeWidth="1.203"
          d="M442.844-70.313l-21.125 39.938c64.216 4.18 123.392 26.791 172.344 62.563l10.25-43.72c-47.348-31.275-102.295-51.98-161.47-58.78z"
        />
        <g strokeLinecap="butt" transform="translate(0 20)">
          <path
            fill="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M427.219-60.781l-4.344 8.187c63.937 4.354 122.86 26.847 171.75 62.344l2.094-8.969c-48.592-34.518-106.628-56.585-169.5-61.562z"
          />
          <g transform="translate(0 -120)">
            <g strokeDasharray="none" strokeMiterlimit="4" strokeWidth="0.667">
              <g transform="scale(-.75 .75) rotate(-32.205 -56.17 2145.858)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-31.062 -55.723 2208.622)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g
                fill="#6e6e6e"
                fillOpacity="1"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="round"
                transform="scale(-.75 .75) rotate(-34.505 -56.98 2031.761)"
              >
                <path d="M404.393 45.166l-.007 15.972-6.264-.008 6.271-15.964z" />
                <path d="M402.438 50.143c.842 2.634 1.385 6.54 1.405 10.976l-5.698-.023 4.293-10.953z" />
                <path d="M401.16 53.915c1.117 1.178 1.953 3.944 1.99 7.183l-5.005-.002 2.843-7.299c.056.05.117.06.172.118z" />
              </g>
              <g transform="scale(-.75 .75) rotate(-33.362 -56.591 2086.513)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M404.353 37.444l.008 23.703-8.818-.02-.02-17.773 2.185-5.895 6.645-.015z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-27.605 -54.153 2429.479)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-26.462 -53.546 2514.84)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-29.905 -55.237 2277.009)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-28.762 -54.72 2349.744)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-23.005 -51.348 2823.963)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-21.862 -50.472 2947.229)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-25.305 -52.876 2609.083)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="matrix(-.6843 -.307 -.307 .6843 835.613 162.11)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-18.405 -47.164 3412.46)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-17.262 -45.783 3606.674)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-20.705 -49.486 3085.876)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-19.562 -48.4 3238.557)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-13.805 -40.22 4388.941)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-12.662 -37.72 4740.656)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-16.105 -44.185 3831.422)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-14.962 -42.367 4086.993)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-9.205 -26.383 6335.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-8.062 -20.507 7161.442)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-11.505 -34.68 5168.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-10.362 -31.019 5683.093)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-6.905 -12.572 8277.504)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-5.762 -1.623 9817.416)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M397.39 37.458l6.952 17.414.007 6.244-8.843.026-.002-23.675 1.887-.009z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26l.106-10.122"
                />
              </g>
            </g>
            <g strokeWidth="1">
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M597.281 121.188l-4.875 6.906"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M534.667 86.373l-3.32 7.775"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M540.674 89.049l-3.455 7.74"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M546.639 91.829l-3.627 7.68"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M552.502 94.727l-3.775 7.585"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M558.323 97.73l-3.887 7.512"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M564.14 100.861l-4.035 7.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M569.848 104.08l-4.177 7.351"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M575.514 107.403l-4.35 7.293"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M581.084 110.875l-4.467 7.19"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M586.607 114.422l-4.616 7.093"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M592.057 118.08l-4.727 7.021"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M466.7 64.467l-1.616 8.298"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M473.134 65.824l-1.756 8.292"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M479.549 67.292l-1.936 8.27"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M485.889 68.896l-2.101 8.208"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M492.21 70.612l-2.225 8.16"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M498.554 72.455l-2.39 8.097"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M504.81 74.405l-2.543 8.064"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M511.047 76.467l-2.724 8.043"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M517.222 78.695l-2.861 7.966"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M523.364 81.004l-3.026 7.904"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M529.46 83.438l-3.15 7.857"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M427.678 59.305l-.64 8.419"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M434.204 59.901l-.796 8.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M440.735 60.61l-.978 8.434"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M447.239 61.493l-1.127 8.39"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M453.73 62.464l-1.302 8.362"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M460.2 63.566l-1.433 8.342"
              />
            </g>
            <path
              fill="none"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="0.5"
              d="M439.969 35.094l-9.063 17.156c61.953 5.37 119.269 26.912 167.75 60.344l4.375-18.719C555.301 62.29 499.787 41.509 439.97 35.094z"
            />
          </g>
        </g>
      </g>
      <g stroke="#000" strokeOpacity="1" transform="rotate(80 340.094 348.126)">
        <path
          fill="#6e6e6e"
          fillOpacity="1"
          fillRule="nonzero"
          strokeWidth="1.203"
          d="M442.844-70.313l-21.125 39.938c64.216 4.18 123.392 26.791 172.344 62.563l10.25-43.72c-47.348-31.275-102.295-51.98-161.47-58.78z"
        />
        <g strokeLinecap="butt" transform="translate(0 20)">
          <path
            fill="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M427.219-60.781l-4.344 8.187c63.937 4.354 122.86 26.847 171.75 62.344l2.094-8.969c-48.592-34.518-106.628-56.585-169.5-61.562z"
          />
          <g transform="translate(0 -120)">
            <g strokeDasharray="none" strokeMiterlimit="4" strokeWidth="0.667">
              <g transform="scale(-.75 .75) rotate(-32.205 -56.17 2145.858)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-31.062 -55.723 2208.622)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g
                fill="#6e6e6e"
                fillOpacity="1"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="round"
                transform="scale(-.75 .75) rotate(-34.505 -56.98 2031.761)"
              >
                <path d="M404.393 45.166l-.007 15.972-6.264-.008 6.271-15.964z" />
                <path d="M402.438 50.143c.842 2.634 1.385 6.54 1.405 10.976l-5.698-.023 4.293-10.953z" />
                <path d="M401.16 53.915c1.117 1.178 1.953 3.944 1.99 7.183l-5.005-.002 2.843-7.299c.056.05.117.06.172.118z" />
              </g>
              <g transform="scale(-.75 .75) rotate(-33.362 -56.591 2086.513)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M404.353 37.444l.008 23.703-8.818-.02-.02-17.773 2.185-5.895 6.645-.015z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-27.605 -54.153 2429.479)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-26.462 -53.546 2514.84)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-29.905 -55.237 2277.009)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-28.762 -54.72 2349.744)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-23.005 -51.348 2823.963)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-21.862 -50.472 2947.229)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-25.305 -52.876 2609.083)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="matrix(-.6843 -.307 -.307 .6843 835.613 162.11)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-18.405 -47.164 3412.46)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-17.262 -45.783 3606.674)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-20.705 -49.486 3085.876)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-19.562 -48.4 3238.557)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-13.805 -40.22 4388.941)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-12.662 -37.72 4740.656)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-16.105 -44.185 3831.422)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-14.962 -42.367 4086.993)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-9.205 -26.383 6335.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-8.062 -20.507 7161.442)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-11.505 -34.68 5168.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-10.362 -31.019 5683.093)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-6.905 -12.572 8277.504)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-5.762 -1.623 9817.416)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M397.39 37.458l6.952 17.414.007 6.244-8.843.026-.002-23.675 1.887-.009z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26l.106-10.122"
                />
              </g>
            </g>
            <g strokeWidth="1">
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M597.281 121.188l-4.875 6.906"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M534.667 86.373l-3.32 7.775"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M540.674 89.049l-3.455 7.74"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M546.639 91.829l-3.627 7.68"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M552.502 94.727l-3.775 7.585"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M558.323 97.73l-3.887 7.512"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M564.14 100.861l-4.035 7.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M569.848 104.08l-4.177 7.351"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M575.514 107.403l-4.35 7.293"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M581.084 110.875l-4.467 7.19"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M586.607 114.422l-4.616 7.093"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M592.057 118.08l-4.727 7.021"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M466.7 64.467l-1.616 8.298"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M473.134 65.824l-1.756 8.292"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M479.549 67.292l-1.936 8.27"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M485.889 68.896l-2.101 8.208"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M492.21 70.612l-2.225 8.16"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M498.554 72.455l-2.39 8.097"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M504.81 74.405l-2.543 8.064"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M511.047 76.467l-2.724 8.043"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M517.222 78.695l-2.861 7.966"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M523.364 81.004l-3.026 7.904"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M529.46 83.438l-3.15 7.857"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M427.678 59.305l-.64 8.419"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M434.204 59.901l-.796 8.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M440.735 60.61l-.978 8.434"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M447.239 61.493l-1.127 8.39"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M453.73 62.464l-1.302 8.362"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M460.2 63.566l-1.433 8.342"
              />
            </g>
            <path
              fill="none"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="0.5"
              d="M439.969 35.094l-9.063 17.156c61.953 5.37 119.269 26.912 167.75 60.344l4.375-18.719C555.301 62.29 499.787 41.509 439.97 35.094z"
            />
          </g>
        </g>
      </g>
      <g stroke="#000" strokeOpacity="1" transform="rotate(40 260.752 348.126)">
        <path
          fill="#6e6e6e"
          fillOpacity="1"
          fillRule="nonzero"
          strokeWidth="1.203"
          d="M442.844-70.313l-21.125 39.938c64.216 4.18 123.392 26.791 172.344 62.563l10.25-43.72c-47.348-31.275-102.295-51.98-161.47-58.78z"
        />
        <g strokeLinecap="butt" transform="translate(0 20)">
          <path
            fill="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M427.219-60.781l-4.344 8.187c63.937 4.354 122.86 26.847 171.75 62.344l2.094-8.969c-48.592-34.518-106.628-56.585-169.5-61.562z"
          />
          <g transform="translate(0 -120)">
            <g strokeDasharray="none" strokeMiterlimit="4" strokeWidth="0.667">
              <g transform="scale(-.75 .75) rotate(-32.205 -56.17 2145.858)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-31.062 -55.723 2208.622)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g
                fill="#6e6e6e"
                fillOpacity="1"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="round"
                transform="scale(-.75 .75) rotate(-34.505 -56.98 2031.761)"
              >
                <path d="M404.393 45.166l-.007 15.972-6.264-.008 6.271-15.964z" />
                <path d="M402.438 50.143c.842 2.634 1.385 6.54 1.405 10.976l-5.698-.023 4.293-10.953z" />
                <path d="M401.16 53.915c1.117 1.178 1.953 3.944 1.99 7.183l-5.005-.002 2.843-7.299c.056.05.117.06.172.118z" />
              </g>
              <g transform="scale(-.75 .75) rotate(-33.362 -56.591 2086.513)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M404.353 37.444l.008 23.703-8.818-.02-.02-17.773 2.185-5.895 6.645-.015z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-27.605 -54.153 2429.479)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-26.462 -53.546 2514.84)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-29.905 -55.237 2277.009)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-28.762 -54.72 2349.744)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-23.005 -51.348 2823.963)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-21.862 -50.472 2947.229)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-25.305 -52.876 2609.083)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="matrix(-.6843 -.307 -.307 .6843 835.613 162.11)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-18.405 -47.164 3412.46)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-17.262 -45.783 3606.674)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-20.705 -49.486 3085.876)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-19.562 -48.4 3238.557)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-13.805 -40.22 4388.941)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-12.662 -37.72 4740.656)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-16.105 -44.185 3831.422)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-14.962 -42.367 4086.993)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-9.205 -26.383 6335.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-8.062 -20.507 7161.442)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-11.505 -34.68 5168.119)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-10.362 -31.019 5683.093)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-6.905 -12.572 8277.504)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M395.524 37.458H404.365V61.138999999999996H395.524z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26V37.445"
                />
              </g>
              <g transform="scale(-.75 .75) rotate(-5.762 -1.623 9817.416)">
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M397.39 37.458l6.952 17.414.007 6.244-8.843.026-.002-23.675 1.887-.009z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 46.735c-2.118 0-3.837 6.415-3.873 14.384h7.746c-.035-7.97-1.754-14.384-3.873-14.384z"
                />
                <path
                  fill="#6e6e6e"
                  fillOpacity="1"
                  fillRule="nonzero"
                  strokeDashoffset="0"
                  strokeLinejoin="round"
                  d="M399.97 53.31c-1.71 0-3.108 3.467-3.156 7.785h6.312c-.048-4.318-1.445-7.786-3.156-7.786z"
                />
                <path
                  fill="none"
                  strokeLinejoin="miter"
                  d="M399.97 53.26l.106-10.122"
                />
              </g>
            </g>
            <g strokeWidth="1">
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M597.281 121.188l-4.875 6.906"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M534.667 86.373l-3.32 7.775"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M540.674 89.049l-3.455 7.74"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M546.639 91.829l-3.627 7.68"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M552.502 94.727l-3.775 7.585"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M558.323 97.73l-3.887 7.512"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M564.14 100.861l-4.035 7.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M569.848 104.08l-4.177 7.351"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M575.514 107.403l-4.35 7.293"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M581.084 110.875l-4.467 7.19"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M586.607 114.422l-4.616 7.093"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M592.057 118.08l-4.727 7.021"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M466.7 64.467l-1.616 8.298"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M473.134 65.824l-1.756 8.292"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M479.549 67.292l-1.936 8.27"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M485.889 68.896l-2.101 8.208"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M492.21 70.612l-2.225 8.16"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M498.554 72.455l-2.39 8.097"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M504.81 74.405l-2.543 8.064"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M511.047 76.467l-2.724 8.043"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M517.222 78.695l-2.861 7.966"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M523.364 81.004l-3.026 7.904"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M529.46 83.438l-3.15 7.857"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M427.678 59.305l-.64 8.419"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M434.204 59.901l-.796 8.417"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M440.735 60.61l-.978 8.434"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M447.239 61.493l-1.127 8.39"
              />
              <path
                fill="none"
                strokeLinejoin="miter"
                d="M453.73 62.464l-1.302 8.362"
              />
              <path
                fill="gray"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                d="M460.2 63.566l-1.433 8.342"
              />
            </g>
            <path
              fill="none"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="0.5"
              d="M439.969 35.094l-9.063 17.156c61.953 5.37 119.269 26.912 167.75 60.344l4.375-18.719C555.301 62.29 499.787 41.509 439.97 35.094z"
            />
          </g>
        </g>
      </g>
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M422.366 29.025l4.909-10.17s14.83 1.06 36.44 4.45 35.17 7.627 35.17 7.627l.424 4.237z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M381.156 12.569l-4.687.031-.344.76 16.656 49.359h14.482l16.656-49.36-.344-.759-4.688-.031-18.865 9.312z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M378.002 29.025l-4.909-10.17s-14.83 1.06-36.44 4.45-35.17 7.627-35.17 7.627l-.424 4.237z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M400.036 56.383h4.085l14.718-44.024"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M400 56.383h-4.085l-14.718-44.024"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M403.85 56.144l-3.92-7.415"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M402.15 62.938l-2.138-1.101-2.137 1.1 2.137 3.813z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M396.186 56.144l3.92-7.415"
      />

      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M395.538 46.754h8.876"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M392.879 62.67l1.282-2.22h11.663l1.333 2.308"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M376.824 12.572l17.378 48.338"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M423.202 12.572L405.824 60.91"
      />

      {/* lockChev bottom */}

      <LockChev locking={locking} lockChev={lockChev} destLock={destLock} />

      {/* lockChev bottom */}

      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M179.833 101.153l-2.776-10.946s12.042-8.721 30.775-20.015c18.733-11.294 31.844-16.764 31.844-16.764l3.048 2.974z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M137.687 115.035l-3.57 3.038.224.802 44.487 27.105 11.093-9.308-18.968-48.518-.751-.36-3.611 2.988-8.466 19.26z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M145.848 129.67l-10.296-4.636s-10.68 10.345-25.056 26.832c-14.375 16.488-22.039 28.45-22.039 28.45l2.4 3.518z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M180.313 136.464l3.129-2.626-17.024-43.185"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M180.286 136.487l-3.13 2.625-39.573-24.264"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M183.08 133.83l-7.769-3.162"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M186.145 140.126l-2.345.53-.93 2.218 4.088 1.546z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M177.21 138.755l-1.764-8.2"
      />
      <path
        fill="#473e39"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M178.008 128.27L164.99 94.28c-7.915 6.581-15.784 13.217-23.656 19.85l31.213 18.724 5.462-4.584z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M170.678 131.978l6.8-5.705"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M178.871 145.88l-.445-2.525 8.935-7.497 2.505.912"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M134.37 117.823l44.384 25.858"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M169.898 88.011l17.759 48.2"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M149.763 130.448L137.07 141.04l55.781 22.626 11.993-10.064L192.25 94.74l-12.635 10.66 13.946 36.213-10.533 8.838z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M183.082 150.316l1.923 4.156"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M193.348 141.702l3.76 2.615"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M204.263 151.218l-13.714 11.508"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M198.168 156.52l-6.363-7.583-1.253-.197-.023 1.267 6.363 7.584 1.177.106z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M139.406 141.887l12.222-10.255 1.874 1.067-11.992 10.063z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M143.715 143.755l11.686-9.806 1.874 1.068-11.457 9.613z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M148.177 145.494l10.92-9.163 1.873 1.068-10.69 8.97z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M152.562 147.297l10.536-8.842 1.798 1.132-10.231 8.585z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M156.947 149.1l9.924-8.327 1.797 1.132-9.618 8.07z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M161.408 150.84l9.311-7.813 1.798 1.131-9.005 7.556z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M146.969 132.808l37.977 21.858 5.68-4.766"
      />
      <path
        fill="#520"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M192.698 97.17l-12.222 10.256.726 2.03 11.993-10.063z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M193.789 101.737l-11.686 9.806.726 2.03 11.457-9.612z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M194.727 106.433l-10.92 9.163.726 2.03 10.69-8.97z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M195.741 111.065l-10.537 8.841.803 1.967 10.23-8.585z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M196.756 115.696l-9.924 8.328.802 1.966 9.618-8.07z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M197.693 120.392l-9.31 7.813.802 1.967 9.005-7.556z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M182.656 102.863l14.931 41.196-5.68 4.766"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M40.405 312.302l-9.162-6.6s3.618-14.42 10.71-35.114c7.09-20.693 13.618-33.31 13.618-33.31l4.246.318z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M17.043 350.029l-.783 4.621.688.47 51.502-7.831 2.514-14.262-45.717-24.974-.807.207-.845 4.61 5.895 20.197z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M32.701 355.992l-10.867 3.069s-1.532 14.789-1.946 36.66c-.414 21.87 1.404 35.96 1.404 35.96l4.1 1.152z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M63.47 339.044l.71-4.023-40.8-22.139"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M63.464 339.08l-.71 4.022-45.91 6.85"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M63.897 335.247l-7.984 2.572"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M70.292 338.1l-1.455 1.914.713 2.296 4.125-1.443z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M62.566 342.793l-6.622-5.147"
      />
      <path
        fill="#473e39"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M56.437 334.248L24.616 316.58c-1.832 10.13-3.595 20.271-5.362 30.412l35.945-5.72 1.238-7.023z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M53.206 341.801l1.541-8.741"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M68.419 347.184l-1.964-1.648 2.025-11.486 2.505-.912"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M16.294 354.296l50.621-8.72"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M24.347 308.622l44.587 25.508"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M36.2 354.073l-2.913 16.272 57.274-18.523 2.718-15.418-47.484-36.996-2.827 16.289 33.96 18.776-2.387 13.54z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M74.496 347.875l4.144 1.948"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M76.823 334.677l4.56-.412"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M91.3 334.952l-3.108 17.63"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M90.04 342.931l-9.75-1.719-1.085.654.797.986 9.75 1.72.969-.675z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M35.62 369.493l2.77-15.713 2.122-.386-2.718 15.417z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M40.12 368.154l2.65-15.023 2.122-.386-2.597 14.728z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M44.657 366.618l2.475-14.038 2.122-.386-2.424 13.743z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M49.175 365.181l2.388-13.546 2.105-.288-2.32 13.152z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M53.693 363.744l2.25-12.758 2.104-.288-2.18 12.364z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M58.229 362.208l2.11-11.97 2.105-.288-2.042 11.576z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M35.577 357.677l43.142-7.667 1.288-7.303"
      />
      <path
        fill="#520"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M47.7 300.982l-2.77 15.713 1.861 1.089 2.719-15.418z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M51.472 303.78l-2.65 15.023 1.863 1.089 2.596-14.728z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M55.209 306.774l-2.476 14.038 1.862 1.09 2.423-13.744z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M58.963 309.67l-2.389 13.546 1.88.991 2.318-13.153z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M62.717 312.566l-2.25 12.758 1.88.99 2.18-12.364z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M66.454 315.56l-2.11 11.97 1.878.991 2.041-11.576z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M43.667 311.798l37.918 21.96-1.288 7.303"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M69.313 563.652l-11.261.833s-6.498-13.373-14.368-33.783c-7.869-20.41-10.979-34.271-10.979-34.271l3.458-2.486z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M75.666 607.569l2.371 4.043.83-.081 34.418-39.105-7.241-12.541-51.075 10.255-.485.677 2.316 4.076 17.498 11.681z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M91.495 602.072l-6.352 9.336s8.332 12.314 22.073 29.334c13.74 17.02 24.19 26.644 24.19 26.644l3.881-1.752z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M104.171 569.311l-2.043-3.537-45.485 9.265"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M104.189 569.342l2.042 3.538-30.767 34.758"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M102.057 566.128l-4.462 7.102"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M108.79 564.203l.116 2.402 2.021 1.3 2.233-3.757z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M105.888 572.764l-8.381.314"
      />
      <path
        fill="#473e39"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M95.701 570.158l-35.734 6.919c5.107 8.937 10.276 17.84 15.44 26.744l23.86-27.487-3.566-6.176z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M98.08 578.021l-4.438-7.687"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M113.194 572.366h-2.564l-5.832-10.101 1.333-2.309"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M77.835 611.319l33.173-39.22"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M54.646 571.154l50.551-9.12"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M92.942 598.353l8.227 14.338 31.968-51.005-7.828-13.559-60.156 2.183 8.305 14.295 38.084-7.447 6.875 11.908z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M118.294 568.99l4.426-1.173"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M111.593 557.383l3.228-3.247"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M122.86 548.287l8.951 15.504"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M127.024 555.21l-8.574 4.95-.412 1.199 1.245.243 8.573-4.95.31-1.14z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M102.408 610.538l-7.977-13.817 1.377-1.66 7.828 13.558z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M104.996 606.62l-7.627-13.212 1.376-1.66 7.478 12.952z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M107.483 602.527l-7.127-12.345 1.377-1.66 6.977 12.086z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M110.02 598.522l-6.877-11.912 1.427-1.574 6.678 11.567z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M112.558 594.517l-6.478-11.22 1.427-1.573 6.278 10.873z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M115.045 590.425l-6.077-10.526 1.427-1.574 5.877 10.18z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M94.78 601.514l28.121-33.605-3.708-6.422"
      />
      <path
        fill="#520"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M67.625 550.29l7.977 13.818 2.126-.362-7.827-13.558z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M72.312 550.01l7.628 13.21 2.126-.362-7.478-12.951z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M77.1 549.901l7.127 12.345 2.126-.362-6.977-12.086z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M81.837 549.707l6.877 11.912 2.077-.449-6.678-11.566z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M86.574 549.512l6.478 11.22 2.076-.45-6.278-10.873z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M91.362 549.404l6.077 10.526 2.076-.449-5.878-10.18z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M71.488 561.168l43.162-7.55 3.708 6.422"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M253.043 737.628l-8.09 7.876s-13.574-6.067-32.722-16.644c-19.147-10.576-30.44-19.196-30.44-19.196l1.052-4.126z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M286.14 767.186l4.415 1.573.583-.595 1.23-52.08-13.608-4.953-32.534 40.686.064.831 4.394 1.633 20.913-2.298z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M294.732 752.8l1.135 11.236s14.298 4.076 35.764 8.282c21.467 4.206 35.658 4.862 35.658 4.862l1.847-3.837z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M283.384 719.556l-3.839-1.396-28.887 36.335"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M283.418 719.569l3.838 1.397-1.227 46.403"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M279.719 718.477l1.147 8.309"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M283.64 712.675l1.631 1.765 2.385-.303-.704-4.314z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M286.92 721.098l-6.22 5.627"
      />
      <path
        fill="#473e39"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M277.44 725.65l-22.926 28.27c9.657 3.563 19.338 7.06 29.018 10.561l.61-36.393-6.702-2.438z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M284.317 730.144l-8.34-3.036"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M292.26 716.097l-1.964 1.648-10.96-3.99-.463-2.625"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M290.212 768.665l.202-51.367"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M246.63 752.802l32.863-39.48"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M293.45 749.021l15.518 5.696-8.296-59.62-14.712-5.355-44.679 40.339 15.55 5.612 24.388-30.185 12.92 4.703z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M293.996 710.232l2.638-3.743"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M281.402 705.649l.386-4.563"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M284.187 691.438l16.823 6.123"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M291.826 694.065l-3.386 9.303.456 1.183 1.109-.614 3.386-9.303-.496-1.071z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M308.534 752.271l-14.993-5.457-.012-2.157 14.711 5.355z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M307.997 747.606l-14.335-5.218-.012-2.156 14.053 5.115z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M307.272 742.872l-13.395-4.875-.012-2.157 13.114 4.773z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M306.641 738.173l-12.925-4.704.081-2.123 12.55 4.568z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M306.01 733.474l-12.173-4.43.082-2.123 11.798 4.294z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M305.286 728.74l-11.421-4.156.08-2.123 11.047 4.02z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M296.89 750.261l-.059-43.818-6.968-2.536"
      />
      <path
        fill="#520"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M243.162 728.478l14.993 5.456 1.395-1.644-14.71-5.354z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M246.572 725.25l14.335 5.216 1.396-1.644-14.054-5.115z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M250.17 722.089l13.395 4.875 1.395-1.644-13.113-4.773z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M253.674 718.895l12.925 4.704 1.302-1.678-12.55-4.568z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M257.178 715.7l12.173 4.431 1.302-1.678-11.798-4.294z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M260.775 712.54l11.422 4.157 1.302-1.678-11.046-4.02z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M253.113 734.327l28.211-33.528 6.968 2.536"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M505.619 752.8l-1.135 11.236s-14.298 4.076-35.765 8.282c-21.466 4.206-35.657 4.862-35.657 4.862l-1.847-3.837z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M549.972 754.17l4.394-1.633.063-.83-32.534-40.686-13.608 4.953 1.23 52.079.583.595 4.416-1.573 14.543-15.203z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M547.307 737.628l8.091 7.876s13.574-6.067 32.721-16.644c19.148-10.576 30.44-19.196 30.44-19.196l-1.05-4.126z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M517.245 719.455l-3.838 1.398 1.226 46.403"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M517.279 719.443l3.839-1.397 28.887 36.335"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M513.744 720.984l6.219 5.628"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M513.017 714.02l2.385.302 1.632-1.765-3.312-2.851z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M520.944 718.363l-1.147 8.309"
      />
      <path
        fill="#473e39"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M516.608 727.943l.61 36.393c9.688-3.478 19.352-7.022 29.018-10.562l-22.927-28.27-6.7 2.44z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M524.765 726.966l-8.34 3.036"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M521.82 711.1l-.445 2.525-10.96 3.989-2.042-1.714"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M554.041 752.685l-32.862-39.479"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M510.46 768.548l-.203-51.367"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M543.896 735.557l15.549-5.613-44.68-40.339-14.711 5.355-8.297 59.62 15.52-5.695-.72-38.8 12.92-4.702z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M519.38 705.491l-.385-4.563"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M506.787 710.075l-2.637-3.743"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M499.786 697.4l16.823-6.124"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M507.326 694.5l3.386 9.304 1.11.613.455-1.183-3.385-9.303-1.07-.502z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M557.54 728.35l-14.993 5.457-1.396-1.645 14.712-5.354z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M554.13 725.121l-14.335 5.218-1.396-1.645 14.054-5.115z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M550.532 721.961l-13.395 4.875-1.396-1.644 13.114-4.773z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M547.028 718.767l-12.925 4.704-1.302-1.678 12.55-4.568z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M543.524 715.573l-12.173 4.43-1.302-1.678 11.798-4.294z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M539.926 712.412l-11.421 4.157-1.302-1.678 11.046-4.02z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M547.328 734.294l-28.21-33.528-6.969 2.536"
      />
      <path
        fill="#520"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M492.168 752.143l14.992-5.457.013-2.156-14.711 5.354z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M492.705 747.478l14.334-5.217.013-2.157-14.054 5.115z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M493.43 742.745l13.394-4.876.013-2.156-13.114 4.772z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M494.06 738.045l12.926-4.704-.082-2.123-12.55 4.568z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M494.691 733.346l12.174-4.43-.082-2.123-11.798 4.294z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M495.416 728.613l11.421-4.157-.081-2.123-11.046 4.02z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M503.55 750.228l.06-43.818 6.968-2.536"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M708.856 602.072l6.352 9.336s-8.332 12.314-22.073 29.334-24.19 26.644-24.19 26.644l-3.882-1.752z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M743.712 574.612l2.317-4.076-.486-.677-51.074-10.255-7.241 12.541 34.418 39.105.83.081 2.37-4.043 1.369-20.995z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M731.038 563.652l11.261.833s6.498-13.373 14.367-33.783c7.87-20.41 10.98-34.271 10.98-34.271l-3.458-2.486z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M696.328 569.054l-2.042 3.538 30.767 34.759"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M696.346 569.023l2.043-3.537 45.485 9.266"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M694.628 572.477l8.382.313"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M689.595 567.608l2.022-1.3.115-2.402-4.37-.055z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M698.46 565.84l4.462 7.102"
      />
      <path
        fill="#473e39"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M701.296 575.966l23.86 27.487c5.186-8.891 10.311-17.819 15.44-26.744l-35.734-6.919-3.566 6.176z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M706.917 569.974l-4.439 7.687"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M694.462 559.713l1.282 2.22-5.832 10.101h-2.666"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M745.876 570.858l-50.551-9.119"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M722.686 611.023l-33.173-39.22"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M727.093 564.258l8.304-14.294-60.156-2.182-7.828 13.558 31.968 51.005 8.228-14.339-25.492-29.259 6.875-11.908z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M688.988 556.985l-3.228-3.248"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M682.287 568.59l-4.426-1.17"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M668.776 563.381l8.951-15.504"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M672.69 556.314l8.573 4.95 1.244-.243-.411-1.2-8.574-4.95-1.141.303z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M732.913 549.967l-7.978 13.818-2.126-.363 7.828-13.558z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M728.225 549.686l-7.627 13.21-2.126-.362 7.478-12.951z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M723.438 549.578l-7.127 12.345-2.126-.363 6.977-12.085z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M718.7 549.383l-6.877 11.912-2.076-.449 6.678-11.566z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M713.963 549.188l-6.477 11.22-2.076-.45 6.277-10.873z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M709.176 549.08l-6.077 10.526-2.076-.449 5.877-10.18z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M728.911 561.085l-43.162-7.55-3.708 6.421"
      />
      <path
        fill="#520"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M698.13 610.214l7.977-13.817-1.377-1.66-7.828 13.558z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M695.542 606.296l7.627-13.211-1.377-1.66-7.477 12.951z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M693.054 602.204l7.128-12.345-1.377-1.66-6.978 12.085z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M690.517 598.198l6.877-11.912-1.426-1.573-6.678 11.566z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M687.98 594.193l6.477-11.22-1.427-1.572-6.277 10.873z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M685.492 590.101l6.077-10.526-1.426-1.573-5.878 10.18z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M705.618 601.43l-28.12-33.604 3.707-6.422"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M767.658 355.969l10.867 3.068s1.532 14.79 1.946 36.66c.415 21.87-1.404 35.96-1.404 35.96l-4.1 1.153z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M776.708 312.528l-.845-4.611-.807-.207-45.717 24.974 2.515 14.262 51.501 7.832.688-.47-.783-4.623-12.447-16.961z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M759.954 312.279l9.162-6.6s-3.618-14.421-10.709-35.115c-7.09-20.693-13.618-33.31-13.618-33.31l-4.247.318z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M736.838 338.729l.71 4.022 45.91 6.85"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M736.831 338.693l-.708-4.023 40.8-22.139"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M737.736 342.443l6.622-5.148"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M730.75 341.948l.713-2.296-1.455-1.913-3.384 2.767z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M736.405 334.896l7.983 2.572"
      />
      <path
        fill="#473e39"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M745.086 340.83l35.946 5.72c-1.742-10.146-3.555-20.278-5.363-30.412l-31.821 17.669 1.238 7.023z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M745.54 332.627l1.542 8.741"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M729.404 332.772l2.409.877 2.025 11.486-2.042 1.714"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M775.953 308.262l-44.586 25.508"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M784.006 353.935l-50.621-8.72"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M757.322 315.279l-2.827-16.287-47.484 36.995 2.718 15.418 57.274 18.524-2.914-16.273-38.335-6.028-2.387-13.541z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M723.457 334.2l-4.56-.412"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M725.784 347.399l-4.144 1.947"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M712.085 352.093l-3.109-17.631"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M710.54 344.163l9.75-1.718.797-.987-1.086-.654-9.75 1.72-.68.965z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M752.594 300.59l2.77 15.713-1.86 1.09-2.72-15.418z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M748.823 303.388l2.649 15.023-1.862 1.09-2.597-14.729z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M745.086 306.383l2.475 14.038-1.862 1.089-2.423-13.743z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M741.332 309.279l2.388 13.546-1.879.99-2.319-13.152z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M737.577 312.175l2.25 12.758-1.879.99-2.18-12.364z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M733.84 315.169l2.111 11.97-1.879.99-2.04-11.576z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M756.675 311.68l-37.917 21.96 1.287 7.302"
      />
      <path
        fill="#520"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M764.675 369.101l-2.77-15.712-2.123-.387 2.719 15.418z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M760.174 367.762l-2.65-15.023-2.121-.386L758 367.08z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M755.638 366.227l-2.475-14.038-2.122-.387 2.423 13.743z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M751.12 364.79l-2.389-13.547-2.104-.288 2.319 13.153z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M746.601 363.352l-2.25-12.758-2.104-.288 2.18 12.364z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M742.066 361.816l-2.11-11.97-2.105-.288 2.041 11.577z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M764.765 357.559l-43.142-7.668-1.287-7.302"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M654.502 129.622l10.297-4.635s10.68 10.344 25.056 26.832c14.375 16.488 22.038 28.45 22.038 28.45l-2.399 3.518z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M633.512 90.526l-3.611-2.988-.752.36-18.968 48.518 11.094 9.309 44.487-27.105.224-.803-3.57-3.038-20.438-4.992z"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M620.518 101.105l2.776-10.945s-12.042-8.721-30.775-20.015C573.785 58.85 560.675 53.38 560.675 53.38l-3.049 2.973z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M619.81 136.226l3.13 2.625 39.573-24.263"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M619.783 136.203l-3.129-2.626 17.024-43.185"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M622.886 138.494l1.764-8.2"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M617.217 142.605l-.93-2.216-2.344-.531-.814 4.294z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M617.016 133.568l7.769-3.16"
      />
      <path
        fill="#473e39"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M627.48 132.533l31.213-18.723c-7.856-6.652-15.758-13.25-23.657-19.85l-13.019 33.99 5.463 4.583z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M622.555 125.958l6.8 5.706"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M610.287 136.441l2.41-.876 8.934 7.497-.463 2.625"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M630.19 87.744l-17.758 48.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M665.719 117.556l-44.384 25.859"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M620.43 105.095l-12.635-10.66-12.596 58.863 11.994 10.064 55.781-22.626-12.692-10.592-33.241 20.023-10.534-8.838z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M606.65 141.359l-3.759 2.615"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M616.916 149.973l-1.922 4.156"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M609.44 162.374l-13.715-11.508"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M603.16 157.293l6.363-7.584-.023-1.267-1.253.197-6.364 7.583.1 1.177z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M607.367 96.883l12.222 10.255-.727 2.03-11.992-10.062z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M606.275 101.45l11.686 9.806-.726 2.03-11.456-9.613z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M605.338 106.146l10.92 9.162-.727 2.031-10.69-8.97z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M604.323 110.777l10.537 8.842-.802 1.967L603.827 113z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M603.309 115.409l9.924 8.327-.803 1.967-9.618-8.07z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M602.371 120.105l9.31 7.812-.802 1.967-9.005-7.556z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M617.62 102.754l-14.93 41.195 5.68 4.767"
      />
      <path
        fill="#520"
        fillOpacity="1"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M660.658 141.6l-12.222-10.256-1.874 1.068 11.993 10.063z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M656.35 143.467l-11.686-9.805-1.874 1.067 11.456 9.613z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M651.888 145.206l-10.92-9.163-1.873 1.068 10.69 8.97z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M647.503 147.01l-10.537-8.842-1.797 1.132 10.23 8.585z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M643.118 148.813l-9.924-8.328-1.797 1.132 9.618 8.07z"
      />
      <path
        fill="#520"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M638.656 150.552l-9.31-7.813-1.798 1.132 9.005 7.556z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M653.308 132.7l-37.977 21.857-5.68-4.767"
      />
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(24.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g transform="rotate(.8 399.788 398.36)">
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M399.788 113.56v5.601"
        />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(2.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(6.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(7.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(8.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(8.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(9.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(9.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(10 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(10.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(10.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(11.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(11.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(12 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(12.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(12.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(13.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(13.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(14 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(14.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(15.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(15.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(16 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(16.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(16.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(17.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(18 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(18.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(19.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(19.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(20 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(20.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(21.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(21.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(22 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(22.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(22.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(23.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(23.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(24 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="#000"
        fillOpacity="0"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(24.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(24.6 399.788 398.36)"
      >
        <g fill="none" transform="rotate(.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(3.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(5.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(7.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(17.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(24 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="#000" fillOpacity="0" transform="rotate(24.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
      </g>
      <g
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(49.8 399.788 398.36)"
      >
        <g fill="none">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(3.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(5.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(7.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(17.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(24 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="#000" fillOpacity="0" transform="rotate(24.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
      </g>
      <g
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(75 399.788 398.36)"
      >
        <g fill="none">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(3.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(5.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(7.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(17.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(24 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="#000" fillOpacity="0" transform="rotate(24.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(89.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g transform="rotate(91.4 399.788 398.36)">
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M399.788 113.56v5.601"
        />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(92.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(93.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(95.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(100.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(100.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(101 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(101.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(102.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(102.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(103 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(103.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(103.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(104.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(105 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(105.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(106.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(106.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(107 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(107.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(108.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(108.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(109 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(109.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(109.8 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(110.2 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(110.6 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(111 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        fill="#000"
        fillOpacity="0"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(111.4 399.788 398.36)"
      >
        <path d="M399.788 113.56v5.601" />
        <path d="M399.788 677.56v5.601" />
      </g>
      <g
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(111.6 399.788 398.36)"
      >
        <g fill="none" transform="rotate(.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(3.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(5.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(7.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(17.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(24 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="#000" fillOpacity="0" transform="rotate(24.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
      </g>

      <g
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(136.8 399.788 398.36)"
      >
        <g fill="none">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(3.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(5.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(7.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(17.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(24 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="#000" fillOpacity="0" transform="rotate(24.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
      </g>

      <g
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        transform="rotate(162 399.788 398.36)"
      >
        <g fill="none">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(1.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(2.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(3.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(4.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(5.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(6.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(7.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(8.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(9.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(10.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(11.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(12.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(13.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(14.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(15.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(16.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(17.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(18.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(19.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(20.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(21.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(22.8 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.2 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(23.6 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="none" transform="rotate(24 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
        <g fill="#000" fillOpacity="0" transform="rotate(24.4 399.788 398.36)">
          <path d="M399.788 113.56v5.601" />
          <path d="M399.788 677.56v5.601" />
        </g>
      </g>

      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.5"
        d="M400.219 121.188l-3.281 3.28c-.21.003-.417-.002-.625 0l-3.344-3.187-3.219 3.375c-.188.007-.375.024-.563.031l-3.468-3.125-3.094 3.438c-2.606.161-5.196.36-7.781.594l-3.594-2.875-2.875 3.562c-.23.027-.457.067-.688.094l-3.625-2.813-2.78 3.625c-2.614.368-5.224.778-7.813 1.22l-3.719-2.563-2.531 3.687c-.282.055-.563.1-.844.156l-3.75-2.437-2.438 3.75c-.271.06-.54.126-.812.187l-3.813-2.343-2.312 3.781c-2.625.655-5.25 1.332-7.844 2.062l-3.875-2.093-2.094 3.875c-.31.095-.626.184-.937.281l-3.875-2-2 3.906a271.88 271.88 0 00-7.688 2.719l-4-1.781-1.75 3.968-.937.375-4.031-1.656-1.656 4.031c-.31.132-.629.242-.938.375l-4.063-1.53-1.562 4.03a272.062 272.062 0 00-7.438 3.532l-4.093-1.344-1.313 4.094c-.335.175-.665.355-1 .531l-4.125-1.25-1.219 4.156c-2.41 1.342-4.822 2.682-7.187 4.094l-4.156-1-.969 4.156c-.326.204-.644.42-.969.625l-4.187-.906-.875 4.219c-.302.2-.606.392-.906.594l-4.22-.782-.78 4.188a273.925 273.925 0 00-6.72 4.875l-4.25-.563-.562 4.25c-.303.238-.603.48-.906.719l-4.25-.469-.438 4.25a274.32 274.32 0 00-6.312 5.406l-4.281-.218-.188 4.219c-.282.259-.562.52-.844.78l-4.25-.093-.125 4.219c-.29.28-.585.561-.875.844l-4.187.03-.031 4.188a276.118 276.118 0 00-5.813 6.094l-4.156.188.219 4.187c-.284.32-.562.647-.844.969l-4.187.312.343 4.156a274.925 274.925 0 00-5.343 6.563l-4.125.563.562 4.062c-.273.362-.541.73-.812 1.094l-4.063.656.625 4.031c-.265.371-.518.753-.781 1.125l-4.031.75.75 3.969a273.265 273.265 0 00-4.72 7.25l-3.937.938.969 3.875c-.27.45-.544.892-.812 1.343l-3.875 1.031 1.03 3.844a273.259 273.259 0 00-4.218 7.688l-3.719 1.219 1.219 3.687c-.247.494-.475 1.004-.719 1.5l-3.687 1.313 1.281 3.687c-.23.492-.46.976-.687 1.469l-3.625 1.437 1.375 3.625a272.282 272.282 0 00-3.407 8.188l-3.531 1.562 1.563 3.531c-.2.532-.399 1.06-.594 1.594l-3.5 1.688 1.687 3.5a271.916 271.916 0 00-2.75 8.437l-3.406 1.844 1.844 3.344c-.164.571-.31 1.146-.469 1.719l-3.344 1.906 1.938 3.344c-.145.563-.296 1.123-.438 1.687l-3.25 2 2 3.25c-.669 2.913-1.3 5.834-1.875 8.781l-3.187 2.156 2.187 3.157c-.103.593-.212 1.186-.312 1.781l-3.094 2.219 2.25 3.094a270.61 270.61 0 00-1.156 8.843l-3 2.438 2.437 2.969c-.054.58-.105 1.167-.156 1.75l-2.906 2.5 2.5 2.937c-.039.566-.09 1.121-.125 1.688l-2.844 2.593 2.563 2.875c-.123 2.942-.189 5.91-.22 8.875l-2.75 2.75 2.75 2.75c.006.574.023 1.146.032 1.719l-2.688 2.813 2.813 2.656c.104 2.974.27 5.926.469 8.875l-2.532 2.937 2.938 2.469c.052.593.1 1.19.156 1.781l-2.406 2.969 2.938 2.406c.067.596.147 1.187.218 1.781l-2.312 3 3.031 2.313c.417 2.977.863 5.93 1.375 8.875l-2.156 3.125 3.125 2.125c.121.626.249 1.25.375 1.875l-2.094 3.156 3.188 2.063a270.731 270.731 0 002.093 8.781l-1.875 3.25 3.25 1.875c.165.593.332 1.19.5 1.781l-1.781 3.313 3.281 1.781c.183.595.376 1.188.563 1.781l-1.688 3.344 3.344 1.719c.961 2.864 1.948 5.71 3 8.531l-1.531 3.438 3.437 1.53c.233.59.482 1.164.719 1.75l-1.469 3.47 3.5 1.437c1.18 2.767 2.42 5.5 3.688 8.219l-1.281 3.593 3.593 1.25c.265.54.513 1.088.781 1.625l-1.156 3.594 3.594 1.188c.279.532.562 1.063.844 1.593l-1.031 3.625 3.593 1.094a273.643 273.643 0 004.5 7.813l-.875 3.656 3.719.906c.317.505.648.998.969 1.5l-.813 3.75 3.75.813a275.17 275.17 0 005.063 7.343l-.594 3.813 3.781.563c.345.463.715.913 1.063 1.375l-.5 3.843 3.812.5c.354.451.706.895 1.063 1.344l-.375 3.844 3.844.406a276.621 276.621 0 005.75 6.719l-.22 3.906 3.907.188c.385.418.769.834 1.156 1.25l-.125 3.906 3.969.093c2.036 2.099 4.086 4.187 6.188 6.22l.093 3.937 3.938-.125c.4.371.785.755 1.187 1.125l.219 3.906 3.906-.188c.404.356.813.71 1.219 1.063l.313 3.906 3.906-.281c2.246 1.878 4.537 3.694 6.844 5.5l.5 3.906 3.937-.5c.424.319.855.621 1.281.938l.594 3.937 3.938-.625a275.457 275.457 0 007.218 4.938l.813 3.875 3.875-.844c.44.28.87.567 1.312.844l.938 3.875 3.875-.938c.436.261.875.523 1.312.782l1.063 3.843L265.53 637a271.359 271.359 0 007.688 4.188l1.219 3.78 3.75-1.25c.49.244.976.51 1.468.75l1.281 3.72 3.782-1.344a271.822 271.822 0 007.969 3.562l1.53 3.688 3.657-1.532c.472.19.964.345 1.438.532l1.625 3.656 3.656-1.625c.458.17.915.332 1.375.5l1.781 3.625 3.625-1.719c2.73.93 5.482 1.842 8.25 2.688l1.906 3.531 3.563-1.938c.47.133.935.276 1.406.407l2 3.531 3.563-2.063c2.739.697 5.51 1.356 8.28 1.97l2.282 3.468 3.438-2.281c.438.087.873.196 1.312.281l2.344 3.406 3.406-2.375c.429.074.852.147 1.281.219l2.469 3.344 3.375-2.438c2.77.4 5.547.777 8.344 1.094l2.625 3.281 3.281-2.687c.417.038.832.088 1.25.125l2.719 3.218 3.219-2.75c5.122.335 10.273.514 15.468.563l3.063 3.063 3.062-3.063c.344-.004.688-.026 1.031-.031l3.157 3 3-3.156c.343-.014.688-.017 1.031-.032l3.219 2.875 2.906-3.218c2.728-.176 5.45-.402 8.156-.657l3.375 2.75 2.75-3.406c.334-.039.667-.085 1-.125l3.469 2.688 2.656-3.47c2.695-.386 5.362-.847 8.031-1.312l3.625 2.5 2.5-3.625c.303-.06.605-.126.907-.187l3.719 2.406 2.406-3.687c.303-.069.603-.15.906-.22l3.75 2.313 2.313-3.78a271.276 271.276 0 007.812-2.095l3.875 2.125 2.125-3.906c.291-.09.584-.19.875-.281l3.938 2.031 2-3.938c2.553-.866 5.075-1.78 7.593-2.718l4.063 1.812 1.812-4.093c.269-.108.545-.205.813-.313l4.125 1.719 1.719-4.125c.261-.113.52-.23.78-.344l4.157 1.594 1.625-4.188a272.418 272.418 0 007.188-3.437l4.28 1.375 1.407-4.282c.223-.117.434-.257.656-.375l4.344 1.282 1.281-4.375a272.98 272.98 0 006.813-3.938l4.468 1.094 1.094-4.5c.178-.112.354-.23.532-.344l4.53.969.938-4.563c.17-.113.332-.23.5-.343l4.563.843.843-4.53c2.101-1.489 4.163-3.05 6.22-4.595l4.687.594.625-4.656c.134-.106.272-.206.406-.313l4.656.5.469-4.656a275.454 275.454 0 005.813-5l4.75.25.218-4.75c.114-.105.23-.207.344-.312l4.75.125.125-4.75c.1-.098.18-.215.281-.313h4.782v-4.781c1.755-1.804 3.513-3.617 5.218-5.469l4.782-.281-.282-4.781c.083-.095.168-.187.25-.282l4.782-.375-.375-4.812c1.603-1.927 3.23-3.84 4.78-5.813l4.75-.625-.624-4.812c.058-.078.098-.172.156-.25l4.813-.75-.782-4.781c.074-.104.146-.209.219-.313l4.719-.843-.875-4.72a272.875 272.875 0 004.093-6.312l4.688-1.156-1.125-4.656.188-.313 4.625-1.25-1.22-4.593a272.993 272.993 0 003.595-6.657l4.562-1.468-1.469-4.563c.056-.113.101-.231.157-.344l4.53-1.625-1.593-4.5c.053-.114.104-.23.156-.343l4.469-1.72-1.719-4.5c.986-2.293 1.951-4.61 2.875-6.937l4.375-1.969-1.937-4.406c.038-.105.086-.207.125-.312l4.343-2.094-2.093-4.375c.798-2.356 1.577-4.71 2.312-7.094l4.25-2.312-2.312-4.25c.026-.095.067-.186.093-.281l4.22-2.438-2.47-4.219c.025-.095.07-.185.094-.281l4.125-2.531-2.562-4.188c.538-2.397 1.087-4.798 1.562-7.219l4.031-2.812-2.78-4.031c.011-.073.018-.146.03-.219l3.97-2.875-2.907-4c.344-2.405.656-4.825.937-7.25l3.875-3.125-3.156-3.875c.003-.032.029-.062.031-.094l3.782-3.25-3.282-3.875 3.75-3.375-3.375-3.75c.091-2.385.158-4.787.188-7.187l3.562-3.563-3.562-3.562 3.469-3.688-3.657-3.437c-.093-2.4-.25-4.804-.406-7.188l3.313-3.843-3.844-3.282 3.187-3.937-3.906-3.156c-.002-.021.002-.042 0-.063l3.031-4-3.968-3.031c-.344-2.385-.721-4.76-1.125-7.125l2.843-4.156-4.125-2.844c-.006-.032-.025-.062-.03-.094l2.718-4.156-4.156-2.719a272.028 272.028 0 00-1.72-7.094l2.5-4.28-4.28-2.5c-.016-.055-.048-.103-.063-.157l2.375-4.344-4.375-2.406-.031-.094 2.25-4.437-4.406-2.25a271.277 271.277 0 00-2.438-6.875l2-4.532-4.562-2.03c-.013-.031-.02-.064-.032-.095l1.907-4.593-4.594-1.907a273.782 273.782 0 00-2.969-6.656l1.688-4.687-4.75-1.688c-.002-.004-.03.004-.032 0v-.031l1.563-4.813-4.75-1.53c-.017-.034-.045-.061-.063-.094l1.438-4.782-4.844-1.438a274.293 274.293 0 00-3.562-6.187l1.156-4.938-4.906-1.187c-.003-.005-.029.005-.031 0v-.031l1.062-4.906-4.937-1.063a275.14 275.14 0 00-4.063-5.906l.813-4.969-5-.812.656-5.032-5.031-.656.53-5.031-5.03-.5c-1.53-1.84-3.08-3.64-4.657-5.438l.25-5.093-5.03-.25c-.006-.005-.027.005-.032 0v-.032l.156-5.03-5.062-.126a275.793 275.793 0 00-5.063-5.094l-.125-5.03-5.031.124-.031-.031-.25-5.031-5.032.28c-.022-.019-.04-.042-.062-.062l-.375-4.968-5 .375a274.045 274.045 0 00-5.625-4.563l-.656-4.937-4.938.656c-.035-.026-.059-.068-.094-.094l-.781-4.906-4.906.781a274.604 274.604 0 00-6-4.156l-1.032-4.844-4.812 1.031c-.051-.032-.105-.061-.156-.093L544.937 162l-4.78 1.156c-.065-.038-.124-.086-.188-.125l-1.282-4.75-4.75 1.281a273.614 273.614 0 00-6.468-3.53l-1.532-4.657-4.625 1.5-.25-.125-1.625-4.563-4.53 1.594a273.294 273.294 0 00-6.845-3.062l-1.843-4.438-4.438 1.844c-.117-.047-.227-.11-.344-.156l-1.968-4.406-4.406 1.968c-.105-.039-.208-.086-.313-.125l-2.094-4.344-4.312 2.063a272.274 272.274 0 00-7.188-2.344l-2.312-4.187-4.188 2.281c-.127-.036-.248-.09-.375-.125l-2.406-4.125-4.094 2.375a272.605 272.605 0 00-7.406-1.781l-2.594-3.969-4 2.594c-.146-.03-.29-.065-.437-.094l-2.688-3.937-3.906 2.718c-.147-.025-.29-.068-.438-.093l-2.78-3.844-3.844 2.781c-2.525-.368-5.048-.7-7.594-1l-2.969-3.656-3.625 2.969c-.177-.017-.354-.047-.531-.063l-3.031-3.562-3.594 3.03a277.562 277.562 0 00-14.844-.593l-3.281-3.313z"
      />

      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M516.56 723.77l.763 3.98 2.944-.007 2.259-1.887-1.944-3.55-2.642-1z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M517.958 721.31l2.351 6.459"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M280.085 722.422l-1.973 3.538 2.26 1.887 2.943.007.793-3.968-1.381-2.465z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M282.738 721.436l-2.35 6.459"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M698.577 572.801l3.142 2.558 2.25-1.898.519-2.897-3.77-1.47-2.668.931z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M698.067 570.017l5.952 3.437"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M740.969 340.153l4.05-.06.505-2.9-1.465-2.553-3.834 1.297-1.444 2.428z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M738.788 338.348l6.77-1.193"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M623.891 134.662l3.064-2.65-1.478-2.547-2.763-1.013-2.103 3.458.455 2.788z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M621.06 134.68l4.419-5.265"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M402.156 52.563l.644-4-2.769-1.001-2.768 1 .612 4 2.14 1.844z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M400 54.396v-6.873"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M179.481 132.174l-2.078-3.478-2.764 1.013-1.478 2.546 3.04 2.67 2.826.037z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M179.008 134.965l-4.418-5.266"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M60.076 336.292l-3.828-1.328-1.466 2.553.504 2.9 4.046.092 2.188-1.788z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M61.507 338.734l-6.769-1.193"
      />
      <path
        fill="gray"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M99.802 569.385l-3.786 1.443.518 2.898 2.25 1.897 3.158-2.53.527-2.776z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M102.468 570.336l-5.952 3.436"
      />
    </>
  );
};

export default GateFrame;
