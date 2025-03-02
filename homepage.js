document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is logged in
    const user = localStorage.getItem("user");

    // Get the auth-button container
    const authButtonContainer = document.querySelector(".auth-button");

    if (user) {
        // Parse the user data
        const userData = JSON.parse(user);

        // Clear the existing buttons
        authButtonContainer.innerHTML = "";

        // Create a container for user details and logout button
        const userDetails = document.createElement("div");
        userDetails.className = "user-details";

        // Add user name
        const userName = document.createElement("span");
        userName.className = "user-name";
        userName.textContent = `Welcome, ${userData.username}`;
        userDetails.appendChild(userName);

        // Add logout button
        const logoutButton = document.createElement("button");
        logoutButton.className = "logout-btn";
        logoutButton.textContent = "Logout";
        userDetails.appendChild(logoutButton);

        // Append user details to the auth-button container
        authButtonContainer.appendChild(userDetails);

        // Add logout functionality
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("user");
            localStorage.removeItem("selectedSection")
            window.location.reload(); // Refresh the page to update the UI
        });
    }
});