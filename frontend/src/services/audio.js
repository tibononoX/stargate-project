/* eslint-disable no-case-declarations */
const audioSelector = (volume, type, chev = null) => {
  let audio;
  switch (type) {
    // UI SOUNDS
    case "chatNotif":
      audio = new Audio(
        `${import.meta.env.VITE_FRONTEND_SRC_URL}/assets/sounds/ui/notif.mp3`
      );
      audio.volume = volume;
      break;
    case "startAutoDial":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/ui/startAutoDial.mp3`
      );
      audio.volume = volume;
      break;

    // COMMON SOUNDS
    case "dialFail":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/dhd/dhd_usual_fail.mp3`
      );
      audio.volume = volume;
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
      audio.volume = volume;
      break;

    case "chevEnd":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_end.wav`
      );
      audio.volume = volume;
      break;

    case "gateOpen":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/gateOpen.wav`
      );
      audio.volume = volume;
      break;

    case "gateClose":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/gateClose.wav`
      );
      audio.volume = volume;
      break;

    case "robloxDeath":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/roblox-death.mp3`
      );
      audio.volume = volume;
      break;

    // DHD DIAL SOUNDS
    case "dhdInput":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/dhd/dhd_usual_${chev}.wav`
      );
      audio.volume = volume;
      break;

    case "dhdOpen":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/dhd/dhd_usual_dial.wav`
      );
      audio.volume = volume;
      break;

    case "dhdChev":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_${chev}.wav`
      );
      audio.volume = volume;
      break;

    case "dhdLock":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_7.wav`
      );
      audio.volume = volume;
      break;

    // EARTH DIAL SOUNDS
    case "ringRoll":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/ringRoll.wav`
      );
      audio.volume = volume;
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
      audio.volume = volume;
      break;

    case "earthLockFail":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_lock_fail.wav`
      );
      audio.volume = volume;
      break;

    case "earthEnd":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_end.wav`
      );
      audio.volume = volume;
      break;

    case "earthLock":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/chev_usual_lock2.wav`
      );
      audio.volume = volume;
      break;

    case "irisClose":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/iris_close.mp3`
      );
      audio.volume = volume;
      break;

    case "irisOpen":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/iris_open.mp3`
      );
      audio.volume = volume;
      break;

    case "irisHit":
      audio = new Audio(
        `${
          import.meta.env.VITE_FRONTEND_SRC_URL
        }/assets/sounds/stargate/iris_hit.mp3`
      );
      audio.volume = volume;
      break;

    default:
      break;
  }

  audio.volume = volume;
  return audio.play();
};

export default audioSelector;
