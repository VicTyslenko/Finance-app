import type { TransactionsResponse } from "../../entities/transactions/models";
import type { UserResponse } from "../../entities/users/models";
import { PagesHeader } from "../../shared/components/pages-header";
import { currencyFormat } from "../../shared/lib/currencyFormat";

import { RecurringBills } from "./components/bills/recurring-bills";
import { Budgets } from "./components/budgets/budgets";
import { KPICards } from "./components/kpi-cards";
import { Pots } from "./components/pots/pots";
import { Transactions } from "./components/transactions/transactions";

export const OverviewPage = ({
  currentUser,
  income,
  expenses,
  transactions,
}: {
  currentUser?: UserResponse;
  income: string;
  expenses: string;
  transactions: TransactionsResponse[];
}) => {
  const balance = currentUser?.balance || 0;

  return (
    <div className="scrollbar-slim flex-1">
      <PagesHeader title="Overview" />
      <KPICards
        income={income}
        expenses={expenses}
        balance={currencyFormat(balance)}
      />
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left column */}
        <div className="flex flex-col gap-4 lg:flex-3 min-w-0">
          <Pots />
          <Transactions data={transactions} />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 lg:flex-2 min-w-0">
          <Budgets />
          <RecurringBills />
        </div>
      </div>
    </div>
  );
};
