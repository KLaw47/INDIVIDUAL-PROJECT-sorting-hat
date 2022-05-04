import btnHide from "./btnHide.js";
import { gowHouses, gowStudents, nkArmy} from "./data.js"
import renderStudents from "./studentCards.js";

const eventListeners = () => {

  //filters
  document.querySelector('#filterbtns').addEventListener('click', (e) => {
    if (e.target.id === 'clear') {
      renderStudents(gowStudents);
    }else if (e.target.id) {
      const houses = gowStudents.filter(el =>el.house === e.target.id);
      renderStudents(houses);
    }
  })
  //start sorting
  document.querySelector('#sortStart').addEventListener ('click' ,(e)=> {
  const btnId = e.target.id;
  if (btnId ==="sortStart") {
    console.log('clickedbtn')
    btnHide()
  }
  });
  //form
  const form = document.querySelector("form");
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * gowHouses.length)
    const cardId = gowStudents.map(student =>  student.id).sort((a, b) => a - b);
    const gowId = cardId.length ? cardId[cardId.length - 1] + 1 : 1;
   const studentObj = {
      name: document.querySelector("#studentName").value,
      id: gowId,
      house: gowHouses[random],
      enrolled: true,
   }
   gowStudents.push(studentObj);
   renderStudents(gowStudents);
  form.reset();
  console.log(gowStudents);
  });
};


export default eventListeners;
