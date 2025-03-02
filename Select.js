// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Get all section links
    const sectionLinks = document.querySelectorAll("ul li a");

    // Add click event listener to each link
    sectionLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the selected section name from the link text
            const selectedSection = this.textContent.trim();

            // Store the selected section in localStorage
            localStorage.setItem("selectedSection", selectedSection);

            // Redirect to Exam.html
            window.location.href = "Exam.html";
        });
    });
});