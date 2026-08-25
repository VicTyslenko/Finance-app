export type TransactionsResponse = {
  transaction_id: number;
  counterparty: string;
  counterparty_slug: string;
  avatar_url: string;
  category: string;
  amount: number;
  occurred_at: string;
};
