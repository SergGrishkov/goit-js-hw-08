function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('div#boxes');

btnCreate.addEventListener('click', e => {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
});

btnDestroy.addEventListener('click', e => {
  destroyBoxes();
});

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let backgroundColor;
  const arrayDiv = [];
  for (let i = 0; i < amount; i++) {
    backgroundColor = getRandomHexColor();
    arrayDiv.push(
      `<div style="width: ${width}px; height: ${height}px; background-color: ${backgroundColor}"></div>`
    );
    width += 10;
    height += 10;
  }
  boxes.innerHTML = arrayDiv.join('');
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}
