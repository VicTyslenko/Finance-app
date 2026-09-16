import { useForm, type SubmitHandler } from "react-hook-form";

import { CloseButton } from "../../../../shared/components/buttons/close-button";
import { DefaultDropdown } from "../../../../shared/components/dropdown/default-dropdown";
import { DropdownItem } from "../../../../shared/components/dropdown/dropdown-item";
import { useModalStore } from "../../../../shared/components/modals/modals-store";
import { budgetCategory } from "../../models";

type Inputs = {
  category: string;
  maxSpend: string;
  theme: string;
};
export const NewBudgetForm = () => {
  const { register, handleSubmit, watch, formState, setValue } =
    useForm<Inputs>();

  const { errors } = formState;

  const closeModal = useModalStore((state) => state.closeModal);

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    console.log(values);
  };
  const category = watch("category") || budgetCategory.ENTERTAINMENT;
  
  return (
    <div className="flex flex-col gap-3 w-125">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Add New Budget</h1>
        <CloseButton onClose={closeModal} />
      </div>
      {/* Description */}
      <p className="text-gray-600 text-sm">
        Choose a category to set a spending budget. These categories can help
        you monitor spending .
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <DefaultDropdown
            itemsList={Object.values(budgetCategory).map((c) => (
              <DropdownItem
                key={c}
                isSelected={true}
                onSelect={() => {
                  setValue("category", c);
                }}
                text={c}
              />
            ))}
            title={category}
          >
            Some stuff here
          </DefaultDropdown>
        </label>
      </form>
    </div>
  );
};
