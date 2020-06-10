"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WheelCommand = void 0;
var WheelCommand = /** @class */ (function () {
    function WheelCommand() {
    }
    WheelCommand.prototype.execute = function (args) {
        args.client.say(args.channel, 'Thrustmaster T300 RS https://amzn.to/2XL4y2m');
    };
    return WheelCommand;
}());
exports.WheelCommand = WheelCommand;
