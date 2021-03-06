import btnHide from "./btnHide.js";
import { gowHouses, gowStudents, nkArmy} from "./data.js"
import renderStudents from "./studentCards.js";
import renderArmy from"./nkArmyCards.js"

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
    const house = gowHouses[random];
    const messanteu = "./images/Messanteu.jpg";
    const hercinil = "./images/Hercinil.jpg";
    const chimeron = "./images/Chimeron.jpg";
    const acrabus = "./images/Acrabus.jpg";
   const studentObj = {
      name: document.querySelector("#studentName").value,
      id: gowId,
      house: house,
   };
   if (house === "acrabus"){
   studentObj.imgUrl = acrabus;
   } else if (house === "messanteu") {
     studentObj.imgUrl = messanteu;
   } else if (house === "hercinil") {
     studentObj.imgUrl = hercinil;
   }else if (house === "chimeron") {
     studentObj.imgUrl = chimeron;
   };



   gowStudents.push(studentObj);
   renderStudents(gowStudents);
  form.reset();
  console.log(gowStudents);
  });

document.querySelector('#enrolledStudents').addEventListener('click', (e) => {
    if (e.target.id) {
      const [method, id ] = e.target.id.split("--");
      const index = gowStudents.findIndex(student => student.id === parseInt(id))
      if (e.target.id.includes('expel')) {
        nkArmy.push(gowStudents [index])
        gowStudents.splice(index, 1)
        renderStudents(gowStudents);
        renderArmy(nkArmy);
console.log(nkArmy);
      }
    }
  })
};


export default eventListeners;
