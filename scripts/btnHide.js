
const btnHide = () => {
  const hide = document.getElementById("sidebar");
  if (hide.style.display === "none") {
    hide.style.display = "block";
  }else {
    hide.style.display ="none";
  }
}

export default btnHide;
