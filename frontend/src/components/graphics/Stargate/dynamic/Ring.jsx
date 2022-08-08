import { RollContext } from "@components/stargate/Stargate";
import PlanetContext from "@contexts/PlanetContext";
import { useState, useEffect, useContext } from "react";

const Ring = ({ currentSymbol }) => {
  const { currentPlanet } = useContext(PlanetContext);
  const { ringRoll, setRingRoll, timeToRoll, setTimeToRoll } =
    useContext(RollContext);
  const [rollDirection, setRollDirection] = useState(false);
  const [ringPosition, setRingPosition] = useState(360 / 39 - 9.23);

  const rotation = () => {
    const quarter = 360 / 39;

    switch (currentPlanet.dialMode) {
      case "EARTH":
        setRollDirection(!rollDirection);
        return rollDirection
          ? setRingPosition(quarter + 9.23 * (39 - currentSymbol))
          : setRingPosition(
              quarter - 9.23 * currentSymbol < -180
                ? quarter - 9.23 * currentSymbol + 360
                : quarter - 9.23 * currentSymbol
            );
      case "DHD":
        return 360 / 39 - 9.23;
      default:
        return ringPosition;
    }
  };

  const HandleRingRoll = () => {
    if (ringRoll) {
      return null;
    }
    setRingRoll(true);
    setTimeToRoll(9);

    const rollSound = new Audio(
      `../../src/assets/sounds/stargate/ringRoll.wav`
    );
    rollSound.play();

    setTimeout(() => {
      rollSound.pause();
      rollSound.currentTime = 0;
      return setRingRoll(false);
    }, timeToRoll * 1000);
  };

  const timingFunction = "cubic-bezier(.18,0,.82,1)";
  const handleRollTime = () => {
    if (currentPlanet.dialMode !== "EARTH") {
      return "0ms";
    }
    return `${timeToRoll}s`;
  };

  useEffect(() => {
    HandleRingRoll();
    rotation();
  }, [currentSymbol]);

  return (
    <g
      style={{
        transitionDuration: handleRollTime(),
        transformOrigin: "center",
        transform: `rotate(${ringPosition}deg)`,
        transitionTimingFunction: timingFunction,
      }}
    >
      <g
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.58"
        transform="translate(-13.983 -14.018) scale(1.03486)"
      >
        <g strokeWidth="0.58">
          <path
            strokeWidth="0.687"
            d="M406 115L413 115 400 99 387 115 394 115 393 112 400 102 407 112z"
            transform="matrix(.74655 0 0 .95323 101.381 2.23)"
          />
          <circle
            cx="400"
            cy="93"
            r="3.5"
            strokeWidth="0.773"
            transform="matrix(.75 0 0 .75 100 22.243)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(9.231 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M391 113L388 107 391 100 393 89 406 89 402 101 407 108 407 113 409 116 403 116 405 113 405 108 401 103 393 103 391 107 394 116 390 116z"
            transform="matrix(.75 0 0 .75 99.482 25.76)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(18.462 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M387.444 94.41l-.743 2.254 2.253-.02 6.752.77.74 9.75-.745 1.49 1.5.009.009-1.5-.766-4.487 6.016-.003 8.978 5.248.02 1.49 1.48-2.245-1.5-.01-8.244-5.238.018-3.762 6.751.006-.018 2.235 2.999.781-3.01-3.77-5.234-2.232-2.243 1.48-6.016.004-7.478-.751-1.519-1.499zm10.105 3.662l3.848-.106-.027 3.16-3.82.193v-3.247z"
          />
        </g>
        <g
          strokeWidth="0.773"
          transform="rotate(27.692 400 400) matrix(.75 0 0 .75 99.906 25.283)"
        >
          <path d="M389 98L406 108 409 114 416 104 407 105 389 96 388 94 386 98z" />
          <path d="M384 98L382 97 385 91 387 93z" />
        </g>
        <g
          strokeWidth="0.773"
          transform="rotate(36.923 400 400) matrix(.75 0 0 .75 100.555 25.697)"
        >
          <path d="M412 100L415 102 415 94 412 97z" />
          <path d="M406 100L410 100 410 97 406 97z" />
          <path d="M406 112L408 113 403 115 404 113 400 102 388 105 386 107 386 103 389 104 400 100 404 89 404 87 407 88 406 90 401 101z" />
        </g>
        <g strokeWidth="0.58" transform="rotate(46.154 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M407 88L407 84 411 86 409 89 396 89 396 115 402 112 410 112 410 116 402 114 396 117 387 103 395 88z"
            transform="matrix(.75 0 0 .75 100.834 25.326)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(55.385 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M389 104L396 102 396 99 404 101 409 85 408 82 413 84 411 86 405 103 398 107 397 104 391 106 389 117 390 119 385 119 387 116z"
            transform="matrix(.75 0 0 .75 99.619 25.328)"
          />
        </g>
        <g
          strokeWidth="0.773"
          transform="rotate(64.615 400 400) matrix(.75 0 0 .75 100.25 25.963)"
        >
          <path d="M388 102L397 102 393 95z" />
          <path d="M403 110L411 111 407 104z" />
        </g>
        <g strokeWidth="0.58" transform="rotate(73.846 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M413 88L401 89 401 101 398 107 386 109 387 101 383 101 384 103 384 111 385 116 384 118 388 117 386 111 398 108 400 108 403 102 402 100 403 90 413 90 415 95 412 98 411 98 412 101 416 95z"
            transform="matrix(.75 0 0 .75 99.465 25.754)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(83.077 400 400)">
          <path
            strokeWidth="0.773"
            d="M385 114L393 114 388 108z"
            transform="matrix(.75 0 0 .75 99.983 25.33)"
          />
          <path
            strokeWidth="0.58"
            d="M401.483 95.08h-3l2.25-4.5 1.5 2.25c6 .75 12.75 11.25 2.25 18.75l-5.25.75v-2.25c10.5-1.5 9.75-12.75 2.25-15z"
          />
        </g>
        <g
          strokeWidth="0.773"
          transform="rotate(92.308 400 400) matrix(.75 0 0 .75 100.025 24.991)"
        >
          <path d="M405 114L405 117 409 114 407 114 401 104 399 82 391 102 400 105z" />
          <path d="M406 102L406 94 402 94 403 102z" />
        </g>
        <g strokeWidth="0.58" transform="rotate(101.538 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M409 110L403 111 400 107 400 104 395 104 391 102 395 88 389 90 383 104 390 103 395 106 395 110 393 109 398 116 398 110 397 111 397 107 399 108 403 112 410 112 415 95 408 89 408 92 413 95z"
            transform="matrix(.75 0 0 .75 99.833 25.485)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(110.769 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M408 101L409 99 413 102 410 103 404 116 404 118 400 116 402 115 408 103 396 102 389 88 386 87 391 85 391 88 397 100z"
            transform="matrix(.75 0 0 .75 100.36 25.058)"
          />
        </g>
        <g
          strokeWidth="0.773"
          transform="rotate(120 400 400) matrix(.75 0 0 .75 100.408 26.15)"
        >
          <path d="M409 87L408 89 410 115 390 112 388 112 389 108 390 110 408 114 406 90 404 88z" />
          <path d="M401 104L394 98 398 94z" />
        </g>
        <g strokeWidth="0.58" transform="rotate(129.231 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M386.273 112.542l1.523.004 1.493-.75c2.25-2.25 18.748-2.248 18.748-2.248l1.5 1.503.742-2.243-2.262-.765s-8.99-10.498-14.24-11.998zm3.012-3.043c2.2-3.78 4.59-10.729 4.59-10.729s4.739 1.297 11.609 8.903c-6.164-.914-13 .403-16.2 1.826z"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(138.461 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M389.408 106.022l10.513 2.98 8.23-1.504 3.002-4.481-2.99-4.504-3.767-.756-5.979 3.014-8.258-.014-2.262 1.506 1.511 3.76zm.766-.774l-1.526-2.239 2.266-.736 7.508-.005 5.979-3.014 1.52.015-.018 7.488-5.238.766-10.49-2.275z"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(147.692 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M398 112L406 110 407 116 400 114 397 117 391 89 400 91 403 88 403 96 400 92 394 91z"
            transform="matrix(.75 0 0 .75 99.84 25.482)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(156.923 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M406 96L408 101 413 101 408 113 402 117 389 118 387 118 387 114 389 115 400 115 399 106 397 102 395 101 398 99 398 101 400 105 402 114 407 111 410 103 407 103 404 96 405 90 404 88 408 88 406 90z"
            transform="matrix(.75 0 0 .75 100.303 26.108)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(166.154 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M388 101L406 99 411 107 388 109 385 117 383 118 386 119 386 117 389 110 412 108 414 109 415 106 413 106 407 98 412 91 414 90 412 88 412 89 406 97 391 98 391 100 386 100 384 105 387 106z"
            transform="matrix(.75 0 0 .75 99.997 25.872)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(175.385 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M400 112L383 114 380 104 400 109 414 89 415 86 419 91 416 91 402 111 402 113z"
            transform="matrix(.75 0 0 .75 99.865 24.954)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-175.385 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M409 95L402 96 388 95 387 94 385 93 383 96 384 98 387 97 403 99 411 97 414 93 414 112 411 110 414 119 418 113 416 112 415 90z"
            transform="matrix(.75 0 0 .75 100.17 26.42)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-166.155 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M398 102L419 101 420 102 420 99 419 100 398 101 387 99 379 108 403 107 411 107 412 108 412 105 411 106 403 105 396 106z"
            transform="matrix(.75 0 0 .75 99.838 25.977)"
          />
        </g>
        <g
          strokeWidth="0.773"
          transform="rotate(-156.923 400 400) matrix(.75 0 0 .75 100.218 24.82)"
        >
          <path d="M385 90L412 97 405 114z" />
          <path d="M394 96L407 100 404 107z" />
        </g>
        <g strokeWidth="0.58" transform="rotate(-147.692 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M379 103L378 103 379 99 380 101 396 103 419 99 420 97 420 101 419 100 396 106z"
            transform="matrix(.75 0 0 .75 99.744 25.081)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-138.461 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M404 117L407 105 405 105 407 98 406 90 402 87 400 88 402 89 404 91 406 98 404 105 401 107 396 100 396 97 390 98 402 110z"
            transform="matrix(.75 0 0 .75 100.788 25.49)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-129.231 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M400.017 99.85l-4.5-4.5-6-2.25-.75-.75-1.5 2.25 1.5-.75 6 2.25 4.5 6-3 9.75c3.75-1.5 6 0 8.25 0 4.5 0 6-3 9-1.5-2.25-1.5-3-6 0-10.5-4.5 3-12 1.5-13.5 0zm10.5 3c-.75 2.25 0 5.25 0 6-2.25.75-9.75 1.5-11.25.75l1.5-6.75c1.5 0 7.5.75 9.75 0z"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-120 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M381 97L383 97 416 99 417 98 417 101 416 100 400 100 404 103 409 105 416 105 417 104 417 108 416 107 408 106 401 104 397 100 383 99 381 100z"
            transform="matrix(.75 0 0 .75 100.189 24.954)"
          />
        </g>
        <g
          strokeWidth="0.773"
          transform="rotate(-110.769 400 400) matrix(.75 0 0 .75 99.933 25.52)"
        >
          <path d="M395 115L404 118 405 114 412 110 411 94 407 96 409 98 410 109 404 113 397 109 391 99 390 96 386 99 389 100 395 109z" />
          <path d="M398 93L403 93 400 88z" />
        </g>
        <g strokeWidth="0.58" transform="rotate(-101.538 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.773"
            d="M382 100L382 98 378 100 380 101 386 110 395 105 396 98 403 106 414 101 415 98 419 96 421 96 420 93 419 94 413 97 413 100 403 104 396 96 392 105 386 107z"
            transform="matrix(.75 0 0 .75 99.707 25.127)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-92.308 400 400)">
          <path
            strokeWidth="0.58"
            d="M401.13 102.605c.75 1.5 2.25 4.5 3 5.25l-6.75 2.25c.75-3 .75-6.75 0-7.5l-1.5.75c1.5 3.75-.75 8.25-2.25 9l1.5 1.5 1.5-2.25 9-2.25 1.5.75v-1.5c-.75-.75-4.5-4.5-4.5-7.5z"
          />
          <path
            strokeWidth="0.773"
            d="M393 100L395 98 391 93 402 90 401 96 403 96 404 90 406 88 404 85 402 88 390 91 388 89 387 93 389 93z"
            transform="matrix(.75 0 0 .75 99.63 25.355)"
          />
          <path
            strokeWidth="0.773"
            d="M400 100L398 98 397 99 399 102z"
            transform="matrix(.75 0 0 .75 99.63 25.355)"
          />
          <path
            strokeWidth="0.773"
            d="M394 101L395 100 397 101 395 103z"
            transform="matrix(.75 0 0 .75 99.63 25.355)"
          />
          <path
            strokeWidth="0.773"
            d="M404 100L403 98 401 99 402 101z"
            transform="matrix(.75 0 0 .75 99.63 25.355)"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-83.077 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M411 94L400 89 400 114 388 107z"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-73.846 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M383.95 103.973l14.25-4.5c-.75-2.25-6.75-4.5-11.25-4.5l-1.5.75.75-3 .75.75c2.25.75 8.25.75 12.75 5.25l8.25-6.75 5.25 4.5h1.5l-2.25 3-.75-2.25-3.75-3.75-19.5 16.5z"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-64.615 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M412.414 101.386l-18.742-7.518.748-2.227.745-.754-2.251-1.506.01 1.5-5.248 12.75-2.242-.005 3.007 2.25.732-1.484 17.273 6.745-.006 2.242 1.497.76-.007-2.269 4.495-4.473-.01-6.01zm-2.217.751l-3.031 7.489-17.245-6.758 3.004-7.476 17.272 6.745z"
          />
        </g>
        <g
          strokeWidth="0.773"
          transform="rotate(-55.385 400 400) matrix(.75 0 0 .75 100.062 25.9)"
        >
          <path d="M380 111L383 111 395 108 394 106 385 109 381 106 379 108z" />
          <path d="M396 101L394 102 391 101 395 99z" />
          <path d="M400 97L398 97 397 100 401 99z" />
          <path d="M401 97L410 93 413 96 418 97 420 96 420 100 418 98 412 97 405 102z" />
        </g>
        <g strokeWidth="0.58" transform="rotate(-46.154 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M411.13 101.151l-.75-2.25h-2.25l1.5 1.5-4.5 5.25c-8.25-2.25-17.25.75-18 2.25l1.5 2.25c.75-5.25 12.75-3.75 17.25-3z"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-36.923 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M393 111.228c.75-12.75 11.25-15 13.5-14.25l1.5.75v-3.75l-1.5 1.5c-6.75 0-13.5 3.75-15 15l-1.5 1.5h3.75z"
          />
        </g>
        <g
          strokeWidth="0.773"
          transform="rotate(-27.692 400 400) matrix(.75 0 0 .75 100.178 26.18)"
        >
          <path d="M393 104L393 106 410 111 412 110 411 114 409 112 392 108 390 109 388 107 391 106 391 103z" />
          <path d="M393 97L392 101 394 102 395 97z" />
          <path d="M395 95L397 93 393 92z" />
        </g>
        <g strokeWidth="0.58" transform="rotate(-18.462 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M387.949 98.41c7.5 9.75 18.75 10.5 24 11.25l1.5 1.5v-3.75l-1.5.75c-11.25-1.5-15.75-3-23.25-10.5l-.75-3-3 3z"
          />
        </g>
        <g strokeWidth="0.58" transform="rotate(-9.231 400 400)">
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.58"
            d="M391.741 105.325l2.25-1.5-1.5-2.25 2.25-5.25c5.25 6 10.5 8.25 16.5 9.75l1.5-.75-.75 3-.75-.75c-3.75-1.5-12-3.75-15.75-8.25l-.75.75.75 3.75 6.75 3.75h2.25l-2.25 2.25-.75-1.5-6.75-3.75-3 2.25-5.25-1.5.75-3z"
          />
        </g>
      </g>
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M616.034 226.581l42.6-34.041"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M399.976 676.712v60.17"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M444.393 673.126l9.651 59.39"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M487.66 662.463l19.052 57.074"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M528.655 644.998l27.96 53.279"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M566.32 621.183l36.143 48.104"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M599.675 591.636l43.392 41.684"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M627.86 557.12l49.516 34.185"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M650.144 518.532l54.358 25.799"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M665.95 476.868l51.436 14.628"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M674.868 433.208l59.73 7.26"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M676.668 388.684l60.121-2.415"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M671.303 344.447l52.813-10.53"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M658.912 301.643l56.263-21.328"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M639.816 261.38l52.114-30.075"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M614.51 224.703l41.82-34"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M583.647 192.56l39.909-45.03"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M548.028 165.782l32.17-50.847"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M508.576 145.065l23.597-55.35"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M466.311 130.944l14.414-58.418"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M422.33 123.785l4.856-59.973"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M355.769 673.126l-9.651 59.39"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M312.503 662.463l-19.053 57.074"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M271.507 644.998l-27.96 53.279"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M233.843 621.183l-36.144 48.104"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M200.487 591.636l-43.392 41.684"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M172.302 557.12l-49.516 34.185"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M150.018 518.532L95.66 544.33"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M134.212 476.868l-51.224 14.628"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M125.293 433.208l-59.73 7.26"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M123.494 388.684l-60.121-2.415"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M128.859 344.447L69.903 332.42"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M141.25 301.643l-56.263-21.328"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M160.346 261.38l-52.114-30.075"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M185.653 224.703l-43.013-34.867"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M216.515 192.56l-39.909-45.03"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M252.134 165.782l-32.17-50.847"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M291.586 145.065l-23.597-55.35"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M333.85 130.944l-14.413-58.418"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M377.833 123.785l-4.857-59.973"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M397.564 676.7l-.525 60.168"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M442.01 673.503l9.133 59.472"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M485.369 663.217l18.553 57.238"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M526.515 646.11l24.104 47.377"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M564.385 622.626l35.723 48.417"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M597.998 593.37l43.026 42.061"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M626.483 559.103l49.216 34.614"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M649.103 520.71l48.738 22.976"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M665.272 479.185l51.076 15.132"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M674.571 435.605l59.664 7.78"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M676.76 391.098l60.14-1.89"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M671.78 346.815l52.467-9.714"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M659.764 303.905l56.447-20.835"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M641.02 263.478l52.373-29.62"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M585.453 194.17l40.3-44.68"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M550.07 167.082l32.611-50.565"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M510.8 146.022l24.079-55.142"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M468.66 131.532l14.923-58.29"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M424.741 123.99l5.38-59.929"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M353.39 672.73l-10.169 59.303"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M310.218 661.689l-16.853 49.714"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M269.376 643.867l-28.423 53.032"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M231.922 619.724l-36.562 47.787"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M198.825 589.887L155.07 631.19"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M170.942 555.127l-43.22 29.556"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M148.996 516.345l-54.581 25.324"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M133.554 474.545l-51.637 14.688"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M125.017 430.81l-59.791 6.737"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M123.606 386.27l-60.098-2.939"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M129.357 342.082l-58.849-12.54"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M142.12 299.388L86.047 277.57"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M161.568 259.294l-51.85-30.53"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M187.194 222.839l-42.256-35.061"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M218.335 190.966l-39.514-45.376"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M254.186 164.5l-31.724-51.126"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M293.818 144.128l-23.113-55.553"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M336.204 130.376L322.3 71.836"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M380.247 123.601l-3.91-55.14"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M402.39 676.704l.525 60.167"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M446.774 672.731l10.169 59.304"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M489.946 661.691l17.152 49.414"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M530.788 643.869L559.21 696.9"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M568.242 619.726l36.562 47.787"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M601.34 589.889l43.753 41.303"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M629.222 555.13l49.812 33.75"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M651.168 516.347l54.581 25.324"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M666.61 474.547l57.936 16.241"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M675.147 430.811l59.79 6.738"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M676.558 386.272l60.098-2.939"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M670.807 342.084l58.849-12.54"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M658.043 299.39l56.075-21.818"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M638.596 259.296l51.85-30.53"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M612.97 222.84l41.637-34.405"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M581.829 190.968l35.919-41.481"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M545.978 164.502l31.724-51.126"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M506.346 144.13l23.113-55.553"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M463.96 130.378l13.903-58.54"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M419.917 123.603l4.034-55.818"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M358.153 673.505l-9.132 59.472"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M314.795 663.22l-18.553 57.237"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M273.649 646.113l-22.833 45.681"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M235.779 622.628l-35.723 48.417"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M202.166 593.372l-43.026 42.061"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M173.68 559.105l-49.215 34.615"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M151.06 520.711l-49.336 23.576"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M134.892 479.187L83.816 494.32"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M125.593 435.607l-59.664 7.78"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M123.404 391.1l-60.14-1.89"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M128.383 346.818l-59.058-11.512"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M140.4 303.907l-56.447-20.835"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M159.145 263.48l-52.375-29.62"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M184.13 226.583l-42.92-34.035"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M214.711 194.171l-40.3-44.68"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M250.095 167.084l-32.612-50.565"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M289.365 146.024l-24.08-55.142"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M331.504 131.534l-14.923-58.29"
      />
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M375.422 123.992l-5.38-59.929"
      />
    </g>
  );
};

export default Ring;
