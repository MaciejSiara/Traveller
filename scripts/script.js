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

//toTop btn
(function () {
  let curHeight;
  const toTopBtn = document.querySelector(".toTop");

  window.addEventListener("scroll", () => {
    curHeight = window.innerHeight;
    if (window.pageYOffset > curHeight * 0.5) {
      toTopBtn.classList.remove("jumpDown");
      toTopBtn.classList.add("jumpTop");
    } else {
      toTopBtn.classList.remove("jumpTop");
      toTopBtn.classList.add("jumpDown");
    }
  });

  toTopBtn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
})();

// appear stuff
(function () {
  let items = [
    {
      item: document.querySelector(".locations__head-title"),
      position: 0,
    },
    {
      item: document.querySelector(".locations__head-info"),
      position: 0,
    },
    {
      item: document.querySelector(".benefits__head__title"),
      position: 0,
    },
    {
      item: document.querySelector(".benefits__head__info"),
      position: 0,
    },
    {
      item: document.querySelector(".cards"),
      position: 0,
    },
    {
      item: document.querySelector(".form"),
      position: 0,
    },
  ];

  window.addEventListener("scroll", () => {
    items[0].position = items[0].item.getBoundingClientRect().top;
    let screenPosition = window.pageYOffset / 1.3;
    if (items[0].position < screenPosition) {
      items[0].item.classList.add("appear-content");
    }

    items.forEach((el) => {
      el.position = el.item.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.4;

      if (el.position < screenPosition) el.item.classList.add("appear-content");
      screenPosition += window.innerHeight / 1.4;
    });
    console.log(items);
    console.log(screenPosition);
  });
})();
