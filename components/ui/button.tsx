"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
  href?: string;
}

export default function Button({ children, href = "#" }: Props): JSX.Element {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-primary text-black font-semibold">
      {children}
    </a>
  );
}
