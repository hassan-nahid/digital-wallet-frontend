/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useAdminWithdrawMutation } from "@/redux/features/transaction/transaction.api";


const cashInSchema = z.object({
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

const Withdraw = () => {

  const [adminWithdaw, { isLoading }] = useAdminWithdrawMutation();
  const form = useForm<z.infer<typeof cashInSchema>>({
    resolver: zodResolver(cashInSchema),
    defaultValues: {  amount: "1" },
  });




  const onSubmit = async (values: z.infer<typeof cashInSchema>) => {
    const payload = { ...values, amount: Number(values.amount) };
    try {
      await adminWithdaw(payload).unwrap();
      toast.success("Withdraw successful!");
      form.reset({  amount: "1" });
    } catch (err: unknown) {
      const errorMsg = (err && typeof err === 'object' && 'data' in err && (err as any).data?.message)
        ? (err as any).data.message
        : "Cash in failed";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-background">
      <div className="w-full max-w-md bg-white dark:bg-muted rounded-2xl shadow-xl p-0 border border-primary/20">
        {/* Card header */}
        <div className="bg-primary/90 rounded-t-2xl px-8 py-5 flex flex-col items-center gap-1">
          <h2 className="text-2xl font-bold text-white tracking-wide">Withdraw</h2>
          <p className="text-xs font-semibold text-primary-foreground/80">Withdraw in External Source</p>
        </div>
        <div className="p-6 flex flex-col gap-6">
          {/* Search by email */}

    
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div>Withdaw in External Source</div>
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
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Processing..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;