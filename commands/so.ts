import { Command } from "./command";

export class ShoutoutCommand implements Command {
    execute(args: { client: any, channel: string, command: string }) {
        const name = args.command.split(' ')[1];
        args.client.say(args.channel, `Shoutout to twitch.tv/${name}`);
    }
}