import { ActivityIndicator, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { useAuth } from '../context/auth-contenxt'
import { LoginFormData, loginSchema } from './lib/schema'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'expo-router'
import Icon from 'react-native-vector-icons/Ionicons'
import { useState } from 'react'
import { useToast } from '@/hooks/useToast'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()
    const { login, isLoading, error } = useAuth()
    const toast = useToast()
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "emilys",
            password: "emilyspass",
        }
    })

    const onSubmit = async (data: LoginFormData) => {
        try {
            const { success, message } = await login(data.username, data.password)
            if (success) {
                toast("success", message)
                router.push("/")
            } else {
                toast("error", message)
            }
        } catch (error) {
            toast("error", "Something went wrong")
        }
    }

    return (
        <SafeAreaView className='bg-[#f5f5f5] flex-1'>
            <ScrollView className='flex-1 p-5'>
                <View className='mt-10 mb-8 items-center'>
                    <Text className='text-lg font-bold text-[#333] mb-2'>Welcome Back</Text>
                    <Text className='text-md text-gray-600'>Sign in to your account</Text>
                </View>

                <View className='bg-white rounded-lg p-5 shadow-[0_2px_4px_rgba(0,_0,_0,_0.1)] mb-16'>
                    <View className='space-y-4'>

                        <View className='mb-4'>
                            <Text className='mb-2 font-medium text-sm text-[#333]'>Username</Text>
                            <Controller
                                control={control}
                                name='username'
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        className='border border-gray-300 rounded-md p-3 bg-[#fafafa]'
                                        placeholder='Enter your username'
                                        value={value}
                                        onChangeText={onChange}
                                        autoCapitalize='none'
                                    />
                                )}
                            />
                            {errors.username && (
                                <Text className='text-red-500 text-sm mt-1'>{errors.username.message}</Text>
                            )}
                        </View>

                        <View className='mb-4'>
                            <Text className='mb-2 font-medium text-sm text-[#333]'>Password</Text>
                            <Controller
                                control={control}
                                name='password'
                                render={({ field: { onChange, value } }) => (
                                    <View>
                                        <TextInput
                                            className='border border-gray-300 rounded-md p-3 bg-[#fafafa]'
                                            placeholder='Create a password'
                                            value={value}
                                            onChangeText={onChange}
                                            secureTextEntry={!showPassword}
                                        /> <TouchableOpacity
                                            onPress={() => setShowPassword(!showPassword)}
                                            className='absolute top-3 right-3'
                                        >
                                            {
                                                showPassword ? (
                                                    <Icon name="eye-off" size={20} color="gray" onPress={() => setShowPassword(false)} />
                                                ) : (
                                                    <Icon name="eye" size={20} color="gray" onPress={() => setShowPassword(true)} />
                                                )
                                            }
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />
                            {errors.password && (
                                <Text className='text-red-500 text-sm mt-1'>{errors.password.message}</Text>
                            )}
                        </View>
                        <TouchableOpacity
                            className='bg-[#6366f1] p-4 rounded-md items-center mt-4 mb-4'
                            onPress={handleSubmit(onSubmit)}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <ActivityIndicator color="white" />
                            ) : (
                                <Text className='text-white font-medium'>Login</Text>
                            )}
                        </TouchableOpacity>

                        <View className='flex-row justify-center mt-4 mb-4'>
                            <Text className='text-gray-600'>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => router.push("/register")}>
                                <Text className='text-blue-500 font-medium'>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}