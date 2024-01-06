function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnColor = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

btnColor.addEventListener('click', e => {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = `${getRandomHexColor()}`;
})