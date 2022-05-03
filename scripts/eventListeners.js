import btnHide from "./btnHide.js";
import { gowHouses, gowStudents, nkArmy} from "./data.js"

const eventListeners = () => {

  //start sorting
  document.querySelector('#sortStart').addEventListener ('click' ,(e)=> {
  const btnId = e.target.id;
  if (btnId ==="sortStart") {
    console.log('clickedbtn')
    btnHide()
  }
  });
  //form
  const getStudent = (e) =>
    e.preventDefault();
    const name = document.querySelector('#StudentName').value;
    const random = Math.floor(Math.random() * gowHouses.length)
    const house= gowHouses[random];
    const cardId = gowStudents.map(student =>  student.id).sort((a, b) => a - b);
    const gowId = cardId.length ? cardId[cardId.length - 1] + 1 : 1;
    const enrolled = true;
  
      const studentObject = {
        name,
        house,
        gowId,
        enrolled
      }
      gowStudents.push(studentObject)

document.querySelector("#submit").addEventListener("click", getStudent);
  };
console.log(gowStudents)

export default eventListeners;
