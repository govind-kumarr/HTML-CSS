const submit_btn = document.querySelector(".btn");
const popup_box = document.querySelector("#popup");
const close_btn = popup_box.querySelector("button");
const container = document.querySelector(".container");

submit_btn.addEventListener("click", () => {
  popup_box.classList.toggle("show_popup");
  container.classList.toggle("make_blur");
});

close_btn.addEventListener("click", (e) => {
  console.log("close button clicked");
  e.stopPropagation();
  popup_box.classList.toggle("show_popup");
  container.classList.toggle("make_blur");
});

popup_box.onclick = () => {
  console.log("popup_box clicked");
};
