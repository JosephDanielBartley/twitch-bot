const ipc = require('electron').ipcRenderer;

const body = document.getElementsByTagName('body')[0];
const goal = document.getElementById('goal');
const chat = document.getElementById('chat');

const size = 300;

const players = [];

const gameMode = 'solo'; // solo or cooperative

newGame();

ipc.on('join', (event, data) => {
    const playerIndex = players.findIndex(p => p.name === data.name);
    if (playerIndex === -1) {
        const el = document.createElement('div');
        el.style.backgroundColor = data.color;
        body.appendChild(el);
        el.innerText = data.name;
        randomSpawn(el);
        players.push({name: data.name, ball: el});
    } else {
        randomSpawn(players[playerIndex].ball);
    }
});

ipc.on('move', (event, data) => {
    if (gameMode === 'cooperative') {
        data.directions.forEach(dir => moveBall(chat, dir));
    } else if (gameMode === 'solo') {
        const index = players.findIndex(p => p.name === data.name);

        if (index != -1) {
            const player = players[index];
            data.directions.forEach(dir => moveBall(player, dir));
        }
    }
});

function newGame() {
    randomSpawn(goal);

    if (gameMode === 'cooperative') {
        const chat = document.createElement('div');
        body.appendChild(chat);
        chat.style.top = Math.floor(Math.random() * window.innerHeight - chat.style.height) + 'px';
        chat.style.left = Math.floor(Math.random() * window.innerWidth - chat.style.width) + 'px';
    }
}

function checkWin(player) {
    const elTop = getValueWithoutUnit(player.ball.style.top);
    const elLeft = getValueWithoutUnit(player.ball.style.left);

    const goalTop = getValueWithoutUnit(goal.style.top);
    const goalLeft = getValueWithoutUnit(goal.style.left);

    if(elTop === goalTop && elLeft === goalLeft) {
        ipc.send('winner', player.name);
        newGame();
    } else {
        console.log('not there yet');
    }
}

function getValueWithoutUnit(value) {
    return parseInt(value.substr(0, value.length-2));
}

function moveBall(player, direction) {
    direction = direction.toLowerCase();
    if (direction === 'left' || direction === 'l') {
        player.ball.style.left = `${getValueWithoutUnit(player.ball.style.left) - size}px`;
    } else if (direction === 'right' || direction ==='r') {
        player.ball.style.left = `${getValueWithoutUnit(player.ball.style.left) + size}px`;
    } else if (direction === 'up' || direction ==='u') {
        player.ball.style.top = `${getValueWithoutUnit(player.ball.style.top) - size}px`;
    } else if (direction === 'down' || direction === 'd') {
        player.ball.style.top = `${getValueWithoutUnit(player.ball.style.top) + size}px`;
    }

    setTimeout(() => checkWin(player), 300);
}

function randomSpawn(el) {
    el.style.top = round(Math.floor(Math.random() * (window.innerHeight - el.style.height))) + 'px';
    el.style.left = round(Math.floor(Math.random() * (window.innerWidth - el.style.width))) + 'px';
}

function round(number) {
    return Math.floor(number/size) * size;
}