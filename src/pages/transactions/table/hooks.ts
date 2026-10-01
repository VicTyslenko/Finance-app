import { useSearchParams } from "react-router";

import type { TransactionsResponse } from "../../../entities/transactions/models";
import { categories } from "../../../shared/models";

import { sortingValues } from "./models";

const PAGE_SIZE = 8;

export const useTransactionTable = ({
  data,
}: {
  data: TransactionsResponse[];
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const currentStep = searchParams.get("step") || "1";

  const sortby = searchParams.get("sortby") || sortingValues.LATEST;
  const category = searchParams.get("category") || categories.ALL;

  const handlePageChange = (value: number) => {
    setSearchParams((prev) => {
      prev.set("step", String(value));
      return prev;
    });
  };

  const handleBack = () => {
    setSearchParams((prev) => {
      const current = prev.get("step") || "1";
      const back = Number(current) - 1;

      if (Number(current) === 1) return prev;
      prev.set("step", String(back));

      return prev;
    });
  };

  const sorted = [...data].sort((a, b) => {
    switch (sortby) {
      case sortingValues.ASCEND:
        return a.counterparty.localeCompare(b.counterparty);
      case sortingValues.DESCEND:
        return b.counterparty.localeCompare(a.counterparty);
      case sortingValues.LATEST:
        return Date.parse(b.occurred_at) - Date.parse(a.occurred_at);
      case sortingValues.OLDEST:
        return Date.parse(a.occurred_at) - Date.parse(b.occurred_at);
      case sortingValues.LOWEST:
        return a.amount - b.amount;
      case sortingValues.HIGHEST:
        return b.amount - a.amount;
      default:
        return 0;
    }
  });
  const filterByCategory =
    category === categories.ALL
      ? sorted
      : sorted.filter((c) => c.category === category);

  const queryFiltered = filterByCategory.filter((el) => {
    return el.counterparty_slug.toLowerCase().includes(query.toLowerCase());
  });
  const totalPages: Array<number> = Array.from({
    length: Math.ceil(queryFiltered.length / PAGE_SIZE),
  }).map((_, index) => index + 1);

  const handleNext = () => {
    setSearchParams((prev) => {
      const current = prev.get("step") || "1";
      const next = Number(current) + 1;
      if (totalPages.indexOf(next) === -1) return prev;

      prev.set("step", String(next));
      return prev;
    });
  };

  const start: number = (Number(currentStep) - 1) * PAGE_SIZE;
  const end: number = start + PAGE_SIZE;

  const filteredData = queryFiltered.slice(start, end);
  return {
    filteredData,
    currentStep,
    handlePageChange,
    totalPages,
    handleBack,
    handleNext,
  };
};
