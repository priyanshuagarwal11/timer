let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    // Format: add a leading zero if seconds < 10
    display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

startBtn.addEventListener('click', () => {
    if (timer) return; // Prevent multiple intervals
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("Time's up! Take a break.");
        }
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateDisplay();
});