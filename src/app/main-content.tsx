import { BudgetsPage } from "../pages/budgets/budgets-page";
import { OverviewPage } from "../pages/overview/overview-page";
import { PotsPage } from "../pages/pots/pots-page";
import { RecurringBills } from "../pages/recurring-bills/recurring-bills-page";
import { TransactionsPage } from "../pages/transactions/transactions-page";
import { NAV_TABS } from "../shared/data";
import { currencyFormat } from "../shared/lib/currencyFormat";

import { useMainContent } from "./hooks";

export const MainContent = () => {
  const {
    transactions,
    currentPage,
    currentUser,
    income,
    formattedExpenses,
    totalSpend,
    categorySpend,
    getLatestTransactions,
    limitedTransactions,
  } = useMainContent();

  return (
    <div className="flex flex-3 flex-col px-8 pb-8 overflow-y-auto scrollbar-slim">
      {currentPage === NAV_TABS.OVERVIEW && (
        <OverviewPage
          transactions={limitedTransactions}
          income={currencyFormat(income)}
          expenses={currencyFormat(formattedExpenses)}
          currentUser={currentUser}
        />
      )}
      {currentPage === NAV_TABS.TRANSACTIONS && (
        <TransactionsPage data={transactions} />
      )}
      {currentPage === NAV_TABS.BUDGETS && (
        <BudgetsPage
          totalSpend={totalSpend}
          categorySpend={categorySpend}
          latest={getLatestTransactions}
        />
      )}
      {currentPage === NAV_TABS.POTS && <PotsPage />}
      {currentPage === NAV_TABS.BILLS && <RecurringBills />}
    </div>
  );
};
