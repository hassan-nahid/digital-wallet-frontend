import { useGetAllTransactionsQuery, useGetSingleTransactionsByIdQuery } from "@/redux/features/transaction/transaction.api";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { DatePicker } from "@/components/ui/date-picker";
import { type Transaction } from "@/types/transaction";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const statusColor: Record<string, string> = {
  approved: "text-green-600 bg-green-50",
  pending: "text-yellow-600 bg-yellow-50",
  rejected: "text-red-600 bg-red-50",
};

const AllTransactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [status, setStatus] = useState("");
  const [senderRole, setSenderRole] = useState("");
  const [receiverRole, setReceiverRole] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [limit, setLimit] = useState(10);
  const { data, isLoading } = useGetAllTransactionsQuery({
    page: currentPage,
    limit,
    search: search || undefined,
    transactionType: transactionType || undefined,
    status: status || undefined,
    senderRole: senderRole || undefined,
    receiverRole: receiverRole || undefined,
    minAmount: minAmount || undefined,
    maxAmount: maxAmount || undefined,
    startDate: startDate || undefined,
    endDate: endDate || undefined,
    sortBy,
    sortOrder,
  });
  const transactions: Transaction[] = data?.data || [];
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data: singleData, isLoading: singleLoading } = useGetSingleTransactionsByIdQuery(selectedId!, { skip: !selectedId });

  const totalPage = data?.meta?.totalPage || 1;

  return (
    <div className="flex flex-col items-center min-h-[60vh] bg-background py-8">
      <Card className="w-full max-w-5xl p-6 shadow-lg border border-primary/10">
        <h2 className="text-2xl font-bold text-primary mb-6">Transactions</h2>
        {/* Filter UI */}
        <form
          className="flex flex-wrap gap-4 mb-6 items-end bg-primary/5 rounded-lg p-4 border border-primary/10"
          onSubmit={e => { e.preventDefault(); setCurrentPage(1); }}
        >
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Search</label>
            <input
              type="text"
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              placeholder="Txn ID, sender, receiver..."
              value={search}
              onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Type</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={transactionType}
              onChange={e => { setTransactionType(e.target.value); setCurrentPage(1); }}
            >
              <option value="">All</option>
              <option value="cash_in">Cash In</option>
              <option value="cash_out">Cash Out</option>
              <option value="add_money">Add Money</option>
              <option value="admin_profit">Admin Profit</option>
              <option value="admin_withdraw">Admin Withdraw</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Status</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={status}
              onChange={e => { setStatus(e.target.value); setCurrentPage(1); }}
            >
              <option value="">All</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Sender Role</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={senderRole}
              onChange={e => { setSenderRole(e.target.value); setCurrentPage(1); }}
            >
              <option value="">All</option>
              <option value="ADMIN">Admin</option>
              <option value="AGENT">Agent</option>
              <option value="USER">User</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Receiver Role</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={receiverRole}
              onChange={e => { setReceiverRole(e.target.value); setCurrentPage(1); }}
            >
              <option value="">All</option>
              <option value="ADMIN">Admin</option>
              <option value="AGENT">Agent</option>
              <option value="USER">User</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Min Amount</label>
            <input
              type="number"
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              placeholder="Min"
              value={minAmount}
              onChange={e => { setMinAmount(e.target.value); setCurrentPage(1); }}
              min={0}
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Max Amount</label>
            <input
              type="number"
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              placeholder="Max"
              value={maxAmount}
              onChange={e => { setMaxAmount(e.target.value); setCurrentPage(1); }}
              min={0}
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Sort By</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={sortBy}
              onChange={e => { setSortBy(e.target.value); setCurrentPage(1); }}
            >
              <option value="createdAt">Created At</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Order</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={sortOrder}
              onChange={e => { setSortOrder(e.target.value); setCurrentPage(1); }}
            >
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px]">
            <label className="text-xs font-semibold text-primary">Per Page</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={limit}
              onChange={e => { setLimit(Number(e.target.value)); setCurrentPage(1); }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">From</label>
            <DatePicker
              value={startDate}
              onChange={date => { setStartDate(date); setCurrentPage(1); }}
              max={endDate || undefined}
              placeholder="Start date"
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">To</label>
            <DatePicker
              value={endDate}
              onChange={date => { setEndDate(date); setCurrentPage(1); }}
              min={startDate || undefined}
              placeholder="End date"
            />
          </div>
          <Button type="submit" className="h-10 px-6 text-xs font-semibold">Filter</Button>
          <Button
            type="button"
            variant="outline"
            className="h-10 px-6 text-xs font-semibold ml-2"
            onClick={() => {
              setSearch("");
              setTransactionType("");
              setStatus("");
              setSenderRole("");
              setReceiverRole("");
              setMinAmount("");
              setMaxAmount("");
              setStartDate("");
              setEndDate("");
              setSortBy("createdAt");
              setSortOrder("desc");
              setLimit(10);
              setCurrentPage(1);
            }}
          >
            Reset
          </Button>
        </form>
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
                      <div className="font-semibold">{txn?.sender?.name || "External Source"}</div>
                      <div className="text-muted-foreground">{txn?.sender?.email}</div>
                    </td>
                    <td className="px-3 py-2 text-xs">
                      <div className="font-semibold">{txn?.receiver?.name || "External Source"}</div>
                      <div className="text-muted-foreground">{txn?.receiver?.email}</div>
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
          {totalPage > 1 && (
            <div className="flex justify-end mt-4">
              <div>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                      (page) => (
                        <PaginationItem
                          key={page}
                          onClick={() => setCurrentPage(page)}
                        >
                          <PaginationLink isActive={currentPage === page}>
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className={
                          currentPage === totalPage
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          )}
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
                <div className="flex justify-between text-sm"><span className="font-semibold">Sender:</span> <span>{singleData.data?.sender?.name || "Enternal Source"} ({singleData.data?.sender?.phone})</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Receiver:</span> <span>{singleData.data?.receiver?.name || "External Source"} ({singleData.data?.receiver?.phone})</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Description:</span> <span>{singleData.data.description}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Wallet ID:</span> <span className="font-mono">{singleData.data?.walletId?._id}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Wallet Balance:</span> <span>৳{singleData.data?.walletId?.balance.toLocaleString()}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Currency:</span> <span>{singleData.data?.walletId?.currency}</span></div>
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

export default AllTransactions;