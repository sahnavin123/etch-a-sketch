const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset");
const changeSizeBtn = document.querySelector("#change-size");
resetBtn.addEventListener("click", resetGrid);
changeSizeBtn.addEventListener("click", changeSize);

function createGrid(size) {

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }

  container.addEventListener("mouseover", function (e) {
    if (e.target.className === "cell") {
      e.target.style.backgroundColor = "grey";
    }
  });
}

function resetGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(function (cell) {
    cell.style.backgroundColor = "white";
  });
}

function changeSize() {
  let newSize = prompt("Enter a new size (maximum 100):");
  if (newSize === null) return;
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize > 100 || newSize < 1) {
    alert("Please enter a valid number between 1 and 100.");
    changeSize();
  } else {
    resetGrid();
    createGrid(newSize);
  }
}

document.addEventListener('DOMContentLoaded',()=>{
    createGrid(16);
})