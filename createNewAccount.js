document.getElementById('createAccountForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate inputs
    if (!username || !email || !password || !confirmPassword) {
        showError('All fields are required.');
        return;
    }

    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }

    // Create user object
    const user = {
        username: username,
        email: email,
        password: password // Note: In a real application, never store plain-text passwords. Use hashing.
    };

    // Save user data to localStorage
    saveUserData(user);
});

function showError(message) {
    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = message;
    errorMessageElement.style.color = 'red';
}


function saveUserData(user) {
    // Get existing users from localStorage (if any)
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username or email already exists
    const userExists = users.some(existingUser => 
        existingUser.username === user.username || existingUser.email === user.email
    );

    if (userExists) {
        showError('Username or email already exists.');
        return;
    }

    // Add new user to the data
    users.push(user);

    // Save updated data back to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(user));
    // Show success message
    showError('Account created successfully!');
    document.getElementById('errorMessage').style.color = 'green';

    // Clear the form
    document.getElementById('createAccountForm').reset();

    window.location.href = 'dashboard.html';
}
