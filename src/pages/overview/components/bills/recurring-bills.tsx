import { useNavigate } from "react-router";

import { useRecurringBills } from "../../../recurring-bills/hooks";
import { ContentHeader } from "../content-header";
import { billsInfo } from "../data";

export const RecurringBills = () => {
  const navigate = useNavigate();
  const { paidBillsAmount, upcomingAmount, dueSoonValue } = useRecurringBills();
  return (
    <section className="bg-white shadow-xl p-7 rounded-md flex-1">
      <ContentHeader
        title="Recurring Bills"
        details="See Details"
        navigate={() => navigate("/?page=bills")}
      />

      {/* Info wrapp */}
      <div className="flex flex-col gap-2">
        {billsInfo({
          paid: paidBillsAmount.toFixed(2),
          total: upcomingAmount.toFixed(2),
          due: dueSoonValue.toFixed(2),
        }).map((b) => (
          <div
            className={`pt-5 pr-3 pb-5 pl-3 flex justify-between items-center rounded-lg bg-[#F8F4F0] border-l-3 ${b.border}`}
            key={b.id}
          >
            <p className="text-sm text-gray-700">{b.title}</p>
            <p className="text-lg font-bold text-black">${b.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
