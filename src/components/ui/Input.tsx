import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  }
);

TextInput.displayName = "Input";
