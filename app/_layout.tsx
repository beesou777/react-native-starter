import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import React, { useEffect } from "react"
import "react-native-reanimated"
import "../global.css"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ActivityIndicator, View } from "react-native"
import { AuthProvider } from "@/lib/auth-context"
import Toast from "react-native-toast-message"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import CustomDrawer from "@/components/common/drawer"
import { ThemeProvider, useTheme } from '@/lib/theme-context'
SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

// This wrapper applies the dark class to the root view based on theme
function ThemedRoot({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useTheme();
  
  return (
    <View className={`flex-1 ${isDarkMode ? 'dark' : ''}`}>
      {children}
    </View>
  );
}

// We need this separate component to use the useTheme hook
// since hooks can't be used directly in the main layout component
function ThemedApp({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemedRoot>
        <AuthProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <CustomDrawer />
            {children}
          </GestureHandlerRootView>
          <Toast />
        </AuthProvider>
      </ThemedRoot>
    </ThemeProvider>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemedApp>{children}</ThemedApp>
    </QueryClientProvider>
  )
}