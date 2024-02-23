"use client";

import React from "react";
import { SearchContext } from "@/types/globalt-types";

export const Context = React.createContext<SearchContext>({
  searchTerm: "",
  setSearchTerm: () => {},
});

const { Provider } = Context;

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
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
