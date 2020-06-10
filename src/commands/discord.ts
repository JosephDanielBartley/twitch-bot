import { Command } from "./command";

export class DiscordCommand implements Command {
    execute(args: {client: any, channel: string}) {
        args.client.say(args.channel, 'Join me on Discord for fun and support at https://discord.gg/XdxbFWN');
    }
}