export type PaginationProps = {
  handleChange: (n: number) => void;
  totalPages: Array<number>;
  handleBack: () => void;
  handleNext: () => void;
  currentStep: number;
};
