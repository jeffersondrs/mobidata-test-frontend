import { useContext } from "react";
import { usersData } from "@/utils/utils";
import { User } from "@/types/globalt-types";
import { Context } from "@/context/userContext";

export const FilterUser = () => {
  const { searchTerm } = useContext(Context);

  const filterData = (item: User) => {
    const searchTermLower = searchTerm.toLowerCase();
    const nameLower = item.name.toLowerCase();
    const cityLower = item.city.toLowerCase();
    const status = item.active.toLowerCase();

    if (!searchTermLower) {
      return true;
    }
    const regex = new RegExp(`^${searchTermLower}$`);
    if (regex.test("ativo") || regex.test("inativo")) {
      return regex.test(status);
    }

    return (
      nameLower.includes(searchTermLower) ||
      cityLower.includes(searchTermLower) ||
      status.includes(searchTermLower)
    );
  };

  const filteredData = usersData?.filter(filterData);
  const noResultsMessage = "Nenhum usuário encontrado, tente novamente.";

  return { filteredData, noResultsMessage };
};
