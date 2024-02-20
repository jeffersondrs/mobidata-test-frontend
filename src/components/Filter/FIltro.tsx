import React from "react";

type SelectFilterProps = {
  options: string[];
  onChange: (value: string) => void;
};

const SelectFilter = ({ options, onChange }: SelectFilterProps) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded-md p-1"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export { SelectFilter };
