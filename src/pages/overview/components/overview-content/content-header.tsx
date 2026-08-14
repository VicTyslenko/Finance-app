export const ContentHeader = ({
  title,
  details,
}: {
  title: string;
  details: string;
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-black font-md font-bold">{title}</h1>
      <div className="flex gap-3 items-center">
        <p className="text-sm">{details}</p>
        <img src="/assets/images/icon-caret-right.svg" alt="caret" />
      </div>
    </div>
  );
};
