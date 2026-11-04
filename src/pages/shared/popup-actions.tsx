type Data = {
  id: number;
  text: string;
  color: string;
  action: string;
};

interface PopupActionsProps {
  data: Data[];
  handleClick: (action: string) => void;
}

export const PopupActions = ({ data, handleClick }: PopupActionsProps) => {
  return (
    <div className="flex flex-col gap-2">
      {data.map((i) => (
        <button
          type="button"
          key={i.id}
          className={`p-1.5 cursor-pointer rounded-sm text-sm hover:bg-gray-200 ${i.color}`}
          onClick={() => handleClick(i.action)}
        >
          {i.text}
        </button>
      ))}
    </div>
  );
};
