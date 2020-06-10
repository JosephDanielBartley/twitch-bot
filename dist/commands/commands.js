"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsCommand = void 0;
var CommandsCommand = /** @class */ (function () {
    function CommandsCommand() {
    }
    CommandsCommand.prototype.execute = function (args) {
        args.client.say(args.channel, '!project, !discord, !idea {insert idea here}, !quote, !hello, !wheel, !pedals, !twitter, !website, !join, !d4, !d6, !d8, !d10, !d12, !d20, !d100');
    };
    return CommandsCommand;
}());
exports.CommandsCommand = CommandsCommand;
