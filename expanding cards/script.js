let container = document.getElementsByClassName("image-div");

for (let i = 0; i < container.length; i++) {
  container[i].addEventListener("click", function () {
    for (let j = 0; j < container.length; j++) {
      container[j].classList.remove("active");
    }
    this.classList.toggle("active");
  });
}
