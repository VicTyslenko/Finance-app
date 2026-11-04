import { DefaultButton } from "../../shared/components/buttons/default-button/default-button";
import { PagesHeader } from "../../shared/components/pages-header";

export const PotsPage = () => {
  return (
    <div className="flex justify-between items-center">
      <PagesHeader title="Pots" />
      <DefaultButton variant="secondary">+ Add New Pot</DefaultButton>
    </div>
  );
};
