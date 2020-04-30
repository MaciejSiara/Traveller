// HEADER HIDE ON SCROLL
let onloadScrollPosition = window.pageYOffset;
const header = document.getElementById("main__head");
window.onscroll = () => {
  let currentScrollPosition = window.pageYOffset;
  if (onloadScrollPosition > currentScrollPosition) header.style.top = 0;
  else {
    if (window.pageXOffset < 932) {
      header.style.top = "-20%";
    } else header.style.top = "-10%";
  }

  onloadScrollPosition = currentScrollPosition;
};
