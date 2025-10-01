const counterElement = document.getElementById('counter');
const speedPlusButton = document.getElementById('speed-plus');
const speedMinusButton = document.getElementById('speed-minus');
const resetButton = document.getElementById('reset');

var counterValue = 0;
var speed = 1;

function updateCounterDisplay() {
    const minutes = Math.floor(counterValue / 60);
    const seconds = counterValue % 60;
    counterElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function changeTextColor(color) {
    counterElement.style.color = color;
}

speedPlusButton.addEventListener('click', () => {
    changeBackgroundColor('rgb(144, 238, 144)');
    changeTextColor('rgb(240, 128, 128)');
    speed += 1;
    updateCounterDisplay();
});

speedMinusButton.addEventListener('click', () => {
    changeBackgroundColor('rgb(240, 128, 128)');
    changeTextColor('rgb(144, 238, 144)');
    speed = Math.max(1, speed - 1);
    updateCounterDisplay();
});

resetButton.addEventListener('click', () => {
    changeBackgroundColor('rgb(169, 169, 169)');
    changeTextColor('rgb(0, 0, 0)');
    speed = 1;
    counterValue = 0;
    updateCounterDisplay();
});

setInterval(() => {
    counterValue += speed;
    updateCounterDisplay();
}, 1000);