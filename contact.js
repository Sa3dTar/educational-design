document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        let isValid = true;

        if (nameInput.value.trim() === '') {
            isValid = false;
            showError(nameInput, 'Please enter your name');
        } else {
            removeError(nameInput);
        }

        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
            isValid = false;
            showError(emailInput, 'Please enter a valid email address');
        } else {
            removeError(emailInput);
        }

        if (messageInput.value.trim() === '') {
            isValid = false;
            showError(messageInput, 'Please enter a message');
        } else {
            removeError(messageInput);
        }

        if (isValid) {
            // Simulate form submission (replace this with actual submission logic)
            alert('Form submitted successfully!');
            form.reset(); // Reset form fields
        }
    });

    function showError(input, message) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message');
        errorElement.textContent = message;
        formControl.classList.add('error');
    }

    function removeError(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('error');
    }

    function isValidEmail(email) {
        // Regular expression for validating email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
