const menuItems = [
  "login",
  "notice",
  "my subjects my teachers",
  "admission application for",
  "Admission/Examination Fee",
  "online attendence details",
  "student details",
  "PU Admit Card",
  "Admission application form priniting",
  "hostel admission application form printing",
  "hostel declaration form printing",
  "hostel affidavit printing",
  "wifi application (hostel)",
  "print payment receipt",
  "Time table",
  "view my timetable(BA-i,BA-ii and Ba-iii only)",
  "training & placement",
  "change photo/signature",
  "NCC/NSS",
  "Library",
  "Right to service act",
  "forgot User id or password",
  "change password",
  "contact us",
  "Disclaimer",
];

const menu_container = document.querySelector(".menu__items");

const appendList = (data) => {
  menu_container.innerHTML = "";
  data.map((elem) => {
    const list = document.createElement("li");
    const list_item_link = document.createElement("a");
    const seperator = document.createElement("hr");

    list_item_link.textContent = elem;
    list_item_link.setAttribute("href", "#");

    list.append(list_item_link, seperator);

    menu_container.append(list);
  });
};

appendList(menuItems);

const loginForm = document.querySelector(".login_form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = new FormData(loginForm);
  data = Object.fromEntries(data);
  if (!data.email || !data.password) return alert("Please Fill all the fields");
  if (data.password.length < 6)
    return alert("Password must be at least 6 characters");
  console.log(data);

  loginForm.reset();
  return alert("Form submitted successfully");
});
