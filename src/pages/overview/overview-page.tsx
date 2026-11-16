import type { UserResponse } from "../../entities/users/models";
import { PagesHeader } from "../../shared/components/pages-header";
import { currencyFormat } from "../../shared/lib/currencyFormat";

import { KPICards } from "./components/kpi-cards/kpi-cards";
import { OverviewContent } from "./components/overview-content/overview-content";

export const OverviewPage = ({
  currentUser,
  income,
  expenses,
}: {
  currentUser?: UserResponse;
  income: string;
  expenses: string;
}) => {
  const balance = currentUser?.balance || 0;

  return (
    <div className="scrollbar-slim flex-1">
      <PagesHeader title="Overview" />
      <KPICards
        income={income}
        expenses={expenses}
        balance={currencyFormat(balance)}
      />
      <OverviewContent />
    </div>
  );
};
