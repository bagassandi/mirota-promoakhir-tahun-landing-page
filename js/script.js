// Countdown Timer
const countdownElement = document.getElementById("countdown");

// Set the date we're counting down to (misalnya 31 Januari 2025)
const countDownDate = new Date("Jan 31, 2025 23:59:59").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown ends, display a message
    if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "PROMO TELAH BERAKHIR";
    }
}, 1000);
