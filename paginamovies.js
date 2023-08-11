class Movie2 {
    constructor(photo, title, releaseYear, actors, director, writer, genre) {
        this.photo = photo;
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.director = director;
        this.writer = writer;
        this.genre = genre;
    }

    mostrarEnPagina(Id) {
        let targetElement = document.getElementById(Id);
        let movieInfo = document.createElement("div");

        let listActors = this.actors.join(", "); // Unir los actores en un solo string
        movieInfo.innerHTML = `
            <img src="${this.photo}" alt="${this.title}" width="100"> <br>
            <strong>Title:</strong> ${this.title}<br>
            <strong>Release Year:</strong> ${this.releaseYear}<br>
            <strong>Actors:</strong> ${listActors}<br>
            <strong>Director:</strong> ${this.director}<br>
            <strong>Writer:</strong> ${this.writer}<br>
            <strong>Genre:</strong> ${this.genre}<br>
        `;

        targetElement.appendChild(movieInfo);
    }
}

// Crear instancias de películas y mostrar en la página
let movie1 = new Movie2("todoalavezentodaspartes.jpg", "Todo a la vez en todas partes", 2022, ["Michelle Yeoh", "Ke Huy Quan"], "Daniel Kwan", "Daniel Kwan", "Comedia Dramática");
let movie2 = new Movie2("pinocho.jpg", "Pinocchio", 2022, ["Ron Perlman", "David Bradley"], "Guillermo del Toro", "Gris Grimly", "Animación");
let movie3 = new Movie2("blackwidow.jpg", "Black Widow", 2021, ["Scarlett Johansson", "David Harbour"], "Cate Shortland", "Jac Schaeffer", "Ciencia Ficción");
let movie4 = new Movie2("aftersun.jpg", "Aftersun", 2022, ["Paul Mescal", "Frankie Corio"], "Charlotte Wells", "Charlotte Wells", "Drama");

movie1.mostrarEnPagina("todoalavezinfo");
movie2.mostrarEnPagina("pinochoinfo");
movie3.mostrarEnPagina("blackwidowinfo");
movie4.mostrarEnPagina("aftersuninfo");

//array de las peliculas que tengo
let movies = [movie1, movie2, movie3, movie4];


//formulario
document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let nuevapeli = document.getElementById("nuevapeli");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let foto = document.getElementById("foto").value;
        let title = document.getElementById("title").value;
        let released = document.getElementById("released").value;
        let actor = document.getElementById("actor").value;
        let director = document.getElementById("director").value;
        let writer = document.getElementById("writer").value;
        let genre = document.getElementById("genre").value;
        

        let card = createCard(title, released, actor, director, writer, genre, foto);
        nuevapeli.appendChild(card);


        form.reset();
    });

    function createCard(title, released, actor, director, writer, genre, foto) {
        let card = document.createElement("div");
        card.className = "card m-1";
        card.style.width = "12rem";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        let cardText = document.createElement("div");
        cardText.className = "card-text";
        cardText.innerHTML = `
            <img src="${foto}" class="img-fluid" style="max-width: 100px;">    
            <p class="card-text">Title: ${title}</p>
            <p class="card-text">Released: ${released}</p>
            <p class="card-text">Actors: ${actor}</p>
            <p class="card-text">Director: ${director}</p>
            <p class="card-text">Writer: ${writer}</p>
            <p class="card-text">Genre: ${genre}</p>
            
        `;

        cardBody.appendChild(cardText);
        card.appendChild(cardBody);


        return card;
    }
});