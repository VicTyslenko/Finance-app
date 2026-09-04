import { useEffect } from "react";

import { useSearchParams } from "react-router";

import type { TransactionsResponse } from "../../../entities/transactions/models";

const PAGE_SIZE = 4;

export const useTransactionTable = ({
  data,
}: {
  data: TransactionsResponse[];
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentStep = searchParams.get("step") || "1";

  useEffect(() => {
    setSearchParams((prev) => {
      const step = prev.get("step");
      if (!step) {
        prev.set("step", "1");
      }
      return prev;
    });
  }, []);

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
  const totalPages: Array<number> = Array.from({
    length: Math.ceil(data.length / PAGE_SIZE),
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

  const start = (Number(currentStep) - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const filteredData = data.slice(start, end);

  return {
    filteredData,
    currentStep,
    handlePageChange,
    totalPages,
    handleBack,
    handleNext,
  };
};
