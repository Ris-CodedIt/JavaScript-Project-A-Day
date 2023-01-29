const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checktop);

checktop();

function checktop() {
  const triggerPoint = window.innerHeight * 0.8;
  boxes.forEach((box) => {
    let top = box.getBoundingClientRect().top;

    if (top < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
