import { type ColumnDef, tableFeatures } from "@tanstack/react-table";

import type { RecBillsResponse } from "../../../../entities/recurring-bills/models";
import { Avatar } from "../../../overview/components/overview-content/transactions/avatar";
import { basePath } from "../../data";
import { dateEnding, isDueSoon } from "../../lib";

const features = tableFeatures({});

export const billsColumns: Array<ColumnDef<typeof features, RecBillsResponse>> =
  [
    {
      accessorKey: "counterparty",
      header: "Bill Title",
      cell: (info) => {
        const { avatar_url, counterparty, bill_id } = info.row.original;

        return (
          <div key={bill_id} className="flex gap-2 items-center">
            <Avatar name={counterparty} avatar_url={avatar_url} />
            <p className="text-sm font-bold text-black">{counterparty}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "due",
      header: "Due Date",
      cell: (info) => {
        const { due_day, paid } = info.row.original;

        const iconPath = paid
          ? `${basePath}icon-bill-paid.svg`
          : isDueSoon(due_day, paid)
            ? `${basePath}icon-bill-due.svg`
            : null;

        return (
          <div className="flex items-center gap-3">
            <span>
              Monthly-{due_day}
              {dateEnding(String(due_day))}
            </span>
            {iconPath && <img src={iconPath} alt="" />}
          </div>
        );
      },
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: (info) => {
        const { amount, paid, due_day } = info.row.original;
        const color = isDueSoon(due_day, paid) ? "#C94736" : "#201F24";

        return (
          <span style={{ color }} className="text-black font-bold text-md">
            ${amount.toFixed(2)}
          </span>
        );
      },
    },
  ];
