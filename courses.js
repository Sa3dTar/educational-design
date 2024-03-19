document.addEventListener('DOMContentLoaded', function() {
    // Example: Toggle course descriptions
    const courseDescriptions = document.querySelectorAll('.course p');
    
    courseDescriptions.forEach(function(description) {
        description.style.display = 'none'; // Hide descriptions by default

        description.previousElementSibling.addEventListener('click', function() {
            if (description.style.display === 'none') {
                description.style.display = 'block'; // Show description on click
            } else {
                description.style.display = 'none'; // Hide description if already visible
            }
        });
    });
});
