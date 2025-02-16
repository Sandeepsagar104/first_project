let examData = [];

// Fetch exam data from localStorage or use default data
function fetchExamData() {
    const storedExamData = localStorage.getItem("examData");
    if (storedExamData) {
        examData = JSON.parse(storedExamData);
    } else {
        // Default exam data
        examData = [
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correctAnswer: "4",
            },
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Rome"],
                correctAnswer: "Paris",
            },
            {
                question: "What is 10 / 2?",
                options: ["2", "5", "10", "20"],
                correctAnswer: "5",
            },
        ];
        localStorage.setItem("examData", JSON.stringify(examData));
    }
    renderQuestions();
}

// Timer functionality
let timeRemaining = 600; // 10 minutes in seconds
const timerElement = document.getElementById("timer");

function updateTimer() {
    if (timerElement) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `Time Remaining: ${minutes}:${seconds.toString().padStart(2, "0")}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting your exam.");
            submitExam();
        } else {
            timeRemaining--;
        }
    }
}

const timerInterval = setInterval(updateTimer, 1000);

// Function to render questions
function renderQuestions() {
    const questionsContainer = document.getElementById("questionsContainer");
    if (!questionsContainer) return; // Ensure the container exists

    questionsContainer.innerHTML = ""; // Clear existing content

    examData.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";

        // Add question text
        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionDiv.appendChild(questionText);

        // Add options
        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";

        question.options.forEach((option) => {
            const label = document.createElement("label");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`; // Group by question
            input.value = option;

            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(optionsDiv);
        questionsContainer.appendChild(questionDiv);
    });
}

// Function to calculate score
function calculateScore() {
    let score = 0;

    examData.forEach((question, index) => {
        const selectedAnswer = document.querySelector(
            `input[name="question${index}"]:checked`
        )?.value;

        if (selectedAnswer === question.correctAnswer) {
            score++;
        }
    });

    return score;
}

// Save result to localStorage
function saveResult(score, totalQuestions) {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let username = users.length > 0 && users[0].username ? users[0].username : "Guest"; // Fetch username safely

    const result = {
        username: username,
        score: score,
        totalQuestions: totalQuestions,
        date: new Date().toLocaleDateString(),
        status: "completed", // Add status for pending results
    };

    // Get existing results from localStorage
    const userResults = JSON.parse(localStorage.getItem("userResults")) || [];
    userResults.push(result);

    // Save updated results to localStorage
    localStorage.setItem("userResults", JSON.stringify(userResults));
}

// Handle form submission
const examForm = document.getElementById("examForm");
if (examForm) {
    examForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const score = calculateScore();
        const totalQuestions = examData.length;

        // Save result to localStorage
        saveResult(score, totalQuestions);

        // Redirect to result page
        window.location.href = "Result.html";
    });
}

// Fetch exam data when the page loads
window.onload = fetchExamData;
