import { Command } from "./command";

export class WebsiteCommand implements Command {
    execute(args: {client: any, channel: string}) {
        args.client.say(args.channel, 'Let me know what you think of my website at https://www.josephdanielbartley.com');
    }
}