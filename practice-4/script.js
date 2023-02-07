//getting the form
const form = document.querySelector(".form_vaccine");

//getting the input elements for the form
const name = form.querySelector("#name");
const email = form.querySelector("#email");
const password = form.querySelector("#password");

//getting the validation dialog boxes to show errors
const name_Validator = form.querySelector("#name_validator");
const email_Validator = form.querySelector("#email_validator");
const password_Validator = form.querySelector("#password_validator");

//adding the submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  nameValidator();
  emailValidator(email.value);
  passwordValidator();
});

//this is validator function for name
function nameValidator() {
  console.log(name.value);
}

//this is validator function for email
function emailValidator(emailValue) {
  if (!emailValue.includes("@")) {
    return setEmailValidator("❌ @ is not present in the email");
  } else {
    let domInd = emailValue.search("@");
    let domain = emailValue.substring(domInd + 1);
    if (!domain) return setEmailValidator("Invalid domain");
    if (domain.startsWith(".")) {
      return setEmailValidator("❌ domain cannot starts with .");
    }
  }
  if (emailValue.startsWith(".", 0)) {
    return setEmailValidator("❌ email cannot starts with .");
  }
}
//this is validator function for password
function passwordValidator() {
  console.log(password.value);
}

//utility function to set the text content of the validators
function setNameValidator(value) {
  name_Validator.textContent = value;
}
function setEmailValidator(value) {
  email_Validator.textContent = value;
}
function setPassValidator(value) {
  password_Validator.textContent = value;
}

//purpose --> whenever user focus on any input field no warning should be shown
name.onfocus = () => {
  setNameValidator("");
};
email.onfocus = () => {
  setEmailValidator("");
};
password.onfocus = () => {
  setPassValidator("");
};
