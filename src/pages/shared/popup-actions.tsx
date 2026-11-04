import {
  useModalStore,
  useWarnModalStore,
} from "../../shared/components/modals/modals-store";

type Data = {
  id: number;
  text: string;
  color: string;
  action: string;
};

interface PopupActionsProps {
  data: Data[];
}

export const PopupActions = ({ data }: PopupActionsProps) => {
  const openWarnModal = useWarnModalStore((state) => state.openWarnModal);
  const openModal = useModalStore((state) => state.openModal);

  const handleClick = (action: string) => {
    if (action === "delete") {
      openWarnModal();
    }
    if (action === "edit") {
      openModal("edit");
    }
  };
  return (
    <div className="flex flex-col gap-2">
      {data.map((i) => (
        <button
          type="button"
          key={i.id}
          className={`p-1.5 cursor-pointer rounded-sm text-sm text-left hover:bg-gray-200 ${i.color}`}
          onClick={() => handleClick(i.action)}
        >
          {i.text}
        </button>
      ))}
    </div>
  );
};
