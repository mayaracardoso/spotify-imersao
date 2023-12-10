document.addEventListener('DOMContentLoaded', function () {
    // URL da API fake de artistas do Spotify
    const apiUrl = 'http://localhost:3000/artists';

    // Função para fazer um fetch na API
    function fetchArtists() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayArtists(data))
            .catch(error => console.error('Erro ao obter artistas:', error));
    }

    // Função para exibir os artistas na tela
    function displayArtists(artists) {
        const artistList = document.getElementById('artistList');

        // Limpar a lista antes de adicionar novos elementos
        artistList.innerHTML = '';

        // Iterar sobre os artistas e adicionar à lista
        artists.forEach(artist => {
            const listItem = document.createElement('li');
            listItem.textContent = `${artist.name} - ${artist.genre}`;
            artistList.appendChild(listItem);
        });
    }

    // Chamar a função para obter e exibir os artistas
    fetchArtists();
});
