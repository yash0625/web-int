// src/components/Input.tsx
import React, { ChangeEvent } from "react";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string; // Add type prop here
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  className,
  type = "text",
}) => {
  return (
    <input
      type={type} // Use the type prop
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border px-4 py-2 rounded ${className}`}
    />
  );
};

export default Input;
