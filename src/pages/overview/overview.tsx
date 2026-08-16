import { KPICards } from "./components/kpi-cards/kpi-cards";
import { OverviewContent } from "./components/overview-content/overview-content";

export const Overview = () => {

  return (
    <div>
      <h1 className="text-xl font-bold text-black mb-8">Overview</h1>
      <KPICards />
      <OverviewContent />
    </div>
  );
};
