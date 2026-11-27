import { useNavigate } from "react-router";

export const ContentHeader = ({
  title,
  details,
  navigateTo,
}: {
  title: string;
  details: string;
  navigateTo: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-black font-md font-bold">{title}</h1>
      <button
        onClick={() => navigate(`/?page=${navigateTo}`)}
        className="flex gap-3 items-center cursor-pointer"
      >
        <p className="text-sm">{details}</p>
        <img src="/assets/images/icon-caret-right.svg" alt="caret" />
      </button>
    </div>
  );
};
