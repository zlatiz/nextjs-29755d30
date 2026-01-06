"use client";
import React from "react";

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
}

export default function Input({ placeholder = '', value = '', onChange }: Props): JSX.Element {
  return (
    <input
      className="w-full px-3 py-2 border border-border rounded-md bg-white text-gray-800"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
}
