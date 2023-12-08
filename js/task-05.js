function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const button = body.querySelector('button.change-color');
const span = body.querySelector('span.color');

button.addEventListener('click', event => {
  let rgbColor = getRandomHexColor();
  body.style.backgroundColor = rgbColor;
  span.textContent = rgbColor;
});
