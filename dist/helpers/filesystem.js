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
exports.writeFile = exports.readFileOrCreate = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var process_1 = require("process");
function readFileOrCreate(filePath) {
    var exists = fs.existsSync(filePath);
    if (exists) {
        var result = fs.readFileSync(filePath).toString();
        return result;
    }
    else {
        if (!fs.existsSync(path.join(process_1.cwd(), 'data'))) {
            fs.mkdirSync(path.join(process_1.cwd(), 'data'));
        }
        fs.writeFileSync(filePath, JSON.stringify(''));
        return '';
    }
}
exports.readFileOrCreate = readFileOrCreate;
function writeFile(filePath, data) {
    if (!fs.existsSync(path.join(process_1.cwd(), 'data'))) {
        fs.mkdirSync(path.join(process_1.cwd(), 'data'));
    }
    fs.writeFileSync(filePath, data);
}
exports.writeFile = writeFile;
