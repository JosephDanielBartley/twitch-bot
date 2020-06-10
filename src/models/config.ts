export interface Config {
    followerCallbackUrl: string;
    channel: string;
    channelId: number;
    secret: string;
    tmiConfig: {
        identity: {
            username: string,
            password: string,
        },
        options: {
            clientId: string
        },
        channels: string[]
    };
}