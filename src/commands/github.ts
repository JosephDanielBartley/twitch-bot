import { Command } from "./command";

export class GitHubCommand implements Command {
    execute(args: {client: any, channel: string}) {
        args.client.say(args.channel, 'Find my work on GitHub at https://github.com/JosephDanielBartley');
    }
}