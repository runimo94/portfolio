const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

setInterval(() => {
  document.querySelectorAll(".hacktext").forEach((elem) => {
    let iteration = 0;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      elem.innerText = elem.dataset.value
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return elem.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= elem.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  });
}, 5000);

document.querySelectorAll(".hacktext_hover_effect").forEach((elem) => {
  elem.onmouseover = (event) => {
    let iteration = 0;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 20);
  };
});
