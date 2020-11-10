let allUsers = [];

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
};
const searchInput = function () {
  return document.getElementById("searchBar").value;
};
const filteredSearch = function (arr, selected) {
  let searchInput = document.getElementById("searchBar").value;
  console.log(arr);
  console.log(searchInput);
  let result = arr.filter((a) =>
    a.name.includes(
      searchInput.substr(0, 1).toUpperCase() + searchInput.substr(1)
    )
  );
  console.log(result[0].id);
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
