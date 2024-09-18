let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let isRunning = false;

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsList = document.getElementById('laps');

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(updateTime, 10);
    }
}

function pauseStopwatch() {
    isRunning = false;
    clearInterval(interval);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateTime();
    lapsList.innerHTML = '';
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    millisecondsDisplay.textContent = formatTime(Math.floor(milliseconds / 10));
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function recordLap() {
    if (isRunning) {
        const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(Math.floor(milliseconds / 10))}`;
        const li = document.createElement('li');
        li.textContent = lapTime;
        lapsList.appendChild(li);
    }
}

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', recordLap);