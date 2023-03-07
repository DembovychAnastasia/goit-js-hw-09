const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let intervalId;

//Функція для зміни кольору - рандомна
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Функція зміни кольору
function backgroundColorchange() {
    document.body.style.background = getRandomHexColor();
  }
  
  function startColorChanging() {
    // Встановлення інтервалу зміни кольору
    intervalId = setInterval(backgroundColorchange, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
  }
  
  function stopColorChanging() {
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
  }

startButton.addEventListener('click', startColorChanging);
stopButton.addEventListener('click', stopColorChanging);