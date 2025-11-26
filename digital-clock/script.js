// DIGITAL CLOCK
function updateClock() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("clock").innerText = time;
}
setInterval(updateClock, 1000);
updateClock();


// TIMER
let seconds = 0;
let interval = null;

function timerFormat(sec) {
    let hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    let mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    let secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(() => {
        seconds++;
        document.getElementById("timer").innerText = timerFormat(seconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    document.getElementById("timer").innerText = "00:00:00";
}
