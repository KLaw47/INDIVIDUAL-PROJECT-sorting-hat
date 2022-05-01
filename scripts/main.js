
import renderToDom from "./renderToDom.js";

import renderIntro from "./introCard.js";

import renderSortApp from "./renderSortapp.js";

import filterBtns from "./filterBtns.js";

import eventListeners from "./eventListeners.js";

const startApp = () => {
  renderIntro()

  eventListeners()
}
startApp()

