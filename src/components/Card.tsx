import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow ${className}`}>
      {children}
    </div>
  );
}
