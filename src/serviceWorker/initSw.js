const sw = navigator.serviceWorker;
const swName = "sw.js";

const initSw = () => {
  if ("serviceWorker" in navigator) {
    sw.register(swName, { scope: "./" }).then(registration => {
      console.log("sw was registed\n", registration);
    });
  } else {
    console.log("Could not register service worker");
  }
};

export default initSw;
