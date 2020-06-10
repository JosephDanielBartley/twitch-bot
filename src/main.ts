import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { startServer } from "./server";
import { TwitchAPI } from "./twitch-api";
import { Config } from './models/config';
import { readFileOrCreate } from './helpers/filesystem';
import { cwd } from 'process';

const config: Config = JSON.parse(readFileOrCreate(path.join(cwd(), 'secret.json')));
const twitchAPI = new TwitchAPI(config);

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

app.whenReady().then(() => {
    const win = createFollowerAlertWindow();
    startServer(win);
    twitchAPI.subscribeToFollows();
});