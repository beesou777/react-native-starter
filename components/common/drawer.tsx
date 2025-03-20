import { Drawer } from "expo-router/drawer"
import Ionicons from "react-native-vector-icons/Ionicons"
import { DrawerContentScrollView } from "@react-navigation/drawer"
import { TouchableOpacity, Text, View } from "react-native"
import { usePathname, useRouter } from "expo-router"
import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/auth-context"
import React from "react"

const CustomDrawer = () => {
    const pathname = usePathname()
    const router = useRouter()
    const { user, logout } = useAuth()

    const drawerItems = [
        {
            name: "(home)",
            title: "Home",
            route: "/",
            icon: "home-outline",
        },
        {
            name: "(home)/product/index",
            title: "Products",
            route: "/product",
            icon: "cube-outline",
        },
        ...(user
            ? []
            : [
                {
                    name: "(auth)/login/index",
                    title: "Login",
                    route: "/login",
                    icon: "log-in-outline",
                },
                {
                    name: "(auth)/register/index",
                    title: "Register",
                    route: "/register",
                    icon: "person-add-outline",
                },
            ]),
        ...(user
            ? [
                {
                    name: "logout",
                    title: "Logout",
                    route: "#",
                    icon: "log-out-outline",
                    action: async () => {
                        await logout()
                        router.push("/")
                    },
                },
            ]
            : []),
    ]

    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: "#f5f5f5",
                },
                headerTintColor: "#333",
                drawerStyle: {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRadius: 0,
                    width: 280,
                    overflow: "hidden",
                },
            }}
            drawerContent={(props) => {
                return (
                    <DrawerContentScrollView {...props} className="rounded-none">
                        {user && (
                            <View className="p-4 mb-2 border-b border-gray-200">
                                <Text className="text-lg font-bold">
                                    {user.firstName} {user.lastName}
                                </Text>
                                <Text className="text-sm text-gray-500">{user.email}</Text>
                            </View>
                        )}

                        {drawerItems.map((item) => {
                            const isActive = pathname === item.route || (pathname.startsWith(item.route) && item.route !== "/")
                            return (
                                <TouchableOpacity
                                    key={item.title}
                                    className={cn("flex-row items-center p-[12px_16px] mb-1", isActive && "bg-[#e6f2ff]")}
                                    onPress={() => {
                                        if (item.action) {
                                            item.action()
                                        } else {
                                            router.push(item.route as any)
                                        }
                                    }}
                                >
                                    <Ionicons name={item.icon} size={22} className="mr-3" color={isActive ? "#0066cc" : "#333"} />
                                    <Text className={cn("text-md text-[#333]", isActive && "text-[#0066cc] font-medium")}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </DrawerContentScrollView>
                )
            }}
        >
            <Drawer.Screen
                name="(home)"
                options={{
                    title: "Home",
                    headerTitle: "Home",
                }}
            />
            <Drawer.Screen
                name="(home)/product/index"
                options={{
                    title: "Products",
                    headerTitle: "Products",
                }}
            />
            <Drawer.Screen
                name="(auth)/login/index"
                options={{
                    title: "Login",
                    headerTitle: "Login",
                }}
            />
            <Drawer.Screen
                name="(auth)/register/index"
                options={{
                    title: "Register",
                    headerTitle: "Register",
                }}
            />
        </Drawer>
    )
}

export default CustomDrawer