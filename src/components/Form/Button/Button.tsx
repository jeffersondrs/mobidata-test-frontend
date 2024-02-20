"use client";

import React from "react";
import { ButtonProps } from "@/types/globalt-types";

const Button = ({ children, onClick, disabled, buttonType = "button", styles }: ButtonProps) => {
  let buttonClass = "bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-700 text-sm";

  switch (buttonType) {
    case "submit":
      buttonClass = "bg-green-500 text-white px-2 rounded-md hover:bg-green-700";
      break;
    case "update":
      buttonClass = "bg-yellow-500 text-white px-2 rounded-md hover:bg-yellow-700";
      break;
    case "delete":
      buttonClass = "bg-red-500 text-white px-2 rounded-md hover:bg-red-700";
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
        transition duration-200 ease-in-out
        ${styles}
      `}
    >
      {children}
    </button>
  );
};

export { Button };
