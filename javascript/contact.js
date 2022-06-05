import { qs, sleep } from "./utils.js";

const contactForm = qs("#contact-form");
contactForm.onsubmit = (e) => {
  e.preventDefault();
  let formData = {};
  qs("input", true).forEach((input) => {
    formData[input.name] = input.value;
  });
  qs("textarea", true).forEach((input) => {
    formData[input.name] = input.value;
  });
  fetch("http://localhost:5000/api/contact", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then(function (res) {
      qs("#check").classList.remove("hidden");
      qs("#spinner").classList.add("hidden");
      success();
    })
    .catch(function (res) {
      console.log(res);
    });
  qs("#spinner").classList.remove("hidden");
};

const success = async () => {
  await sleep(1000);
  window.location.href = "/index.html";
};
