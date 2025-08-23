/* eslint-disable @typescript-eslint/no-explicit-any */
import Password from "@/components/modules/RegisterPage/Password";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { useChangePasswordMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";


const passwordChangeSchema = z.object({
    oldPassword: z.string()
        .min(8, { message: "Old Password must be at least 8 characters" }),
    newPassword: z
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
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})
const ChangePassword = () => {
    const [changePassword] = useChangePasswordMutation()
    const form = useForm<z.infer<typeof passwordChangeSchema>>({
        resolver: zodResolver(passwordChangeSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (payload: z.infer<typeof passwordChangeSchema>) => {
        try {
            const res = await changePassword({payload}).unwrap()
            if (res.success) {
                toast(res.message || "Profile Updated Successfully")
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
        <div className="flex justify-center items-center min-h-[60vh] bg-background">
            <Card className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-primary/10 flex flex-col gap-8">
                <h2 className="text-2xl font-bold text-primary mb-4 text-center">Change Password</h2>
                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="oldPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Current Password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>New Password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm New Password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-4">
                            Change Password
                        </Button>
                    </form>
                </Form>
            </Card>
        </div>
    )
}
export default ChangePassword;