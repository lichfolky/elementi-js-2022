let bar = document.querySelector(".bar");
let barWidth = 0;
let delay = 100;

function increment() {
    barWidth += 10;
    bar.style.width = barWidth + "px";
    bar.innerHTML = "<span>" + Math.floor((barWidth / 300) * 100) + "%<\span>";

    if (barWidth == 300) {
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(increment, delay);

