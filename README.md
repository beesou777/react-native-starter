# React Native App

This is a React Native app built using Expo, designed for mobile devices. It integrates various packages to enable a seamless experience across Android, iOS, and web platforms. The app uses Expo Router for navigation and implements common features such as vector icons, safe area handling, and more.

## Features

- **Navigation**: Uses React Navigation with both stack and bottom tabs.
- **API Integration**: Utilizes Axios for network requests and React Query for data fetching.
- **UI Components**: Implements Expo's UI components such as status bar, splash screen, and haptics.
- **Toast**: for toast message react-native-toast-message (use case on login/index.tsx)page 
- **Styling**: Tailwind CSS integration via NativeWind.
- **Platform Support**: Works across Android, iOS, and Web using Expo.
- **Icons**: Uses [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/) (Ionicons, AntDesign, etc.) for navigation icons.
- **Clsx as `cn`**: For conditional styling with Tailwind CSS.

### Example: Conditional Styling with `cn` (clsx)

In this example, we are using the `cn` function (from the `clsx` library) to conditionally apply styles to a `TouchableOpacity` component. The `isActive` state determines if a background color (`bg-[#e6f2ff]`) is applied.

### Code Example:

```tsx
import { cn } from '@/lib/utils'; // Import the cn utility

<TouchableOpacity
    key={item.name}
    className={cn(
        "flex-row items-center p-[12px_16px] mb-1", // Always applied classes
        isActive && "bg-[#e6f2ff]" // Conditional class based on isActive state
    )}
    onPress={() => router.push(item.route as any)} // Navigation on press
>
    {/* Child components */}
</TouchableOpacity>
```

### Explanation:
- `cn()` combines the base Tailwind classes and conditionally adds classes like `bg-[#e6f2ff]` based on the value of `isActive`.
- This pattern helps to keep the component styling clean and conditionally dynamic.

Make sure that you are importing `cn` correctly from your utils (or `clsx` directly) to avoid errors.

This format will give clear documentation on how to use conditional classes with `clsx` (`cn`) in your components.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (>=20.x)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/beesou777/react-native-starter.git
    cd react-native-starter
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

### Running the App

- To start the app on Android:
    ```bash
    yarn android
    ```

- To start the app on iOS:
    ```bash
    yarn ios
    ```

- To start the app in the web browser:
    ```bash
    yarn start
    ```

- To reset the project (if needed):
    ```bash
    yarn reset-project
    ```


### Build the App

Before building your app, you need to configure the project for EAS Build:

- To configure the project:
    ```bash
    yarn configure
    ```

- To build the app on Android:
    ```bash
    yarn build:android
    ```

- To build the app on iOS:
    ```bash
    yarn build:ios
    ```

### Running Tests

To run the tests:
```bash
npm test
```

### Linting

To lint the project:
```bash
yarn lint
```