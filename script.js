const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const lower = document.querySelector('#lower');
const upper = document.querySelector('#upper');
const num = document.querySelector('#number');
const len = document.querySelector('#length');
const passwordMatch = document.querySelector('#password-check');

password.addEventListener('focus', () => {
    document.querySelector('ul').style.display = 'block';
});
password.addEventListener('blur', () => {
    document.querySelector('ul').style.display = 'none';
});

passwordConfirm.addEventListener('focus', () => {
    passwordMatch.style.display = 'block';
});
passwordConfirm.addEventListener('blur', () => {
    passwordMatch.style.display = 'none';
});

password.addEventListener('keyup', checkPassword);
passwordConfirm.addEventListener('keyup', confirmPassword);

function checkPassword(){
    var lowercase = /[a-z]/g;
    var uppercase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (password.value.match(lowercase)){
        lower.classList.remove('invalid');
    }
    else {
        lower.classList.add('invalid');
    }
    
    if (password.value.match(uppercase)){
        upper.classList.remove('invalid');
    }
    else {
        upper.classList.add('invalid');
    }

    if (password.value.match(numbers)){
        num.classList.remove('invalid');
    }
    else {
        num.classList.add('invalid');
    }

    if (password.value.length >= 6){
        len.classList.remove('invalid');
    }
    else {
        len.classList.add('invalid');
    }
    return;
}

function confirmPassword(){
    if (passwordConfirm.value == password.value){
        passwordMatch.classList.remove('invalid');
    }
    else {
        passwordMatch.classList.add('invalid');
    }
}