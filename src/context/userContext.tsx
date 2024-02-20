"use client";

import React, { ReactNode, createContext } from "react";
import { SearchContext } from "@/types/globalt-types";

export const Context = createContext<SearchContext>({
  searchTerm: "",
  setSearchTerm: () => {},
});

const { Provider } = Context;

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </Provider>
  );
};
