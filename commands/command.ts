import { Config } from "../models/config";

export interface Command {
    execute(args: { 
        command?: string,
        client?: any,
        channel?: string,
        tags?: any,
        config?: Config
    }): void;
}