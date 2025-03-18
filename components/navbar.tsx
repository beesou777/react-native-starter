"use client"

import React from "react"
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native"
import { Home, Search, Bell, User } from "lucide-react"
import { useRouter, usePathname } from "expo-router"

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const tabs: { name: string; icon: any; route: string }[] = [
    { name: "Home", icon: Home, route: "/" },
    { name: "Product", icon: Search, route: "/product" },
    { name: "Notifications", icon: Bell, route: "/notifications" },
    { name: "Profile", icon: User, route: "/profile" },
  ]

  return (
    <SafeAreaView className="absolute bottom-0 left-0 right-0 h-16 bg-indigo-600 shadow-lg border-t border-indigo-700 z-10">
      <View className="flex-row items-center justify-around h-full">
        {tabs.map((tab) => {
          const isActive = pathname === tab.route

          return (
            <TouchableOpacity
              key={tab.name}
              onPress={() => router.replace(tab.route as any)}
              className="items-center justify-center px-4"
            >
              <View className={`p-2 rounded-full ${isActive ? "bg-indigo-500" : ""}`}>
                {React.createElement(tab.icon, {
                  size: 22,
                  color: isActive ? "#FFFFFF" : "#E0E7FF",
                  strokeWidth: 2,
                })}
              </View>
              <Text className={`text-xs mt-1 ${isActive ? "text-white font-bold" : "text-indigo-100"}`}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default Navbar
