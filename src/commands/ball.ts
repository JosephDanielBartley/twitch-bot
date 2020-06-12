import { gameWindow } from "../main";
import { ChatUserstate } from "tmi.js";
import { Command } from "./command";

export class BallCommand implements Command {
    execute(args: {user: ChatUserstate}) {
        gameWindow.webContents.send('join', { name: args.user['display-name'], color: args.user['color'] });
    }
}