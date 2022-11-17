# Basi di logica e cicli

## Logica

AND: `&&`,  OR: `||`, NOT `!` tavole verità

la vecchia porta la sbarra

```
A && B
A || B

!!A
A && !A
A && A
A && true
A || true

leggi di de Morgan
!(A && B) = !A || !B
!(A || B) = !A && !B
```

**ESERCIZIO insieme:** 

logica con gli if.
```
if(A){
    ?
    if(B){
        ?
    }else{
        ?
    }
}
```

---

**ESERCIZIO Peer Coding:** 

`Body Mass Index or BMI`  
`BMI = peso / height^2`  
peso in kg e altezza im metri   
es: `70 / (1,75)^2 = 22,9` 
```
Sottopeso       -           BMI < 18.5  
Peso normale    -   18.5 <= BMI < 25.0  
Sovrappeso      -   25.0 <= BMI < 30.0  
Obesità         -   30.0 <= BMI
```

Abbiamo usato:
[parseInt(numeroStringa)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt?retiredLocale=it)

alternative; `Number(numeroStringa)` e `+numeroStringa`

```
[math pow, esponente](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
`Math.pow(height, 2)`  


Usiamo:    
[math pow, esponente](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)  
es> Math.pow(height, 2)  

**ESERCIZIO OPZIONALE:**   
TESTA O CROCE con Math.random()

... vuoi riprovare?
```

---
## I cicli

Esempio sale manciate o pizzichi e loop infiniti



**TEORIA:**  
il ciclo while, flowchart con un loop

```js
while(condizione){
    
}
```

**LIVE CODING:**   
    conta fino a 100 e poi countdown
```
let cont = 10;
while (cont > 0) {
  cont--;
  console.log(cont);
}
console.log(cont);
```

**TEORIA:**  
do while, flowchart con un loop

```js
do {

} while (condizione);
```
**ESERCIZIO:**   
per entrare devi essere > 18: inserisci fino a quando non metti risposta giusta valida (usiamo `parseInt` o `+`)

```
let anni;
do {
  anni = +prompt("anni");
} while (anni < 18);
```

**TEORIA:**   
il ciclo for

```js
for(let i = 0; i < 100 ;i++){
    
}
```

**LIVE CODING:**  
somma primi n numeri e poi countdown

```
let out = document.getElementById("out");

// ccuntdown
for (let i = 10; i >= 0; i--) {
  console.log(i);

  out.innerText = out.innerText + ", " + i;
  if (i == 0) {
    out.innerHTML = "<h1>Buon anno!!!</h1>";
  }
  if (i == 10) {
    out.innerText = 10;
  }
}
```

Per appendere `num` al fondo di txt:  
` txt = txt + ", " + num`    
` txt += ", " + num`  

i valori falsy
```
if(undefined){}
```

**ESERCIZIO:**  
stampa su pagina web la tabellina del 2

**ESERCIZIO insieme:**   
stampa su pagina web la tabelline 1-10
 
---
## link da vedere:
[Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)  
[Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)  
[codepen](https://codepen.io/)  


## Extra
[DALL-E](https://labs.openai.com/)
[Eleusis_(card_game)](https://en.wikipedia.org/wiki/Eleusis_(card_game))
