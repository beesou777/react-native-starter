import { Stack } from 'expo-router';
import React from 'react';
import Navbar from '@/components/navbar';


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Stack screenOptions={{ headerShown: false }}>
        {children}
      </Stack>
    </>
  );
};

export default RootLayout;
