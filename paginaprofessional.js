//crear clase
class Professional2 {
    constructor(photo, name, age, isRetired,nationality,oscarsNumber,profession){
        this.photo= photo;
        this.name= name;
        this.age= age;
        this.isRetired= isRetired;
        this.nationality= nationality;
        this.oscarsNumber= oscarsNumber;
        this.profession= profession;

    }
//recoger los atributos
    mostrar(){
      return`
      <img src="${this.photo}" alt="${this.name}" width="100"> <br>
      <strong>Name:</strong> ${this.name}<br>
      <strong>Age:</strong> ${this.age}<br>
      <strong>Is Retired:</strong> ${this.isRetired}<br>
      <strong>Nationality:</strong> ${this.nationality}<br>
      <strong>Oscars Number:</strong> ${this.oscarsNumber}<br>
      <strong>Profession:</strong> ${this.profession}<br>
      `;
      }

//funcion para mostrar los atributos en la pagina
    mostrarEnPagina(Id) {
        let targetElement = document.getElementById(Id);
        let professionalInfo = document.createElement("div");

        professionalInfo.innerHTML = `
            <img src="${this.photo}" alt="${this.name}" width="100"> <br>
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Is Retired:</strong> ${this.isRetired}<br>
            <strong>Nationality:</strong> ${this.nationality}<br>
            <strong>Oscars Number:</strong> ${this.oscarsNumber}<br>
            <strong>Profession:</strong> ${this.profession}<br>
        `;

        targetElement.appendChild(professionalInfo);
    }
}

// instancias de profesionales
let actor1 = new Professional2("jennafischer.jpg", "Jenna Fischer", 49, false, "American", 0, "Actress");
let actor2 = new Professional2("margotrobbie.jpg", "Margot Robbie", 35, false, "Australian", 0, "Actress");
let director1 = new Professional2("guillermodeltoro.png", "Guillermo Del Toro", 58, false, "Mexican", 3, "Director");
let writer1 = new Professional2("gretagerwig.png", "Greta Gerwig", 40, false, "American", 0, "Writer");

// mostrar en pagina
actor1.mostrarEnPagina("ronperlmaninfo");
actor2.mostrarEnPagina("davidbradleyinfo");
director1.mostrarEnPagina("guillermodeltoroinfo");
writer1.mostrarEnPagina("grisgrimlyinfo");