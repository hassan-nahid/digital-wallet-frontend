
import { useTransactionsAnalyticsQuery } from "@/redux/features/transaction/transaction.api";
import { useUserAnalyticsQuery } from "@/redux/features/user/user.api";
import { useWalletAnalyticsQuery } from "@/redux/features/wallet/wallet.api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { User, Users, Wallet, Ban, CheckCircle, CreditCard, DollarSign, BarChart3 } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#6366f1", "#22d3ee", "#f59e42", "#f43f5e", "#10b981", "#a21caf"];

const Analaytics = () => {
  const { data: userData } = useUserAnalyticsQuery(undefined);
  const { data: walletData } = useWalletAnalyticsQuery(undefined);
  const { data: transactionData } = useTransactionsAnalyticsQuery(undefined);

  // Prepare data for charts and cards
  const userPieData = [
    { name: "Admin", value: userData?.data?.totalAdmin || 0 },
    { name: "Agent", value: userData?.data?.totalAgent || 0 },
    { name: "User", value: userData?.data?.totalUser || 0 },
  ];
  const walletPieData = [
    { name: "Blocked", value: walletData?.data?.totalBlocked || 0 },
    { name: "Unblocked", value: walletData?.data?.totalUnblocked || 0 },
  ];
  const barData = [
    {
      name: "Users",
      Total: userData?.data?.totalUsers || 0,
    },
    {
      name: "Wallets",
      Total: walletData?.data?.totalWallets || 0,
    },
    {
      name: "Transactions",
      Total: transactionData?.data?.totalTransactions || 0,
    },
    {
      name: "Volume",
      Total: transactionData?.data?.totalVolume || 0,
    },
  ];

  // Cards data with icons
  const cards = [
    {
      title: "Total Users",
      value: userData?.data?.totalUsers ?? 0,
      color: "text-indigo-600",
      icon: <Users className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Admins",
      value: userData?.data?.totalAdmin ?? 0,
      color: "text-purple-600",
      icon: <User className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Agents",
      value: userData?.data?.totalAgent ?? 0,
      color: "text-cyan-600",
      icon: <User className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Users",
      value: userData?.data?.totalUser ?? 0,
      color: "text-green-600",
      icon: <User className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Total Wallets",
      value: walletData?.data?.totalWallets ?? 0,
      color: "text-cyan-500",
      icon: <Wallet className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Blocked Wallets",
      value: walletData?.data?.totalBlocked ?? 0,
      color: "text-red-500",
      icon: <Ban className="w-6 h-6 text-red-400" />,
    },
    {
      title: "Unblocked Wallets",
      value: walletData?.data?.totalUnblocked ?? 0,
      color: "text-emerald-500",
      icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "Total Transactions",
      value: transactionData?.data?.totalTransactions ?? 0,
      color: "text-orange-500",
      icon: <CreditCard className="w-6 h-6 text-orange-400" />,
    },
    {
      title: "Transaction Volume",
      value: transactionData?.data?.totalVolume ?? 0,
      color: "text-pink-500",
      icon: <DollarSign className="w-6 h-6 text-pink-400" />,
      isMoney: true,
    },
  ];

  // Format numbers compactly (e.g., 1.2K)
  const formatNumber = (num: number) => {
    if (typeof num !== "number") return num;
    return num >= 1000 ? num.toLocaleString("en-US", { notation: "compact", maximumFractionDigits: 1 }) : num;
  };

  // Loading state
  const isLoading = !userData || !walletData || !transactionData;
  const lastUpdated = new Date().toLocaleString();

  return (
    <div className="p-6 space-y-10">
      <div className="mb-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Admin Analytics Dashboard</h2>
            <p className="text-muted-foreground text-base">A professional overview of your platform's key metrics and trends.</p>
          </div>
          <div className="text-xs text-muted-foreground">Last updated: {lastUpdated}</div>
        </div>
        <div className="border-b border-border mt-4" />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <Card key={idx} className="flex flex-col items-center justify-center py-8">
                <CardHeader className="text-center">
                  <Skeleton className="w-6 h-6 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto mb-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-16 mx-auto" />
                </CardContent>
              </Card>
            ))
          : cards.map((card, idx) => (
              <Card
                key={idx}
                className="flex flex-col items-center justify-center py-8 transition-shadow hover:shadow-lg group"
              >
                <CardHeader className="text-center flex flex-col items-center">
                  <div className="mb-2">{card.icon}</div>
                  <CardTitle className="text-base font-medium group-hover:text-primary transition-colors">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className={`text-3xl font-bold ${card.color}`}>
                    {card.isMoney ? `$${formatNumber(card.value)}` : formatNumber(card.value)}
                  </span>
                </CardContent>
              </Card>
            ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-indigo-400" /> Platform Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              {isLoading ? (
                <Skeleton className="h-full w-full rounded-xl" />
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Total" fill="#6366f1" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Transaction Volume Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-pink-400" /> Transaction Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full flex items-center justify-center">
              {isLoading ? (
                <Skeleton className="h-full w-full rounded-xl" />
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Volume", value: transactionData?.data?.totalVolume || 0 },
                        { name: "Transactions", value: transactionData?.data?.totalTransactions || 0 },
                      ]}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      <Cell fill="#f59e42" />
                      <Cell fill="#6366f1" />
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User & Wallet Pie Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>User Roles Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full flex items-center justify-center">
              {isLoading ? (
                <Skeleton className="h-full w-full rounded-xl" />
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={userPieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {userPieData.map((_, idx) => (
                        <Cell key={`cell-user-${idx}`} fill={COLORS[idx % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wallet Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full flex items-center justify-center">
              {isLoading ? (
                <Skeleton className="h-full w-full rounded-xl" />
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={walletPieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {walletPieData.map((_, idx) => (
                        <Cell key={`cell-wallet-${idx}`} fill={COLORS[idx % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analaytics;