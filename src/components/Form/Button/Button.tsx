"use client";

import React from "react";

type ButtonProps = Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
}>;

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}

export { Button }