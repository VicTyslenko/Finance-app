import { Budgets } from "./budgets/budgets";
import { Pots } from "./pots/pots";
import { Transactions } from "./transactions/transactions";
import { RecurringBills } from "./bills/recurring-bills";
import { useGetUsers } from "../../../../entities/users/hooks";

export const OverviewContent = () => {
  const { data: users = [] } = useGetUsers();
  const filtered = users.filter((u) => u.avatar_url !== null);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Left column */}
      <div className="flex flex-col gap-4 lg:flex-3 min-w-0">
        <Pots />
        <Transactions data={filtered} />
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-4 lg:flex-2 min-w-0">
        <Budgets />
        <RecurringBills />
      </div>
    </div>
  );
};
