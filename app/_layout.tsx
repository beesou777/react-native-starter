import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ActivityIndicator, View } from 'react-native';
import { AuthProvider } from './(auth)/context/auth-contenxt';
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawer from '@/components/common/drawer';
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout({children}:{children:React.ReactNode}) {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <CustomDrawer />
          {children}
        </GestureHandlerRootView>
        <Toast />
      </AuthProvider>
    </QueryClientProvider>
  );
}