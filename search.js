function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  results.forEach(function (result) {
    hidePlaylists();
    var div = document.createElement("div");
    div.textContent = result.name;

    resultsList.appendChild(div);
  });
}

function hidePlaylists() {
  var playlistContainer = document.getElementById("result-playlists");
  playlistContainer.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("search-input");
  var resultsList = document.getElementById("resultsList");

  searchInput.addEventListener("input", function () {
    resultsList.innerHTML = "";

    var searchTerm = searchInput.value.toLowerCase();

    requestApi(searchTerm);
  });
});
