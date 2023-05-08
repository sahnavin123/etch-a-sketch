const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset");
const changeSizeBtn = document.querySelector("#change-size");
const containerSize = 600;
const defaulsize = 16;

const createGrid = (size) => {
  const cellSize = containerSize / size;
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    container.appendChild(cell);
  }

  container.addEventListener("mouseover", (e) => {
    if (e.target.className === "cell") {
      e.target.style.backgroundColor = "grey";
    }
  });
};

const resetGrid = () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
};

const changeSize = () => {
  let newSize = prompt("Enter a new size (maximum 100):");
  if (newSize === null) return;
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize > 100 || newSize < 1) {
    alert("Please enter a valid number between 1 and 100.");
    changeSize();
  } else {
    resetGrid();
    container.innerHTML = "";
    createGrid(newSize);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  createGrid(defaulsize);
});

resetBtn.addEventListener("click", resetGrid);
changeSizeBtn.addEventListener("click", changeSize);
