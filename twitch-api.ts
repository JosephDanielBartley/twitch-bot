import axios from 'axios';
import { Config } from './models/config';

export class TwitchAPI {
    token: string;
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    private async getToken() {
        const response = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${this.config.tmiConfig.options.clientId}&client_secret=${this.config.secret}&grant_type=client_credentials`);
        return response.data;
    }

    async subscribeToFollows() {
        const tokenData = await this.getToken();

        axios.post('https://api.twitch.tv/helix/webhooks/hub', {
            'hub.callback': this.config.followerCallbackUrl,
            'hub.mode': 'subscribe',
            'hub.topic': `https://api.twitch.tv/helix/users/follows?first=1&to_id=${this.config.channelId}`,
            'hub.lease_seconds': 864000
        }, 
        {
            headers: {
                'Client-ID': this.config.tmiConfig.options.clientId,
                'Authorization': `Bearer ${tokenData['access_token']}`,
            }
        }).then(res => console.log('subscribed'))
        .catch(console.log);
    }
}