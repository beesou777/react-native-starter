
# React Native App

This is a React Native app built using Expo, designed for mobile devices. It integrates various packages to enable a seamless experience across Android, iOS, and web platforms. The app uses Expo Router for navigation and implements common features such as vector icons, safe area handling, and more.

## Features

- **Navigation**: Uses React Navigation with both stack and bottom tabs.
- **API Integration**: Utilizes Axios for network requests and React Query for data fetching.
- **UI Components**: Implements Expo's UI components such as status bar, splash screen, and haptics.
- **Styling**: Tailwind CSS integration via NativeWind.
- **Platform Support**: Works across Android, iOS, and Web using Expo.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (>=16.x)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/beesou777/react-native-starter.git
    cd react-native-starter
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the App

- To start the app on Android:
    ```bash
    npm run android
    ```

- To start the app on iOS:
    ```bash
    npm run ios
    ```

- To start the app in the web browser:
    ```bash
    npm run start
    ```

- To reset the project (if needed):
    ```bash
    npm run reset-project
    ```

### Running Tests

To run the tests:
```bash
npm test
```

### Linting

To lint the project:
```bash
npm run lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

### LICENSE

MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.