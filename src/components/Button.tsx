import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const baseStyles = "rounded-2xl px-6 py-3 font-medium transition-all cursor-pointer";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
      : "bg-gray-200 text-gray-900 hover:bg-gray-300";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}
