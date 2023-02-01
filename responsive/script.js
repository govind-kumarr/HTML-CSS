const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show_nav");
  line1.classList.toggle("line1_rotate");
  line2.classList.toggle("line2_hide");
  line3.classList.toggle("line3_rotate");
});
