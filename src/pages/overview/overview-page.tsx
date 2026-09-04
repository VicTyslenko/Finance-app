import { KPICards } from "./components/kpi-cards/kpi-cards";
import { OverviewContent } from "./components/overview-content/overview-content";

export const OverviewPage = () => {

  return (
    <div className="scrollbar-slim flex-1 min-h-0 overflow-y-auto">
      <h1 className="text-xl font-bold text-black mb-8">Overview</h1>
      <KPICards />
      <OverviewContent />
    </div>
  );
};
