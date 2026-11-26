export const ContentHeader = ({
  title,
  details,
  navigate,
}: {
  title: string;
  navigate?: () => void;
  details: string;
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-black font-md font-bold">{title}</h1>
      <button
        onClick={navigate}
        className="flex gap-3 items-center cursor-pointer"
      >
        <p className="text-sm">{details}</p>
        <img src="/assets/images/icon-caret-right.svg" alt="caret" />
      </button>
    </div>
  );
};
