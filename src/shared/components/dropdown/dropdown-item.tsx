export const DropdownItem = ({
  text,
  onSelect,
  isSelected,
}: {
  text: string;
  onSelect: (value: string) => void;
  isSelected: boolean;
}) => {
  return (
    <div
      onClick={() => onSelect(text)}
      className={`text-sm ${isSelected ? "text-black" : "text-gray-400"} border-b last:border-b-0 border-b-gray-200 p-1.5`}
    >
      {text}
    </div>
  );
};
