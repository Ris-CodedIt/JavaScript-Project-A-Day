const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".box");

fill.addEventListener("dragstart", dragStart);

fill.addEventListener("dragend", dragEnd);

boxes.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.className += " hold";
  setTimeout(() => ((this.className = "invisible"), 0));
}

function dragEnd() {
  this.className = "fill";
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = "box";
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  this.className = "box";
  this.append(fill);
}
