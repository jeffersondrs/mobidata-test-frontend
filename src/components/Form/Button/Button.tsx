"use client";

import React from "react";

type ButtonProps = Readonly<{
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  buttonType?: "button" | "submit" | "update" | "delete";
}>;

const Button = ({ children, onClick, disabled, buttonType = "button" }: ButtonProps) => {
  let buttonClass = "bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700";

  if (buttonType === "submit") {
    buttonClass = "bg-green-500 text-white p-2 rounded-md hover:bg-green-700";
  } else if (buttonType === "update") {
    buttonClass = "bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-700";
  } else if (buttonType === "delete") {
    buttonClass = "bg-red-500 text-white p-2 rounded-md hover:bg-red-700";
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClass} ${disabled && "cursor-not-allowed"}
        transition duration-200 ease-in-out
      `}
    >
      {children}
    </button>
  );
};

export { Button };
