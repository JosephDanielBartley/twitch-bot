import { Command } from "./command";

export class TodoCommand implements Command {
    execute(args: {client: any, channel: string}) {
        args.client.say(args.channel, 'Today we are working on making our visual follower alert look better');
    }
}