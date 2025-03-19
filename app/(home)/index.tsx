import React from "react"
import { SafeAreaView, Text, View, ScrollView } from "react-native"
import { useAuth } from "../(auth)/context/auth-contenxt"

const Home = () => {
    const { user } = useAuth()

    return (
            <ScrollView className="flex-1 bg-gray-50">
                <View className="p-4">
                    <View className="bg-white rounded-xl p-6 shadow-sm mb-4">
                        <Text className="text-2xl font-bold mb-2">Welcome, {user?.firstName || "User"}!</Text>
                        <Text className="text-gray-600">You've successfully logged in to the application.</Text>
                    </View>

                    <View className="bg-white rounded-xl p-6 shadow-sm">
                        <Text className="text-lg font-semibold mb-2">Dashboard Content</Text>
                        <Text className="text-gray-600 mb-4">
                            This is your personalized dashboard. Here you can see your activity and important information.
                        </Text>

                        <View className="bg-blue-50 p-4 rounded-lg">
                            <Text className="text-blue-800 font-medium">Your account is active and in good standing.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
    )
}

export default Home
