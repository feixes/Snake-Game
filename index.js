const grid = document.querySelector(".grid");
let squares = [];
const width = 10;
let snake = [2, 1, 0];
let direction = 1;

// Create the grid
function createGrid() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    squares.push(square);
  }
}
// Execute the function to create the grid
createGrid();
// Create the initial state of the snake
snake.forEach((index) => squares[index].classList.add("snake"));

// Movement Logic
function move() {
  // remove the tail from the snake
  let tail = snake.pop();
  // remove the styling from the tail
  squares[tail].classList.remove("snake");

  // Add a new head. Snake head will always be snake[0]
  // a value for direction will be added to the snake head
  snake.unshift(snake[0] + direction);
  squares[snake[0]].classList.add("snake");
}

// Adding the movement
let movement = setInterval(move, 1000);

//Other directions logic:
// To the right: +1
// To the left: -1
// Upwards: -10
// Downwards: +10

function directionChange(e) {
  if (e.key === "ArrowRight") {
    direction = 1;
  } else if (e.key === "ArrowLeft") {
    direction = -1;
  } else if (e.key === "ArrowUp") {
    direction = -width;
  } else if (e.key === "ArrowDown") {
    direction = width;
  }
}

document.addEventListener("keyup", directionChange);
