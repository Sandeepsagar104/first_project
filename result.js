// Retrieve stored results
const userResults = JSON.parse(localStorage.getItem("userResults")) || [];
const users = JSON.parse(localStorage.getItem("users")) || [];
const resultDetails = document.getElementById("resultDetails");

// Get logged-in user's username
const username = users.length > 0 && users[0].username ? users[0].username : "Guest";

// Find the latest result of the logged-in user
const userResult = userResults.reverse().find(result => result.username === username);

if (userResult) {
    resultDetails.innerHTML = `
        <p><strong>${userResult.username}</strong>, you scored <strong>${userResult.score}</strong> out of <strong>${userResult.totalQuestions}</strong>.</p>
        <p>Your performance: <strong>${((userResult.score / userResult.totalQuestions) * 100).toFixed(2)}%</strong></p>
    `;
} else {
    resultDetails.innerHTML = "<p>No result found. Please take the exam first.</p>";
}
