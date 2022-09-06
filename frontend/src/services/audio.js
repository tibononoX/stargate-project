/* eslint-disable no-case-declarations */
const audioSelector = (volume, type, chev = null) => {
  let audio;
  switch (type) {
    // COMMON SOUNDS
    case "dialFail":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/dhd/dhd_usual_fail.mp3`
      );
      break;

    case "wormholeSound":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/wormholeLoop.wav`
      );
      audio.volume = volume;
      audio.loop = true;
      return audio.play();

    case "travelWormhole":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/teleport_${Math.floor(
          Math.random() * (8 - 1) + 1
        )}.mp3`
      );
      break;

    case "chevEnd":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_end.wav`
      );
      break;

    case "gateOpen":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/gateOpen.wav`
      );
      break;

    case "gateClose":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/gateClose.wav`
      );
      break;

    case "robloxDeath":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/roblox-death.mp3`
      );
      break;

    // DHD DIAL SOUNDS
    case "dhdInput":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/dhd/dhd_usual_${chev}.wav`
      );
      break;

    case "dhdOpen":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/dhd/dhd_usual_dial.wav`
      );
      break;

    case "dhdChev":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_${chev}.wav`
      );
      break;

    case "dhdLock":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_7.wav`
      );
      break;

    // EARTH DIAL SOUNDS
    case "ringRoll":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/ringRoll.wav`
      );
      audio.volume = volume;
      return audio;

    case "ringRollFail":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/ringRollFail.wav`
      );
      audio.volume = volume;
      return audio;

    case "earthChev":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_lock1.mp3`
      );
      break;

    case "earthLockFail":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_lock_fail.wav`
      );
      break;

    case "earthEnd":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_end.wav`
      );
      break;

    case "earthLock":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_lock2.wav`
      );
      break;

    default:
      break;
  }

  audio.volume = volume;
  return audio.play();
};

export default audioSelector;
