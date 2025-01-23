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

const updateStatus = (message) => {
    statusDiv.textContent = message;
};

// بررسی برنده
const checkWinner = () => {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            isGameActive = false;
            updateStatus(`Player ${currentPlayer} wins!`);
            restartButton.classList.remove('hidden');
            return;
        }
    }

    // بررسی تساوی
    if (!gameBoard.includes(null)) {
        isGameActive = false;
        updateStatus("It's a tie!");
        restartButton.classList.remove('hidden');
    }
};

// مدیریت کلیک روی خانه‌ها
squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        if (!isGameActive || gameBoard[index]) return; // جلوگیری از کلیک مجدد

        // افزودن X یا O به مربع
        gameBoard[index] = currentPlayer;
        const cross = square.querySelector(`#cross${index + 1}-1`);
        const circle = square.querySelector(`#circle-${index + 1}`);

        if (currentPlayer === 'X') {
            cross.classList.remove('hidden');
            square.querySelector(`#cross${index + 1}-2`).classList.remove('hidden');
        } else {
            circle.classList.remove('hidden');
        }

        // بررسی برنده
        checkWinner();

        // تغییر نوبت
        if (isGameActive) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updateStatus(`Player ${currentPlayer}'s turn`);
        }
    });
});

// Start a new game
restartButton.addEventListener('click', () => {
    gameBoard.fill(null);
    isGameActive = true;
    currentPlayer = 'X';
    updateStatus(`Player ${currentPlayer}'s turn`);
    restartButton.classList.add('hidden');

    // Hide all cross and circle elements
    squares.forEach(square => {
        square.querySelectorAll('.hidden').forEach(elem => elem.classList.add('hidden'));
        square.querySelectorAll('div').forEach(elem => elem.classList.add('hidden'));
    });
});


// شروع بازی
updateStatus(`Player ${currentPlayer}'s turn`);


const start = document.querySelector('.btnShowGame');
const game = document.querySelector('.game');

start.addEventListener('click', () => {
    start.classList.add('hidden');
    game.classList.remove('hidden');
})


