const grid = document.querySelector(".grid");
let squares = [];
const width = 10;
let snake = [0, 1, 2];

//Create the grid
function createGrid() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    squares.push(square);
  }
}
createGrid();

snake.forEach((index) => squares[index].classList.add("snake"));
