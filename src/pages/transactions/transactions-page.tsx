import { useSearchParams } from "react-router";

import { useGetTransactions } from "../../entities/transactions/hooks";
import { DefaultDropdown } from "../../shared/components/dropdown/default-dropdown";
import { DropdownItem } from "../../shared/components/dropdown/dropdown-item";
import { SearchInput } from "../../shared/components/search-input/search-input";
import { categoryList, sortByList } from "../overview/data";

import { TransactionTable } from "./table/transaction-table";

export const TransactionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortby = searchParams.get("sortby") || sortByList[0].value;
  const catValue = searchParams.get("category") || categoryList[0].value;

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
            onChange={(e) => {
              setSearchParams((prev) => {
                prev.set("query", e.target.value);
                prev.set("step", "1");
                return prev;
              });
            }}
          />
          <div className="flex items-center gap-5">
            <DefaultDropdown
              label="Sort by"
              title={sortby}
              itemsList={sortByList.map((i) => (
                <DropdownItem
                  key={i.id}
                  text={i.value}
                  onSelect={() => {
                    setSearchParams((prev) => {
                      prev.set("sortby", i.value);
                      return prev;
                    });
                  }}
                  isSelected={i.value === sortby}
                />
              ))}
            />
            <DefaultDropdown
              label="Category"
              title={catValue}
              itemsList={categoryList.map((i) => (
                <DropdownItem
                  key={i.id}
                  text={i.value}
                  onSelect={() => {
                    setSearchParams((prev) => {
                      prev.set("category", i.value);
                      return prev;
                    });
                  }}
                  isSelected={i.value === catValue}
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
