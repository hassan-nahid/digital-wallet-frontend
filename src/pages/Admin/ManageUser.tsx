/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useGetAllUserQuery, useGetUserByIdQuery, useUpdateProfileMutation } from "@/redux/features/user/user.api";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User2 } from "lucide-react";


const roleColor: Record<string, string> = {
  ADMIN: "bg-indigo-100 text-indigo-700",
  AGENT: "bg-cyan-100 text-cyan-700",
  USER: "bg-green-100 text-green-700",
};
const activeColor: Record<string, string> = {
  ACTIVE: "bg-green-100 text-green-700",
  INACTIVE: "bg-red-100 text-red-700",
};

const ManageUser = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [isActive, setIsActive] = useState("");
  const [isAgentApproved, setIsAgentApproved] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [limit, setLimit] = useState(10);
  const { data, isLoading } = useGetAllUserQuery({
    page: currentPage,
    limit,
    search: search || undefined,
    role: role || undefined,
    isActive: isActive || undefined,
    isAgentApproved: isAgentApproved || undefined,
    sortBy,
    sortOrder,
  });
  const users = data?.data || [];
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const { data: singleData, isLoading: singleLoading } = useGetUserByIdQuery(userId!, { skip: !userId });
  const totalPage = data?.meta?.totalPage || 1;
  const [copied, setCopied] = useState(false);
  const [updateProfile, { isLoading: updating }] = useUpdateProfileMutation();
  const handleCopy = () => {
    if (singleData.data?._id) {
      navigator.clipboard.writeText(singleData.data._id);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  // Block/Unblock handler
  const handleBlockToggle = async (user: any) => {
    try {
      await updateProfile({ userId: user._id, isActive: user.isActive === "ACTIVE" ? "BLOCKED" : "ACTIVE" });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      // Optionally show error toast
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
            <label className="text-xs font-semibold text-primary">Status</label>
            <select
              className="border border-primary/20 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
              value={isActive}
              onChange={e => { setIsActive(e.target.value); setCurrentPage(1); }}
            >
              <option value="">All</option>
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
              <option value="BLOCKED">Blocked</option>
            </select>
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
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Photo</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Name</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Email</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Phone</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Role</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">NID</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Status</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Created</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-primary">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <tr key={i}>
                    <td className="px-3 py-2"><Skeleton className="h-8 w-8 rounded-full" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-24" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-32" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-24" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-16" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-16" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-20" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-16" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-4 w-24" /></td>
                    <td className="px-3 py-2"><Skeleton className="h-8 w-16 rounded" /></td>
                  </tr>
                ))
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={10} className="text-center py-8 text-muted-foreground">No users found.</td>
                </tr>
              ) : (
                users.map((user: any) => (
                  <tr key={user._id} className="hover:bg-primary/5 transition">
                    <td className="px-3 py-2">
                      <Avatar>

                        <AvatarFallback><User2 className="w-5 h-5" /></AvatarFallback>
                      </Avatar>
                    </td>
                    <td className="px-3 py-2 text-xs font-semibold">{user.name}</td>
                    <td className="px-3 py-2 text-xs">{user.email}</td>
                    <td className="px-3 py-2 text-xs">{user.phone}</td>
                    <td className="px-3 py-2 text-xs">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${roleColor[user.role] || "bg-gray-100 text-gray-700"}`}>{user.role}</span>
                    </td>
                    <td className="px-3 py-2 text-xs font-mono">{user.nid}</td>
                    <td className="px-3 py-2 text-xs">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${activeColor[user.isActive] || "bg-gray-100 text-gray-700"}`}>{user.isActive}</span>
                    </td>
                    <td className="px-3 py-2 text-xs">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="px-3 py-2 text-xs flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => { setUserId(user._id); setOpen(true); }}>Details</Button>
                      {user.isActive === "ACTIVE" ? (
                        <Button size="sm" variant="destructive" disabled={updating} onClick={() => handleBlockToggle(user)}>
                          Block
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary" disabled={updating} onClick={() => handleBlockToggle(user)}>
                          Unblock
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
      {/* Modal for user details */}
      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setUserId(null); }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>View the full user details below.</DialogDescription>
            {singleLoading ? (
              <div className="space-y-2 mt-2">
                <Skeleton className="h-8 w-8 rounded-full mb-2" />
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-4 w-20 mb-2" />
              </div>
            ) : singleData?.data ? (
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar>
                    <AvatarFallback><User2 className="w-5 h-5" /></AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-lg">{singleData.data.name}</div>
                    <div className="text-xs text-muted-foreground">{singleData.data.email}</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 sm:gap-2">UID:
                  <span className="font-mono font-semibold select-all">{singleData.data?._id}</span>
                  <Button type="button" size="icon" variant="ghost" className="p-1 cursor-pointer" onClick={handleCopy} title="Copy UID">
                    {copied ? (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><rect x="3" y="3" width="13" height="13" rx="2" /></svg>
                    )}
                  </Button>
                </div>                <div className="flex justify-between text-sm"><span className="font-semibold">Phone:</span> <span>{singleData.data.phone}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Address:</span> <span>{singleData.data.address}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Role:</span> <span className={`px-2 py-1 rounded text-xs font-semibold ${roleColor[singleData.data.role] || "bg-gray-100 text-gray-700"}`}>{singleData.data.role}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">NID:</span> <span className="font-mono">{singleData.data.nid}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Status:</span> <span className={`px-2 py-1 rounded text-xs font-semibold ${activeColor[singleData.data.isActive] || "bg-gray-100 text-gray-700"}`}>{singleData.data.isActive}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Created At:</span> <span>{new Date(singleData.data.createdAt).toLocaleString()}</span></div>
                <div className="flex justify-between text-sm"><span className="font-semibold">Updated At:</span> <span>{new Date(singleData.data.updatedAt).toLocaleString()}</span></div>
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

export default ManageUser;