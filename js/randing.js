const buttons = document.querySelectorAll(`button`),
  service = document.querySelector(`.service`),
  review = document.querySelector(`.review`),
  howToUse = document.querySelector(`.howToUse`),
  subscribe = document.querySelector(`.subscribe`),
  qna = document.querySelector(`.qna`);

function moveView(event) {
  event.preventDefault();
  const ct = event.target;
  const number = ct.id;
  if (number == 1) {
    service.scrollIntoView(true);
  } else if (number == 2) {
    review.scrollIntoView(true);
  } else if (number == 3) {
    howToUse.scrollIntoView(true);
  } else if (number == 4) {
    subscribe.scrollIntoView(true);
  } else if (number == 5) {
    qna.scrollIntoView(true);
  }
}

function init() {
  buttons.forEach(function (button) {
    button.addEventListener("click", moveView);
  });
}

init();
