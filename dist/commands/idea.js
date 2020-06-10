"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdeaCommand = void 0;
var path = __importStar(require("path"));
var process_1 = require("process");
var filesystem_1 = require("../helpers/filesystem");
var IdeaCommand = /** @class */ (function () {
    function IdeaCommand() {
        this.filePath = path.join(process_1.cwd(), 'data/idea.txt');
    }
    IdeaCommand.prototype.execute = function (args) {
        var displayName = args.tags['display-name'];
        var idea = displayName + ": " + args.command.substr(6);
        filesystem_1.writeFile(this.filePath, filesystem_1.readFileOrCreate(this.filePath).toString() + '\n' + idea);
        args.client.say(args.channel, displayName + " has added an idea");
    };
    return IdeaCommand;
}());
exports.IdeaCommand = IdeaCommand;
