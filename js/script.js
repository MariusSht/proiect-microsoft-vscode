// Cool Cars Showcase - JavaScript
// Future interactivity and effects can be added here

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth interactions
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
        });
    });
});
