import renderIntro from "./introCard.js";

const eventListeners = () => {

  //start sorting
  document.querySelector('#sortStart').addEventListener ('click' ,(e)=> {
  const btnId = e.target.id;
  if (btnId ==="sortStart") {
    console.log('clickedbtn')
    document.getElementById("sidebar").style.visibility = "visible";
  }
  });
}
export default eventListeners;
