import renderToDom from "./renderToDom.js";
const renderArmy = (array) => {
  let domString = ``;
  for (const member of array) {

    domString += 
    `<div class="card" style="width: 18rem;">
    <img src="./images/beast.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${member.name}</h5>
      <p>Servant of our Lord of Darkness</p>
    </div>
  </div>`;
  }
  renderToDom('#n-k-army', domString);
};
export default renderArmy;
