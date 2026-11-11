import { useGetRecurringBills } from "../../entities/recurring-bills/hooks";
import { PagesHeader } from "../../shared/components/pages-header";

import { SummaryCards } from "./components/summary-cards";

const user_id = 2;
const DUE_SOON_DAYS = 5;

export const RecurringBills = () => {
  const { data: recurringBills } = useGetRecurringBills(user_id);
  const total = recurringBills?.reduce((acc, b) => acc + b.amount, 0) || 0;

  // Paid calculations
  const paidBillsCount = recurringBills?.filter((b) => b.paid).length || 0;
  const paidBillsAmount =
    recurringBills
      ?.filter((b) => b.paid)
      .reduce((acc, b) => acc + b.amount, 0) || 0;

  // Upcoming calculations
  const upcomingCount = recurringBills?.filter((b) => !b.paid).length || 0;
  const upcomingAmount =
    recurringBills
      ?.filter((b) => !b.paid)
      .reduce((acc, b) => acc + b.amount, 0) || 0;

  // Due soon calculations
  const unpaidBills = recurringBills?.filter((b) => !b.paid);
  const today = new Date().getDate();

  const dueSoonBills = unpaidBills?.filter((c) => {
    const dueDay = c.due_day;
    const checkDue = today + DUE_SOON_DAYS;

    return dueDay >= today && dueDay <= checkDue;
  });
  const dueSoonQty = dueSoonBills?.length || 0;
  const dueSoonValue = !dueSoonBills?.length
    ? 0
    : dueSoonBills.reduce((acc, d) => acc + d.amount, 0);

  const summaryRows = [
    {
      title: "Paid Bills",
      value: paidBillsAmount,
      qty: paidBillsCount,
      titleColor: "text-gray-500",
      valueColor: "text-black",
    },
    {
      title: "Total Upcoming",
      value: upcomingAmount,
      qty: upcomingCount,
      titleColor: "text-gray-500",
      valueColor: "text-black",
    },
    {
      title: "Due Soon",
      value: dueSoonValue,
      qty: dueSoonQty,
      titleColor: "text-[#C94736]",
      valueColor: "text-[#C94736]",
    },
  ];

  return (
    <div>
      <PagesHeader title="Recurring Bills" />

      {/* Content wrap */}
      <div className="flex gap-5">
        {/* Left side */}
        <SummaryCards total={total} rows={summaryRows} />
      </div>
    </div>
  );
};
