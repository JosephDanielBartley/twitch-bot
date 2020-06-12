const ipc = require('electron').ipcRenderer;

const tablebody = document.getElementsByTagName('tbody')[0];

let players;

ipc.on('load', (event, data) => {
    players = data;
    renderTable(players);
});

ipc.on('update', (event, data) => {
    console.log(data)
    const playerIndex = players.findIndex(p => p.name === data.name);

    if(playerIndex != -1) {
        players[playerIndex].score = data.score;
    } else {
        players.push(data);
    }

    renderTable(players);
});

function renderTable(data) {
    tablebody.innerHTML = '';

    data.sort((a, b) => b.score - a.score);
    data.forEach(d => {
        const el = document.createElement('tr');

        const name = document.createElement('td');
        name.innerText = d.name;

        const score = document.createElement('td');
        score.innerText = d.score;

        el.appendChild(name);
        el.appendChild(score);

        tablebody.appendChild(el);
    });
}