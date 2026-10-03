import { useSearchParams } from "react-router";

import { useGetBudgets } from "../entities/budgets/hooks";
import { useGetTransactions } from "../entities/transactions/hooks";
import { BudgetsPage } from "../pages/budgets/budgets-page";
import { OverviewPage } from "../pages/overview/overview-page";
import { TransactionsPage } from "../pages/transactions/transactions-page";
import { NAV_TABS } from "../shared/data";

export const MainContent = () => {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") ?? NAV_TABS.OVERVIEW;

  const { data: transactions = [] } = useGetTransactions({ user_id: 1 });

  const { data: budgets = [] } = useGetBudgets(1);

  return (
    <div className="flex flex-3 flex-col px-8 pb-8 overflow-y-auto scrollbar-slim">
      {currentPage === NAV_TABS.OVERVIEW && <OverviewPage />}
      {currentPage === NAV_TABS.TRANSACTIONS && (
        <TransactionsPage data={transactions} />
      )}
      {currentPage === NAV_TABS.BUDGETS && <BudgetsPage data={budgets} />}
    </div>
  );
};
