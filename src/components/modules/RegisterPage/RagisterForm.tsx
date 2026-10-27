/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
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
    const [register, { isLoading }] = useRegisterMutation()
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
        <div className={cn("flex flex-col gap-4", className)}>
            <div className="flex flex-col items-center text-center">
                <h1 className="font-['Bricolage_Grotesque',sans-serif] text-2xl font-extrabold tracking-tight text-[#0C1A14] dark:text-white">
                    Create your WalletX account
                </h1>
                <p className="text-[#4A5D54] dark:text-[#B7CCC0] text-xs mt-1 text-balance">
                    Fill in the details below to open your digital wallet
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3.5">
                    {/* Role / Account Type Selector */}
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem className="space-y-1">
                                <FormLabel className="text-xs font-semibold text-[#0C1A14] dark:text-[#E6EFEA]">
                                    Account Type
                                </FormLabel>
                                <FormControl>
                                    <div className="grid grid-cols-2 gap-2 p-1 bg-black/5 dark:bg-white/5 rounded-xl border border-[#D9E2DC] dark:border-white/10">
                                        <button
                                            type="button"
                                            onClick={() => field.onChange("USER")}
                                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                                field.value === "USER"
                                                    ? "bg-[#12B76A] text-[#04170E] shadow-sm"
                                                    : "text-[#4A5D54] dark:text-[#B7CCC0] hover:text-[#0C1A14] dark:hover:text-white"
                                            }`}
                                        >
                                            <span>Personal User</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => field.onChange("AGENT")}
                                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                                field.value === "AGENT"
                                                    ? "bg-[#12B76A] text-[#04170E] shadow-sm"
                                                    : "text-[#4A5D54] dark:text-[#B7CCC0] hover:text-[#0C1A14] dark:hover:text-white"
                                            }`}
                                        >
                                            <span>Agent Partner</span>
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage className="text-[11px]" />
                            </FormItem>
                        )}
                    />

                    {/* 2-Column Responsive Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5 gap-y-2.5">
                        {/* Full Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel className="text-xs font-semibold text-[#0C1A14] dark:text-[#E6EFEA]">
                                        Full Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Rahim Uddin"
                                            type="text"
                                            className="h-10 text-sm rounded-xl border-[#D9E2DC] dark:border-white/15 bg-white dark:bg-[#0C1A14]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-[11px]" />
                                </FormItem>
                            )}
                        />

                        {/* Phone */}
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel className="text-xs font-semibold text-[#0C1A14] dark:text-[#E6EFEA]">
                                        Phone Number
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="017XXXXXXXX"
                                            type="text"
                                            className="h-10 text-sm rounded-xl border-[#D9E2DC] dark:border-white/15 bg-white dark:bg-[#0C1A14]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-[11px]" />
                                </FormItem>
                            )}
                        />

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel className="text-xs font-semibold text-[#0C1A14] dark:text-[#E6EFEA]">
                                        Email Address
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="rahim@example.com"
                                            type="email"
                                            className="h-10 text-sm rounded-xl border-[#D9E2DC] dark:border-white/15 bg-white dark:bg-[#0C1A14]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-[11px]" />
                                </FormItem>
                            )}
                        />

                        {/* NID */}
                        <FormField
                            control={form.control}
                            name="nid"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel className="text-xs font-semibold text-[#0C1A14] dark:text-[#E6EFEA]">
                                        National ID (10-12 digits)
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="1234567890"
                                            type="text"
                                            className="h-10 text-sm rounded-xl border-[#D9E2DC] dark:border-white/15 bg-white dark:bg-[#0C1A14]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-[11px]" />
                                </FormItem>
                            )}
                        />

                        {/* Address (spans full 2 columns) */}
                        <div className="sm:col-span-2">
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel className="text-xs font-semibold text-[#0C1A14] dark:text-[#E6EFEA]">
                                            Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="House, Road, Area, City"
                                                type="text"
                                                className="h-10 text-sm rounded-xl border-[#D9E2DC] dark:border-white/15 bg-white dark:bg-[#0C1A14]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[11px]" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel className="text-xs font-semibold text-[#0C1A14] dark:text-[#E6EFEA]">
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormMessage className="text-[11px]" />
                                </FormItem>
                            )}
                        />

                        {/* Confirm Password */}
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel className="text-xs font-semibold text-[#0C1A14] dark:text-[#E6EFEA]">
                                        Confirm Password
                                    </FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormMessage className="text-[11px]" />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-10 mt-1 rounded-xl bg-[#12B76A] hover:bg-[#0EA25C] text-[#04170E] font-bold text-sm shadow-md transition-all cursor-pointer"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                </form>
            </Form>

            <div className="text-center text-xs text-[#4A5D54] dark:text-[#B7CCC0]">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-[#087F4C] hover:underline underline-offset-4">
                    Sign In
                </Link>
            </div>
        </div>
    )
}
