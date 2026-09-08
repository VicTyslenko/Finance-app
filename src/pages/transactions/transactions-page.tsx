import { useState } from "react";

import { useGetTransactions } from "../../entities/transactions/hooks";
import { DefaultDropdown } from "../../shared/components/dropdown/default-dropdown";
import { DropdownItem } from "../../shared/components/dropdown/dropdown-item";
import { SearchInput } from "../../shared/components/search-input/search-input";
import { categoryList, sortByList } from "../overview/data";

import { TransactionTable } from "./table/transaction-table";

export const TransactionsPage = () => {
  const [catValue, setCatValue] = useState(categoryList[0].value);
  const [sortValue, setSortValue] = useState(sortByList[0].value);

  const [searchValue, setSearchValue] = useState<string>("");

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
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="flex items-center gap-5">
            <DefaultDropdown
              label="Sort by"
              title={sortValue}
              itemsList={sortByList.map((i) => (
                <DropdownItem
                  key={i.id}
                  text={i.value}
                  onSelect={setSortValue}
                  isSelected={i.value === sortValue}
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
                  onSelect={setCatValue}
                  isSelected={i.value === catValue}
                />
              ))}
            />
          </div>
        </div>

        {/* Table */}
        <TransactionTable searchValue={searchValue} data={transactions} />
      </div>
    </div>
  );
};
