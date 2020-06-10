"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceCommand = void 0;
var DiceCommand = /** @class */ (function () {
    function DiceCommand(sides) {
        this.sides = sides;
    }
    DiceCommand.prototype.execute = function (args) {
        var num = this.rollDice();
        args.client.say(args.channel, args.tags['display-name'] + " rolled a d" + this.sides + " for a result of " + num);
    };
    DiceCommand.prototype.rollDice = function () {
        return Math.floor(Math.random() * this.sides) + 1;
    };
    return DiceCommand;
}());
exports.DiceCommand = DiceCommand;
