import { qs } from "./utils.js";

const controller = new ScrollMagic.Controller();
qs(".content", true).forEach((content) => {
  let ourScene = new ScrollMagic.Scene({
    triggerElement: content,
    triggerHook: 0.85,
  })
    .setClassToggle(content, "fade-in")
    .addTo(controller);
});

// qs(".project-wrapper", true).forEach((title) => {
//   title.onclick = (e) => {
//     title.querySelector(".arrow").classList.toggle("rotate");
//   };
// });
const ham = document.getElementById("ham");
const sideNav = document.getElementById("side-nav");
ham.onclick = () => {
  ham.style.pointerEvents = "none";
  if (!ham.classList.contains("active")) {
    ham.classList.toggle("active");
    sideNav.classList.toggle("active");
    setTimeout(() => {
      ham.classList.toggle("rotate");
      ham.style.pointerEvents = "all";
    }, 250);
  } else {
    ham.classList.toggle("rotate");
    sideNav.classList.toggle("active");
    setTimeout(() => {
      ham.classList.toggle("active");
      ham.style.pointerEvents = "all";
    }, 250);
  }
};
