import * as path from 'path';
import { startServer } from "./server";
import { TwitchAPI } from "./twitch-api";
import { Config } from './models/config';
import { readFileOrCreate } from './helpers/filesystem';
import { cwd } from 'process';

const config: Config = JSON.parse(readFileOrCreate(path.join(cwd(), 'secret.json')));
const twitchAPI = new TwitchAPI(config);

startServer();
twitchAPI.subscribeToFollows();
