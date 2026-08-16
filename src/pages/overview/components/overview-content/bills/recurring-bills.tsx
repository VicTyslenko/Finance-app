import { ContentHeader } from "../content-header";
import { billsInfo } from "../../temp-data";

export const RecurringBills = () => {
  return (
    <section className="bg-white shadow-xl p-7 rounded-md flex-1">
      <ContentHeader title="Recurring Bills" details="See Details" />

      {/* Info wrapp */}
      <div className="flex flex-col gap-2">
        {billsInfo.map((i) => (
          <div
            className={`p-3 flex justify-between items-center rounded-lg bg-[#e3e2d6] border-l-3 ${i.border}`}
            key={i.title}
          >
            <p className="text-sm text-gray-700">{i.title}</p>
            <p className="text-lg font-bold text-black">${i.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
