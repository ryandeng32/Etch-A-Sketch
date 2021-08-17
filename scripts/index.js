let boardLength = 10; 
const boardEl = document.querySelector(".board"); 
const rangeValEl = document.querySelector(".range-value")
const rangeEl = document.querySelector("#cell-width"); 
const clearBtn = document.querySelector("#clear-btn"); 
const randomColorBtn = document.querySelector("#random-color-btn"); 
const singleColorBtn = document.querySelector("#single-color-btn"); 
const specialModeBtn = document.querySelector("#special-mode-btn"); 

color = "#e66465"; 
// single, random, or special
let mode = "single"; 

function renderBoard() {
    boardEl.innerHTML = ""; 
    boardEl.style.gridTemplateColumns = "1fr ".repeat(boardLength); 
    boardEl.style.gridTemplateRows = "1fr ".repeat(boardLength); 
    let newCell;
    for (let i=0; i<boardLength*boardLength; i++){
        newCell = document.createElement("div"); 
        newCell.classList.add("cell"); 
        newCell.addEventListener("mousemove", (e) => {
            switch(mode) {
                case "single": 
                    if (!e.target.classList.contains("flipped")){
                        e.target.style.backgroundColor = color; 
                        e.target.classList.add("flipped"); 
                    }
                    break; 
                case "special": 
                    e.target.classList.add("flipped"); 
                    boardEl.style.backgroundImage = 'url("../images/meme.png")';

            }
        }); 
        boardEl.appendChild(newCell); 
    } 
}    

rangeEl.oninput = function () {
    boardLength = this.value; 
    renderBoard(); 
    rangeValEl.textContent = `${boardLength} x ${boardLength}`
}

singleColorBtn.onchange = () => {
    mode = "single"; 
    color = singleColorBtn.value; 
}
clearBtn.onclick = renderBoard; 

randomColorBtn.onclick = () => {
    mode = "random"; 
}
specialModeBtn.onclick = () => {
    mode = "special"; 
}
renderBoard();