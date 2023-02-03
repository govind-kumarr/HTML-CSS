/*

!Select element by id
const main_heading = document.getElementById("main_heading");

!query Selector and querySelectorall
console.dir(document.querySelector("#main_heading"));
console.log(document.querySelectorAll(".items"));

!difference between innerText and textContent
const main_heading = document.getElementById("main_heading");
let span = document.createElement("span");
span.innerText = "Welcome";
main_heading.append(span);
console.log(main_heading.textContent);
main_heading.textContent = "This is something else";

!changing styles using dom manipulation
const main_heading = document.getElementById("main_heading");
main_heading.style.color = "purple";
main_heading.style.backgroundColor = "lightblue";

!Setting get and set attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "www.google.com");

const inputElement = document.querySelector(".form_todo input");
console.log(inputElement.getAttribute("type"));
!difference between HTML collection and nodelist
*you can not use forEach loop on HTML collection
*node list gives static list
*HTML collection gives live list


*let navItems = document.getElementsByClassName("items");  HTML collection

*navItems = document.querySelectorAll(".items"); nodelist

*root node
const rootNode = document.getRootNode();
console.log(rootNode.childNodes);

*next element sibling
const item = document.querySelector(".items");
console.log(item.nextElementSibling);

*parentnode / parentElement
const main_heading = document.querySelector("#main_heading");
const heading_parent = main_heading.parentElement;
heading_parent.style.color = "blue";

*classList

*contains console.log(section_todo.classList.contains("section_todo"));

*toggle console.log(section_todo.classList.toggle("abc"));


*append add to the end
*prepend add to the beginning
*remove section_todo.remove();


*how to add as sibling
*before section_todo.before()
*after section_todo.after()

*cloneNode gives clone of the node;

!Dimensions
const section_todo = document.querySelector(".section_todo");
console.log(section_todo.getBoundingClientRect());

!Intro to events
*onClick 
*second way
const btn = document.querySelector(".btn");
console.log(btn);
btn.onclick = function () {
  console.log("You Clicked me");
};

*third way
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("you clicked me");
});


!VALUE OF THIS 
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log("you clicked me");
  console.log("this", "\n", this); button will be this
});




*/

let newProduct = {
  id: "ae1",
  title: "fneranfmd'psfmvapsm erv afgdg",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

fetch("https://fakestoreapi.com/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newProduct),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


  fetch("https://fakestoreapi.com/products", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
