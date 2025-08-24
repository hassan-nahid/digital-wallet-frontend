/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useGetAllWalletQuery, useBlockWalletMutation, useUnBlockWalletMutation } from "@/redux/features/wallet/wallet.api";


const roleColor: Record<string, string> = {
  ADMIN: "bg-indigo-100 text-indigo-700",
  AGENT: "bg-cyan-100 text-cyan-700",
  USER: "bg-green-100 text-green-700",
};

const ManageWallet = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [isActive, setIsActive] = useState("");
  const [isAgentApproved, setIsAgentApproved] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [limit, setLimit] = useState(10);
  const [isBlocked, setIsBlocked] = useState("");
  const [minBalance, setMinBalance] = useState("");
  const [maxBalance, setMaxBalance] = useState("");
  const { data, isLoading } = useGetAllWalletQuery({
    page: currentPage,
    limit,
    search: search || undefined,
    role: role || undefined,
    isBlocked: isBlocked || undefined,
    minBalance: minBalance || undefined,
    maxBalance: maxBalance || undefined,
    isActive: isActive || undefined,
    isAgentApproved: isAgentApproved || undefined,
    sortBy,
    sortOrder,
  });
  const wallets = data?.data || [];
  const [blockWallet] = useBlockWalletMutation();
  const [unBlockWallet] = useUnBlockWalletMutation();
  const totalPage = data?.meta?.totalPage || 1;
  

  // Block/Unblock wallet handler
  const handleBlockToggle = async (wallet: any) => {
    try {
      if (!wallet.isBlocked) {
        await blockWallet(wallet.user._id).unwrap();
        toast.success("Wallet blocked successfully.");
      } else {
        await unBlockWallet(wallet.user._id).unwrap();
        toast.success("Wallet unblocked successfully.");
      }
    } catch {
      toast.error("Failed to update wallet status.");
    }
  };


  return (
    <div className="flex flex-col items-center min-h-[60vh] bg-background py-8">
      <Card className="w-full max-w-6xl p-6 shadow-lg border border-primary/10">
        <h2 className="text-2xl font-bold text-primary mb-6">Manage Users</h2>
        {/* Filter & Sort UI */}
        <form
          className="flex flex-wrap gap-4 mb-6 items-end bg-primary/5 rounded-lg p-4 border border-primary/10"
          onSubmit={e => { e.preventDefault(); setCurrentPage(1); }}
        >
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Search</label>
            <input
              type="text"
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              placeholder="Name, email, phone..."
              value={search}
              onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Role</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={role}
              onChange={e => { setRole(e.target.value); setCurrentPage(1); }}
            >
              <option value="">All</option>
              <option value="ADMIN">Admin</option>
              <option value="AGENT">Agent</option>
              <option value="USER">User</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Wallet Status</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={isBlocked}
              onChange={e => { setIsBlocked(e.target.value); setCurrentPage(1); }}
            >
              <option value="">All</option>
              <option value="false">Active</option>
              <option value="true">Blocked</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Min Balance</label>
            <input
              type="number"
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              placeholder="Min"
              value={minBalance}
              onChange={e => { setMinBalance(e.target.value); setCurrentPage(1); }}
              min={0}
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Max Balance</label>
            <input
              type="number"
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              placeholder="Max"
              value={maxBalance}
              onChange={e => { setMaxBalance(e.target.value); setCurrentPage(1); }}
              min={0}
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Agent Approved</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={isAgentApproved}
              onChange={e => { setIsAgentApproved(e.target.value); setCurrentPage(1); }}
            >
              <option value="">All</option>
              <option value="true">Approved</option>
              <option value="false">Not Approved</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-primary">Sort By</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={sortBy}
              onChange={e => { setSortBy(e.target.value); setCurrentPage(1); }}
            >
              <option value="createdAt">Created At</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="role">Role</option>
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
          <Button
            type="button"
            variant="outline"
            className="h-10 px-6 text-xs font-semibold ml-2"
            onClick={() => {
              setSearch("");
              setRole("");
              setIsActive("");
              setIsAgentApproved("");
              setSortBy("createdAt");
              setSortOrder("desc");
              setLimit(10);
              setIsBlocked("");
              setMinBalance("");
              setMaxBalance("");
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
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Name</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Email</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Phone</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Role</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">WalletId</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Balance</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Blocked</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <tr key={i}>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-24" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-32" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-24" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-16" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-16" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-20" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-12" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-8 w-16 rounded" /></td>
                  </tr>
                ))
              ) : wallets.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-muted-foreground">No wallets found.</td>
                </tr>
              ) : (
                wallets.map((wallet: any) => (
                  <tr key={wallet._id} className="hover:bg-primary/5 transition">
                    <td className="px-3 py-2 text-xs font-semibold">{wallet.user?.name}</td>
                    <td className="px-3 py-2 text-xs">{wallet.user?.email}</td>
                    <td className="px-3 py-2 text-xs">{wallet.user?.phone}</td>
                    <td className="px-3 py-2 text-xs">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${roleColor[wallet.user?.role] || "bg-gray-100 text-gray-700"}`}>{wallet.user?.role}</span>
                    </td>
                    <td className="px-3 py-2 text-xs font-mono">{wallet._id}</td>
                    <td className="px-3 py-2 text-xs font-mono">{wallet.balance}</td>
                    <td className="px-3 py-2 text-xs">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${wallet.isBlocked ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>{wallet.isBlocked ? "Blocked" : "Active"}</span>
                    </td>
                    <td className="px-3 py-2 text-xs flex gap-2">
                      {wallet.isBlocked ? (
                        <Button size="sm" variant="secondary" onClick={() => handleBlockToggle(wallet)}>
                          Unblock
                        </Button>
                      ) : (
                        <Button size="sm" variant="destructive" onClick={() => handleBlockToggle(wallet)}>
                          Block
                        </Button>
                      )}
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
    </div>
  );
};

export default ManageWallet;