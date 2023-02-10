const section_reports = document.querySelector(".section_reports");
const report_container = section_reports.querySelector(".reports_container");
const totalDogsDiv = report_container.querySelector(".total_dogs");
const totalMaleDogsDiv = report_container.querySelector(".total_male_dogs");
const totalFemaleDogsDiv = report_container.querySelector(".total_female_dogs");
const averageAgeDiv = report_container.querySelector(".average_age");

let dogData = [];

function getDogData() {
  fetch("https://dog-data.onrender.com/dogs/")
    .then((res) => res.json())
    .then((data) => {
      dogData = data;
      appendToReport(dogData);
      console.log(data);
    })
    .catch((err) => console.log(err));
}

function appendToReport(data) {
  let totalDogs = 0,
    maleDogs = 0,
    femaleDogs = 0,
    dogAge = 0;
  data.forEach((dog) => {
    totalDogs++;
    if (dog.gender === "Male") maleDogs++;
    if (dog.gender === "Female") femaleDogs++;
    dogAge += +dog.age || 0;
  });

  dogAge = dogAge / totalDogs;
  dogAge = Math.floor(dogAge);

  let totalCount = document.createElement("h1");
  let totalMale = document.createElement("h1");
  let totalFemale = document.createElement("h1");
  let totalAge = document.createElement("h1");

  totalCount.textContent = `${totalDogs}`;
  totalMale.textContent = `${maleDogs}`;
  totalFemale.textContent = `${femaleDogs}`;
  totalAge.textContent = `${dogAge} ${dogAge > 1 ? "years" : "year"}`;

  totalDogsDiv.append(totalCount);
  totalMaleDogsDiv.append(totalMale);
  totalFemaleDogsDiv.append(totalFemale);
  averageAgeDiv.append(totalAge);
}

getDogData();

