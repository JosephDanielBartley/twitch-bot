"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedalsCommand = void 0;
var PedalsCommand = /** @class */ (function () {
    function PedalsCommand() {
    }
    PedalsCommand.prototype.execute = function (args) {
        args.client.say(args.channel, 'Thrustmaster T300 RS https://amzn.to/2XL4y2m');
    };
    return PedalsCommand;
}());
exports.PedalsCommand = PedalsCommand;
