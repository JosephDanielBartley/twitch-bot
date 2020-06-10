"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoutoutCommand = void 0;
var ShoutoutCommand = /** @class */ (function () {
    function ShoutoutCommand() {
    }
    ShoutoutCommand.prototype.execute = function (args) {
        var name = args.command.split(' ')[1];
        args.client.say(args.channel, "Shoutout to twitch.tv/" + name);
    };
    return ShoutoutCommand;
}());
exports.ShoutoutCommand = ShoutoutCommand;
