import { Command } from "./command";
import { gameWindow } from "../main";

export class MoveCommand implements Command {
    execute(args: { command: string, user: any }) {
        let directions = args.command.split(' ');
        directions = directions.splice(1, directions.length - 1);
        gameWindow.webContents.send('move', {directions: directions, name: args.user['display-name']});
    }
}