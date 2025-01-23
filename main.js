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
    immagine: "./img/female2.png",
},
{
    nome: "lorem ipsum1",
    email: "test@test.it",
    descrizione: "lorem ipsum dolor",
    immagine: "./img/female3.png",
},
{
    nome: "lorem ipsum1",
    email: "test@test.it",
    descrizione: "lorem ipsum dolor",
    immagine: "./img/male1.png",
},
{
    nome: "lorem ipsum1",
    email: "test@test.it",
    descrizione: "lorem ipsum dolor",
    immagine: "./img/male2.png",
},
{
    nome: "lorem ipsum1",
    email: "test@test.it",
    descrizione: "lorem ipsum dolor",
    immagine: "./img/male3.png",
}
];

let cardsConteiner = document.getElementsByClassName('container')[0];
console.log(cardsConteiner);

for (let i = 0; i < cardsMembers.length; i++){
    let element = cardsMembers[i];

    cardsConteiner.innerHTML +=` 
    <div class="flex">
        <figure>
            <img height="96px" src='${element.immagine}' alt="">
        </figure>
        <div class="flex flex-column">
            <h5>'${element.nome}'</h5>
            <span>'${element.email}'</span>
            <span>'${element.descrizione}'</span>
        </div>
    </div>
    `; 
};
