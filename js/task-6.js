function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const valueInput = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


function createBoxes() {
  const amount = valueInput.value;

  if (amount >= 1 && amount <= 100) {
    const boxItem = Array.from({ length: amount });

    destroyBoxes();

    boxes.append(...boxItem.map(createBox));
    valueInput.value = '';
  }
}


function createBox(_, index) {
  const box = document.createElement('div');
 
  box.style.width = '30px';
  box.style.height = '30px';
  box.style.backgroundColor = getRandomHexColor();

  box.style.width = `${30 + index * 10}px`;
  box.style.height = `${30 + index * 10}px`;
  return box;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

