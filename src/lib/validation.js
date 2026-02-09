import {z} from "zod";

export const signupSchema = z.object({
    fullname: z.string().min(4,"Name must have atleast 4 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8,"Password must have at least 4 characters"),
})

export const signinSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8,"Password must have at least 4 characters"),
    
})