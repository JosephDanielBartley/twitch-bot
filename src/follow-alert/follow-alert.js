const ipc = require('electron').ipcRenderer;

const container = document.getElementById('followers');

ipc.on('message', (event, data) => {
    const el = document.createElement('div');
    const audioEl = document.createElement('audio');
    audioEl.autoplay = true;
    audioEl.src = './../../assets/sounds/wow.mp3';
    container.appendChild(el);
    el.appendChild(audioEl);
    el.innerText = `${data} has followed`;

    setTimeout(() => audioEl.play(), 100);

    setTimeout(() => {
        container.removeChild(el);
    }, 10000);
});