import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
type User = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  image?: string
  token: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (username: string, password: string) => Promise<{ success: boolean; message: string }>
  register: (userData: RegisterData) => Promise<{ success: boolean; message: string }>
  logout: () => Promise<void>
  error: string | null
}

type RegisterData = {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if user is already logged in
    const loadUser = async () => {
      try {
        const userString = await AsyncStorage.getItem("user")
        const token = await AsyncStorage.getItem("token")

        if (userString && token) {
          // You can add a check to validate the token here, like sending a request to validate it
          setUser(JSON.parse(userString))
        }
      } catch (e) {
        console.error("Failed to load user data", e)
      }
    }

    loadUser()
  }, [])

  const login = async (username: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }

      // Store user data and token
      await AsyncStorage.setItem("token", data.accessToken)
      await AsyncStorage.setItem("user", JSON.stringify(data))

      setUser(data)
      return {
        success: true,
        message: "Login successful"
      }
    } catch (e: any) {
      setError(e.message || "Something went wrong")
      return {
        success: false,
        message: "Login failed"
      }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: RegisterData) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Registration failed")
      }

      return {
        success: true,
        message: "Registration successful"
      }

      // Registration successful, but we don't log the user in automatically
    } catch (e: any) {
      setError(e.message || "Something went wrong")
      return {
        success: false,
        message: "Registration failed"
      }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      // Clear stored data
      await AsyncStorage.removeItem("token")
      await AsyncStorage.removeItem("user")

      // Update state
      setUser(null)
    } catch (e) {
      console.error("Logout error:", e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, error }}>{children}</AuthContext.Provider>
  )
}
