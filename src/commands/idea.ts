import * as path from 'path';
import { Command } from './command';
import { cwd } from 'process';
import { readFileOrCreate, writeFile } from '../helpers/filesystem';

export class IdeaCommand implements Command {
    filePath = path.join(cwd(), 'data/idea.txt');

    execute(args: {command: string, channel: string, client: any, tags: any}) {
        const displayName = args.tags['display-name'];
        const idea = `${displayName}: ${args.command.substr(6)}`;
        writeFile(this.filePath, readFileOrCreate(this.filePath).toString() + '\n' + idea);
        args.client.say(args.channel, `${displayName} has added an idea`);
    }
}