import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { startServer } from "./server";
import { TwitchAPI } from "./twitch-api";
import { Config } from './models/config';
import { readFileOrCreate } from './helpers/filesystem';
import { cwd } from 'process';
import { winnerAlert } from './twitch';

const config: Config = JSON.parse(readFileOrCreate(path.join(cwd(), 'secret.json')));
const twitchAPI = new TwitchAPI(config);
export let gameWindow: BrowserWindow;
let leaderboardWindow: BrowserWindow;

require('electron-reload')(path.join(cwd(), 'src'));

function createFollowerAlertWindow () {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1200,
        height: 1200,
        frame: false,
        alwaysOnTop: true,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        },
    });
    
    // and load the index.html of the app.
    win.setIgnoreMouseEvents(true, {forward: true});
    win.loadFile('../src/follow-alert/follow-alert.html');
    
    return win;
}

function createGameWindow () {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 3840,
        height: 2160,
        frame: false,
        alwaysOnTop: true,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        },
    });
    
    // and load the index.html of the app.
    win.setIgnoreMouseEvents(true, {forward: true});
    win.loadFile('../src/game/game.html');

    ipcMain.on('winner', (event, data) => {
        winnerAlert(data, leaderboardWindow);
    });
    
    return win;
}

function createLeaderboardWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 1200,
        x: 2250,
        y: 0,
        frame: false,
        alwaysOnTop: true,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        },
    });

    win.loadFile('../src/leaderboard/leaderboard.html');

    win.webContents.on('did-finish-load', () => {
        const playerScores = JSON.parse(readFileOrCreate(path.join(cwd(), 'data/scores.json'))).filter((p: {name: string}) => p.name != config.channel);
        win.webContents.send('load', playerScores);
    });

    return win;
}

app.whenReady().then(() => {
    const win = createFollowerAlertWindow();
    gameWindow = createGameWindow();

    leaderboardWindow = createLeaderboardWindow();
    startServer(win);
    twitchAPI.subscribeToFollows();
});