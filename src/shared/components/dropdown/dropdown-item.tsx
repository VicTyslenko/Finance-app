export const DropdownItem = ({
  text,
  onSelect,
  isSelected,
  color,
}: {
  text: string;
  onSelect: (value: string) => void;
  isSelected: boolean;
  color?: string;
}) => {
  return (
    <div
      onClick={() => onSelect(text)}
      className={`text-sm ${isSelected ? "text-black" : "text-gray-400"} border-b hover:bg-gray-300 rounded-md last:border-b-0 border-b-gray-200 p-1.5`}
    >
      {color ? (
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full`}
            style={{ backgroundColor: color }}
          />
          {text}
        </div>
      ) : (
        <>{text}</>
      )}
    </div>
  );
};
