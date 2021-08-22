import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let id = null;
const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function randomBgClr() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(1, colors.length)];
};

function startRandomBgClr() {
  refs.start.disabled = true
  refs.start.classList.add('active')
  id = setInterval(randomBgClr, 1000);
};
function stopRandomBgClr() {
  refs.start.disabled = false;
  refs.start.classList.remove('active')
  clearInterval(id)
};

refs.start.addEventListener('click', startRandomBgClr);
refs.stop.addEventListener('click', stopRandomBgClr);