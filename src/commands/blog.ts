import { Command } from "./command";

export class BlogCommand implements Command {
    execute(args: {client: any, channel: string}) {
        args.client.say(args.channel, 'Read my stuff at https://www.josephdanielbartley.com');
    }
}