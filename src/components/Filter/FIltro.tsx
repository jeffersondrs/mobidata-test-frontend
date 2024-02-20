import React from "react";
import { SelectFilterProps } from "@/types/globalt-types";

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
