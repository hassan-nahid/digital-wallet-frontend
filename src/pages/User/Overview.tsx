import { useWalletInfoQuery } from "@/redux/features/wallet/wallet.api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { useNavigate } from "react-router";

const Overview = () => {
  const { data, isLoading } = useWalletInfoQuery(undefined);
  const wallet = data?.data;
  const user = wallet?.user;
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (user?._id) {
      navigator.clipboard.writeText(user._id);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-background">
      <div className="w-full max-w-md bg-white dark:bg-muted rounded-xl shadow-lg p-4 sm:p-8 flex flex-col gap-6 sm:gap-8 border border-primary/20">
        <div className="flex items-center gap-4 sm:gap-6">
          {isLoading ? (
            <Skeleton className="w-14 h-14 sm:w-20 sm:h-20 rounded-full" />
          ) : (
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl sm:text-4xl font-bold text-primary border-2 sm:border-4 border-primary shadow">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="space-y-0.5 sm:space-y-1 flex-1">
            {isLoading ? (
              <>
                <Skeleton className="h-6 w-2/3 mb-1" />
                <Skeleton className="h-4 w-1/2 mb-1" />
                <Skeleton className="h-4 w-1/3 mb-1" />
                <Skeleton className="h-4 w-1/4 mb-1" />
                <Skeleton className="h-4 w-1/4 mb-1" />
                <Skeleton className="h-4 w-1/2 mb-1" />
              </>
            ) : (
              <>
                <div className="font-bold text-lg sm:text-2xl text-primary leading-tight">{user?.name}</div>
                <div className="text-sm sm:text-base text-muted-foreground">{user?.email}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{user?.phone}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Role: <span className="font-semibold text-primary">{user?.role}</span></div>
                <div className="text-xs sm:text-sm text-muted-foreground">NID: <span className="font-semibold">{user?.nid}</span></div>
                <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 sm:gap-2">UID: 
                  <span className="font-mono font-semibold select-all">{user?._id}</span>
                  <Button type="button" size="icon" variant="ghost" className="p-1 cursor-pointer" onClick={handleCopy} title="Copy UID">
                    {copied ? (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><rect x="3" y="3" width="13" height="13" rx="2"/></svg>
                    )}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 bg-primary/5 rounded-lg p-3 sm:p-6 border border-primary/10">
          {isLoading ? (
            <>
              <div className="flex items-center justify-between mb-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-7 w-1/4" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-6 w-1/4" />
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/6" />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <span className="text-base sm:text-lg font-semibold text-primary">Wallet Balance</span>
                <span className="text-xl sm:text-3xl font-extrabold text-green-600">৳ {wallet?.balance?.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-base text-muted-foreground">Status</span>
                <span className={`text-xs sm:text-base font-semibold ${wallet?.isBlocked ? 'text-red-500' : 'text-green-500'}`}>{wallet?.isBlocked ? 'Blocked' : 'Active'}</span>
              </div>
            </>
          )}
        </div>
        <div className="flex gap-2 sm:gap-4 justify-between mt-2">
          <Button className="flex-1 text-xs sm:text-base py-2 cursor-pointer sm:py-3" variant="outline" onClick={() => navigate('/user/send-money')} disabled={isLoading}>Send Money</Button>
          <Button className="flex-1 text-xs sm:text-base py-2 cursor-pointer sm:py-3" variant="outline" onClick={() => navigate('/user/cash-out')} disabled={isLoading}>Cash Out</Button>
          <Button className="flex-1 text-xs sm:text-base py-2 cursor-pointer sm:py-3" variant="outline" onClick={() => navigate('/user/transctions-history')} disabled={isLoading}>Transactions</Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;