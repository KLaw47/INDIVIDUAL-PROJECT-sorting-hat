import renderToDom from "./renderToDom.js";

const filterBtns = () => {
  let domString =`
  <button class="btn btn-secondary btn-lg buttonRow" id="aqra">Aqrabus</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="herc">Hercinil</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="mess">Messanteu</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="chim">Chimeron</button>
  <button class="btn btn-secondary btn-lg buttonRow" id= "clear">Clear Filters</button>`;
  renderToDom ("#filterbtns", domString)
};

export default filterBtns;
