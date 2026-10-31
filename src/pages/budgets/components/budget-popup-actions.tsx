import {
  useModalStore,
  useWarnModalStore,
} from "../../../shared/components/modals/modals-store";

const popupItemData = [
  { id: 1, text: "Edit Budget", color: "text-black", action: "edit" },
  { id: 2, text: "Delete Budget", color: "text-[#C94736]", action: "delete" },
];

export const BudgetPopupActions = () => {
  const openWarnModal = useWarnModalStore((state) => state.openWarnModal);
  const openModal = useModalStore((state) => state.openModal);
  return (
    <div className="flex flex-col gap-2">
      {popupItemData.map((i) => (
        <p
          key={i.id}
          className={`p-1.5 cursor-pointer rounded-sm text-sm hover:bg-gray-200 ${i.color}`}
          onClick={() => {
            if (i.action === "delete") {
              openWarnModal();
            }
            if (i.action === "edit") {
              openModal("edit");
            }
          }}
        >
          {i.text}
        </p>
      ))}
    </div>
  );
};
