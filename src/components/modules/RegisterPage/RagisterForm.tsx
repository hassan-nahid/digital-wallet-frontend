/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import Password from "./Password"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegisterMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"

const formSchema = z.object({
    name: z.string()
        .min(3, { message: "Name is too short" })
        .max(50, { message: "Name is too long" }),
    email: z.string()
        .email({ message: "Invalid email address" }),
    phone: z
        .string({ message: "Phone Number must be string" })
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
            message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
        }),
    nid: z.string()
        .regex(/^[0-9]{10,12}$/, { message: "NID must be 10-12 digits" }),
    address: z.string()
        .min(3, { message: "Address is too short" })
        .max(100, { message: "Address is too long" }),
    role: z.enum(["USER", "AGENT"]),
    password: z
        .string({ message: "Password must be string" })
        .min(8, { message: "Password must be at least 8 characters long." })
        .regex(/^(?=.*[A-Z])/, {
            message: "Password must contain at least 1 uppercase letter.",
        })
        .regex(/^(?=.*[!@#$%^&*])/, {
            message: "Password must contain at least 1 special character.",
        })
        .regex(/^(?=.*\d)/, {
            message: "Password must contain at least 1 number.",
        }),
    confirmPassword: z.string()
        .min(8, { message: "Confirm Password must be at least 8 characters" })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})


export function RegisterForm({ className }: { className?: string }) {
    const [register] = useRegisterMutation()
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            address: "",
            role: "USER",
            nid: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            address: data.address,
            role: data.role,
            nid: Number(data.nid),
        }
        try {
            const result = await register(userInfo)
            console.log(result)
            if (result.data?.success) {
                toast(result.data?.message || "User Created Successfully")
                navigate("/login")
            } else {
                // Try to get error message from result.error or result.data
                let errorMessage = "Registration failed";
                if (result.error && typeof result.error === "object") {
                    if ("data" in result.error && typeof result.error.data === "object" && result.error.data && "message" in result.error.data) {
                        errorMessage = (result.error.data as { message?: string }).message || errorMessage;
                    } else if ("message" in result.error) {
                        errorMessage = (result.error as { message?: string }).message || errorMessage;
                    }
                } else if (result.data && typeof result.data === "object" && "message" in result.data) {
                    errorMessage = (result.data as { message?: string }).message || errorMessage;
                }
                toast(errorMessage);
            }
        } catch (error: any) {
            // Try to get errorSources array
            const errorSources =
                error?.data?.errorSources ||
                error?.error?.data?.errorSources ||
                error?.errorSources;
            if (Array.isArray(errorSources) && errorSources.length > 0) {
                errorSources.forEach((err: any) => {
                    toast(`${err.path ? `${err.path}: ` : ""}${err.message}`);
                });
            } else {
                const message =
                    error?.data?.message ||
                    error?.error?.data?.message ||
                    error?.message ||
                    error?.data?.err?.message ||
                    "Registration failed";
                toast(message);
            }
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create your WalletX account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Fill in the details below to register
                </p>
            </div>
            <div className="grid gap-6 w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl className="mt-2">
                                        <Input placeholder="John Doe" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl className="mt-2">
                                        <Input placeholder="john@example.com" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl className="mt-2">
                                        <Input placeholder="01XXXXXXXXX" type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="nid"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>NID</FormLabel>
                                    <FormControl className="mt-2">
                                        <Input placeholder="1234567890" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl className="mt-2">
                                        <Input placeholder="123 Main St, City" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <FormControl className="mt-2">
                                        <select {...field} className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary bg-background">
                                            <option value="USER">User</option>
                                            <option value="AGENT">Agent</option>
                                        </select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Register</Button>
                    </form>
                </Form>
            </div>
            <div className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                    Login
                </Link>
            </div>
        </div>
    )
}
