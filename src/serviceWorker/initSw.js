import "./events";

const sw = navigator.serviceWorker;
const swName = "sw.js";

if ("serviceWorker" in navigator) {
  sw.register(swName, { scope: "./" })
    .then(() => {
      console.log("Sw was registered");
    })
    .catch(err => {
      console.log("Service worker failled to register\n", err);
    });
}