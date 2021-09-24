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

// Collision detection:
// 00 01 02 03 04 05 06 07 08 09
// 10 11 12 13 14 15 16 17 18 19
// 20 21 22 23 24 25 26 27 28 29
// 30 31 32 33 34 35 36 37 38 39
// 40 41 42 43 44 45 46 47 48 49
// 50 51 52 53 54 55 56 57 58 59
// 60 61 62 63 64 65 66 67 68 69
// 70 71 72 73 74 75 76 77 78 79
// 80 81 82 83 84 85 86 87 88 89
// 90 91 92 93 94 95 96 97 98 99

// Left wall -> % width === 0
// Top wall -> - width < 0
// Bottom wall -> + width >= width*width
// Right wall /> % width === width -1

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
