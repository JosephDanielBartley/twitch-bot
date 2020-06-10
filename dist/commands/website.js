"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteCommand = void 0;
var WebsiteCommand = /** @class */ (function () {
    function WebsiteCommand() {
    }
    WebsiteCommand.prototype.execute = function (args) {
        args.client.say(args.channel, 'Let me know what you think of my website at https://www.josephdanielbartley.com');
    };
    return WebsiteCommand;
}());
exports.WebsiteCommand = WebsiteCommand;
