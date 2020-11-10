window.onload = function () {
  console.log(window.localStorage.getItem(storedResult));
  let userId = new URLSearchParams(document.location.search).get("id");
};
