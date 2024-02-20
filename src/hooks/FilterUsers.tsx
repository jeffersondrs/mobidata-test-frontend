import { useContext } from "react";
import { usersData } from "@/utils/utils";
import { FormInput } from "@/utils/schema-zod";
import { Context } from "@/context/userContext";

export const FilterUser = () => {
  const { searchTerm } = useContext(Context);

  const filterData = (item: FormInput) => {
    const searchTermLower = searchTerm.toLowerCase();
    const nameLower = item.name.toLowerCase();
    const cityLower = item.city.toLowerCase();
    const status = item.status.toLowerCase();
    const country = item.country.toLowerCase();
    const state = item.state.toLowerCase();
    const neighborhood = item.neighborhood.toLowerCase();
    const street = item.street.toLowerCase();
    const email = item.email.toLowerCase();

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
      status.includes(searchTermLower) ||
      country.includes(searchTermLower) ||
      state.includes(searchTermLower) ||
      neighborhood.includes(searchTermLower) ||
      street.includes(searchTermLower) ||
      email.includes(searchTermLower)
    );
  };

  const filteredData = usersData?.filter(filterData);
  const noResultsMessage = "Nenhum usuário encontrado, tente novamente.";

  return { filteredData, noResultsMessage };
};
