
import { BUDGETS_THEMES } from "../../../../shared/models";
import { useBudgetsPage } from "../../../budgets/hooks";
import { ContentHeader } from "../content-header";

// import { budgets } from "../data";
import { Chart } from "./chart/chart";

export const Budgets = ({ totalSpend }: { totalSpend: number }) => {
  const { budgets, limit } = useBudgetsPage();
  return (
    <div className="bg-white shadow-xl p-5 rounded-md pb-25">
      <ContentHeader title="Budgets" details="See details" navigateTo="budgets" />

      {/* Chart wrapper */}
      <div className="flex gap-2 items-center ">
        <Chart limit={limit} totalSpend={totalSpend} />

        <div className="flex flex-col gap-2">
          {budgets.map((b) => {
            const border = BUDGETS_THEMES[b.theme];

            return (
              <div key={b.budget_id} className="flex gap-2">
                <div
                  className="rounded-full w-1 h-10"
                  style={{ backgroundColor: border }}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-500 text-sm">{b.category}</h3>
                  <p className="font-bold text-md text-black">
                    ${b.maximum_spend}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
