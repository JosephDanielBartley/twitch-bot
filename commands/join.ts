import * as path from 'path';

import { Command } from "./command";
import { cwd } from "process";
import { readFileOrCreate, writeFile } from '../helpers/filesystem';

export class JoinCommand implements Command {
    filePath = path.join(cwd(), 'data/players.json');

    execute(args: {tags: any}) {
        let players: string[] = JSON.parse(readFileOrCreate(this.filePath));
        if (!players) {
            players = [];
            this.addPlayer(players, args.tags['display-name']);
        }
        else if (!players.includes(args.tags['display-name'])) {
            this.addPlayer(players, args.tags['display-name']);
        }
    }

    private addPlayer(players: string[], playerName: string) {
        players.push(playerName);
        writeFile(this.filePath, JSON.stringify(players, null, '\t'));
    }
}