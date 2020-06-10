const ipc = require('electron').ipcRenderer;

const container = document.getElementById('followers');

ipc.on('message', (event, data) => {
    const el = document.createElement('div');
    container.appendChild(el);
    el.innerText = `${data} has followed`;

    setTimeout(() => {
        container.removeChild(el);
    }, 10000);
});