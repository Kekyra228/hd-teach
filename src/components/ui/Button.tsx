import React from "react";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={classNames(
        "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
    >
      {children}
    </button>
  );
};
