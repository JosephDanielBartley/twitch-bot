import { Command } from "./command";

export class HelloCommand implements Command {
    execute(args: {client: any, channel: string}) {
        args.client.say(args.channel, 'hi, how ya doin\'?');
    }
}