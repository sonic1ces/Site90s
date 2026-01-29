// --- СКРИПТ ПАДАЮЩЕГО СНЕГА ---
const snowContainer = document.getElementById('snow-container');
const numSnowflakes = 50;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '*';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;
    snowflake.style.fontSize = Math.random() * 10 + 8 + 'px';
    const duration = Math.random() * 10 + 5;
    snowflake.style.animation = `fall ${duration}s linear infinite`;
    snowflake.style.animationDelay = `-${Math.random() * duration}s`;
    snowContainer.appendChild(snowflake);
}

for (let i = 0; i < numSnowflakes; i++) { createSnowflake(); }

// --- СКРИПТ ТАЙМЕРА ---
function updateTimer() {
    var now = new Date();
    var targetDate = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0).getTime();
    var diff = targetDate - now.getTime();
    if (diff < 0) {
        document.getElementById("countdown").innerHTML = "С НОВЫМ ГОДОМ!!!";
        return;
    }
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + " дн. " + hours + " ч. " + minutes + " мин. " + seconds + " сек.";
}
setInterval(updateTimer, 1000);
updateTimer();