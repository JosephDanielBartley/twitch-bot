"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCommand = void 0;
var ProjectCommand = /** @class */ (function () {
    function ProjectCommand() {
    }
    ProjectCommand.prototype.execute = function (args) {
        args.client.say(args.channel, 'We are working on a Twitch Chat Bot that can handle commands like this and notify when follows and such happen');
    };
    return ProjectCommand;
}());
exports.ProjectCommand = ProjectCommand;
