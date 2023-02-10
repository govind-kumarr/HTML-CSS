const section_form = document.querySelector(".section_form");

const form = section_form.querySelector("form");
const emailField = form.querySelector("#email");
const passwordField = form.querySelector("#password");
const loginBtn = form.querySelector(".login");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailField.value;
  const password = passwordField.value;
  console.log(email, password);
  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        return alert(data.error);
      }
      console.log(data);
      form.reset();
      localStorage.setItem("token", data.token);
      return alert("Login successful");
    })
    .catch((err) => console.log(err));
});
