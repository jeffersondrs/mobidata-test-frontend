export type User = {
  name: string;
  city: string;
  active: boolean;
};

export interface SearchContext {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}