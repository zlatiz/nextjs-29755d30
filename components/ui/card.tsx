"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props): JSX.Element {
  return (
    <article className="p-4 bg-white border border-border rounded-md flex flex-col h-full">
      {children}
    </article>
  );
}
