//Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
//(trovate l’array del team all’interno della cartella in allegato)

let cardsMembers = [
{
    nome: "lorem ipsum1",
    email: "test@test.it",
    descrizione: "lorem ipsum dolor",
    immagine: "./img/female1.png",
},
{
    nome: "lorem ipsum1",
    email: "test@test.it",
    descrizione: "lorem ipsum dolor",
    immagine: "./img/female1.png",
},
{
    nome: "lorem ipsum1",
    email: "test@test.it",
    descrizione: "lorem ipsum dolor",
    immagine: "./img/female1.png",
},
{
    nome: "lorem ipsum1",
    email: "test@test.it",
    descrizione: "lorem ipsum dolor",
    immagine: "./img/female1.png",
},
{
    nome: "lorem ipsum1",
    email: "test@test.it",
    descrizione: "lorem ipsum dolor",
    immagine: "./img/female1.png",
},
{
    nome: "lorem ipsum1",
    email: "test@test.it",
    descrizione: "lorem ipsum dolor",
    immagine: "./img/female1.png",
}
];

let cardsConteiner = document.getElementById("flex")

for (let index = 0; index < cardsMembers.length; index++){

    <div class="flex">
        <figure>
            <img height="96px" src="./img/female1.png" alt="">
        </figure>
        <div class="flex flex-column">
            <h5>lorem ipsum1</h5>
            <span>test@test.it</span>
            <span>lorem ipsum dolor</span>
        </div>
    </div>
    
};
