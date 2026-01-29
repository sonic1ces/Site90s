function send() {
    const nick = document.getElementById('nick').value || "Гость";
    const msg = document.getElementById('msg').value;
    const win = document.getElementById('chat-window');

    if (msg.trim() !== "") {
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const div = document.createElement('div');
        div.innerHTML = `<span style="color:gray">[${time}]</span> <span class="user-name">&lt;${nick}&gt;</span> ${msg}`;
        win.appendChild(div);
        
        document.getElementById('msg').value = "";
        win.scrollTop = win.scrollHeight;
        localStorage.setItem('chat_backup', win.innerHTML);
    }
}

window.onload = function() {
    if(localStorage.getItem('chat_backup')) {
        document.getElementById('chat-window').innerHTML = localStorage.getItem('chat_backup');
    }
}