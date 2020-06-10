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
exports.JoinCommand = void 0;
var path = __importStar(require("path"));
var process_1 = require("process");
var filesystem_1 = require("../helpers/filesystem");
var JoinCommand = /** @class */ (function () {
    function JoinCommand() {
        this.filePath = path.join(process_1.cwd(), 'data/players.json');
    }
    JoinCommand.prototype.execute = function (args) {
        var players = JSON.parse(filesystem_1.readFileOrCreate(this.filePath));
        if (!players) {
            players = [];
            this.addPlayer(players, args.tags['display-name']);
        }
        else if (!players.includes(args.tags['display-name'])) {
            this.addPlayer(players, args.tags['display-name']);
        }
    };
    JoinCommand.prototype.addPlayer = function (players, playerName) {
        players.push(playerName);
        filesystem_1.writeFile(this.filePath, JSON.stringify(players, null, '\t'));
    };
    return JoinCommand;
}());
exports.JoinCommand = JoinCommand;
