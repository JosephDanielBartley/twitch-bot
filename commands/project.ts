import { Command } from "./command";

export class ProjectCommand implements Command {
    execute(args: {client: any, channel: string}) {
        args.client.say(args.channel, 'We are working on a Twitch Chat Bot that can handle commands like this and notify when follows and such happen');
    }
}