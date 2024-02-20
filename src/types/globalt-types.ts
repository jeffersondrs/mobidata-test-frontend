export type User = {
  name: string;
  city: string;
  active: string;
};

export interface SearchContext {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export type UserListProps = {
  users: User[];
};

export type SearchFormProps = {
  onSubmit: (value: string) => void;
};

export type ModalProps = Readonly<{
  children: React.ReactElement | React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}>;

export type ButtonProps = Readonly<{
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  buttonType?: "button" | "submit" | "update" | "delete";
  styles?: string;
}>;

export type SelectFilterProps = {
  options: string[];
  onChange: (value: string) => void;
};
