import { useSearchParams } from "react-router";

import { OverviewPage } from "../pages/overview/overview-page";
import { TransactionsPage } from "../pages/transactions/transactions-page";
import { NAV_TABS } from "../shared/data";

export const MainContent = () => {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") ?? NAV_TABS.OVERVIEW;
  return (
    <div className="flex flex-3 min-w-0 min-h-0 flex-col p-8 bg-[#dbe3e3]">
      {currentPage === NAV_TABS.OVERVIEW && <OverviewPage />}
      {currentPage === NAV_TABS.TRANSACTIONS && <TransactionsPage />}
    </div>
  );
};
