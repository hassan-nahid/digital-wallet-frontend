/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useGetAdminQuery } from "@/redux/features/user/user.api";
import React from "react";
import { toast } from "sonner";
import { useCashOutMutation } from "@/redux/features/transaction/transaction.api";


const cashOutSchema = z.object({
  receiver: z.string().min(8, "Receiver UID is required"),
  amount: z
    .string()
    .refine(
      val => {
        if (/^-\d+$/.test(val)) return false; // negative number
        if (!/^\d+$/.test(val)) return false; // not a number
        if (Number(val) < 1) return false;
        return true;
      },
      {
        message: "Amount must be a positive number and at least 1",
      }
    ),
});

const CashOut = () => {
  const { data: adminDataRaw, isLoading: adminLoading } = useGetAdminQuery(undefined);
  const admin = Array.isArray(adminDataRaw?.data) ? adminDataRaw.data[0] : undefined;
  const [cashOut, { isLoading }] = useCashOutMutation();
  const form = useForm<z.infer<typeof cashOutSchema>>({
    resolver: zodResolver(cashOutSchema),
    defaultValues: { receiver: "", amount: "1" },
  });

  // Autofill admin UID when loaded
  React.useEffect(() => {
    if (admin?._id) {
      form.setValue("receiver", admin._id);
    }
  }, [admin, form]);

  const onSubmit = async (values: z.infer<typeof cashOutSchema>) => {
    const payload = { ...values, amount: Number(values.amount) };
    try {
      await cashOut(payload).unwrap();
      toast.success("Cash out successful!");
      form.reset({ receiver: admin?._id || "", amount: "1" });
    } catch (err: unknown) {
      const errorMsg = (err && typeof err === 'object' && 'data' in err && (err as any).data?.message)
        ? (err as any).data.message
        : "Cash out failed";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-background">
      <div className="w-full max-w-md bg-white dark:bg-muted rounded-2xl shadow-xl p-0 border border-primary/20">
        {/* Card header */}
        <div className="bg-primary/90 rounded-t-2xl px-8 py-5 flex flex-col items-center gap-1">
          <h2 className="text-2xl font-bold text-white tracking-wide">Cash Out</h2>
          <p className="text-xs font-semibold text-primary-foreground/80">Send money to admin</p>
        </div>
        <div className="p-6 flex flex-col gap-6">
          {/* Show admin info */}
          {admin && (
            <div className="mb-2 p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col gap-1 shadow-sm">
              <div className="font-semibold text-primary text-lg flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-base">{admin.name?.charAt(0).toUpperCase()}</span>
                {admin.name}
              </div>
              <div className="text-xs text-muted-foreground">Phone: {admin.phone}</div>
              <div className="text-xs text-muted-foreground">Address: {admin.address}</div>
              <div className="text-xs text-muted-foreground">Role: {admin.role}</div>
              <div className="text-xs text-muted-foreground">UID: <span className="font-mono">{admin._id}</span></div>
            </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="receiver"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receiver UID</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter receiver UID" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter amount"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading || adminLoading}>
                {isLoading ? "Processing..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CashOut;