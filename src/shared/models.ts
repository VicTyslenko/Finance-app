export const categories = {
  ALL: "All transactions",
  ENTERTAINMENT: "Entertainment",
  BILLS: "Bills",
  GROCERIES: "Groceries",
  DINING: "Dining out",
  TRANSPORT: "Transportation",
} as const;

export type Category = (typeof categories)[keyof typeof categories];
