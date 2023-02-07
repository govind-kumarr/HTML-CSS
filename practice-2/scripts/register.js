//getting present data from local storage
const vaccinationData =
  localStorage.getItem("vaccinationData") && JSON.parse(localStorage.getItem("vaccinationData")) || [];

//getting vaccine form
const formVaccine = document.querySelector(".form_vaccine");

//Input fields
const uniqueId = document.querySelector("#uniqueId");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const vaccine_type = document.querySelector("#vaccine_type");
const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");

function validator() {
  if (uniqueId.value) {
    let duplicate = false;
    vaccinationData.forEach(
      (data) => (duplicate = data.uniqueId === uniqueId.value)
    );
    if (duplicate) {
      alert("Please Enter a unique ID ❌");
      return false;
    }
  } else {
    alert("Please Enter a unique ID ❌");
    return false;
  }
  if (!name.value || name.value < 4) {
    alert("Please Enter name (more than 4 chars) ❌");
    return false;
  }
  if (!age.value || age.value > 40 || age.value < 18) {
    alert("Please Enter Valid Age(18-40) ❌");
    return false;
  }
  if (!d1.checked && !d2.checked) {
    alert("please select atleast one designation ❌");
    return false;
  }
  if (!vaccine_type.value) {
    alert("Please select one vaccine ❌");
    return false;
  }
  return true;
}
formVaccine.addEventListener("submit", (e) => {
  //applying submit event listener
  e.preventDefault();
  if (validator()) {
    let newPerson = submit();
    vaccinationData.push(newPerson);
    localStorage.setItem("vaccinationData", JSON.stringify(vaccinationData));
    formVaccine.reset();
    alert("form got submitted✅");
  }
});

//form submit function
function submit() {
  let newEntry = {
    uniqueId: uniqueId.value,
    name: name.value,
    age: age.value,
    designation: d1.checked ? d1.value : d2.value,
    vaccine_type: vaccine_type.value,
  };
  return newEntry;
}
