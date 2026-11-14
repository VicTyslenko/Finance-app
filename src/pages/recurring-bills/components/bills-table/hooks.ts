import { useState } from "react";

import { tableFeatures, useTable } from "@tanstack/react-table";
import { useSearchParams } from "react-router";

import type { RecBillsResponse } from "../../../../entities/recurring-bills/models";
import { sortingValues } from "../../../transactions/table/models";

import { billsColumns } from "./bills-table-columns";

const features = tableFeatures({});

export const useBillsTable = (data: RecBillsResponse[]) => {
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const sortby = searchParams.get("sortby") || sortingValues.LATEST;

  const sorted = [...data].sort((a, b) => {
    switch (sortby) {
      case sortingValues.LATEST:
        return a.due_day - b.due_day;
      case sortingValues.OLDEST:
        return b.due_day - a.due_day;
      case sortingValues.LOWEST:
        return a.amount - b.amount;
      case sortingValues.HIGHEST:
        return b.amount - a.amount;
      case sortingValues.ASCEND:
        return a.counterparty.localeCompare(b.counterparty);
      case sortingValues.DESCEND:
        return b.counterparty.localeCompare(a.counterparty);
    }
    return 0;
  });
  const filteredData = sorted.filter((d) =>
    d.counterparty.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const billsTable = useTable({
    key: "bills-table",
    features,
    columns: billsColumns,
    data: filteredData,
  });

  const setFilter = (key: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    });
  };

  return { setFilter, billsTable, setInputValue, sortby };
};
