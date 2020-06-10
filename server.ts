import { followAlert } from './twitch';
const express = require('express');
const bodyParser = require('body-parser')

export function startServer() {
    const app = express();
    const port = 3000;

    app.use(bodyParser.json());
    
    app.get('/', (req, res) => res.send('Hello World!'));

    const follow = app.route('/follow');
    follow.get((req, res) => {
        console.log('subscription verification');
        res.send(req.query['hub.challenge']);
        res.status(200).end();
    });

    follow.post((req, res) => {
        followAlert(req.body.data[0].from_name);
        res.status(200).end();
    });
    
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
}
