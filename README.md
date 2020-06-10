# Twitch Chat Bot

## Setup

Fill out the secret.json file in the root with an object that looks like: 

```json
{
    "followerCallbackUrl": "[your follower callback url]",
    "channel": "[your channel name]",
    "channelId": "[your channel ID]",
    "secret": "[your app secret]",
    "tmiConfig": {
        "identity": {
            "username": "[your app name]",
            "password": "[your app oauth token]"
        },
        "options": {
            "clientId": "[your app clientId]"
        },
        "channels": [
            "[your channel name]"
        ]
    }
}
```

## Adding Commands 

- Create a file with your command in the commands directory that has a command class implementing the Command interface
- Add command to commands const in twitch.ts

## Removing Commands 

- Remove command from commands const in twitch.ts
- Remove file from commands directory

## Modifying commands 

- Modify logic in execute function of command in commands directory