const submit_btn = document.querySelector(".btn");
const popup_box = document.querySelector("#popup");
const close_btn = popup_box.querySelector("button");
const container = document.querySelector(".container");
let timeoutid;

submit_btn.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.disabled = true;
  if (timeoutid) clearTimeout(timeoutid);
  // popup_box.classList.toggle("show_popup");
  // container.classList.toggle("make_blur");
  console.log("submit btn clicked");
  let timings = [0, 2000, 4000, 5000];
  for (let i = 0; i < 4; i++) {
    timeoutid = setTimeout(() => {
      popup_box.classList.toggle("show_popup");
      container.classList.toggle("make_blur");
      setTimeout(() => {
        popup_box.classList.toggle("show_popup");
        container.classList.toggle("make_blur");
      }, 1000);
    }, timings[i]);
    setTimeout(()=>{
      e.target.disabled = false;
    },6000)
  }
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
