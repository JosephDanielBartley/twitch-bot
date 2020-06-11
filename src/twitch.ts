import * as tmi from 'tmi.js';
import * as path from 'path';
import { DiceCommand } from './commands/dice';
import { IdeaCommand } from './commands/idea';
import { QuoteCommand } from './commands/quote';
import { JoinCommand } from './commands/join';
import { PlayCommand } from './commands/play';
import { HelloCommand } from './commands/hello';
import { CommandsCommand } from './commands/commands';
import { DiscordCommand } from './commands/discord';
import { WheelCommand } from './commands/wheel';
import { PedalsCommand } from './commands/pedals';
import { ProjectCommand } from './commands/project';
import { TwitterCommand } from './commands/twitter';
import { WebsiteCommand } from './commands/website';
import { ShoutoutCommand } from './commands/so';
import { Config } from './models/config';
import { readFileOrCreate } from './helpers/filesystem';
import { cwd } from 'process';
import { Command } from './commands/command';
import { BrowserWindow } from 'electron';
import { GitHubCommand } from './commands/github';
import { BlogCommand } from './commands/blog';

const config: Config = JSON.parse(readFileOrCreate(path.join(cwd(), 'secret.json')));
const client = tmi.client(config.tmiConfig);
client.on('message', onMessageHandler);
client.connect();

const commands: Record<string, Command> = {
    '!commands': new CommandsCommand(),
    '!project': new ProjectCommand(),
    '!discord': new DiscordCommand(),
    '!idea': new IdeaCommand(),
    '!d4': new DiceCommand(4),
    '!d6': new DiceCommand(6),
    '!d8': new DiceCommand(8),
    '!d10': new DiceCommand(10),
    '!d12': new DiceCommand(12),
    '!d20': new DiceCommand(20),
    '!d100': new DiceCommand(100),
    '!quote': new QuoteCommand(),
    '!hello': new HelloCommand(),
    '!wheel': new WheelCommand(),
    '!pedals': new PedalsCommand(),
    '!twitter': new TwitterCommand(),
    '!website': new WebsiteCommand(),
    '!join': new JoinCommand(),
    '!play': new PlayCommand(),
    '!so': new ShoutoutCommand(),
    '!github': new GitHubCommand(),
    '!blog': new BlogCommand()
}

export function followAlert(name: string, win: BrowserWindow) {
    client.say(`#${config.channel}`, `${name} has followed`);
    win.webContents.send('message', name);
}

function onMessageHandler(channel: string, user: tmi.ChatUserstate, message: string, self: boolean) {
    if (self || message.split('')[0] !== '!') return;

    const commandName = message.split(' ')[0];
    commands[commandName]?.execute({
        command: message,
        client: client,
        channel: channel,
        tags: user,
        config: config
    });
}

