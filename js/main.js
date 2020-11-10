let allUsers = [];
let filteredUsers = []
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
  cleanContainer()
  displayLists(filteredUsers)
};

const cleanContainer = function(){
    let container = document.getElementById("itemsList")
    container.innerHTML =""
}
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
    console.log("filtered",filteredUsers)
  };

const displayLists = function(array){
    let container = document.getElementById("itemsList")
    let select = selectedOption()
    console.log("nnnn",select)
    for(let user of array){
        container.innerHTML += generateList(user,select)

    }


}
const generateList = function(obj,selected){
    console.log("sss",obj[selected])
    return `<li id="${obj.id}" class="list-group-item ">${obj[selected]}</li>`
}

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
