/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLoginMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"
import Password from "../RegisterPage/Password"
const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
})


export function LoginForm({ className }: { className?: string }) {
    const [login] = useLoginMutation();
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        try {
            const result = await login(data)
            console.log(result)
            if (result.data?.success) {
                toast(result.data?.message || "User Logged In Successfully")
                navigate("/")
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
                    "Login failed";
                toast(message);
            }
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl className="mt-2">
                                        <Password {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                </Form>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="underline underline-offset-4">
                    Register
                </Link>
            </div>
        </div>
    )
}
