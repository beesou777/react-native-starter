import z from 'zod'

export const loginSchema = z.object({
    username: z.string().min(3, "username is required"),
    password: z.string().min(6, { message: "Password is required" }),
})

export type LoginFormData = z.infer<typeof loginSchema>