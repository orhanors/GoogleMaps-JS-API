let allUsers = [];
let filteredUsers = [];

let num1 = 1
let num2 = -1
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

  let sortBtn = document.querySelector(".sortBtn")
  sortBtn.addEventListener("click",sort)
  
};

const sort = function(){
    let container = document.querySelector("#itemsList");

    let itemsArr = Array.from(container.children)

    itemsArr
    .sort(function(a,b){
        return a.innerText > b.innerText ? num1:num2
    })
    .map(list => container.append(list))

    let tmp=num1
    num1=num2
    num2=tmp
}
const cleanContainer = function () {
  let container = document.getElementById("itemsList");
  container.innerHTML = "";
};
const searchInput = function () {
  return document.getElementById("searchBar").value.toLowerCase();
};

// const filteredSearch = function (arr, selected) {
//   let searchInput = document.getElementById("searchBar").value;
//   console.log(arr);
//   console.log(searchInput);
//   filteredUsers = arr.filter((a) =>
//     a[selected].includes(
//       searchInput.substr(0, 1).toUpperCase() + searchInput.substr(1)
//     )
//   );
//   console.log("filtered",filteredUsers)
// };

const filteredSearch = function (arr, selected) {
  let searchInput = document.getElementById("searchBar").value;
  console.log(arr);
  console.log(searchInput);
  filteredUsers = arr.filter((a) =>
    a[selected].toLowerCase().includes(searchInput)
  );
  console.log("filtered", filteredUsers);
};

const displayLists = function (array) {
  let container = document.getElementById("itemsList");
  let select = selectedOption();
  console.log("nnnn", select);
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
  console.log("sss", obj[selected]);
  return `<li id="${obj.id}" class="list-group-item ">${obj[selected]}</li>`;
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

window.onload = function () {
  getUsers("https://jsonplaceholder.typicode.com/users");
};
