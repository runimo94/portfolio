const hacktext = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const animateText = (elem, event = null) => {
    let iteration = 0;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      let target = event ? event.target : elem;

      target.innerText = target.dataset.value
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 20);
  };

  const animateOnHover = (elem) => {
    elem.addEventListener("mouseover", (event) => {
      animateText(elem, event);
    });
  };

  const animateOnClick = (elem) => {
    elem.addEventListener("click", (event) => {
      animateText(elem, event);
    });
  };

  setInterval(() => {
    document.querySelectorAll(".hacktext").forEach((elem) => {
      animateText(elem);
    });
  }, 5000);

  document.querySelectorAll(".hacktext_hover_effect").forEach((elem) => {
    animateOnHover(elem);
  });

  document.querySelectorAll(".hacktext_click_effect").forEach((elem) => {
    animateOnClick(elem);
  });
};

export default hacktext;
