function initMap() {
  let urlParams = new URLSearchParams(window.location.search);
  let myLat = urlParams.get("lat");
  let myLng = urlParams.get("lng");
  const myLatLng = { lat: Number(myLat), lng: Number(myLng) };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

document.getElementsByClassName("terminal-window")[0].innerHTML = "";
document.getElementsByClassName("header-intro")[0].innerHTML = "";
document.getElementsByClassName("project-title-container")[0].innerHTML = "";
document.getElementsByClassName("footer")[0].innerHTML = "";
window.onload = function () {
  let result = JSON.parse(window.localStorage.getItem("storedResult"));
  let userId = new URLSearchParams(document.location.search).get("id");
  let user = result.filter((r) => r.id === parseInt(userId))[0];
  //   console.log(user);
  document.getElementsByTagName("h1")[0].innerText = user.name;
  document
    .querySelector(".fa-envelope")
    .parentElement.setAttribute("href", user.email);
  document.getElementsByClassName("terminal-window")[0].innerHTML = `
	<div class="statement">
	<p class="input-statement">${user.name.split(" ")[0]}.age</p>
	<p class="output-statement">${user.name}</p>
	</div>
	<div class="statement">
	<p class="input-statement">${user.name.split(" ")[0]}.location</p>
	<p class="output-statement">
	${user.address.street}, ${user.address.suite}, ${user.address.city} (${
    user.address.zipcode
  })</p>
	</div>
	<div class="statement">
	<p class="input-statement">${user.name.split(" ")[0]}.phone</p>
	<p class="output-statement">
		<a href="./Orhan_Örs.pdf" target="_blank">${user.phone}</a>
	</p>
	</div>
	<div class="statement">
	<p class="input-statement">${user.name.split(" ")[0]}.website</p>
	<p class="output-statement">${user.website}</p>
	</div>
	<div class="statement">
	<p class="input-statement">${user.name.split(" ")[0]}.username</p>
	<p class="output-statement">${user.username}</p>
	</div>`;

  initMap();
  //   document.getElementsByClassName(
  //     "output-statement"
  //   )[1].innerText = `${user[0].address.street}, ${user[0].address.suite}, ${user[0].address.city} (${user[0].address.zipcode})`;
  //   document.getElementsByClassName("input-statement")[2].innerText =
  //     "Phone number";
  //   document.getElementsByClassName("output-statement")[2].innerText =
  //     user[0].phone;
};
