# Array e stringhe

## Introduzione
lo scambio di variabili
```javascript
let x = 3;
let y = 9;
let aux = x;
x = y;
y = aux;
```
Perchè ci servono le strutture dati?

## Arrays
Cos'è un array  

```javascript
let mioArray = [2, 4, 5, 4];
console.log(mioArray + " è lungo: "+ mioArray.length);
mioArray[1] = 2;
console.log(mioArray);
console.log(mioArray + " è lungo: "+ mioArray.length);
```  
inizializzare array, array vuoto 

> [Array.push()](
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

> [Array.pop()](
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

> [Array.slice(start, end)](
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)


**ESERCIZIO:**   
Calcolare la somma elementi e il massimo di un array,
rovare il minimo di un array

## DOM creazione elementi

```javascript
const parent = document.querySelector(".parent");
const newDiv = document.createElement("div");
newDiv.classList.add("child");
newDiv.innerText = "I am child";
parent.append(newDiv);
```
> [createElement](
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

> [classList](
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) e dei suoi metodi, add, remove, toggle, contains.

## Lo spread e gli array

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const fruits = ['pear', 'apple'];
let mix = [...animals, ...fruits];
```

## Array di stringhe

Gli array possono contenere stringhe.
Le stringhe sono simili agli array!

> [String.split()](
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

> [Array.join()](
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

**LIVE CODING:**  
Dato l'array `["Hello", "World","in" ,"a","frame"]`
creare:
```
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
```

Invariante di ciclo `lunghezza parola più lunga - lunghezza parola corrente = numero di spazi da aggiungere al fondo`;

**LIVE CODING:**   
Testo e array di stringhe
conta parole, caratteri di testo, parola più lunga, spazi e vocali.

**ESERCIZIO**  
Dato array di ingredienti, output HTML usando `ul` e `li`

```
["Carne tritta mista 300 g",
"Salsiccia 100 g",
"Carote 50 g",
"Sedano 50 g",
"Cipolle 50 g",
"Vino rosso 100 g",
"Passata di pomodoro 300 g",
"Brodo vegetale q.b.",
"Olio extravergine d'oliva 1 cucchiaio",
"Sale fino q.b.",
"Pepe nero q.b."]
```

**ESERCIZIO**
Data una parola creare tutti gli anagrammi possibili

**ESERCIZIO**
Data una parola valutare se è palindroma

## Extra

cosa succede se si preme punto ('.') in una repo di github


[hemingwayapp](https://hemingwayapp.com/)
[https://loremipsum.io/](https://loremipsum.io/)  
