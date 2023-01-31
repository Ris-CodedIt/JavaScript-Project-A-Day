const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const progress = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");

let count = 1;

next.addEventListener("click", () => {
  count++;
  if (count > steps.length) {
    count = steps.length;
  }
  update();
});

prev.addEventListener("click", () => {
  count--;
  if (count < 1) {
    count = 1;
  }
  update();
});

function update() {
  steps.forEach((step, ind) => {
    if (ind < count) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }

    progress.style.width = `${((count - 1) / (steps.length - 1)) * 100}%`;
  });
  checkCount();
}
function checkCount() {
  if (count <= 1) {
    prev.disabled = true;
  } else if (count >= steps.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
