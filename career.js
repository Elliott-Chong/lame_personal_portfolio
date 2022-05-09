import { qs } from "./utils.js";

qs("tr", true).forEach((row) => {
  row.onclick = (e) => {
    let career = e.target.parentNode.children[1].innerText;
    career = career.toLowerCase().split(" ").join("-");
    window.location.href = `#${career}`;
  };
});
