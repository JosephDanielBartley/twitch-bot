"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordCommand = void 0;
var DiscordCommand = /** @class */ (function () {
    function DiscordCommand() {
    }
    DiscordCommand.prototype.execute = function (args) {
        args.client.say(args.channel, 'Join me on Discord for fun and support at https://discord.gg/XdxbFWN');
    };
    return DiscordCommand;
}());
exports.DiscordCommand = DiscordCommand;
