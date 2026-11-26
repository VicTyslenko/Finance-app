import { useSearchParams } from "react-router";

import { useGetTransactions } from "../entities/transactions/hooks";
import { useGetUser } from "../entities/users/hooks";
import { NAV_TABS } from "../shared/data";
import type { Category } from "../shared/models";

export const useMainContent = () => {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") ?? NAV_TABS.OVERVIEW;

  const { data: transactions = [] } = useGetTransactions({ user_id: 2 });
  const limitedTransactions = transactions.slice(0, 5);

  const income = transactions
    .filter((t) => t.amount >= 0)
    .reduce((acc, i) => acc + i.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, i) => acc + i.amount, 0);

  const formattedExpenses = Math.abs(expenses);
  const { data: currentUser } = useGetUser(2);

  const getLatestTransactions = (cat: Category) =>
    transactions
      .filter((t) => t.category === cat)
      .sort((a, b) => Date.parse(b.occurred_at) - Date.parse(a.occurred_at))
      .slice(0, 3);

  const totalSpend = transactions.reduce(
    (acc, { amount }): number => Math.round(acc + amount),
    0,
  );

  const categorySpend = (cat: string) =>
    transactions
      .filter((t) => t.category === cat)
      ?.reduce((acc, cat) => acc + Number(cat.amount), 0);

  return {
    currentPage,
    income,
    formattedExpenses,
    currentUser,
    totalSpend,
    categorySpend,
    getLatestTransactions,
    transactions,
    limitedTransactions,
  };
};
