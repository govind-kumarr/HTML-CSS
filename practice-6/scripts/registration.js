const notification_modal = document.querySelector(".notification_modal");
const noficaiton_text = notification_modal.querySelector("h1");

const section_form = document.querySelector(".section_form");

const form = section_form.querySelector("form");
const nameField = form.querySelector("#name");
const ageField = form.querySelector("#age");
const genderField = form.querySelector("#gender");
const placeField = form.querySelector("#place");
const submitBtn = form.querySelector(".submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameField.value;
  const age = ageField.value;
  const gender = genderField.value;
  const place = placeField.value;
  if (!name || !age || !gender || !place)
    return alert("Please enter valid inputs");
  let newData = {
    name,
    age,
    gender,
    place,
  };

  noficaiton_text.textContent = "adding you dog to the list please wait...";
  notification_modal.classList.toggle("show_notification");
  section_form.classList.toggle("make_blur");
  fetch("https://dog-data.onrender.com/dogs/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data) {
        form.reset();

        noficaiton_text.textContent =
          "successfully added you dog into the list...🎉";

        setTimeout(() => {
          notification_modal.classList.toggle("show_notification");
          section_form.classList.toggle("make_blur");
        }, 1000);
      }
    })
    .catch((err) => console.log(err));
});
