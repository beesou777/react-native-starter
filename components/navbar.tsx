import React from "react"
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { useRouter, usePathname } from "expo-router"

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const tabs = [
    { name: "Home", icon: "home-outline", route: "/" },
    { name: "Product", icon: "search-outline", route: "/product" },
    { name: "Login", icon: "notifications-outline", route: "/login" },
    { name: "Register", icon: "person-outline", route: "/register" },
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
                <Icon name={tab.icon} size={22} color={isActive ? "#FFFFFF" : "#E0E7FF"} />
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
