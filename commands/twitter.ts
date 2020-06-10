import { Command } from "./command";

export class TwitterCommand implements Command {
    execute(args: {client: any, channel: string}) {
        args.client.say(args.channel, 'Follow me on twitter at https://twitter.com/josephdbartley');
    }
}