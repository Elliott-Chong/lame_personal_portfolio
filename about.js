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
