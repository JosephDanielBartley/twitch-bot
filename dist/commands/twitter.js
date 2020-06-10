"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterCommand = void 0;
var TwitterCommand = /** @class */ (function () {
    function TwitterCommand() {
    }
    TwitterCommand.prototype.execute = function (args) {
        args.client.say(args.channel, 'Follow me on twitter at https://twitter.com/josephdbartley');
    };
    return TwitterCommand;
}());
exports.TwitterCommand = TwitterCommand;
