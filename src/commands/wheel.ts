import { Command } from "./command";

export class WheelCommand implements Command {
    execute(args: {client: any, channel: string}) {
        args.client.say(args.channel, 'Thrustmaster T300 RS https://amzn.to/2XL4y2m');
    }
}