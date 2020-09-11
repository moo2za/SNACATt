const before = document.querySelector(`.fa-chevron-left`),
  after = document.querySelector(`.fa-chevron-right`),
  reviews = document.querySelectorAll(`.review__box`);

let prev = 8, // 이전 리뷰
  present = 1, // 현재 리뷰
  next = 2; // 다음 리뷰

const SHOWING = "showing",
  UNSHOWING = "unshowing";

function minus() {
  next = present;
  if (present == 1) {
    present = 8;
  } else {
    present = present - 1;
  }
  unpainting(next);
  painting(present);
}

function plus() {
  prev = present;
  if (present == 8) {
    present = 1;
  } else {
    present = present + 1;
  }
  unpainting(prev);
  painting(present);
}

function unpainting(number) {
  const ct = number - 1;
  reviews[ct].classList.remove(SHOWING);
  reviews[ct].classList.add(UNSHOWING);
}

function painting(number) {
  const ct = number - 1;
  reviews[ct].classList.remove(UNSHOWING);
  reviews[ct].classList.add(SHOWING);
}

function init() {
  before.addEventListener("click", minus);
  after.addEventListener("click", plus);
  painting(present);
}

init();
