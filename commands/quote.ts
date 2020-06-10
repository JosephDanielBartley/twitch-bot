import * as path from 'path';

import { Command } from "./command";
import { cwd } from 'process';
import { readFileOrCreate } from '../helpers/filesystem';

export class QuoteCommand implements Command {
    filePath = path.join(cwd(), 'data/quotes.json');
    
    execute(args: {client: any, channel: string}) {
        const quotes = JSON.parse(readFileOrCreate(this.filePath));
        if (quotes.length === 0) {
            args.client.say(args.channel, 'You don\'t have any quotes at the moment. To learn how to add quotes go to https://github.com/JosephDanielBartley/twitch-bot');
        } else {
            const rando = Math.floor(Math.random() * quotes.length);
            args.client.say(args.channel, quotes[rando]);
        }
    }
}