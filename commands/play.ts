import * as path from 'path';

import { Command } from './command';
import { cwd } from 'process';
import { Config } from '../models/config';
import { readFileOrCreate, writeFile } from '../helpers/filesystem';

export class PlayCommand implements Command {
    filePath = path.join(cwd(), 'data/players.json');

    execute(args: {client: any, channel: string, tags: any, config: Config}) {
        if (args.tags['display-name'] === args.config.channel) {
            const players: string[] = JSON.parse(readFileOrCreate(this.filePath));
            if (players.length === 0) {
                args.client.say(args.channel, 'There are no players');
                return;
            }
            
            const winner = players[Math.floor(Math.random() * players.length)];
            args.client.say(args.channel, 'The winner of the game is....');
            setTimeout(() => args.client.say(args.channel, winner), 3000);
            writeFile(this.filePath, '[]');
        }
    }
}