const squares = document.querySelectorAll('.square');
const statusDiv = document.querySelector('.status');
const restartButton = document.querySelector('.restart');

let currentPlayer = 'X';
let gameBoard = Array(9).fill(null);
let isGameActive = true;

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // افقی
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // عمودی
    [0, 4, 8], [2, 4, 6],            // مورب
];

const start = document.querySelector('.btnShowGame');
const game = document.querySelector('.game');

start.addEventListener('click', () => {
    start.classList.add('hidden');
    game.classList.remove('hidden');
})

squares.addEventListener('click', () => {
    
})