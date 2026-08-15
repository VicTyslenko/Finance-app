import { ContentHeader } from "../content-header";
import { budgets } from "../../temp-data";
import { Chart } from "./chart";

export const Budgets = () => {
  return (
    <div className="bg-white shadow-xl flex-1 pb-34.5 p-5 rounded-md">
      <ContentHeader title="Budgets" details="See details" />

      {/* Chart wrapper */}
      <div className="flex gap-2 items-center ">
        <Chart />

        <div className="flex flex-col gap-2">
          {budgets.map((b) => (
            <div
              key={b.value}
              className={`border-l-4 flex flex-col gap-1.5 ${b.itemStyle.border} pl-3`}
            >
              <h3 className="text-gray-500 text-sm">{b.name}</h3>
              <p className="font-bold text-md text-black">${b.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
