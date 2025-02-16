
if (!localStorage.getItem("users")) {
    alert("You must be logged in to access this page!");
    window.location.href = "Login.html"; // Redirect to login page
}
// Fetch user results and other data from localStorage
function fetchDashboardData() {
    const userResults = JSON.parse(localStorage.getItem("userResults")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const examData = JSON.parse(localStorage.getItem("examData")) || [];

    // Update overview cards
    document.getElementById("totalExams").textContent = examData.length;
    document.getElementById("totalStudents").textContent = users.length;
    document.getElementById("pendingResults").textContent = userResults.filter(
        (result) => result.status === "pending"
    ).length;

    // Display user results
    displayResults(userResults);
}

// Display results on the dashboard
function displayResults(userResults) {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // Clear existing content

    if (userResults.length === 0) {
        resultContainer.innerHTML = "<p>No results found. Take an exam to see your results.</p>";
        return;
    }

    userResults.forEach((result, index) => {
        const resultDiv = document.createElement("div");
        resultDiv.className = "result-card";
        resultDiv.innerHTML = `
            <h3>Exam ${index + 1}</h3>
            <p>Username: ${result.username}</p>
            <p>Score: ${result.score}/${result.totalQuestions}</p>
            <p>Date: ${result.date}</p>
        `;
        resultContainer.appendChild(resultDiv);
    });
}

// Fetch dashboard data when the page loads
window.onload = fetchDashboardData;