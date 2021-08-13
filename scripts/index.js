let boardLength = 10; 
const boardEl = document.querySelector(".board"); 
const rangeValEl = document.querySelector(".range-value")
const rangeEl = document.querySelector("#cell-width"); 
const clearBtn = document.querySelector("#clear-btn"); 
const randomColorBtn = document.querySelector("#random-color-btn"); 
const singleColorBtn = document.querySelector("#single-color-btn"); 
const specialModeBtn = document.querySelector("#special-mode-btn"); 

// single, random, or special
let mode = "single"; 

function renderCell() {
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
                    e.target.classList.add("flipped"); 
                    break; 

            }
        }); 
        boardEl.appendChild(newCell); 
    } 
}    

rangeEl.oninput = function () {
    boardLength = this.value; 
    renderCell(); 
    rangeValEl.textContent = `${boardLength} x ${boardLength}`
}

clearBtn.onclick = renderCell; 
singleColorBtn.onclick = () => {
    mode = "single"; 
}
randomColorBtn.onclick = () => {
    mode = "random"; 
}
specialModeBtn.onclick = () => {
    mode = "special"; 
}
renderCell();