import type { TransactionsResponse } from "../../entities/transactions/models";
import { DefaultButton } from "../../shared/components/default-button/default-button";
import { Chart } from "../overview/components/overview-content/budgets/chart";

export const BudgetsPage = ({ data }: { data: TransactionsResponse[] }) => {

  const filteredData=data.filter((el)=>{

    console.log(el.amount)
  })
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-black"> Budgets</h1>
        <DefaultButton variant="secondary">+ Add New Budget</DefaultButton>
      </div>
      {/* Content */}
      <div className="flex gap-4">
        <div className="bg-white rounded-lg p-4 flex flex-col  gap-4">
          <div className="pl-10 pr-10">
            <Chart />
          </div>
          {/* Summary */}
          <div className="flex flex-col gap-3">
            <h2 className="text-black text-lg font-bold">Spending Summary</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
