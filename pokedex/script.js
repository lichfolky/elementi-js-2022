console.log("ciao");
let pokeElement = document.querySelector(".poke");

let buttonElement = document.getElementById("poke-button");
let inputElement = document.getElementById("poke-input");

buttonElement.addEventListener("click", () => {
    let pokemonDaCercare = inputElement.value;
    console.log(pokemonDaCercare);

    trovaPokemon(pokemonDaCercare);
});

let pokemonIniziali = ["charmander", "bulbasaur", "squirtle"];



function trovaPokemon(nomePokemon) {
    let apiCall = "https://pokeapi.co/api/v2/pokemon/" + nomePokemon;
    fetch(apiCall)
        .then((response) => response.json())
        .then(pokeData => {
            fetch("https://pokeapi.co/api/v2/pokemon-species/" + nomePokemon)
                .then((response) => response.json())
                .then((data) => {
                    pokeElement.innerHTML += "<div><h3>" + pokeData.name + "</h3><img src='" + pokeData.sprites.front_default + "' /></div>";
                    let arrayDiDescrizioni = data.flavor_text_entries;
                    for (const descrizionePokemon of arrayDiDescrizioni) {
                        if (descrizionePokemon.language.name == "it") {
                            pokeElement.innerHTML += "<div>" + descrizionePokemon.flavor_text + "</div>";

                        }
                    }

                });

        });

}


for (let i = 0; i < pokemonIniziali.length; i++) {
    trovaPokemon(pokemonIniziali[i]);
}