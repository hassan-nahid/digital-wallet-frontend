/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useGetAgentByEmailQuery } from "@/redux/features/user/user.api";
import { useState } from "react";
import { toast } from "sonner";
import { useCashOutMutation } from "@/redux/features/transaction/transaction.api";


const cashInSchema = z.object({
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
  const [searchEmail, setSearchEmail] = useState("");
  const [selectedUser, setSelectedUser] = useState<{ _id: string; name: string; email: string } | null>(null);
  const { data: userData, isFetching, refetch } = useGetAgentByEmailQuery(searchEmail, { skip: !searchEmail });

  const [cashOut, { isLoading }] = useCashOutMutation();
  const form = useForm<z.infer<typeof cashInSchema>>({
    resolver: zodResolver(cashInSchema),
    defaultValues: { receiver: "", amount: "1" },
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchEmail) refetch();
  };

  const handleSelectUser = () => {
    if (userData?.data?._id) {
      setSelectedUser({
        _id: userData.data._id,
        name: userData.data.name,
        email: userData.data.email,
      });
      form.setValue("receiver", userData.data._id);
    }
  };

  const handleClearUser = () => {
    setSelectedUser(null);
    form.setValue("receiver", "");
  };

  const onSubmit = async (values: z.infer<typeof cashInSchema>) => {
    const payload = { ...values, amount: Number(values.amount) };
    try {
      await cashOut(payload).unwrap();
      toast.success("Cash Out successful!");
      form.reset({ receiver: "", amount: "1" });
      setSelectedUser(null);
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
          <h2 className="text-2xl font-bold text-white tracking-wide">Cash Out</h2>
          <p className="text-xs font-semibold text-primary-foreground/80">Search and select a Agent to Cash Out</p>
        </div>
        <div className="p-6 flex flex-col gap-6">
          {/* Search by email */}
          <form onSubmit={handleSearch} className="flex gap-2 mb-2">
            <Input
              type="email"
              placeholder="Search Agent by email"
              value={searchEmail}
              onChange={e => setSearchEmail(e.target.value)}
              className="flex-1"
              required
              disabled={!!selectedUser}
            />
            <Button type="submit" variant="secondary" disabled={isFetching || !searchEmail || !!selectedUser}>Search</Button>
          </form>
          {/* Show user info if found and not yet selected */}
          {!selectedUser && userData?.data && (
            <div className="mb-2 p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col gap-1 shadow-sm">
              <div className="font-semibold text-primary text-lg flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-base">{userData.data.name?.charAt(0).toUpperCase()}</span>
                {userData.data.name}
              </div>
              <div className="text-xs text-muted-foreground">Email: {userData.data.email}</div>
              <div className="text-xs text-muted-foreground">Name: {userData.data.name}</div>
              <div className="text-xs text-muted-foreground">UID: <span className="font-mono">{userData.data._id}</span></div>
              <Button type="button" size="sm" className="mt-2 w-fit" onClick={handleSelectUser} variant="outline">Select Agent</Button>
            </div>
          )}
          {/* Show selected user */}
          {selectedUser && (
            <div className="mb-2 p-4 rounded-xl bg-green-50 border border-green-300 flex flex-col gap-1 shadow-sm relative">
              <div className="font-semibold text-green-700 text-lg flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-700 text-base">{selectedUser.name?.charAt(0).toUpperCase()}</span>
                {selectedUser.name}
                <span className="ml-auto">
                  <Button type="button" size="icon" variant="ghost" className="p-1" onClick={handleClearUser} title="Clear selection">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </Button>
                </span>
              </div>
              <div className="text-xs text-muted-foreground">Email: {selectedUser.email}</div>
              <div className="text-xs text-muted-foreground">Name: {selectedUser.name}</div>
              <div className="text-xs text-muted-foreground">UID: <span className="font-mono">{selectedUser._id}</span></div>
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
                      <Input placeholder="Enter receiver UID" {...field} disabled={!!selectedUser} />
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

export default CashOut;