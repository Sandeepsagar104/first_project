
let examData = [];

// Mapping of sections to their respective questions
const sectionQuestions = {
    "English Language": [
        {
            question: "What is the synonym of 'Happy'?",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            correctAnswer: "Joyful",
        },
        {
            question: "What is the plural of 'Child'?",
            options: ["Childs", "Children", "Childes", "Childies"],
            correctAnswer: "Children",
        },
        {
            question: "What is the antonym of 'Brave'?",
            options: ["Cowardly", "Fearless", "Bold", "Courageous"],
            correctAnswer: "Cowardly",
        },
        {
            question: "What is the past tense of 'Run'?",
            options: ["Ran", "Running", "Runs", "Runned"],
            correctAnswer: "Ran",
        },
        {
            question: "What is the synonym of 'Angry'?",
            options: ["Furious", "Calm", "Happy", "Sad"],
            correctAnswer: "Furious",
        },
        {
            question: "What is the plural of 'Mouse'?",
            options: ["Mouses", "Mice", "Mousees", "Mices"],
            correctAnswer: "Mice",
        },
        {
            question: "What is the synonym of 'Beautiful'?",
            options: ["Gorgeous", "Ugly", "Plain", "Simple"],
            correctAnswer: "Gorgeous",
        },
        {
            question: "What is the antonym of 'Light'?",
            options: ["Dark", "Bright", "Heavy", "Clear"],
            correctAnswer: "Dark",
        },
        {
            question: "What is the past tense of 'Eat'?",
            options: ["Ate", "Eaten", "Eating", "Eats"],
            correctAnswer: "Ate",
        },
        {
            question: "What is the synonym of 'Quick'?",
            options: ["Fast", "Slow", "Steady", "Lazy"],
            correctAnswer: "Fast",
        },
        {
            question: "What is the plural of 'Goose'?",
            options: ["Gooses", "Geese", "Goosies", "Geeses"],
            correctAnswer: "Geese",
        },
        {
            question: "What is the antonym of 'Hot'?",
            options: ["Cold", "Warm", "Boiling", "Spicy"],
            correctAnswer: "Cold",
        },
        {
            question: "What is the past tense of 'Sing'?",
            options: ["Sang", "Sung", "Singing", "Sings"],
            correctAnswer: "Sang",
        },
        {
            question: "What is the synonym of 'Big'?",
            options: ["Large", "Small", "Tiny", "Little"],
            correctAnswer: "Large",
        },
        {
            question: "What is the plural of 'Tooth'?",
            options: ["Tooths", "Teeth", "Toothies", "Teethes"],
            correctAnswer: "Teeth",
        },
        {
            question: "What is the antonym of 'Young'?",
            options: ["Old", "New", "Fresh", "Youthful"],
            correctAnswer: "Old",
        },
        {
            question: "What is the past tense of 'Write'?",
            options: ["Wrote", "Written", "Writing", "Writes"],
            correctAnswer: "Wrote",
        },
        {
            question: "What is the synonym of 'Smart'?",
            options: ["Intelligent", "Dumb", "Foolish", "Slow"],
            correctAnswer: "Intelligent",
        },
        {
            question: "What is the plural of 'Man'?",
            options: ["Mans", "Men", "Manes", "Mens"],
            correctAnswer: "Men",
        },
        {
            question: "What is the antonym of 'Strong'?",
            options: ["Weak", "Powerful", "Tough", "Sturdy"],
            correctAnswer: "Weak",
        },
        {
            question: "What is the past tense of 'Drink'?",
            options: ["Drank", "Drunk", "Drinking", "Drinks"],
            correctAnswer: "Drank",
        },
        {
            question: "What is the synonym of 'Small'?",
            options: ["Tiny", "Large", "Big", "Huge"],
            correctAnswer: "Tiny",
        },
        {
            question: "What is the plural of 'Woman'?",
            options: ["Womans", "Women", "Womens", "Womanes"],
            correctAnswer: "Women",
        },
        {
            question: "What is the antonym of 'Rich'?",
            options: ["Poor", "Wealthy", "Affluent", "Prosperous"],
            correctAnswer: "Poor",
        },
        {
            question: "What is the past tense of 'Swim'?",
            options: ["Swam", "Swum", "Swimming", "Swims"],
            correctAnswer: "Swam",
        },
    ],
    "General Intelligence": [
        {
            question: "Select the option that is related to the fifth number in the same way as the second number is related to the first number and the fourth number is related to the third number.\n\n58 : 319 :: 32 : 176 :: 76 : ?.",
            options: ["442", "428", "418", "286"],
            correctAnswer: "418",
        },
        {
            question: "By interchanging the given two signs, which of the following equations will NOT be correct?\n\n+ and –\nI. 18 ÷ 3 + 8 × 5 – 4 = ?\nII. 6 + 8 × 9 ÷ 3 – 4 = 14",
            options: ["Neither I nor II", "Only I", "Both I and II", "Only II"],
            correctAnswer: "Only I",
        },
        {
            question: "If 'PEN' is written as 'OEM', how will 'BOOK' be written?",
            options: ["ANJN", "APJP", "ANJP", "APJN"],
            correctAnswer: "ANJP",
        },
        {
            question: "Find the missing number in the series: 2, 6, 12, 20, ?",
            options: ["30", "32", "34", "36"],
            correctAnswer: "30",
        },
        {
            question: "If 'CAT' is coded as '3120', how will 'DOG' be coded?",
            options: ["4157", "4158", "4159", "4160"],
            correctAnswer: "4157",
        },
        {
            question: "Which number will replace the question mark in the following series?\n\n3, 7, 16, 35, ?",
            options: ["74", "75", "76", "77"],
            correctAnswer: "74",
        },
        {
            question: "If 'APPLE' is coded as 'ELPPA', how will 'ORANGE' be coded?",
            options: ["EGNARO", "EGNORA", "EGNARO", "EGNROA"],
            correctAnswer: "EGNARO",
        },
        {
            question: "Find the odd one out: 8, 27, 64, 100, 125, 216",
            options: ["8", "27", "100", "216"],
            correctAnswer: "100",
        },
        {
            question: "If 'MAN' is coded as '28', how will 'WOMAN' be coded?",
            options: ["58", "59", "60", "61"],
            correctAnswer: "58",
        },
        {
            question: "Which number will replace the question mark in the following series?\n\n5, 11, 23, 47, ?",
            options: ["95", "96", "97", "98"],
            correctAnswer: "95",
        },
        {
            question: "If 'TIGER' is coded as 'VKIGT', how will 'LION' be coded?",
            options: ["NKQP", "NKQR", "NKQS", "NKQT"],
            correctAnswer: "NKQP",
        },
        {
            question: "Find the missing number in the series: 1, 4, 9, 16, ?",
            options: ["25", "26", "27", "28"],
            correctAnswer: "25",
        },
        {
            question: "If 'DOG' is coded as '4157', how will 'CAT' be coded?",
            options: ["3120", "3121", "3122", "3123"],
            correctAnswer: "3120",
        },
        {
            question: "Which number will replace the question mark in the following series?\n\n2, 5, 10, 17, ?",
            options: ["26", "27", "28", "29"],
            correctAnswer: "26",
        },
        {
            question: "If 'BIRD' is coded as 'DJSF', how will 'FISH' be coded?",
            options: ["HKUJ", "HKVJ", "HKWJ", "HKXJ"],
            correctAnswer: "HKUJ",
        },
        {
            question: "Find the odd one out: 3, 5, 7, 9, 11, 13",
            options: ["3", "5", "9", "13"],
            correctAnswer: "9",
        },
        {
            question: "If 'HORSE' is coded as 'KQURF', how will 'COW' be coded?",
            options: ["FQY", "FQX", "FQZ", "FQW"],
            correctAnswer: "FQY",
        },
        {
            question: "Which number will replace the question mark in the following series?\n\n1, 3, 6, 10, ?",
            options: ["15", "16", "17", "18"],
            correctAnswer: "15",
        },
        {
            question: "If 'SNAKE' is coded as 'TMBLF', how will 'TIGER' be coded?",
            options: ["UJHFS", "UJHFT", "UJHFU", "UJHFV"],
            correctAnswer: "UJHFS",
        },
        {
            question: "Find the missing number in the series: 3, 9, 27, ?",
            options: ["81", "82", "83", "84"],
            correctAnswer: "81",
        },
        {
            question: "If 'LION' is coded as 'MJPM', how will 'BEAR' be coded?",
            options: ["CFBS", "CFBT", "CFBU", "CFBV"],
            correctAnswer: "CFBS",
        },
        {
            question: "Which number will replace the question mark in the following series?\n\n4, 9, 16, 25, ?",
            options: ["36", "37", "38", "39"],
            correctAnswer: "36",
        },
        {
            question: "If 'TIGER' is coded as 'VKIGT', how will 'LION' be coded?",
            options: ["NKQP", "NKQR", "NKQS", "NKQT"],
            correctAnswer: "NKQP",
        },
        {
            question: "Find the odd one out: 2, 4, 8, 16, 32, 64, 100",
            options: ["2", "4", "100", "64"],
            correctAnswer: "100",
        },
        {
            question: "If 'DOG' is coded as '4157', how will 'CAT' be coded?",
            options: ["3120", "3121", "3122", "3123"],
            correctAnswer: "3120",
        },
    ],
    "Qualitative Aptitude": [
        {
            question: "What is 10% of 50?",
            options: ["5", "10", "15", "20"],
            correctAnswer: "5",
        },
        {
            question: "What is the square root of 64?",
            options: ["6", "8", "10", "12"],
            correctAnswer: "8",
        },
        {
            question: "What is 20% of 200?",
            options: ["20", "30", "40", "50"],
            correctAnswer: "40",
        },
        {
            question: "What is the cube of 3?",
            options: ["9", "18", "27", "36"],
            correctAnswer: "27",
        },
        {
            question: "What is 15% of 300?",
            options: ["30", "40", "45", "50"],
            correctAnswer: "45",
        },
        {
            question: "What is the square of 12?",
            options: ["144", "124", "134", "154"],
            correctAnswer: "144",
        },
        {
            question: "What is 25% of 400?",
            options: ["50", "75", "100", "125"],
            correctAnswer: "100",
        },
        {
            question: "What is the cube root of 64?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "4",
        },
        {
            question: "What is 30% of 500?",
            options: ["100", "125", "150", "175"],
            correctAnswer: "150",
        },
        {
            question: "What is the square of 15?",
            options: ["225", "235", "245", "255"],
            correctAnswer: "225",
        },
        {
            question: "What is 40% of 600?",
            options: ["200", "220", "240", "260"],
            correctAnswer: "240",
        },
        {
            question: "What is the cube of 4?",
            options: ["64", "74", "84", "94"],
            correctAnswer: "64",
        },
        {
            question: "What is 50% of 700?",
            options: ["300", "325", "350", "375"],
            correctAnswer: "350",
        },
        {
            question: "What is the square root of 144?",
            options: ["10", "11", "12", "13"],
            correctAnswer: "12",
        },
        {
            question: "What is 60% of 800?",
            options: ["400", "450", "480", "500"],
            correctAnswer: "480",
        },
        {
            question: "What is the cube of 5?",
            options: ["125", "135", "145", "155"],
            correctAnswer: "125",
        },
        {
            question: "What is 70% of 900?",
            options: ["600", "620", "630", "640"],
            correctAnswer: "630",
        },
        {
            question: "What is the square of 20?",
            options: ["400", "410", "420", "430"],
            correctAnswer: "400",
        },
        {
            question: "What is 80% of 1000?",
            options: ["700", "750", "800", "850"],
            correctAnswer: "800",
        },
        {
            question: "What is the cube root of 125?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "5",
        },
        {
            question: "What is 90% of 1100?",
            options: ["900", "950", "990", "1000"],
            correctAnswer: "990",
        },
        {
            question: "What is the square of 25?",
            options: ["625", "635", "645", "655"],
            correctAnswer: "625",
        },
        {
            question: "What is 100% of 1200?",
            options: ["1000", "1100", "1200", "1300"],
            correctAnswer: "1200",
        },
        {
            question: "What is the cube of 6?",
            options: ["216", "226", "236", "246"],
            correctAnswer: "216",
        },
        {
            question: "What is 5% of 1500?",
            options: ["50", "75", "100", "125"],
            correctAnswer: "75",
        },
    ],
    "General Awareness": [
        {
            question: "Who became the first athlete to win Gold in Yogasana at the 36th National Games, India in 2022?",
            options: ["Manisha Kumari", "Soham Swami", "Raja Gupta", "Pooja Patel"],
            correctAnswer: "Pooja Patel",
        },
        {
            question: "As of 2022, India is the ______ largest economy in the world (as measured by nominal GDP).",
            options: ["Third", "Second", "Fourth", "Fifth"],
            correctAnswer: "Fifth",
        },
        {
            question: "Which among the following peaks is the highest peak of Jharkhand?",
            options: ["Kangto", "Parasnath", "Girnar", "Anamudi"],
            correctAnswer: "Parasnath",
        },
        {
            question: "Aga Khan Palace is located in ______ city of Maharashtra.",
            options: ["Aurangabad", "Mumbai", "Pune", "Ahmednagar"],
            correctAnswer: "Pune",
        },
        {
            question: "In September 2022, who was appointed as the Attorney General of India?",
            options: ["Ram Jethmalani", "KK Venugopal", "R Venkataramani", "Mukul Rohtagi"],
            correctAnswer: "R Venkataramani",
        },
        {
            question: "Which of the following is NOT an application software?",
            options: ["Graphics software", "Spreadsheet software", "Operating systems", "Word-processing software"],
            correctAnswer: "Operating systems",
        },
        {
            question: "Somewhat before the time of the Mauryan Empire, about ______ years ago, emperors in China began building the Great Wall.",
            options: ["2400", "1200", "600", "3500"],
            correctAnswer: "2400",
        },
        {
            question: "Chikungunya is an infection caused by ______ mosquito.",
            options: ["Anopheles", "Aedes", "Mansonia", "Culex"],
            correctAnswer: "Aedes",
        },
        {
            question: "Which among the following is another word for universe?",
            options: ["Astronomy", "Cosmos", "Big Crunch", "Supernova"],
            correctAnswer: "Cosmos",
        },
        {
            question: "Neeti wants to use an input device that works by sensing the user’s finger movement and downward pressure. Which among the following should she use?",
            options: ["Scanner", "Light pen", "Keyboard", "Touchpad"],
            correctAnswer: "Touchpad",
        },
        {
            question: "Who among the following received the OSCAR for the best actor in leading role in 2022?",
            options: ["Andrew Garfield", "Benedict Cumberbatch", "Will Smith", "Denzel Washington"],
            correctAnswer: "Will Smith",
        },
        {
            question: "In which year was the Dowry Prohibition Act passed in India?",
            options: ["1954", "1982", "1973", "1961"],
            correctAnswer: "1961",
        },
        {
            question: "Which among the following lakes is also known as the 'Srinagar's Jewel'?",
            options: ["Vembanad", "Tsomgo", "Loktak", "Dal"],
            correctAnswer: "Dal",
        },
        {
            question: "Who among the following was the architect of the Integrated Guided Missile Development Program (IGMDP) in India?",
            options: ["Vikram Sarabhai", "Homi J. Bhabha", "Har Gobind Khorana", "A. P. J. Abdul Kalam"],
            correctAnswer: "A. P. J. Abdul Kalam",
        },
        {
            question: "Who received a Nobel Peace Prize for dismantling apartheid in South Africa?",
            options: ["Rabindranath Tagore", "Nelson Mandela", "Mahatma Gandhi", "Albert John Lutuli"],
            correctAnswer: "Nelson Mandela",
        },
        {
            question: "“Pay Roll Automation for Disbursement of Monthly Allowances (PADMA)” was launched in June 2022 by Ministry of ______.",
            options: ["Defence", "Finance", "Culture", "Civil Aviation"],
            correctAnswer: "Defence",
        },
        {
            question: "In India, palm, coconut, keora, agar are the common trees of which of the following forests?",
            options: ["Tropical Evergreen Forests", "Montane Forests", "Mangrove Forests", "Tropical Deciduous Forests"],
            correctAnswer: "Mangrove Forests",
        },
        {
            question: "Shri Mani Prasad is associated with which form of music?",
            options: ["Folk Music", "Carnatic vocal music", "Hindustani vocal music", "Fusion Music"],
            correctAnswer: "Hindustani vocal music",
        },
        {
            question: "Who was the first female Muslim ruler of India?",
            options: ["Jahanara", "Razia Sultan", "Zebunnissa", "Chand Bibi"],
            correctAnswer: "Razia Sultan",
        },
        {
            question: "Raman wants to use a rear-view mirror in his vehicle. Which type of mirror should he pick for it?",
            options: ["Convex Mirrors", "Concave Mirrors", "Plane Mirrors", "Cylindrical Mirrors"],
            correctAnswer: "Convex Mirrors",
        },
        {
            question: "Which pass connects the Kullu Valley with the Lahaul and Spiti Valleys of Himachal Pradesh, India?",
            options: ["Banihal Pass", "Rohtang Pass", "Lipulekh Pass", "Thamarassery Pass"],
            correctAnswer: "Rohtang Pass",
        },
        {
            question: "The Planning Commission of India was replaced by NITI Aayog in ______.",
            options: ["2018", "2016", "2017", "2015"],
            correctAnswer: "2015",
        },
        {
            question: "PV Sindhu, a famous badminton player of India, won _______ Open title in July 2022.",
            options: ["Singapore", "Thailand", "Denmark", "India"],
            correctAnswer: "Singapore",
        },
        {
            question: "Which of the following is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correctAnswer: "Canberra",
        },
        {
            question: "Which of the following is the largest desert in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
            correctAnswer: "Antarctic",
        },
    ],
};

// Fetch exam data based on the selected section
function fetchExamData() {
    const selectedSection = localStorage.getItem("selectedSection");
    if (selectedSection && sectionQuestions[selectedSection]) {
        examData = sectionQuestions[selectedSection];
        document.getElementById("examTitle").textContent = `${selectedSection} Exam`;
    } else {
        examData = []; // No questions if no section is selected
        document.getElementById("examTitle").textContent = "Exam";
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
        examName: localStorage.getItem("selectedSection") || "",
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
