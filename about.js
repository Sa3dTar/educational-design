document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const hiddenSection = document.getElementById('hiddenSection');

    toggleButton.addEventListener('click', function() {
        if (hiddenSection.style.display === 'none') {
            hiddenSection.style.display = 'block';
        } else {
            hiddenSection.style.display = 'none';
        }
    });
});