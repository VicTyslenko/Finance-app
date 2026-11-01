import { BUDGETS_THEMES, type BudgetTheme } from "../../models";

export const ProgressBar = ({
  progress,
  theme,
}: {
  progress: number;
  theme: BudgetTheme;
}) => {
  return (
    <div className="bg-[#f8f4f0] rounded-md h-10 p-1.5 w-full">
      <div
        className="bg-[#277C78] h-full rounded-md"
        style={{
          width: `${progress}%`,
          backgroundColor: `${BUDGETS_THEMES[theme]}`,
        }}
      />
    </div>
  );
};
