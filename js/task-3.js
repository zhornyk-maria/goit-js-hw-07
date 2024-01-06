const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const inputTrim = nameInput.value.trim();
    if (inputTrim !== '') {
        nameOutput.textContent = inputTrim;
    } else {
        nameOutput.textContent = 'Anonymous';
    }
});
