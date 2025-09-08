![Typing SVG](https://readme-typing-svg.demolab.com?font=Roboto&weight=600&size=32&duration=2000&pause=1000&color=8805DE&vCenter=true&repeat=true&width=200&height=48&lines=SyncTalk)

<div style="display:flex;justify-content:space-around;">
<img style="border-radius:20px" src="./assets/icon.png" alt="SyncTalk icon" width="200">
</div>

----
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Native CLI](https://img.shields.io/badge/RN_CLI-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
----

### Audio and text interleave app for:

![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)

This repository provides an implementation of a small technical assignment. For more information, check the [Terms of Reference](ToR.png)

This is the first realization of assignment. To see the second one, please check [SyncTalk-expo](https://github.com/dzch314/SyncTalk-expo).

This realization uses [@react-native-community/cli](https://github.com/react-native-community/cli) to create apps only for iOS and Android.

----
## Running the Project Locally
### Requirements

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

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
This project follows the [🍰 Feature-Sliced Design (FSD)](https://feature-sliced.design/) architecture

## Screens
- [MainScreen](/src/pages/LoginPage)

## Entities
- [MessagesList](/src/entities/MessagesList)
- [Player](/src/entities/Player)

----

## Colors

The colors for this app were chosen based on the colors from the official [Ella](https://alpha.helloella.co/) page:

[![Color palette](/assets/colorPalette.png)](https://alpha.helloella.co/)
