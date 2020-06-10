import { Command } from "./command";

export class CommandsCommand implements Command {
    execute(args: {client: any, channel: string}) {
        args.client.say(args.channel, '!project, !discord, !idea {insert idea here}, !quote, !hello, !wheel, !pedals, !twitter, !website, !join, !d4, !d6, !d8, !d10, !d12, !d20, !d100');
    }
}