// Variables
const container = document.getElementById("container");
let generate = document.querySelector(".generate");
let square = document.querySelectorAll(".grid-item");
const clear = document.querySelector(".clear");

makeRows(16, 16);

// Remove elements by class
function removeElementsByClass(className) {
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    };
};

// Custom grid
function custom() {
    generate.addEventListener("click", (e) => {
        container.querySelectorAll(".grid-item").forEach(square => square.style.background = "");
        removeElementsByClass("grid-item");
        rows = parseInt(prompt("Choose a grid size between 4-64"));
        if (rows < 4 || rows > 64 || isNaN(rows)) {
            alert('Incorrect input, using default size (16)');
            rows = 16
        };
        makeRows(rows);
    });
};
custom();

// Function that creates grid
function makeRows(rows) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', rows);
    for (c = 0; c < (rows * rows); c++) {
        let newDiv = document.createElement("div");
        newDiv.addEventListener("mouseover", e => 
        e.target.style.background = getRandomColor());
        newDiv.setAttribute('class', 'grid-item');
        container.appendChild(newDiv)
    };
};

// Random color
function getRandomColor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    
    return `rgb(${R}, ${G}, ${B})`;
}

// Clear grid
function clearGrid() {
    clear.addEventListener("click", (e) => {
        container.querySelectorAll(".grid-item").forEach(square => square.style.background = "");
    });
};
clearGrid();