const sw = navigator.serviceWorker;
const swPath = "./service-worker.js";

const register = () => {
  if ("serviceWorker" in navigator) {
    sw.register(swPath, {
      scope: "/"
    }).then(registration => {
      console.log("sw foi registrado\n", registration);
    });
  } else {
    console.log("Could not register service worker");
  }
};

export default register;
