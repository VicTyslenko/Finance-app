import { Budgets } from "./budgets/budgets";
import { Pots } from "./pots/pots";

export const OverviewContent = () => {
  return (
    <div className="flex flex-wrap gap-4 items-start">
      <Pots />
      <Budgets />
    </div>
  );
};
