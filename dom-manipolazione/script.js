let header = document.querySelector("header");

let title = document.querySelector(".titolo");
title.innerText = "ciao";

for (let num = 0; num < 3; num++) {
    let subtitle = document.createElement("h2");
    subtitle.innerText = "sottotitolo";
    console.log(subtitle);
    header.append(subtitle);
}
