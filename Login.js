const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');

// Check if there's a saved username and pre-fill it if 'Remember me' was checked
window.onload = function () {
    if (localStorage.getItem('rememberedUsername')) {
        usernameInput.value = localStorage.getItem('rememberedUsername');
        rememberMeCheckbox.checked = true;
    }
}

// Handle form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
        alert("Please fill in both the username and password fields.");
        return;
    }

    if (rememberMeCheckbox.checked) {

        localStorage.setItem('rememberedUsername', username);
    } else {

        localStorage.removeItem('rememberedUsername');
    }

    alert(`Welcome, ${username}! You have successfully logged in.`);

});
