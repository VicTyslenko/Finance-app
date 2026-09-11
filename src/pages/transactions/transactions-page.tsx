import { useSearchParams } from "react-router";

import { useGetTransactions } from "../../entities/transactions/hooks";
import { DefaultDropdown } from "../../shared/components/dropdown/default-dropdown";
import { DropdownItem } from "../../shared/components/dropdown/dropdown-item";
import { SearchInput } from "../../shared/components/search-input/search-input";

import { categories, sortingValues } from "./table/models";
import { TransactionTable } from "./table/transaction-table";

export const TransactionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortby = searchParams.get("sortby") || sortingValues.LATEST;
  const category = searchParams.get("category") || categories.ALL;

  const setFilter = (key: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      prev.set("step", "1");
      return prev;
    });
  };

  const { data: transactions = [] } = useGetTransactions({ user_id: 1 });
  return (
    <div className="flex flex-1 min-h-0 flex-col">
      <h1 className="shrink-0 text-xl font-bold text-black mb-8">
        Transactions
      </h1>
      {/* Content */}

      <div className="flex flex-1 min-h-0 flex-col w-full bg-white p-10 rounded-lg">
        {/* Filters wrapp */}
        <div className="shrink-0 flex justify-between items-center">
          <SearchInput
            placeholder="Search transaction"
            onChange={(e) => setFilter("query", e.target.value)}
          />
          <div className="flex items-center gap-5">
            <DefaultDropdown
              label="Sort by"
              title={sortby}
              itemsList={Object.values(sortingValues).map((value) => (
                <DropdownItem
                  key={value}
                  text={value}
                  onSelect={() => setFilter("sortby", value)}
                  isSelected={value === sortby}
                />
              ))}
            />
            <DefaultDropdown
              label="Category"
              title={category}
              itemsList={Object.values(categories).map((value) => (
                <DropdownItem
                  key={value}
                  text={value}
                  onSelect={() => setFilter("category", value)}
                  isSelected={value === category}
                />
              ))}
            />
          </div>
        </div>

        {/* Table */}
        <TransactionTable data={transactions} />
      </div>
    </div>
  );
};
