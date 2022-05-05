import renderToDom from "./renderToDom.js";


const renderStudents = (array) => {
  let domString = ``;
  for (const member of array) {

    domString += 
    `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${member.name}</h5>
      <p class="card-text">${member.house}</p>
      <a href="#" class="btn btn-primary" id="expel--${member.id}">EXPEL</a>
    </div>
  </div>`;
  }
  renderToDom('#enrolledStudents', domString);
};

export default renderStudents;
