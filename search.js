const resultsList = document.getElementById("resultsList");
const playlistContainer = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults() {
  hidePlaylists();

  resultsList.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const resultsList = document.getElementById("resultsList");
  const searchInput = document.getElementById("search-input");
  const playlistContainer = document.getElementById("result-playlists");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
      resultsList.classList.add("hidden");
      playlistContainer.classList.remove("hidden");
      return;
    }
    requestApi(searchTerm);
  });
});
