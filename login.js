function register() {
    const name = document.getElementById('name');
    const pw = document.getElementById('pw');
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const storedName = localStorage.getItem(name.value);

    if (name.value.length === 0) {
        alert('Please fill in email');
    } else if (pw.value.length === 0) {
        alert('Please fill in password');
    } else if (name.value.length === 0 && pw.value.length === 0) {
        alert('Please fill in email and password');
    } else if (pw.value.length < 8) {
        alert('Please enter a password of minimum 8 characters');
    } else if (!pw.value.match(numbers)) {
        alert('Please add at least 1 number');
    } else if (!pw.value.match(upperCaseLetters)) {
        alert('Please add at least 1 uppercase letter');
    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('Please add at least 1 lowercase letter');
    } else if (storedName) {
        alert('You already have an account');
    } else {
        localStorage.setItem(name.value, pw.value);
        alert('Congrats for your Register! Please log into your Account');
    }
}


// Add event listener to the Register button
document.getElementById('rgstr_btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    register();
});
function resetPassword() {
    const resetEmail = document.getElementById('resetEmail').value;
    const newPassword = document.getElementById('newPw').value;
    const newPasswordDiv = document.getElementById('new-password');

    if (resetEmail && newPassword) {
        localStorage.setItem(resetEmail, newPassword);
        alert('New password reset. Please login now');
    } else {
        alert('Please enter an email and a new password');
    }
}

function login() {
    const userName = document.getElementById('userName');
    const userPw = document.getElementById('userPw');
    const storedPw = localStorage.getItem(userName.value);

    if (storedPw === userPw.value) {
        alert('You are logged in.');
        window.location.href = 'index.html'; // Redirect to index.html
    } else {
        alert('Email or Password Incorrect');
    }
}

document.getElementById('reset-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('reset-form').style.display = 'block';
    document.getElementById('new-password').style.display = 'block';
});

document.getElementById('reset_btn').addEventListener('click', function(event) {
    event.preventDefault();
    resetPassword();
});

document.getElementById('login_btn').addEventListener('click', function(event) {
    event.preventDefault();
    login();
});
const signInBtn=document.querySelector('#sign-in-btn');
const signUpBtn=document.querySelector('#sign-up-btn');
const signer=document.querySelector('.signer');
const signInBtn2=document.querySelector('#sign-in-btn2');
const signUpBtn2=document.querySelector('#sign-up-btn2');

signUpBtn.addEventListener('click', () => {
    signer.classList.add('sign-up-mode');
});
signInBtn.addEventListener('click', () => {
    signer.classList.remove('sign-up-mode');
});

signInBtn2.addEventListener('click', () => {
    signer.classList.remove('sign-up-mode2');
});
signUpBtn2.addEventListener('click', () => {
    signer.classList.add('sign-up-mode2');
});
