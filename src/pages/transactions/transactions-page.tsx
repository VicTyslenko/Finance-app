import { SearchInput } from "../../shared/components/search-input/search-input";
import { DefaultDropdown } from "../../shared/components/dropdown/default-dropdown";
import { DropdownItem } from "../../shared/components/dropdown/dropdown-item";
import { useState } from "react";
import { categoryList, sortByList } from "../overview/data";

export const TransactionsPage = () => {
  const [catValue, setCatValue] = useState(categoryList[0].value);
  const [sortValue, setSortValue] = useState(sortByList[0].value);

  return (
    <div>
      <h1 className="text-xl font-bold text-black mb-8">Transactions</h1>
      {/* Content */}

      <div className="w-full bg-white h-screen p-10">
        {/* Filters wrapp */}
        <div className="flex justify-between items-center">
          <SearchInput placeholder="Search transaction" />
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
      </div>
    </div>
  );
};
