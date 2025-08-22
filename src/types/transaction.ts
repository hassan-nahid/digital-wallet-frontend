export interface TransactionUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface TransactionWallet {
  _id: string;
  userId: string;
  balance: number;
  currency: string;
  isBlocked: boolean;
  commission: number;
  adminProfit: number;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  _id: string;
  sender: TransactionUser;
  receiver: TransactionUser;
  walletId: TransactionWallet;
  transactionId: string;
  transactionType: "add_money" | "cash_in" | "cash_out" | "commission" | string;
  amount: number;
  fee: number;
  status: "approved" | "pending" | "rejected" | string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionMeta {
  page: number;
  limit: number;
  totalPage: number;
  total: number;
}

export interface TransactionResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: TransactionMeta;
  data: Transaction[];
}
