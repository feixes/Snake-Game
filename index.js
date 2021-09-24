const grid = document.querySelector(".grid");
let squares = [];
const width = 10;
let snake = [2, 1, 0];

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
  //for now, will be added to the right (+1)
  snake.unshift(snake[0] + 1);
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
    console.log("moving right");
  } else if (e.key === "ArrowLeft") {
    console.log("moving left");
  } else if (e.key === "ArrowUp") {
    console.log("moving up");
  } else if (e.key === "ArrowDown") {
    console.log("moving down");
  }
}

document.addEventListener("keyup", directionChange);
