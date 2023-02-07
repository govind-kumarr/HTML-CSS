const btnContainer = document.querySelector(".btn_container");

const userId = btnContainer.querySelector("#userId");
const getUserbtn = btnContainer.querySelector("#getUserbtn");

getUserbtn.addEventListener("click", () => {
  const user = +userId.value;
  fetch(`https://my-mock-server-tnse.onrender.com/users/${user}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

const getData = btnContainer.querySelector("#getData");
const postData = btnContainer.querySelector("#postData");
const patchData = btnContainer.querySelector("#patchData");
const deleteData = btnContainer.querySelector("#deleteData");
const putData = btnContainer.querySelector("#putData");

getData.addEventListener("click", () => {
  // console.log("clicked on getData");
  fetch("https://my-mock-server-tnse.onrender.com/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

let newUser = {
  name: "Govind Kumar",
  age: 21,
  email: "govind@gmail.com",
};
postData.addEventListener("click", () => {
  console.log("clicked on postData");

  fetch("https://my-mock-server-tnse.onrender.com/users/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

let putUser = {
  name: "Govind Kumar",
  age: 21,
  email: "govind@gmail.com",
};
putData.addEventListener("click", () => {
  console.log("clicked on putData");
  fetch("https://my-mock-server-tnse.onrender.com/users/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(putUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

let patchUser = {
  email: "gk4051668@gmail.com",
};
patchData.addEventListener("click", () => {
  console.log("clicked on patchData");
  fetch("https://my-mock-server-tnse.onrender.com/users/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patchUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

deleteData.addEventListener("click", () => {
  console.log("clicked on deleteData");
  fetch("https://my-mock-server-tnse.onrender.com/users/11", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
