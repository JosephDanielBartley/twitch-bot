"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = __importStar(require("path"));
var server_1 = require("./server");
var twitch_api_1 = require("./twitch-api");
var filesystem_1 = require("./helpers/filesystem");
var process_1 = require("process");
var config = JSON.parse(filesystem_1.readFileOrCreate(path.join(process_1.cwd(), 'secret.json')));
var twitchAPI = new twitch_api_1.TwitchAPI(config);
require('electron-reload')(path.join(process_1.cwd(), 'src'));
function createFollowerAlertWindow() {
    // Create the browser window.
    var win = new electron_1.BrowserWindow({
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
    win.setIgnoreMouseEvents(true, { forward: true });
    win.loadFile('../src/follow-alert/follow-alert.html');
    return win;
}
electron_1.app.whenReady().then(function () {
    var win = createFollowerAlertWindow();
    server_1.startServer(win);
    twitchAPI.subscribeToFollows();
});
