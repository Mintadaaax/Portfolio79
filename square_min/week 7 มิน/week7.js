let timer;
let squaresClicked = 0;
let totalSquares = 0;

document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    const squareCount = parseInt(document.getElementById('squareCount').value);
    const squareColor = document.getElementById('squareColor').value;

    if (isNaN(squareCount) || squareCount < 1) {
        alert("กรุณากรอกจำนวนสี่เหลี่ยมที่ถูกต้อง");
        return;
    }

    totalSquares = squareCount;
    squaresClicked = 0;
    document.getElementById('squares').innerHTML = ''; // Clear previous squares
    document.getElementById('result').innerText = '';

    for (let i = 0; i < totalSquares; i++) {
        createSquare(squareColor);
    }

    startTimer();
}

function createSquare(color) {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.backgroundColor = color;
    square.addEventListener('click', () => {
        squaresClicked++;
        square.style.display = 'none'; // Hide the square when clicked
        checkWin();
    });
    document.getElementById('squares').appendChild(square);
}

function startTimer() {
    let timeLeft = 30;
    document.getElementById('timer').innerText = `เวลา: ${timeLeft} วินาที`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `เวลา: ${timeLeft} วินาที`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('result').innerText = 'คุณแพ้! เวลาหมด!';
            document.getElementById('squares').innerHTML = ''; // Clear squares
        }
    }, 1000);
}

function checkWin() {
    if (squaresClicked === totalSquares) {
        clearInterval(timer);
        document.getElementById('result').innerText = 'คุณชนะ! คลิกสี่เหลี่ยมทั้งหมดในเวลา 30 วินาที!';
        document.getElementById('squares').innerHTML = ''; // Clear squares
    }
}