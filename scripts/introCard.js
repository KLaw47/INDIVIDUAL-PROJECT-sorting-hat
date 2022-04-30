import renderToDom from "./renderToDom.js";

const renderIntro = () => {
let domString =
`<div class="card bg-dark text-white">
<img src="" class="card-img" alt="an illustration of a whimsical castle">
<div class="card-img-overlay">
  <h5 class="card-title">Welcome, one and all, to Gowpenny Acadamy of the Arcane Arts</h5>
  <p class="card-text"></p>
  <p class="card-text"></p>
  <div class="d-grid gap-2">
  <button id="Startsortin" class="btn btn-primary" type="button">Start Sortin</button>
</div>
  <p class="card-text">Last updated 3 mins ago</p>
</div>
</div>`;

renderToDom ("#container", domString);
};
export default renderIntro;
