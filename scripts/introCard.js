import renderToDom from "./renderToDom.js";
import eventListeners from "./eventListeners.js";


const renderIntro = () => {
let domString =
`<div id="containerTop">
<div class="card bg-dark text-white">
  <img src="" class="card-img" alt="an illustration of a whimsical castle">
  <div class="card-img-overlay">
    <h5 class="card-title">Welcome, one and all, to Gowpenny Acadamy of the Arcane Arts</h5>
    <p class="card-text"></p>
    <p class="card-text"></p>
    <div class="d-grid gap-2">
    <button class="btn btn-primary" id="sortStart">Start Sortin</button>
  </div>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
  </div>
</div>
<div id="sidebar" class="sidebar">
  <div id="sortForm" class="sortForm">
   <form id="student">
     <div class="mb-3">
       <label for="StudentName" class="form-label">Student Name</label>
        <input type="text" placeholder="name" class="form-control" id="studentName" aria-describedby="student-name">
     </div>
      <button type="submit" id="sort" class="btn btn-primary">Sort</button>
   </form>
  </div>
  <div id="filterbtns">
    <button class="btn btn-secondary btn-lg buttonRow" id="acrabus">Aqrabus</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="hercinil">Hercinil</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="messanteu">Messanteu</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="chimeron">Chimeron</button>
    <button class="btn btn-secondary btn-lg buttonRow" id= "clear">Clear Filters</button>
  </div>
<div class="students" id="enrolledStudents"></div>
<div class="nkArmy"></div>
</div>
`;

renderToDom ("#container", domString);
};
export default renderIntro;
