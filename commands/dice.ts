import { Command } from "./command";

export class DiceCommand implements Command {
    sides: number;

    constructor(sides: number) {
        this.sides = sides;
    }

    execute(args: { client: any, channel: string, tags: any }): void {
        const num = this.rollDice();
        args.client.say(args.channel, `${args.tags['display-name']} rolled a d${this.sides} for a result of ${num}`);
    }

    private rollDice() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}