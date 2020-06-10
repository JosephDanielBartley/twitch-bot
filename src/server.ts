import { followAlert } from './twitch';
import { Application, Request, Response } from 'express';
import { BrowserWindow } from 'electron';

const express = require('express');
const bodyParser = require('body-parser')

export function startServer(win: BrowserWindow) {
    const app: Application = express();
    const port = 3000;

    app.use(bodyParser.json());
    
    app.get('/', (req: Request, res: Response) => {
        return res.send('Hello World!');
    });

    const follow = app.route('/follow');
    follow.get((req: Request, res: Response) => {
        console.log('subscription verification');
        res.send(req.query['hub.challenge']);
        res.status(200).end();
    });

    follow.post((req: Request, res: Response) => {
        followAlert(req.body.data[0].from_name, win);
        res.status(200).end();
    });
    
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
}
