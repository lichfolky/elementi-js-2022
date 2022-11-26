let cells = document.querySelectorAll(".cell");
for (cell of cells) {
    cell.addEventListener("click", (e) => {
        e.target.classList.toggle("show");
    });
    console.log(cell);
}