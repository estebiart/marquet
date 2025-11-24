import React from "react";

interface CategoryHeaderProps {
  title: string;
  color?: string;
}

export function CategoryHeader({ title, color = "bg-purple-900" }: CategoryHeaderProps) {
  return (
    <div className="flex flex-col">
      <h2 className="self-start text-xl capitalize font-bold">{title}</h2>
      <div className={`flex shrink-0 mt-2 ${color} h-[3px] w-[83px]`} />
    </div>
  );
}
