export const categories = {
  ALL: "All transactions",
  ENTERTAINMENT: "Entertainment",
  BILLS: "Bills",
  GROCERIES: "Groceries",
  DINING: "Dining out",
  TRANSPORT: "Transportation",
} as const;

export type Category = (typeof categories)[keyof typeof categories];

export const BUDGETS_THEMES = {
  Green: "#08751C",
  Yellow: "#FFFF00",
  Cyan: "#00FFFF",
  Turquoise: "#40E0D0",
  Navy: "#000080",
  Red: "#FF0000",
  Purple: "#800080",
} as const;

export type BudgetTheme = keyof typeof BUDGETS_THEMES;
