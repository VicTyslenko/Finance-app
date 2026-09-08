import { useTable, tableFeatures } from "@tanstack/react-table";

import { TablePagination } from "../pagination/table-pagination";

import { TransactionColumns } from "./extensions/transaction-columns";
import { useTransactionTable } from "./hooks";
import type { TableProps } from "./models";

const features = tableFeatures({});

export const TransactionTable = ({ data }: TableProps) => {
  const {
    filteredData,
    handlePageChange,
    handleNext,
    totalPages,
    currentStep,

    handleBack,
  } = useTransactionTable({
    data,
  });
  const transTable = useTable({
    key: "transaction-table",
    features,
    columns: TransactionColumns,
    data: filteredData,
  });

  return (
    <div className="mt-5 flex flex-1 min-h-0 flex-col">
      <div className="scrollbar-slim -mx-10 px-10 flex-1 min-h-0 overflow-y-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead className="sticky top-0 z-10">
            {transTable.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="bg-white text-left text-xs text-gray-500 last:text-right"
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : (
                      <transTable.FlexRender header={header} />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {transTable.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getAllCells().map((cell) => (
                  <td
                    className="py-3 text-sm text-gray-500 last:text-right"
                    key={cell.id}
                  >
                    <transTable.FlexRender cell={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TablePagination
        handleChange={handlePageChange}
        totalPages={totalPages}
        handleBack={handleBack}
        handleNext={handleNext}
        currentStep={Number(currentStep)}
      />
    </div>
  );
};
