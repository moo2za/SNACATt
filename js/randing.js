const buttons = document.querySelectorAll(`button`),
  about = document.querySelector(`.index__second`),
  service = document.querySelector(`.index__third`),
  apply = document.querySelector(`.index__fifth`);

function moveView(event) {
  event.preventDefault();
  const ct = event.target;
  const number = ct.id;
  if (number == 1) {
    about.scrollIntoView(true);
  } else if (number == 2) {
    service.scrollIntoView(true);
  } else if (number == 3) {
    apply.scrollIntoView(true);
  } else if (number == 4) {
    apply.scrollIntoView(true);
  } else if (number == 5) {
    apply.scrollIntoView(true);
  }
}

function init() {
  buttons.forEach(function (button) {
    button.addEventListener("click", moveView);
  });
}

init();
