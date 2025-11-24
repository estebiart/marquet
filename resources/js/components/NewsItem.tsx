import React from "react";
import { CategoryHeader } from "./CategoryHeader";
import { router } from '@inertiajs/react';

interface NewsItemProps {
  category: string;
  content: string;
  date: string;
  underlineColor?: string;
  iddado: number;
  slug?: string
}

export function NewsItem({
  category,
  content,
  date,
  underlineColor,
  iddado,
  slug
}: NewsItemProps) {

    const handleClick = () => {
     router.visit(`${category}/${slug}/${iddado}`);
  };
 
  return (
    <article className="flex flex-col" onClick={handleClick}>
      <CategoryHeader title={category} color={underlineColor} />
      <p className="mt-1.5 text-xs font-bold leading-[1] text-black">
        {content}
      </p>
      <p className="mt-2.5 text-xs leading-[1]  text-black">{content}</p>
      <div className="flex gap-5 justify-between mt-1">
        <time className="   text-black">{date}</time>
        <a href="#" className="   font-black text-purple-900">
          Ver más
        </a>
      </div>
      <div className="flex shrink-0 mt-6 h-px bg-black w-[226px]" />
    </article>
  );
}
