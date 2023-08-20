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

        let listActors = this.actors.join(", "); // unir actores en un string
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

// instancias de películas y mostrar en  página
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


// variables para que form sea el formulario y tarjetascontainer sea el contenedorde las tarjetas
let form = document.getElementById("form");
let tarjetasContainer = document.getElementById("contenedortarjetas");

// evento formulario al clicar boton
form.addEventListener("submit", function (event) {
    event.preventDefault(); // para que no se recargue la pagina

    // obtenr los valores q hay en el formulario
    let foto = document.getElementById("foto").value;
    let title = document.getElementById("title").value;
    let released = document.getElementById("released").value;
    let actor = document.getElementById("actor").value;
    let director = document.getElementById("director").value;
    let writer = document.getElementById("writer").value;
    let genre = document.getElementById("genre").value;
    

    // crear la nueva tarjeta
    let nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("card", "m-1");
    nuevaTarjeta.style.width = "16rem";
    nuevaTarjeta.innerHTML = `
        <div class="card-body">
            <img src="${foto}" class="card-img-top" alt="...">
            <p class="card-text"><strong>Title: </strong>${title}</p>
            <p class="card-text"><strong>Release year: </strong>${released}</p>
            <p class="card-text"><strong>Actors: </strong>${actor}</p>
            <p class="card-text"><strong>Director: </strong>${director}</p>
            <p class="card-text"><strong>Writer: </strong>${writer}</p>
            <p class="card-text"><strong>Genre: </strong>${genre}</p>
        </div>
    `; //strong es para que los labels esten en negrita

    // añadir la tarjeta al contenedor que tiene las tarjetas
    tarjetasContainer.appendChild(nuevaTarjeta);

    // limpiar el formulario despues de clicar boton
    form.reset();
});