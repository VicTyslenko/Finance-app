import { SearchInput } from "../../shared/components/search-input/search-input";
import { DefaultDropdown } from "../../shared/components/dropdown/default-dropdown";
import { DropdownItem } from "../../shared/components/dropdown/dropdown-item";

const data = [
  { text: "All transactions", id: 1 },
  { text: "Entartainment", id: 1 },
  { text: "Hello", id: 1 },
  { text: "Hello", id: 1 },
  { text: "Hello", id: 1 },
];
export const TransactionsPage = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-black mb-8">Transactions</h1>
      {/* Content */}

      <div className="w-full bg-white h-screen p-10">
        {/* Filters wrapp */}
        <div className="flex justify-between items-center">
          <SearchInput placeholder="Search transaction" />
          <div className="flex items-center gap-5">
            <DefaultDropdown
              label="Latest"
              itemsList={data.map((i) => (
                <DropdownItem text={i.text} />
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
