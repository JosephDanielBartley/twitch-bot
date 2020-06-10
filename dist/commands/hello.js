"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloCommand = void 0;
var HelloCommand = /** @class */ (function () {
    function HelloCommand() {
    }
    HelloCommand.prototype.execute = function (args) {
        args.client.say(args.channel, 'hi, how ya doin\'?');
    };
    return HelloCommand;
}());
exports.HelloCommand = HelloCommand;
