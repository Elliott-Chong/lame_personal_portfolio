const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

setTimeout(async () => {
  let allanim = Array.from(document.querySelectorAll(".anim"));
  for (let i = 0; i < allanim.length; i++) {
    allanim[i].style.transform = "translate(0)";
    allanim[i].style.opacity = "1";
    // check if got contact
    if (window.location.href.toLowerCase().includes("contact")) {
      await sleep(70);
    } else {
      await sleep(150);
    }
  }
}, 200);
