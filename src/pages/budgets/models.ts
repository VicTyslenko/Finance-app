export type BudgetForm = {
  category: string;
  maxSpend: string;
  theme: string;
  color: string;
};

export const budgetCategory = {
  ENTERTAINMENT: "Entertainment",
  BILLS: "Bills",
  GROCERIES: "Groceries",
  DINING: "Dining out",
  TRANSPORT: "Transportation",
  PERSONAL: "Personal Care",
  EDUCATION: "Education",
} as const;

export type Category = (typeof budgetCategory)[keyof typeof budgetCategory];
