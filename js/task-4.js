const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    const userData = {
        email,
        password,
    }

    const formFields = form.elements;
    for (let i = 0; i < formFields.length; i++) {
        if (formFields[i].type !== 'submit' && formFields[i].value.trim() === '') {
            alert('All form fields must be filled in');
            event.preventDefault();
            return;
        }
    }

    console.log(userData);
    form.reset();

}