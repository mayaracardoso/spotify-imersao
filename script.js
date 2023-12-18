// document.addEventListener("DOMContentLoaded", function () {
//   // URL da API fake de artistas do Spotify
//   const apiUrl = "http://localhost:3000/artists";

//   // Função para fazer um fetch na API
//   function fetchArtists() {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => displayArtists(data))
//       .catch((error) => console.error("Erro ao obter artistas:", error));
//   }

//   // Função para exibir os artistas na tela
//   function displayArtists(artists) {
//     const artistList = document.getElementById("artistList");

//     // Limpar a lista antes de adicionar novos elementos
//     artistList.innerHTML = "";

//     // Iterar sobre os artistas e adicionar à lista
//     artists.forEach((artist) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = `${artist.name} - ${artist.genre}`;
//       artistList.appendChild(listItem);
//     });
//   }

//   // Chamar a função para obter e exibir os artistas
//   fetchArtists();
// });

//BOM DIA | BOA TARDE | BOA NOITE

// Obtém a referência do elemento com o ID "greeting"
const greetingElement = document.getElementById("greeting");

// Obtém a hora atual do sistema
const currentHour = new Date().getHours();

// Define a saudação com base na hora atual
// if (currentHour >= 5 && currentHour < 12) {
//   greetingElement.textContent = "Bom dia";
// } else if (currentHour >= 12 && currentHour < 18) {
//   greetingElement.textContent = "Boa tarde";
// } else {
//   greetingElement.textContent = "Boa noite";
// }

// Forma mais simples
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

greetingElement.textContent = greetingMessage;

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {
  const containerWidth = container.offsetWidth;
  const numColumns = Math.floor(containerWidth / 200); // Ajuste conforme necessário

  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

  console.log({ container });
  console.log({ numColumns });
});

observer.observe(container);
