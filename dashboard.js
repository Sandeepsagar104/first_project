// Check if the user is logged in
if (!localStorage.getItem("users")) {
    alert("You must be logged in to access this page!");
    window.location.href = "Login.html"; // Redirect to login page
}

// Fetch user results and other data from localStorage
function fetchDashboardData() {
    const userResults = JSON.parse(localStorage.getItem("userResults")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const examData = JSON.parse(localStorage.getItem("userResults")) || [];

    // Update overview cards
    document.getElementById("totalExams").textContent = examData.length;
    document.getElementById("totalStudents").textContent = users.length;
    document.getElementById("pendingResults").textContent = userResults.filter(
        (result) => result.status === "pending"
    ).length;

    // Display recent exams in the table
    displayRecentExams(userResults);

    // Display user results
    displayResults(userResults);
}

// Display recent exams in the table
function displayRecentExams(userResults) {
    const examTable = document.getElementById("examTable");
    if (!examTable) {
        console.error("Table with ID 'examTable' not found!");
        return;
    }

    examTable.innerHTML = ""; // Clear existing content

    if (userResults.length === 0) {
        examTable.innerHTML = `<tr><td colspan="4">No exams found. Take an exam to see your results.</td></tr>`;
        return;
    }

    userResults.forEach((result) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${result.examName}'s Exam</td>
            <td>${result.date}</td>
            <td>${result.status}</td>
            <td><button class="view-button" onclick="viewResult('${result.username}', '${result.date}')">View</button></td>
        `;
        examTable.appendChild(row);
    });
}

// Display results on the dashboard
function displayResults(userResults) {
    const resultContainer = document.getElementById("resultContainer");
    if (!resultContainer) {
        console.error("Result container not found!");
        return;
    }

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

// Function to view a specific result
function viewResult(username, date) {
    const userResults = JSON.parse(localStorage.getItem("userResults")) || [];
    const result = userResults.find(
        (result) => result.username === username && result.date === date
    );

    if (result) {
        alert(`Username: ${result.username}\nScore: ${result.score}/${result.totalQuestions}\nDate: ${result.date}`);
    } else {
        alert("Result not found!");
    }
}

// Fetch dashboard data when the page loads
window.onload = fetchDashboardData;