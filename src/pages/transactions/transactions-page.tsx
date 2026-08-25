import { SearchInput } from "../../shared/components/search-input/search-input";

export const TransactionsPage = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-black mb-8">Transactions</h1>
      {/* Content */}

      <div className="w-full bg-white h-screen p-10">
        {/* Filters wrapp */}
        <div className="flex justify-between items-center">
          <SearchInput placeholder="Search transaction" />
          <div className="flex items-center gap-5"></div>
        </div>
      </div>
    </div>
  );
};
