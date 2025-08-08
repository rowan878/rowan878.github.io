document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.hint-message');
    let currentIndex = 0;
    
    function rotateMessages() {
        messages[currentIndex].classList.remove('active');
        messages[currentIndex].classList.add('fade-out');
                currentIndex = (currentIndex + 1) % messages.length;
        
        setTimeout(() => {
            messages.forEach(msg => msg.classList.remove('fade-out'));
            
            // Activate next message
            messages[currentIndex].classList.add('active');
        }, 400);
    }
    
    // Start the rotation
    setInterval(rotateMessages, 3300); // Change message every 3.3 seconds
});
