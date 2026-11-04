
type PotsCardProps = {
  title: string;
};

export const PotsCard = ({ title }: PotsCardProps) => {
  return (
    <div className="bg-whte rounded-lg p-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <span className="w-4 h-4 bg-green-800 rounded-full" />
          <p className="text-black text-md font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
};
