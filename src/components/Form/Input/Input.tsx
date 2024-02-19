"use client";

import React from "react";

type InputProps = Readonly<{
  value: string;
  onChange: (value: string) => void;
}>;

const Input = ({ value, onChange }: InputProps) => {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="border border-gray-300 rounded-md p-2"
      type="text"
    />
  );
};

export { Input };