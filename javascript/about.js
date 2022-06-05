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

if (window.innerWidth > 800) {
  const aboutme = document.querySelector(".about-me");
  const aboutimg1 = document.querySelector("#about-img-1");
  document.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    aboutme.style.transform = `translateX(-${scrollY * 1.4 + "px"})`;
    aboutme.style.top = scrollY + "px";
    if (scrollY > 0) aboutme.style.opacity = 1 / (scrollY / 30);

    aboutimg1.style.transform = `translateX(${scrollY * 1.4 + "px"})`;
    aboutimg1.style.top = scrollY + "px";
    if (scrollY > 0) aboutimg1.style.opacity = 1 / (scrollY / 30);
  });
}
