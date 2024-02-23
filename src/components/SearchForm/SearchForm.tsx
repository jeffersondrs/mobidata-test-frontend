import { useContext } from "react";
import { Button } from "../Form/Button/Button";
import { Search } from "lucide-react";
import { Context } from "@/context/userContext";
import { SearchFormProps } from "@/types/globalt-types";

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const { searchTerm, setSearchTerm } = useContext(Context);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const value = (e.target as HTMLFormElement).search.value;
        onSubmit(value);
      }}
      className="flex flex-row items-center justify-center"
    >
      <input
        type="text"
        name="search"
        placeholder="Pesquisar"
        className="border border-gray-300 rounded-md p-1 px-2 text-sm min-w-60 focus:ring-1 focus:border-gray-300 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button buttonType="button">
        <p className="text-xs hidden sm:block">Pesquisar</p>
        <Search size={14} className="sm:hidden" />
      </Button>
    </form>
  );
};

export { SearchForm };
