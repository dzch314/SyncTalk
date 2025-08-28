# SyncTalk 
### Audio and text interleave app

----
## Running the Project Locally
### Requirements
- Node.JS `v22.18.0`
- npm `v10.9.3`

Install dependencies

`npm install`

`npm run pods`

### If you want to change input files (.json and .mp3) please change them with saving their naming in [assets](/assets) folder before building the app.

Start the local development server:

`npm run start`

Build and launch the app on preferred OS:

`npm run ios`

`npm run android`

----
## Available Scripts

- `npm run android` - Build and launch the app on Android devices
- `npm run ios` - Build and launch the app on iOS devices
- `npm run start` - Start the local development server
- `npm run clean` - Reset dependencies and iOS Pods for a fresh setup
- `npm run pods`- Install iOS dependencies via CocoaPods
- `npm run prettier` - Format the codebase for consistent style

----
## Architecture
This project follows the [Feature-Sliced Design (FSD)](https://feature-sliced.design/) architecture

## Screens
- [MainScreen](/src/pages/LoginPage)

## Entities
- [MessagesList](/src/entities/MessagesList)
- [Player](/src/entities/Player)
