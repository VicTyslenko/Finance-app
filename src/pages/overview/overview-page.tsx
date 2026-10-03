import { PagesHeader } from "../../shared/components/pages-header";

import { KPICards } from "./components/kpi-cards/kpi-cards";
import { OverviewContent } from "./components/overview-content/overview-content";

export const OverviewPage = () => {
  return (
    <div className="scrollbar-slim flex-1">
      <PagesHeader title="Overview"/>
      <KPICards />
      <OverviewContent />
    </div>
  );
};
