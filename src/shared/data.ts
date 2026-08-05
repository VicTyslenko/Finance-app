export const NAV_TABS = {
  OVERVIEW: "overview",
  TRANSACTIONS: "transactions",
  BUDGETS: "budgets",
  POTS: "pots",
  BILLS: "bills",
} as const;

export type NavTab = (typeof NAV_TABS)[keyof typeof NAV_TABS];
