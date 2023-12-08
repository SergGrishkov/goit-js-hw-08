const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', event => {
  let text = event.target.value.trim();
  if (text === undefined || text === null || !text) {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = text;
  }
});
