
//adopt form validation


const email = document.getElementById('email');
const form = document.querySelector('form');
const error = email.nextElementSibling;


const emailVal =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
window.addEventListener("load", () => {
    const isValid = email.value.length === 0 || emailVal.test(email.value);
    email.className = isValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
    const isValid = email.value.length === 0 || emailVal.test(email.value);
    if (isValid) {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    } else {
        email.className = "invalid";
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = email.value.length === 0 || emailVal.test(email.value);
    if (!isValid) {
        email.className = "invalid";
        error.textContent = "Please enter a valid email!";
        error.className = "error active";
    } else {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    }
});



function message(){
    const age = document.getElementById('age');
    const pet = document.getElementById('pet-wanted');
    const name = document.getElementById('form-name')
    const phonenum = document.getElementById('phone-num');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(name.value === '' || email.value === '' || age.value === '' || pet.value === '' || phonenum.value ==='' ){
        danger.style.display = 'block';
    } else {
        setTimeout(() => {
            name.value = '';
            email.value = '';
            age.value = '';
            pet.value = '';
            phonenum.value = '';
        }, 2000);
        
        success.style.display = 'block';
    }

    setTimeout(() =>{
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}


