import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useCreatePot } from "../../../../entities/pots/hooks";
import type { PotResponse } from "../../../../entities/pots/models";
import { CloseButton } from "../../../../shared/components/buttons/close-button";
import { DefaultButton } from "../../../../shared/components/buttons/default-button/default-button";
import { DefaultDropdown } from "../../../../shared/components/dropdown/default-dropdown";
import { DropdownItem } from "../../../../shared/components/dropdown/dropdown-item";
import { DefaultInput } from "../../../../shared/components/form/default-input";
import { FormLabel } from "../../../../shared/components/form/form-label";
import { useModalStore } from "../../../../shared/components/modals/modals-store";

import { DEFAULT_POT_THEME, defaultPotsValues, potThemes } from "./data";
import { type PotsValidationBody } from "./validation";

export const NewPotsForm = ({
  selectedPot,
}: {
  selectedPot: PotResponse | null;
}) => {
  const mode = useModalStore((state) => state.formMode);

  const pickedValues: PotsValidationBody = {
    name: selectedPot?.name ?? "",
    target: selectedPot?.target ?? 1,
    theme: selectedPot?.theme ?? "",
  };

  console.log(pickedValues);
  const { handleSubmit, register, setValue, watch } =
    useForm<PotsValidationBody>({
      defaultValues: mode === "new" ? defaultPotsValues : pickedValues,
      // resolver: zodResolver(validationPotSchema),
    });
  const { mutate: createPot } = useCreatePot();
  const closeModal = useModalStore((state) => state.closeModal);

  const theme = watch("theme") || DEFAULT_POT_THEME.name;

  const currentColor =
    potThemes.find((p) => p.name === theme)?.value ?? DEFAULT_POT_THEME.value;

  const onSubmit = (values: PotsValidationBody) => {
    createPot(
      { user_id: 2, body: values },
      {
        onSuccess: () => {
          toast.success("Pot created!");
          closeModal();
        },
      },
    );
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
          : "If your saving targets change, feel free to update your pots."}
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Pot name */}
        <div>
          <FormLabel text="Pot Name" />
          <DefaultInput {...register("name")} placeholder="$  e.g.Rainy Days" />
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
