import { useMyTransactionsByIdQuery, useMyTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { type Transaction } from "@/types/transaction";

const statusColor: Record<string, string> = {
  approved: "text-green-600 bg-green-50",
  pending: "text-yellow-600 bg-yellow-50",
  rejected: "text-red-600 bg-red-50",
};

const Transactions = () => {
  const { data, isLoading } = useMyTransactionsQuery(undefined);
  const transactions: Transaction[] = data?.data || [];
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data: singleData, isLoading: singleLoading } = useMyTransactionsByIdQuery(selectedId!, { skip: !selectedId });

  return (
    <div className="flex flex-col items-center min-h-[60vh] bg-background py-8">
      <Card className="w-full max-w-5xl p-6 shadow-lg border border-primary/10">
        <h2 className="text-2xl font-bold text-primary mb-6">Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-primary/10">
            <thead>
              <tr className="bg-primary/5">
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Txn ID</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Type</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Sender</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Receiver</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Amount</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Status</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Date</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                // Show 5 skeleton rows for loading
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-20" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-16" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-24 mb-1" /><Skeleton className="h-3 w-20" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-24 mb-1" /><Skeleton className="h-3 w-20" /></td>
                    <td className="px-3 py-2 text-right"><Skeleton className="h-4 w-16" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-14" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-28" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-8 w-16 rounded" /></td>
                  </tr>
                ))
              ) : transactions.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-muted-foreground">No transactions found.</td>
                </tr>
              ) : (
                transactions.map((txn) => (
                  <tr key={txn._id} className="hover:bg-primary/5 transition">
                    <td className="px-3 py-2 font-mono text-xs">{txn.transactionId}</td>
                    <td className="px-3 py-2 capitalize text-xs">{txn.transactionType.replace(/_/g, ' ')}</td>
                    <td className="px-3 py-2 text-xs">
                      <div className="font-semibold">{txn.sender.name}</div>
                      <div className="text-muted-foreground">{txn.sender.email}</div>
                    </td>
                    <td className="px-3 py-2 text-xs">
                      <div className="font-semibold">{txn.receiver.name}</div>
                      <div className="text-muted-foreground">{txn.receiver.email}</div>
                    </td>
                    <td className="px-3 py-2 text-xs font-bold text-right">৳{txn.amount.toLocaleString()}</td>
                    <td className="px-3 py-2 text-xs">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColor[txn.status] || "text-gray-600 bg-gray-100"}`}>{txn.status}</span>
                    </td>
                    <td className="px-3 py-2 text-xs">{new Date(txn.createdAt).toLocaleString()}</td>
                    <td className="px-3 py-2 text-xs">
                      <Button size="sm" variant="outline" onClick={() => { setSelectedId(txn._id); setOpen(true); }}>Details</Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
      {/* Modal for transaction details */}
      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setSelectedId(null); }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
            {/* Only use DialogDescription for a short text, not for divs */}
            <DialogDescription>
              View the full transaction details below.
            </DialogDescription>
            {singleLoading ? (
              <div className="space-y-2 mt-2">
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-6 w-1/2 mb-2" />
                <Skeleton className="h-6 w-1/3 mb-2" />
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-6 w-1/2 mb-2" />
                <Skeleton className="h-6 w-1/3 mb-2" />
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-6 w-1/2 mb-2" />
                <Skeleton className="h-6 w-1/3 mb-2" />
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-6 w-1/2 mb-2" />
                <Skeleton className="h-6 w-1/3 mb-2" />
              </div>
            ) : singleData?.data ? (
              <div className="space-y-2 mt-2">
                <div className="flex justify-between text-sm"><span className="font-semibold">Txn ID:</span> <span className="font-mono">{singleData.data.transactionId}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Type:</span> <span>{singleData.data.transactionType.replace(/_/g, ' ')}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Status:</span> <span>{singleData.data.status}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Amount:</span> <span>৳{singleData.data.amount.toLocaleString()}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Fee:</span> <span>৳{singleData.data.fee.toLocaleString()}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Date:</span> <span>{new Date(singleData.data.createdAt).toLocaleString()}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Sender:</span> <span>{singleData.data.sender.name} ({singleData.data.sender.phone})</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Receiver:</span> <span>{singleData.data.receiver.name} ({singleData.data.receiver.phone})</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Description:</span> <span>{singleData.data.description}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Wallet ID:</span> <span className="font-mono">{singleData.data.walletId._id}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Wallet Balance:</span> <span>৳{singleData.data.walletId.balance.toLocaleString()}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Currency:</span> <span>{singleData.data.walletId.currency}</span></div>
              </div>
            ) : (
              <div className="py-8 text-center text-muted-foreground">No data found.</div>
            )}
          </DialogHeader>
          <DialogClose asChild>
            <Button variant="secondary" className="mt-4 w-full">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Transactions;