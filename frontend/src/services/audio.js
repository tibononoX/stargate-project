/* eslint-disable no-case-declarations */

/** Registry of all currently-playing Audio instances.
 *  Allows the volume slider to update sounds in real-time. */
const activeSounds = new Set();

/** Update the volume of every active sound immediately.
 *  Call this from App.jsx whenever the user moves the volume slider. */
export const setGlobalVolume = (v) => {
  activeSounds.forEach((a) => {
    a.volume = v;
  });
};

/** Wrap a newly-created Audio object so it is tracked while audible. */
const track = (audio) => {
  activeSounds.add(audio);
  const cleanup = () => activeSounds.delete(audio);
  audio.addEventListener("ended", cleanup, { once: true });
  audio.addEventListener("pause", cleanup, { once: true });
  return audio;
};

const audioSelector = (volume, type, chev = null) => {
  let audio;
  switch (type) {
    // UI SOUNDS
    case "chatNotif":
      audio = track(
        new Audio(
          `${import.meta.env.VITE_FRONTEND_SRC_URL}/assets/sounds/ui/notif.mp3`
        )
      );
      audio.volume = volume;
      break;
    case "startAutoDial":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/ui/startAutoDial.mp3`
        )
      );
      audio.volume = volume;
      break;

    // COMMON SOUNDS
    case "dialFail":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/dhd/dhd_usual_fail.mp3`
        )
      );
      audio.volume = volume;
      break;

    case "wormholeSound":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/wormholeLoop.wav`
        )
      );
      audio.volume = volume;
      audio.loop = true;
      return audio.play();

    case "travelWormhole":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/teleport_${Math.floor(
            Math.random() * (8 - 1) + 1
          )}.mp3`
        )
      );
      audio.volume = volume;
      break;

    case "chevEnd":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/chev_usual_end.wav`
        )
      );
      audio.volume = volume;
      break;

    case "gateOpen":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/gateOpen.wav`
        )
      );
      audio.volume = volume;
      break;

    case "gateClose":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/gateClose.wav`
        )
      );
      audio.volume = volume;
      break;

    case "robloxDeath":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/roblox-death.mp3`
        )
      );
      audio.volume = volume;
      break;

    // DHD DIAL SOUNDS
    case "dhdInput":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/dhd/dhd_usual_${chev}.wav`
        )
      );
      audio.volume = volume;
      break;

    case "dhdOpen":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/dhd/dhd_usual_dial.wav`
        )
      );
      audio.volume = volume;
      break;

    case "dhdChev":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/chev_usual_${chev}.wav`
        )
      );
      audio.volume = volume;
      break;

    case "dhdLock":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/chev_usual_7.wav`
        )
      );
      audio.volume = volume;
      break;

    // EARTH DIAL SOUNDS
    case "ringRoll":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/ringRoll.wav`
        )
      );
      audio.volume = volume;
      return audio;

    case "ringRollFail":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/ringRollFail.wav`
        )
      );
      audio.volume = volume;
      return audio;

    case "earthChev":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/chev_lock1.mp3`
        )
      );
      audio.volume = volume;
      break;

    case "earthLockFail":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/chev_usual_lock_fail.wav`
        )
      );
      audio.volume = volume;
      break;

    case "earthEnd":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/chev_usual_end.wav`
        )
      );
      audio.volume = volume;
      break;

    case "earthLock":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/chev_usual_lock2.wav`
        )
      );
      audio.volume = volume;
      break;

    case "irisClose":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/iris_close.mp3`
        )
      );
      audio.volume = volume;
      break;

    case "irisOpen":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/iris_open.mp3`
        )
      );
      audio.volume = volume;
      break;

    case "irisHit":
      audio = track(
        new Audio(
          `${
            import.meta.env.VITE_FRONTEND_SRC_URL
          }/assets/sounds/stargate/iris_hit.mp3`
        )
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
