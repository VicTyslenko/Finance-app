import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CloseButton } from "../../../../shared/components/buttons/close-button";
import { DefaultButton } from "../../../../shared/components/buttons/default-button/default-button";
import { DefaultDropdown } from "../../../../shared/components/dropdown/default-dropdown";
import { DropdownItem } from "../../../../shared/components/dropdown/dropdown-item";
import { DefaultInput } from "../../../../shared/components/form/default-input";
import { FormLabel } from "../../../../shared/components/form/form-label";
import { useModalStore } from "../../../../shared/components/modals/modals-store";
import type { FormMode } from "../../../../shared/components/modals/modals-store";

import { DEFAULT_POT_THEME, defaultPotsValues, potThemes } from "./data";
import { validationPotSchema, type PotsValidationBody } from "./validation";

export const NewPotsForm = ({
  mode,
  selectedPot,
}: {
  mode: FormMode;
  selectedPot: string;
}) => {
  const { handleSubmit, register, setValue, watch } =
    useForm<PotsValidationBody>({
      defaultValues: defaultPotsValues,
      resolver: zodResolver(validationPotSchema),
    });

  const closeModal = useModalStore((state) => state.closeModal);

  const theme = watch("theme") || DEFAULT_POT_THEME.name;

  const currentColor =
    potThemes.find((p) => p.name === theme)?.value ?? DEFAULT_POT_THEME.value;

  const onSubmit = (values: PotsValidationBody) => {
    console.log(values);
  };
  return (
    <div className="flex flex-col gap-3 w-125">
      {/* Header */}

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          {mode === "new" ? "Add New Pot" : "Edit Pot"}
        </h1>

        <CloseButton onClose={closeModal} />
      </div>
      {/* Description */}
      <p className="text-gray-600 text-sm">
        {mode === "new"
          ? "Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
          : "As your budgets change, feel free to update your spending limits."}
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Pot name */}
        <div>
          <FormLabel text="Pot Name" />
          <DefaultInput {...register("potName")} placeholder="$  e.g.2000" />
        </div>

        {/* Maximum spend */}
        <div>
          <FormLabel text="Target" />
          <DefaultInput {...register("target")} placeholder="$  e.g.2000" />
        </div>

        {/* Theme */}
        <div>
          <FormLabel text="Theme" />
          <DefaultDropdown
            directionUp
            withColor={currentColor}
            customClass="w-full"
            itemsList={potThemes.map((t) => (
              <DropdownItem
                color={t.value}
                key={t.name}
                isSelected={theme === t.name}
                onSelect={() => {
                  setValue("theme", t.name);
                }}
                text={t.name}
              />
            ))}
            title={theme}
          />
        </div>
        {/* {errorMessage && <p className="text-red-700 text-sm">{errorMessage}</p>} */}
        <DefaultButton
          type="submit"
          className="bg-black text-white text-sm p-3 cursor-pointer font-bold rounded-md"
        >
          {mode === "new" ? "Add Pot" : "Save Changes"}
        </DefaultButton>
      </form>
    </div>
  );
};
