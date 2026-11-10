import { useGetRecurringBills } from "../../entities/recurring-bills/hooks";
import { PagesHeader } from "../../shared/components/pages-header";

import { BillsTotalCard } from "./components/bills-total-card";

const user_id = 2;

export const RecurringBills = () => {
  const { data: recurringBills } = useGetRecurringBills(user_id);

  const total = recurringBills?.reduce((acc, b) => acc + b.amount, 0) || 0;

  return (
    <div>
      <PagesHeader title="Recurring Bills" />

      {/* Content wrap */}
      <div className="flex gap-5">
        {/* Left side */}
        <div className="flex flex-col gap-4">
          <BillsTotalCard total={total} />
        </div>
      </div>
    </div>
  );
};
