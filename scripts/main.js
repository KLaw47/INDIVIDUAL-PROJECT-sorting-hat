
import renderToDom from "./renderToDom.js";

import renderIntro from "./introCard.js";

import eventListeners from "./eventListeners.js";

import btnHide from "./btnHide.js";


const startApp = () => {
  renderIntro()
btnHide()
  eventListeners()
}
startApp()
