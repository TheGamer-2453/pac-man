let board;
const rowCount = 21;
const colummCount = 19;
const titleSize = 32;
const boardWidth = colummCount*titleSize;
const boardHeight = rowCount*titleSize;
let context;

let blueGhostImage;
let orangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;

const titleMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
];

const walls = new Set();
const foods = new Set();
const ghosts = new Set();
let pacman;

const directions = ['U' ,'D' ,'L' ,'R'];
let score = 0;
let lives = 3;
let gameOver = false;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    loadImages();
    loadMap();

    for (let ghost of ghosts.values()) {
        const newDirection = directions[Math.floor(Math.random()*4)];
        ghost.updateDIrection(newDirection);
    }
    update();
    document.addEventListener("keyup", movePacman);
}

function loadImages() {
    wallImage = new Image();
    wallImage.src = "./wall.png";

    blueGhostImage = new Image();
    blueGhostImage.src = "./blueGhost.png";
    orangeGhostImage = new Image();
    orangeGhostImage.src = "./orangeGhost.png"
    pinkGhostImage = new Image()
    pinkGhostImage.src = "./pinkGhost.png";
    redGhostImage = new Image()
    redGhostImage.src = "./redGhost.png";

    pacmanUpImage = new Image();
    pacmanUpImage.src = "./pacmanUp.png";
    pacmanDownImage = new Image();
    pacmanDownImage.src = "./pacmanDown.png";
    pacmanLeftImage = new Image();
    pacmanLeftImage.src = "./pacmanLeft.png";
    pacmanRightImage = new Image();
    pacmanRightImage.src = "./pacmanRight.png";
}