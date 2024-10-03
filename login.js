const loginButton = document.getElementById('login');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem('userData');
    const userData = storedData ? JSON.parse(storedData) : null;
    if (userData) {
        const { username, password, uniqueId } = userData;
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;
        if (enteredUsername === username && enteredPassword === password) {
        alert("Login successful!");
        window.location.href = './index.html'; 
        } else  {
            alert("Incorrect username or password");
        }
    } else {
        alert("No registered users found");
    }
});