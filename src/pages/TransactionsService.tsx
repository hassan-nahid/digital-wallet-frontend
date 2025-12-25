import { Wallet, Search, Filter, Download, Clock, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const TransactionsService = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Advanced Search",
      description: "Find any transaction quickly with powerful search filters."
    },
    {
      icon: <Filter className="w-6 h-6 text-primary" />,
      title: "Smart Filtering",
      description: "Filter by date, amount, status, type, and more."
    },
    {
      icon: <Download className="w-6 h-6 text-primary" />,
      title: "Export Statements",
      description: "Download transaction history in PDF or CSV format."
    }
  ];

  const transactionTypes = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      title: "Completed",
      description: "Successfully processed transactions",
      color: "text-green-600 bg-green-50 dark:bg-green-950"
    },
    {
      icon: <Clock className="w-5 h-5 text-yellow-600" />,
      title: "Pending",
      description: "Transactions awaiting confirmation",
      color: "text-yellow-600 bg-yellow-50 dark:bg-yellow-950"
    },
    {
      icon: <XCircle className="w-5 h-5 text-red-600" />,
      title: "Failed",
      description: "Unsuccessful transaction attempts",
      color: "text-red-600 bg-red-50 dark:bg-red-950"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="flex-1">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Wallet className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transaction History</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Keep track of all your financial activities with detailed transaction history and comprehensive reporting tools.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="cursor-pointer">
              <Link to="/register">View Your History</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="cursor-pointer">
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>History Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">History Period</span>
                <span className="font-bold">Unlimited</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Real-time Updates</span>
                <span className="font-bold">Yes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Export Formats</span>
                <span className="font-bold">PDF, CSV</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Mobile Access</span>
                <span className="font-bold">Available</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Transaction Status Types */}
      <div className="bg-primary/5 rounded-lg p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Transaction Status</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {transactionTypes.map((type, index) => (
            <Card key={index}>
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${type.color} mb-4`}>
                  {type.icon}
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* What You Can Track */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What You Can Track</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Incoming Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Money received from others</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Cash in deposits</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Bank transfers received</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Refunds and reversals</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Outgoing Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Money sent to others</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Cash out withdrawals</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Bill payments</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Purchase transactions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filter Options */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Filter & Search Options</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">By Time Period</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Today's transactions</li>
              <li>• Last 7 days</li>
              <li>• Last 30 days</li>
              <li>• Custom date range</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">By Type</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Cash in</li>
              <li>• Cash out</li>
              <li>• Send money</li>
              <li>• Receive money</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">By Status</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Completed</li>
              <li>• Pending</li>
              <li>• Failed</li>
              <li>• Cancelled</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Export Your Data</h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Download Statements</h3>
                  <p className="text-muted-foreground mb-4">
                    Export your transaction history in multiple formats for record-keeping, accounting, or tax purposes.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>PDF format for printing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>CSV for spreadsheet analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Custom date range selection</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Download className="w-24 h-24 text-primary opacity-20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Start Tracking Your Transactions</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get complete visibility of your financial activities with WalletX transaction history.
        </p>
        <Button asChild size="lg" className="cursor-pointer">
          <Link to="/register">Create Your Account</Link>
        </Button>
      </div>
    </div>
  );
};

export default TransactionsService;
