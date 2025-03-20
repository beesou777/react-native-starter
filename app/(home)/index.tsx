import React from "react"
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "expo-router"

const Home = () => {
    const { user, logout } = useAuth()
    const router = useRouter()

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="p-4">
                {user ? (
                    <>
                        <View className="bg-white rounded-xl p-6 shadow-lg mb-6">
                            <Text className="text-2xl font-bold mb-2 text-blue-700">Welcome, {user?.firstName || "User"}!</Text>
                            <Text className="text-gray-600 mb-4">You’ve successfully logged in to your account.</Text>

                            <Image
                                source={{ uri: user?.image || "https://via.placeholder.com/150" }}
                                style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
                            />
                        </View>

                        <View className="bg-white rounded-xl p-6 shadow-lg mb-6">
                            <Text className="text-lg font-semibold mb-2 text-gray-800">Dashboard Content</Text>
                            <Text className="text-gray-600 mb-4">
                                This is your personalized dashboard. You can track your progress and view your activity.
                            </Text>

                            <View className="bg-blue-50 p-4 rounded-lg mb-4">
                                <Text className="text-blue-800 font-medium">Your account is active and in good standing.</Text>
                            </View>
                            <View>
                                <TouchableOpacity className="bg-red-100 p-2 rounded-lg" onPress={() => logout()}>
                                    <Text className="text-center font-medium">Logout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                ) : (
                    <View className="bg-white rounded-xl p-6 shadow-lg">
                        <Text className="text-2xl font-bold text-center text-gray-700">Welcome</Text>
                        <Text className="text-gray-600 text-center mt-2 mb-4">
                            Please log in to access your personalized dashboard and track your fitness journey.
                        </Text>
                        <View className="flex items-center bg-gray-300">
                            <Image
                                source={{ uri: "https://via.placeholder.com/150" }}
                                style={{ width: 150, height: 150, marginBottom: 10 }}
                            />
                        </View>

                        <View>
                            <TouchableOpacity className="mt-4" onPress={() => router.push("/login")}>
                                <Text className="text-center text-blue-600 font-medium">
                                    Log in to get started!
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    )
}

export default Home
