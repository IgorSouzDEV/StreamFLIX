// Função para exibir informações do filme selecionado
function showFilmInfo(title, posterURL, synopsis, releaseDate, genre, trailerLink) {
    // Atualizar a área de informações do filme
    var filmInfoElement = document.getElementById('film-info');
    filmInfoElement.innerHTML = `
        <h3>${title}</h3>
        <img src="${posterURL}" class="img-fluid" alt="Poster do Filme">
        <p><strong>Sinopse:</strong> ${synopsis}</p>
        <p><strong>Data de Lançamento:</strong> ${releaseDate}</p>
        <p><strong>Gênero:</strong> ${genre}</p>
        <a href="${trailerLink}" target="_blank"><button>Assistir ao Trailer</button></a>
    `;

    // Remover a classe 'active' de todos os posters
    var posters = document.querySelectorAll('.film');
    posters.forEach(function (poster) {
        poster.classList.remove('active');
    });

    // Adicionar a classe 'active' ao poster clicado
    event.target.classList.add('active');
}

// Ativar automaticamente o primeiro poster e exibir suas informações ao carregar a página
window.onload = function () {
    // Dados do primeiro filme
    var firstFilmTitle = 'Parasita';
    var firstFilmPosterURL = './img/poster1-parasite.jpg';
    var firstFilmSynopsis = 'Em Parasita, toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.';
    var firstFilmReleaseDate = '2019';
    var firstFilmGenre = 'Drama';
    var firstFilmTrailerLink = 'https://www.youtube.com/watch?v=SEUXfv87Wpk';

    // Chamar a função showFilmInfo para o primeiro filme
    showFilmInfo(firstFilmTitle, firstFilmPosterURL, firstFilmSynopsis, firstFilmReleaseDate, firstFilmGenre, firstFilmTrailerLink);
};
