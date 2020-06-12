import { Config } from "../models/config";

export interface Command {
    execute(args: { 
        command?: string,
        client?: any,
        channel?: string,
        user?: any,
        config?: Config
    }): void;
}