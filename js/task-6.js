function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const valueInput = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = valueInput.value;

  if (amount >= 1 && amount <= 100) {
    const boxItem = Array.from({ length: amount });
    boxes.append(...boxItem.map(createBox));
    valueInput.value = '';
  }
}


function createBox(_, index) {
      const box = document.createElement('div');
      box.style.width = `${20 + (index + 1) * 10}px`;
      box.style.height = `${20 + (index + 1) * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      return box;
    }

function destroyBoxes() {
  boxes.innerHTML = '';
}

