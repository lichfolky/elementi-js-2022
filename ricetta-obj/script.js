import ingredienti from "./ingredienti.json" assert {type: 'json'};


let numeroPizze = 2;

// prendiamo query string npizze
const urlParams = new URLSearchParams(window.location.search);
const numeroInput = urlParams.get('quantita');
if (numeroInput != undefined) {
    numeroPizze = numeroInput;
}

// let ingredienti = [{
//     nome: "passata di pomodoro",
//     quantita: 100,
//     udm: "ml"
// },
// {
//     nome: "mozzarella",
//     quantita: 200,
//     udm: "g"
// },
// {
//     nome: "farina",
//     quantita: 150,
//     udm: "g"
// }];


let elementoListaIngredienti = document.getElementById("ingredienti");

console.log(elementoListaIngredienti);
for (let i = 0; i < ingredienti.length; i++) {
    ingredienti[i].quantita = ingredienti[i].quantita * numeroPizze;

    let ingredienteElement = document.createElement("li");
    ingredienteElement.innerText = ingredienti[i].nome + " " + ingredienti[i].quantita + " " + ingredienti[i].udm;
    elementoListaIngredienti.append(ingredienteElement);
}

let array = [];
console.log(array);
array.push(1);
console.log(array);
array.push(2);
console.log(array);
array.push(3);
console.log(array);
//come CODA 
console.log(array.pop());
//come PILA 
//console.log(array.shift());
console.log(array);
