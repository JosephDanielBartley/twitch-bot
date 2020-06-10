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
exports.followAlert = void 0;
var tmi = __importStar(require("tmi.js"));
var path = __importStar(require("path"));
var dice_1 = require("./commands/dice");
var idea_1 = require("./commands/idea");
var quote_1 = require("./commands/quote");
var join_1 = require("./commands/join");
var play_1 = require("./commands/play");
var hello_1 = require("./commands/hello");
var commands_1 = require("./commands/commands");
var discord_1 = require("./commands/discord");
var wheel_1 = require("./commands/wheel");
var pedals_1 = require("./commands/pedals");
var project_1 = require("./commands/project");
var twitter_1 = require("./commands/twitter");
var website_1 = require("./commands/website");
var so_1 = require("./commands/so");
var filesystem_1 = require("./helpers/filesystem");
var process_1 = require("process");
var config = JSON.parse(filesystem_1.readFileOrCreate(path.join(process_1.cwd(), 'secret.json')));
var client = tmi.client(config.tmiConfig);
client.on('message', onMessageHandler);
client.connect();
var commands = {
    '!commands': new commands_1.CommandsCommand(),
    '!project': new project_1.ProjectCommand(),
    '!discord': new discord_1.DiscordCommand(),
    '!idea': new idea_1.IdeaCommand(),
    '!d4': new dice_1.DiceCommand(4),
    '!d6': new dice_1.DiceCommand(6),
    '!d8': new dice_1.DiceCommand(8),
    '!d10': new dice_1.DiceCommand(10),
    '!d12': new dice_1.DiceCommand(12),
    '!d20': new dice_1.DiceCommand(20),
    '!d100': new dice_1.DiceCommand(100),
    '!quote': new quote_1.QuoteCommand(),
    '!hello': new hello_1.HelloCommand(),
    '!wheel': new wheel_1.WheelCommand(),
    '!pedals': new pedals_1.PedalsCommand(),
    '!twitter': new twitter_1.TwitterCommand(),
    '!website': new website_1.WebsiteCommand(),
    '!join': new join_1.JoinCommand(),
    '!play': new play_1.PlayCommand(),
    '!so': new so_1.ShoutoutCommand()
};
function followAlert(name, win) {
    client.say("#" + config.channel, name + " has followed");
    win.webContents.send('message', name);
}
exports.followAlert = followAlert;
function onMessageHandler(channel, user, message, self) {
    var _a;
    if (self || message.split('')[0] !== '!')
        return;
    var commandName = message.split(' ')[0];
    (_a = commands[commandName]) === null || _a === void 0 ? void 0 : _a.execute({
        command: message,
        client: client,
        channel: channel,
        tags: user,
        config: config
    });
}
