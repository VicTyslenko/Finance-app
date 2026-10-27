import { useGetBudgets } from "../../entities/budgets/hooks";
import { DefaultButton } from "../../shared/components/buttons/default-button/default-button";
import { DefaultModal } from "../../shared/components/modals/default-modal";
import { useModalStore } from "../../shared/components/modals/modals-store";
import { WarningModal } from "../../shared/components/modals/warning-modal";
import { PagesHeader } from "../../shared/components/pages-header";
import { BUDGETS_THEMES } from "../../shared/models";
import { Chart } from "../overview/components/overview-content/budgets/chart/chart";

import { NewBudgetForm } from "./components/new-budget-form/new-budget-form";

export const BudgetsPage = ({
  totalSpend,
  categorySpend,
}: {
  totalSpend: number;
  categorySpend: (cat: string) => number;
}) => {
  const openModal = useModalStore((state) => state.openModal);

  const { data: budgets = [] } = useGetBudgets(2);
  const limit = budgets.reduce((acc, { maximum_spend }) => {
    return (acc += Number(maximum_spend));
  }, 0);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <PagesHeader title="Budgets" />

        <DefaultButton onClick={openModal} variant="secondary">
          + Add New Budget
        </DefaultButton>
      </div>
      {!budgets.length ? (
        <div className="w-full h-full flex justify-center mt-30">
          <span className="text-black">
            There are no budgets yet. Create the first one
          </span>
        </div>
      ) : (
        <div className="flex gap-4">
          <div className="bg-white rounded-lg p-4 flex flex-col  gap-4">
            <div className="pl-10 pr-10">
              {<Chart totalSpend={totalSpend} limit={limit} />}
            </div>

            {/* Summary */}
            <div className="flex flex-col gap-3">
              <h2 className="text-black text-lg font-bold">Spending Summary</h2>
              {budgets.map((b) => {
                const roundedSpend = Math.abs(
                  Math.round(categorySpend(b.category)),
                );
                const border = BUDGETS_THEMES[b.theme];
                return (
                  <div
                    key={b.budget_id}
                    className={`flex justify-between items-center border-l-5  pl-2 pr-2`}
                    style={{ borderColor: border }}
                  >
                    <span>{b.category}</span>
                    <p>
                      ${roundedSpend} of {b.maximum_spend}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <DefaultModal children={<NewBudgetForm />} />
      <WarningModal title="" description="" confirmText="" />
    </div>
  );
};
