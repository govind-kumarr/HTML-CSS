// https://www.balldontlie.io/api/v1/players
let container = document.querySelector(".container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const pageDisplay = document.querySelector(".current_page");
const sort_asc = document.querySelector(".sort_asc");
const sort_desc = document.querySelector(".sort_dsc");
const filter_by_id = document.querySelector(".filterId");

let arr = [];

filter_by_id.addEventListener("click", () => {
  let filteredArr = arr.filter((elem) => elem.id > 15);
  appendData(filteredArr);
});

sort_asc.addEventListener("click", () => {
  arr.sort((a, b) => a.id - b.id);
  appendData(arr);
});
sort_desc.addEventListener("click", () => {
  arr.sort((a, b) => b.id - a.id);
  appendData(arr);
});

let page = 1;
nextBtn.addEventListener("click", () => {
  page++;
  getData(page);
  pageDisplay.textContent = page;
});
prevBtn.addEventListener("click", () => {
  if (page > 1) {
    page--;
    getData(page);
    pageDisplay.textContent = page;
  }
});

async function getData(page = 1) {
  try {
    let res = await fetch(
      `https://www.balldontlie.io/api/v1/players?page=${page}&per_page=80`
    );
    let rawdata = await res.json();
    console.log(rawdata.data, "rawdata");
    arr = rawdata.data;
    appendData(arr);
  } catch (err) {
    console.log("Error while fetching data", err);
  }
}

getData(page);
// {
// "id": 14,
// "first_name": "Ike",
// "height_feet": null,
// "height_inches": null,
// "last_name": "Anigbogu",
// "position": "C",
// "team": {
// "id": 12,
// "abbreviation": "IND",
// "city": "Indiana",
// "conference": "East",
// "division": "Central",
// "full_name": "Indiana Pacers",
// "name": "Pacers"
// }

function appendData(data) {
  container.innerHTML = "";
  data.map((elem) => {
    let div = document.createElement("div");
    let p = document.createElement("h2");
    let f = document.createElement("h1");
    let l = document.createElement("h1");
    f.innerText = elem.first_name;
    l.innerText = elem.last_name;
    p.innerText = elem.id;
    div.append(p, f, l);
    container.append(div);
  });
}
