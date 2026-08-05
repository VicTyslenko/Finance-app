import { useSearchParams } from "react-router";
import { NAV_TABS } from "../shared/data";
import { Overview } from "../pages/overview/overview";
export const MainContent = () => {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") ?? NAV_TABS.OVERVIEW;
  return (
    <div className="flex-3 p-8 bg-[#dbe3e3]">
      {currentPage === NAV_TABS.OVERVIEW && <Overview />}
      {currentPage === NAV_TABS.TRANSACTIONS && "Hello there"}
    </div>
  );
};
