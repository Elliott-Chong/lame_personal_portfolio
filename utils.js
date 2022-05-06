const qs = (selector, all = false) => {
  if (all) {
    return document.querySelectorAll(selector);
  }
  return document.querySelector(selector);
};

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { qs, sleep };
