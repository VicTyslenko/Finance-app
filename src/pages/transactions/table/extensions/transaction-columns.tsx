import { tableFeatures, type ColumnDef } from "@tanstack/react-table";

import type { TransactionsResponse } from "../../../../entities/transactions/models";
import { FormattedAmount } from "../../../../shared/components/formatted-amount";
import { formatDate } from "../../../../shared/lib/formatDate";
import { Avatar } from "../../../overview/components/overview-content/transactions/avatar";

const features = tableFeatures({});

export const TransactionColumns: Array<
  ColumnDef<typeof features, TransactionsResponse>
> = [
  {
    accessorKey: "counterparty",
    header: "Recepient / Sender",
    cell: (info) => {
      const { avatar_url, counterparty, transaction_id } = info.row.original;

      return (
        <div key={transaction_id} className="flex gap-2 items-center">
          <Avatar name={counterparty} avatar_url={avatar_url} />
          <p className="text-sm font-bold text-black">{counterparty}</p>
        </div>
      );
    },
  },
  {
    accessorFn: (row) => row.category,
    id: "category",
    header: () => <span>Category</span>,
  },
  {
    accessorKey: "occurred_at",
    header: () => "Transaction date",
    cell: (info) => {
      const date = String(info.getValue());

      const formatted = formatDate({ date });
      return formatted;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (info) => <FormattedAmount amount={Number(info.getValue())} />,
  },
];
