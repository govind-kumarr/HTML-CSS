const baseUrl = "https://dog-data.onrender.com/dogs/";

const deleteModal = document.querySelector(".delete_modal");
const editModal = document.querySelector(".edit_modal");

const section_display = document.querySelector(".section_display");
const dog_container = section_display.querySelector(".dog_container");

let dogData = [];
let dogDataCopy = [];

function getDogData(queries = "") {
  fetch(`${baseUrl}${queries}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (!queries) {
        // console.log(data);
        dogData = data;
        dogDataCopy = data;
        appendData(dogData);
      }
      return data.data;
    })
    .catch((err) => console.log(err));
}

function appendData(data) {
  dog_container.innerHTML = "";
  data.forEach((dog) => {
    const dogCard = document.createElement("div");
    const dogImg = document.createElement("img");
    const dogName = document.createElement("p");
    const dogAge = document.createElement("p");
    const dogGender = document.createElement("p");
    const dogPlace = document.createElement("p");
    const deleteIcon = document.createElement("p");
    const editIcon = document.createElement("p");

    dogCard.classList.add("dog_card");
    dogImg.classList.add("dog_img");
    dogName.classList.add("dog_name");
    dogPlace.classList.add("dog_place");
    dogGender.classList.add("dog_gender");
    dogAge.classList.add("dog_age");
    deleteIcon.classList.add("delete_dog");
    editIcon.classList.add("edit_dog");

    deleteIcon.textContent = "❌";
    editIcon.textContent = "📝";

    dogImg.setAttribute(
      "src",
      "https://img.freepik.com/free-vector/cute-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3671.jpg?size=338&ext=jpg&ga=GA1.2.2080790278.1675498629"
    );

    dogName.textContent = `name: ${dog.name}`;
    dogAge.textContent = `age: ${dog.age}`;
    dogGender.textContent = `gender: ${dog.gender}`;
    dogPlace.textContent = `place: ${dog.place}`;

    //events listeners
    deleteIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteDog(dog.id);
    });
    editIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      editDog(dog.id, dog);
    });
    dogCard.append(
      dogImg,
      dogName,
      dogAge,
      dogGender,
      dogPlace,
      deleteIcon,
      editIcon
    );

    dog_container.append(dogCard);
  });
}

function deleteDog(id) {
  deleteModal.classList.toggle("show_delete_modal");
  dog_container.classList.toggle("blur_body");
  fetch(`${baseUrl}${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        getDogData();
        deleteModal.classList.toggle("show_delete_modal");
        dog_container.classList.toggle("blur_body");
      }
    })
    .catch((err) => console.log(err));
}
//initial call
getDogData();

const section_form = document.querySelector(".section_form");

const form = section_form.querySelector("form");
const nameField = form.querySelector("#name");
const ageField = form.querySelector("#age");
const genderField = form.querySelector("#gender");
const placeField = form.querySelector("#place");
const submitBtn = form.querySelector(".submit");

let eidtId;
function editDog(id, dog) {
  eidtId = id;
  editModal.classList.toggle("show_edit_modal");
  dog_container.classList.toggle("blur_body");
  nameField.value = dog.name;
  ageField.value = dog.age;
  genderField.value = dog.gender;
  placeField.value = dog.place;
}

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
  section_form.classList.toggle("blur_body");
  fetch(`https://dog-data.onrender.com/dogs/${eidtId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data) {
        //reset the form
        form.reset();
        //hide the modal
        editModal.classList.toggle("show_edit_modal");
        dog_container.classList.toggle("blur_body");
        //call the function to fetch latest data
        getDogData();
        setTimeout(() => {
          section_form.classList.toggle("blur_body");
        }, 1000);
      }
    })
    .catch((err) => console.log(err));
});

//filtering and sorting
let filterContainer = document.querySelector(".filters");
let searchBox = filterContainer.querySelector(".search_box");
let searchField = searchBox.querySelector(".search_dog_name");
let searchBtn = searchBox.querySelector(".search_dog");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let searchName = searchField.value;
  let newData = dogData.filter((elem) => elem.name === searchName);
  appendData(newData);
});

let sortByAge = filterContainer.querySelector("#sortByAge");
sortByAge.addEventListener("change", (e) => {
  e.stopPropagation();
  // let sortedData = [...dogData];
  if (sortByAge.value === "asc") {
    dogData.sort((a, b) => {
      return a.age - b.age;
    });
  } else if (sortByAge.value === "dsc") {
    dogData.sort((a, b) => {
      return b.age - a.age;
    });
  }
  appendData(dogData);
});
let filterByGender = filterContainer.querySelector("#filterByGender");
filterByGender.addEventListener("change", (e) => {
  e.stopPropagation();
  let filteredData = [];
  if (filterByGender.value === "Male") {
    filteredData = dogData.filter((elem) => elem.gender === "Male");
  } else if (filterByGender.value === "Female") {
    filteredData = dogData.filter((elem) => elem.gender === "Female");
  }
  dogData = filteredData;
  appendData(dogData);
});
