// You can add JavaScript code here if needed
// This is just a placeholder example

// Example: Display a greeting message based on the time of day
document.addEventListener('DOMContentLoaded', function() {
    const currentTime = new Date().getHours();
    let greeting;

    if (currentTime < 12) {
        greeting = 'Good morning!';
    } else if (currentTime < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
});
