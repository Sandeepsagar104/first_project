document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate inputs
    if (!username || !password) {
        showMessage('Username and password are required.', 'red');
        return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists and the password matches
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Login successful
        showMessage('Login successful! Redirecting...', 'green');
        localStorage.setItem("user", JSON.stringify(user));
        setTimeout(() => {
            window.location.href = 'dashboard.html'; // Redirect to dashboard or home page
        }, 1000);
    } else {
        // Login failed
        showMessage('Invalid username or password.', 'red');
    }
});

function showMessage(message, color) {
    const loginMessageElement = document.getElementById('loginMessage');
    loginMessageElement.textContent = message;
    loginMessageElement.style.color = color;
}