//getting the array of objects
let vaccinationData = JSON.parse(localStorage.getItem("vaccinationData")) || [];

//getting the table
const tbody = document.querySelector(".table_body");
// console.log(tbody);

function createRow(uniqueId, name, age, designation, vaccine, otp) {
  // console.log(uniqueId, name, age, designation, vaccine, otp);
  let tr = document.createElement("tr");
  let _uniqueId = document.createElement("td");
  let _name = document.createElement("td");
  let _age = document.createElement("td");
  let _designation = document.createElement("td");
  let _vaccine = document.createElement("td");
  let _otp = document.createElement("td");
  let _vaccinate = document.createElement("td");
  let _delete = document.createElement("td");

  _uniqueId.textContent = uniqueId;
  _name.textContent = name;
  _age.textContent = age;
  _designation.textContent = designation;
  _vaccine.textContent = vaccine;
  _otp.textContent = otp;
  _vaccinate.innerHTML = '<button class="btn vaccinate_btn">vaccinate</button>';
  _delete.innerHTML = '<button class="btn delete_btn">delete</button>';

  tr.append(
    _uniqueId,
    _name,
    _age,
    _designation,
    _vaccine,
    _otp,
    _vaccinate,
    _delete
  );
  let vaccinate_btn = _vaccinate.querySelector(".vaccinate_btn");
  let delete_btn = _delete.querySelector(".delete_btn");
  delete_btn.addEventListener("click", () => deleteRow(uniqueId));
  tbody.append(tr);
}

//function responsible for appending the data to the table bady
function appendData(vaccinationData) {
  tbody.innerHTML = "";
  vaccinationData.forEach((data) => {
    const { uniqueId, name, age, designation, vaccine_type } = data;
    let otp = Math.random() * 10000;
    otp = otp > 999 ? otp : otp * 10;
    otp = Math.floor(otp);
    createRow(uniqueId, name, age, designation, vaccine_type, otp);
  });
}

//Deleting a row
function deleteRow(uniqueId) {
  console.log(uniqueId);
  let newVaccinationData = [];
  vaccinationData.map((data) => {
    if (data["uniqueId"] != uniqueId) newVaccinationData.push(data);
  });
  console.log(newVaccinationData);
  localStorage.setItem("vaccinationData", JSON.stringify(newVaccinationData));
  newVaccinationData;
  appendData(newVaccinationData);
}

appendData(vaccinationData);
