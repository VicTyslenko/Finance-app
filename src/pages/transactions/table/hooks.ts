import { useSearchParams } from "react-router";

import type { TransactionsResponse } from "../../../entities/transactions/models";

const PAGE_SIZE = 8;

export const useTransactionTable = ({
  data,
}: {
  data: TransactionsResponse[];
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";
  const currentStep = searchParams.get("step") || "1";

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

  const matching = data.filter((el) =>
    el.counterparty_slug.toLowerCase().includes(query.toLowerCase()),
  );

  const totalPages: Array<number> = Array.from({
    length: Math.ceil(matching.length / PAGE_SIZE),
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

  const filteredData = matching.slice(start, end);

  return {
    filteredData,
    currentStep,
    handlePageChange,
    totalPages,
    handleBack,
    handleNext,
  };
};
