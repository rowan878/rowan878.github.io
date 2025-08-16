// Array of available watch images
const watchImages = [
    '/img/YellowWatch.png',
    '/img/BlueWatch.png',
    '/img/LightPinkWatch.png',
    '/img/BrightPinkWatch.png'
    // Add more image paths as needed
];

// Function to select random image
function selectRandomImage() {
    const randomIndex = Math.floor(Math.random() * watchImages.length);
    const selectedImage = watchImages[randomIndex];
    document.getElementById('Watch').src = selectedImage;
}

// Countdown to 4pm mst September 8, 2025
function updateCountdown() {
    const now = new Date();
    const targetDate = new Date('September 8, 2025 16:00:00');
    const timeDifference = targetDate - now;
    
    // Check if the target date has passed
    if (timeDifference <= 0) {
        document.getElementById('digitalClock').textContent = "00:00:00:00";
        return;
    }
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Format the display
    const daysFormatted = String(days).padStart(2, '0');
    const hoursFormatted = String(hours).padStart(2, '0');
    const minutesFormatted = String(minutes).padStart(2, '0');
    const secondsFormatted = String(seconds).padStart(2, '0');
    
    // Display the countdown with days
    document.getElementById('digitalClock').textContent = 
        `${daysFormatted}:${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
}

function positionClock() {
    // The positioning is now handled by CSS, so this function can be simplified
    // or removed if no dynamic positioning is needed
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select random image on page load
    selectRandomImage();
    
    // Update countdown every second and a little
    setInterval(updateCountdown, 1200);
    updateCountdown(); // Initial call
    
    // When the image loads, position the clock at specific ratios
    document.getElementById('Watch').onload = function () {
        positionClock();
    }
    
    // Add click event to watch for Instagram link
    document.getElementById('Watch').addEventListener('click', function() {
        window.open('https://instagram.com/cult.of8', '_blank');
    });
    
    // Add resize event listener for responsive positioning
    window.addEventListener('resize', positionClock);
});
