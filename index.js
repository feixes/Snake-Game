const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
let squares = [];
const width = 10;
let snake = [2, 1, 0];
let direction = 1;
let apple = 0;
let score = 0;
let timeIncrement = 0.9;
let startTime = 1000;

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

// Generating the apple
// do{}while will keep generating apple positions if the snake is touching it
function createApple() {
  do {
    apple = Math.floor(Math.random() * squares.length);
  } while (squares[apple].classList.contains("snake"));
  squares[apple].classList.add("apple");
}
createApple();

// Movement Logic
function move() {
  if (
    (snake[0] % width === 0 && direction === -1) ||
    (snake[0] - width < 0 && direction === -width) ||
    (snake[0] + width >= width * width && direction === width) ||
    (snake[0] % width === width - 1 && direction === 1) ||
    squares[snake[0] + direction].classList.contains("snake")
  ) {
    return clearInterval(movement); //The code has to break here, it has to return the clear interval for the whole function to not be executed
  }

  // remove the tail from the snake
  let tail = snake.pop();
  // remove the styling from the tail
  squares[tail].classList.remove("snake");

  // Add a new head. Snake head will always be snake[0]
  // a value for direction will be added to the snake head
  snake.unshift(snake[0] + direction);
  squares[snake[0]].classList.add("snake");

  // Checking if the snake eats an apple
  if (squares[apple] === squares[snake[0]]) {
    //squares[apple].classList.contains("snake")
    squares[apple].classList.remove("apple");
    createApple();
    score += 1;
    scoreDisplay.textContent = score;
    //Grow the snake
    //Take the tail we just removed and add it back
    squares[tail].classList.add("snake");
    snake.push(tail);

    // Up the speed
    clearInterval(movement);
    startTime = startTime * timeIncrement;
    movement = setInterval(move, startTime);
  }
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

//Check the value of the snake head. Must also move in that direction!
// Left wall -> snake[0] % width === 0
// Top wall -> snake[0] - width < 0
// Bottom wall -> snake[0] + width >= width*width
// Right wall -> snake[0] % width === width -1
// Hitting itself -> Next value for the head already contains snake class

// Adding the movement
let movement = setInterval(move, startTime);

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
