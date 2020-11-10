let allUsers = [];
let filteredUsers = [];

let num1 = 1;
let num2 = -1;
const getUsers = async function (url) {
  const response = await fetch(url);
  const user = await response.json();
  allUsers = user;

  let searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keyup", (e) => handleSelect(e));
};

const search = function (array) {
  let selected = selectedOption();
  filteredSearch(array, selected);
  cleanContainer();
  displayLists(filteredUsers);
  displayAddr(filteredUsers);
  mapMarkers(filteredUsers);
  initMap(filteredUsers);

  let sortBtn = document.querySelector(".sortBtn");
  sortBtn.addEventListener("click", sort);
};

const sort = function () {
  let container = document.querySelector("#itemsList");

  let itemsArr = Array.from(container.children);

  itemsArr
    .sort(function (a, b) {
      return a.innerText > b.innerText ? num1 : num2;
    })
    .map((list) => container.append(list));

  let tmp = num1;
  num1 = num2;
  num2 = tmp;
};
const cleanContainer = function () {
  let container = document.getElementById("itemsList");
  container.innerHTML = "";
};
const searchInput = function () {
  return document.getElementById("searchBar").value.toLowerCase();
};

const filteredSearch = function (arr, selected) {
  let searchInput = document.getElementById("searchBar").value;

  filteredUsers = arr.filter((a) =>
    a[selected].toLowerCase().includes(searchInput)
  );
  window.localStorage.setItem("storedResult", JSON.stringify(filteredUsers));
};

const displayLists = function (array) {
  let container = document.getElementById("itemsList");
  let select = selectedOption();

  for (let user of array) {
    container.innerHTML += generateList(user, select);
  }
};

const displayAddr = function (arr) {
  for (let user of arr) {
    let addr = `${user.address.street}, ${user.address.suite}, ${user.address.city} (${user.address.zipcode})`;
    //console.log(addr);
    let listArr = [...document.getElementsByClassName(".list-group-item")];
  }
};
const generateList = function (obj, selected) {
  return `<li id="${obj.id}" class="list-group-item"><a class="text-white" href="user.html?id=${obj.id}&lat=${obj.address.geo.lat}&lng=${obj.address.geo.lng}">${obj[selected]}</a></li>`;
};

const handleSelect = function (e) {
  if (e.keyCode === 13) {
    search(allUsers);
  }
};

const selectedOption = function () {
  let select = document.getElementById("slct");
  return select.options[select.selectedIndex].text.toLowerCase();
};

const mapMarkers = function (arr) {
  arr.map((index) => {
    index.address.geo.lat = Number(index.address.geo.lat);
    index.address.geo.lng = Number(index.address.geo.lng);
  });
};

function initMap() {
  const myLatLng = { lat: -37.3159, lng: 81.1496 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  for (let user of filteredUsers) {
    new google.maps.Marker({
      position: user.address.geo,
      map,
      title: "Hello World!",
    });
  }
}

//

window.onload = function () {
  getUsers("https://jsonplaceholder.typicode.com/users");
};
