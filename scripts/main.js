
import renderToDom from "./renderToDom.js";

import renderIntro from "./introCard.js";

import eventListeners from "./eventListeners.js";

import btnHide from "./btnHide.js";

import renderStudents from "./studentCards.js";
import { gowStudents } from "./data.js";


const startApp = () => {
  console.log(gowStudents)
  renderIntro()
  btnHide()
  eventListeners()
}
startApp()
