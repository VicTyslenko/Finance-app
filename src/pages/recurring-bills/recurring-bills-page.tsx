import { PagesHeader } from "../../shared/components/pages-header";

import { BillsTable } from "./components/bills-table/bills-table";
import { SummaryCards } from "./components/summary-cards";
import { useRecurringBills } from "./hooks";

export const RecurringBills = () => {
  const { total, summaryRows, recurringBills } = useRecurringBills();

  return (
    <div>
      <PagesHeader title="Recurring Bills" />

      {/* Content wrap */}
      <div className="flex gap-5">
        <SummaryCards total={total} rows={summaryRows} />
        <BillsTable data={recurringBills} />
      </div>
    </div>
  );
};
