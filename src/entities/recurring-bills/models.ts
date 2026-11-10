export type RecBillsResponse = {
  bill_id: number;
  counterparty: string;
  counterparty_slug: string;
  avatar_url: string;
  category: string;
  amount: number;
  due_day: number;
  paid: boolean;
};
