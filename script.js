// Navbar toggle
let hamburgIcon = document.querySelector('.hamburg');
let cancelIcon = document.querySelector('.cancel');
let dropdown = document.querySelector('.dropdown');

function hamburg() {
    dropdown.style.transform = "translateY(0)";
}

function cancel() {
    dropdown.style.transform = "translateY(-500px)";
}

// Typewriter effect
const typewriterText = document.querySelector(".typewriter-text");
const words = ["Web Developer", "Cybersecurity Professional", "Front-end Designer"];
let currentWord = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentText = words[currentWord].substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        currentText = words[currentWord].substring(0, letterIndex + 1);
        letterIndex++;
    }

    typewriterText.textContent = currentText;

    if (!isDeleting && currentText === words[currentWord]) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentWord = (currentWord + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 100 : 200);
}

document.addEventListener("DOMContentLoaded", type);
