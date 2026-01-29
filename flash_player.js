window.RufflePlayer = window.RufflePlayer || {};

// Настройка параметров эмуляции перед загрузкой
window.RufflePlayer.config = {
    "publicPath": undefined,
    "polyfills": true,
    "autoplay": "on",
    "unmuteOverlay": "hidden", // Убирает лишние наложения поверх игры
    "letterbox": "on",
    "warnOnUnsupportedContent": false
};

window.addEventListener("load", () => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("flash-container");
    
    if (container) {
        container.appendChild(player);
        
        // Стилизуем сам плеер, чтобы он заполнил блок
        player.style.width = "100%";
        player.style.height = "100%";

        player.load({
            url: "clicker.swf", // Твой файл кликера
            allowFullscreen: true,
            backgroundColor: "#000000",
            wmode: "opaque" // Позволяет HTML-элементам (типа снега) быть поверх Flash
        }).then(() => {
            console.log("Flash-кликер успешно запущен через Ruffle!");
        }).catch((e) => {
            console.error("Ошибка загрузки SWF:", e);
        });
    }
});