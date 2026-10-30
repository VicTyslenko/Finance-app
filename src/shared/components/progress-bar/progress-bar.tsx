export const ProgressBar = ({ progress }: { progress: number }) => {

  
  return (
    <div className="bg-[#f8f4f0] rounded-md h-10 p-1.5 w-full">
      <div
        className="bg-[#277C78] h-full rounded-md"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
