"use client";

import React from "react";

type ButtonProps = Readonly<{
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  buttonType?: "button" | "submit" | "update" | "delete";
  styles?: string;
}>;

const Button = ({ children, onClick, disabled, buttonType = "button", styles }: ButtonProps) => {
  let buttonClass = "bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-700 text-sm";

  if (buttonType === "submit") {
    buttonClass = "bg-green-500 text-white px-2 rounded-md hover:bg-green-700";
  } else if (buttonType === "update") {
    buttonClass = "bg-yellow-500 text-white px-2 rounded-md hover:bg-yellow-700";
  } else if (buttonType === "delete") {
    buttonClass = "bg-red-500 text-white px-2 rounded-md hover:bg-red-700";
  } else if (buttonType === "button") {
    buttonClass = styles || buttonClass;
  }


  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClass} ${disabled && "cursor-not-allowed"}
        transition duration-200 ease-in-out
        ${styles}
      `}
    >
      {children}
    </button>
  );
};

export { Button };
