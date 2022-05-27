import { qs } from "./utils.js";

document.body.style.zoom = "100%";
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
