"use client";

import React from "react";
import { ButtonProps } from "@/types/globalt-types";

const Button = ({ children, onClick, disabled, buttonType = "button", styles }: ButtonProps) => {
  let buttonClass = "bg-gray-500 text-white p-2 rounded-md hover:bg-blue-700 text-sm";

  switch (buttonType) {
    case "submit":
      buttonClass = "bg-green-500 text-white w-full p-2 rounded-md hover:bg-green-700";
      break;
    case "update":
      buttonClass = "bg-yellow-500 text-white w-full p-2 rounded-md hover:bg-yellow-700";
      break;
    case "delete":
      buttonClass = "bg-red-500 text-white w-full p-2 rounded-md hover:bg-red-700";
      break;
    case "button":
      buttonClass = styles || buttonClass;
      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClass} ${disabled && "cursor-not-allowed"}
        transition duration-200 ease-in-out text-xs sm:text-sm
        ${styles}
      `}
    >
      {children}
    </button>
  );
};

export { Button };
