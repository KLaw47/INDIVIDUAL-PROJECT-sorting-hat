import filterBtns from "./filterBtns.js";
import renderIntro from "./introCard.js";
import renderSortApp from "./renderSortapp.js"


const eventListeners = () => {

  //start sorting
  document.querySelector('#container').addEventListener('click', (e) => {
    if (e.target.id === "sort") {
      //console.log('clickedsort')
      renderSortApp();
      filterBtns();
    }else {
      renderIntro();
    }
  });
}
export default eventListeners;
