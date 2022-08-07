import { qs } from "./utils.js";
const typewriter = qs("#typewriter-dynamic");
const IDENTITY = ["Student.", "Learner.", "Leader.", "Athlete."];
let index = 1;
const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const initTypewriter = async (text) => {
  typewriter.classList.remove("typewrite");
  typewriter.innerText = "";
  typewriter.innerText = text;
  const length = text.length;
  typewriter.style.setProperty("--length", length);
  typewriter.style.setProperty("--speed", "2000ms");
  await sleep(50);
  typewriter.classList.add("typewrite");
};
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
initTypewriter("a Student.");
typewriter.addEventListener("animationend", async (e) => {
  if (e.animationName !== "typewrite") return;
  if (e.pseudoElement !== "::before") return;
  if (index == IDENTITY.length) {
    index = 0;
  }
  const newText = ["a", "e", "i", "o", "u"].includes(
    IDENTITY[index][0].toLowerCase()
  )
    ? `an ${IDENTITY[index]}`
    : `a ${IDENTITY[index]}`;
  await sleep(1000);
  await initTypewriter(newText);
  index++;
});

if (window.innerWidth > 800) {
  const controller = new ScrollMagic.Controller();
  qs(".content", true).forEach((content) => {
    new ScrollMagic.Scene({
      triggerElement: content,
      triggerHook: 0.9,
    })
      .setClassToggle(content, "fade-in")
      .addTo(controller);
  });

  new ScrollMagic.Scene({
    triggerElement: "#ending-credentials-btn",
    triggerHook: 1,
  })
    .setClassToggle("#ending-credentials-btn", "cd-activate")
    .addTo(controller);

  document.addEventListener("keypress", (e) => {
    if (e.key !== "Enter") return;
    if (!qs("#ending-credentials-btn").classList.contains("cd-activate"))
      return;
    window.location.href = "/projects.html";
  });
} else {
  qs(".content", true).forEach((content) => {
    content.classList.add("fade-in");
  });
}
