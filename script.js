let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 1000);
  }
});

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;
  display.textContent = '00:00:00';
  laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    const lapTime = document.createElement('div');
    lapTime.textContent = display.textContent;
    lapTime.classList.add('lap-time');
    laps.appendChild(lapTime);
  }
});

function updateTime() {
  elapsedTime++;
  const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
  const seconds = (elapsedTime % 60).toString().padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}
