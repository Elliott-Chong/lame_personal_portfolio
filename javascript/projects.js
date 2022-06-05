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
