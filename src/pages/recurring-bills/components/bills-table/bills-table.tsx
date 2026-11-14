import type { RecBillsResponse } from "../../../../entities/recurring-bills/models";
import { DefaultDropdown } from "../../../../shared/components/dropdown/default-dropdown";
import { DropdownItem } from "../../../../shared/components/dropdown/dropdown-item";
import { SearchInput } from "../../../../shared/components/search-input/search-input";
import { sortingValues } from "../../../transactions/table/models";

import { useBillsTable } from "./hooks";

export const BillsTable = ({ data }: { data: RecBillsResponse[] }) => {
  const { setFilter, billsTable, setInputValue, sortby } = useBillsTable(data);

  return (
    <div className="bg-white rounded-lg p-8 flex-3">
      {/* Table filters */}
      <div className="flex items-center justify-between mb-10">
        <SearchInput
        placeholder="Seach bills"
          onChange={(e) => setInputValue(e.target.value)}
          style={{ minWidth: 328 }}
        />
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
      </div>
      {/* Sort by */}

      <table className="w-full border-separate border-spacing-0">
        {/* Table head */}
        <thead className="sticky top-0 z-10">
          {billsTable.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="bg-inherit font-light text-left text-xs text-gray-500 last:text-right"
                  key={header.id}
                >
                  {header.isPlaceholder ? null : (
                    <billsTable.FlexRender header={header} />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Table body */}
        <tbody>
          {billsTable.getRowModel().rows.map((row) => (
            <tr key={row.id} className="not-last:border-b border-gray-300">
              {row.getAllCells().map((cell) => (
                <td
                  className="py-3 text-sm text-gray-500 last:text-right"
                  key={cell.id}
                >
                  <billsTable.FlexRender cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
