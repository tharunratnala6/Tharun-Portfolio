document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for "I am a UI/UX" text
const typingText = document.querySelector('.highlight');
const words = ['Student ', 'Problem Solver ', 'Web Developer '];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const displayText = isDeleting
        ? currentWord.substring(0, letterIndex--)
        : currentWord.substring(0, letterIndex++);

    typingText.textContent = displayText;

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500); // Pause before typing the next word
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

typeEffect();
