import { funnyCorrections } from './funnyCorrections.js';

function lieAutocorrect() {
    let userInput = document.getElementById("userInput").value;
    let outputText = document.getElementById("outputText");

    if (userInput.trim() === "") {
        outputText.textContent = "";
        outputText.style.opacity = "0";
        return;
    }

    // Replace the user's input with a random "lie"
    let randomLie = funnyCorrections[Math.floor(Math.random() * funnyCorrections.length)];
    outputText.textContent = `${userInput} -> ${randomLie}`;
    outputText.style.opacity = "1";
    outputText.style.transform = "scale(1)";

    // Add a shake animation for effect
    outputText.classList.add("shake");
    setTimeout(() => {
        outputText.classList.remove("shake");
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.container').classList.add('loaded');
});
