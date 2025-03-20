import React from 'react';
import { Drawer } from 'expo-router/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { TouchableOpacity, Text } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { cn } from '@/lib/utils';
// Custom Drawer Layout Component
const CustomDrawer = () => {
    const pathname = usePathname();
    const router = useRouter();

    // Define our navigation items
    const drawerItems = [
        {
            name: "(home)",
            title: "Home",
            route: "/",
            icon: "home-outline",
        },
        {
            name: "(home)/product/index",
            title: "Product",
            route: "/product",
            icon: "cube-outline",
        },
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
    ];

    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#f5f5f5',
                },
                headerTintColor: '#333',
                drawerStyle: {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRadius: 0,
                    width: 280,
                    overflow: 'hidden',
                },
            }}
            drawerContent={(props) => {
                return (
                    <DrawerContentScrollView
                        {...props}
                        className='rounded-none'
                    >
                        {drawerItems.map((item) => {
                           const isActive = pathname === item.route ||
                           (pathname.startsWith(item.route) && item.route !== "/");                       

                            return (
                                <TouchableOpacity
                                    key={item.title}
                                    className={
                                        cn(
                                            "flex-row items-center p-[12px_16px] mb-1",
                                            isActive && "bg-[#e6f2ff]"
                                        )
                                    }
                                    onPress={() => router.push(item.route as any)}
                                >
                                    <Ionicons
                                        name={item.icon}
                                        size={22}
                                        className='mr-3'
                                        color={isActive ? '#0066cc' : '#333'}
                                    />
                                    <Text
                                        className={
                                            cn(
                                                "text-md text-[#333]",
                                                isActive && "text-[#0066cc] font-medium"
                                            )
                                        }
                                    >
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </DrawerContentScrollView>
                );
            }}
        >
             {drawerItems.map((item) => (
        <Drawer.Screen 
          key={item.name}
          name={item.name}
          options={{
            title: item.route === "/" ? "" : item.title,
            headerTitle: "",
          }}
        />
      ))}
        </Drawer>
    );
};
export default CustomDrawer;