import { useGetTransactions } from "../../../../entities/transactions/hooks";

import { RecurringBills } from "./bills/recurring-bills";
import { Budgets } from "./budgets/budgets";
import { Pots } from "./pots/pots";
import { Transactions } from "./transactions/transactions";


const TRANS_LIMIT = 5;

export const OverviewContent = () => {
  const { data: transactions = [] } = useGetTransactions({
    user_id: 1,
    limit: TRANS_LIMIT,
  });

  return (
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
  );
};
