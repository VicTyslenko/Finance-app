import { DefaultButton } from "../../../shared/components/default-button/default-button";

import type { PaginationProps } from "./models";

export const TablePagination = ({
  totalPages,
  handleChange,
  handleBack,
  handleNext,
  currentStep,
}: PaginationProps) => {
  return (
    <div className="flex justify-between items-center">
      <DefaultButton onClick={handleBack}>
        <img src="/assets/images/icon-caret-left.svg" alt="next button" />
        <p>Prev</p>
      </DefaultButton>

      <div className="flex gap-2">
        {totalPages.map((n) => (
          <div
            onClick={() => handleChange(n)}
            key={n}
            className={`w-8 h-8 p-2 flex  justify-center items-center ${currentStep === n ? "bg-black text-white" : "bg-transparent text-black"}  border rounded-md cursor-pointer text-sm`}
          >
            {n}
          </div>
        ))}
      </div>
      <DefaultButton onClick={handleNext}>
        <p>Next</p>
        <img src="/assets/images/icon-caret-right.svg" alt="next button" />
      </DefaultButton>
    </div>
  );
};
