# Oggetti e recap

```
let obj = { 
    nomeProprietà1: valore1,
    nomeProprietà2: valore2
}
```

`objectName.propertyName`
and
`objectName["propertyName"]`


restituire più valori con un funzione

**Esercizio**
Finiamo cornicetta per stampare su HTML
`pre`

```javascript
    scriviSuPagina(daStampare);
    ...
    function scriviSuPagina(textLine) {
        let cornicetta = document.querySelector(".cornicetta");
        let line = document.createElement("div");
        line.innerText = textLine;
        cornicetta.append(line);
    }
```
```HTML
    <pre class="cornicetta"></pre>
```

**Show**
skretch

**Eventi**
event listener
Events target, key, type
setTimeout

**Esercizio**
Fare un countdown con setTimeout / set

`const date2 = new Date('1995-12-17T03:24:00');`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

//https://placekitten.com/

