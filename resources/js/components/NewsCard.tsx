import { NewsItem } from "@/types/News";
import { router } from '@inertiajs/react';
import React from "react";

interface NewsCardProps extends NewsItem {
  variant?: "banner" | "large" | "medium" | "small" | "grid";
  subvariant?: "full" | "stretch" | "principal" | "fetchpriority";
  mobileVersion?: "vertical" | "horizontal" | "full";
  accentColor?: string;
  textColor?: string;
  more?: boolean;
  bgColor?: string;
  url?: string;
  iddado: number;
  slug?: string;
  title_imagen?: string;
  fecha?: string;
  updated_at?: string;
  imageUrlMovil?: string;
  showPlayIcon?: boolean;
}

export function NewsCard({
  category,
  title,
  description,
  author,
  imageUrl,
  imageUrlMovil,
  subvariant = "full",
  accentColor = "bg-purple-900",
  iddado,
  slug,
  title_imagen = "",
  fecha = "",
  updated_at = "",
  showPlayIcon = false


}: NewsCardProps) {
const handleClick = () => {
  window.location.href = `/${category}/${slug}/${iddado}`;
};


  return (
    <article
      onClick={handleClick}
      className={`flex  gap-2 cursor-pointer ${subvariant === "stretch" ? "flex-row" : "flex-col"}`}
    >

      <div className="flex-1 relative">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={
              imageUrlMovil &&
              imageUrlMovil.trim() !== "" &&
              !imageUrlMovil.includes("undefined") &&
              !imageUrlMovil.includes("null") &&
              !imageUrlMovil.endsWith("/null") &&
              !imageUrlMovil.endsWith("/undefined")
                ? imageUrlMovil
                : imageUrl
            }
          />
          <img
            fetchPriority={subvariant === "fetchpriority" ? "high" : "low"}
            loading={subvariant === "fetchpriority" ? undefined : "lazy"}
            srcSet={`
              ${imageUrlMovil || imageUrl} 480w,
              ${imageUrl} 800w
            `}
            sizes="(max-width: 768px) 480px, 800px"
            src={imageUrl} 
            alt={title}
            title={title_imagen || title}
            className="aspect-video w-full object-cover"
          />
        </picture>

        {showPlayIcon && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="relative inline-flex items-center justify-center">
              <span className="block rounded-full w-20 h-20 md:w-24 md:h-24 border-[3px] border-white/90" />
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className="absolute w-8 h-8 md:w-10 md:h-10 fill-white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="sr-only">Video</span>
            </span>
          </div>
        )}
      </div>

      <div
        className="flex-1 "
      >
        <header>
          <div>
            <div className={`h-[16px] w-[12px] mt-1 ${accentColor} absolute`} />
            <p className="pl-[20px]">{category}</p>
          </div>
        </header>

        <h3 className={`${subvariant === "principal" ? "md:text-[46px]" : ""}`}>
          {title}
        </h3>

        <p>
          {description}
        </p>
        <p className="mt-2">
          <span className="">Por</span> <span className="font-bold">{author?.name}</span>
        </p>
        {(fecha || updated_at) && (
          <p className="text-gray-500 text-sm mt-1">
            {fecha && (
              <>
                Fecha:{" "}
                {new Date(fecha).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </>
            )}
            {updated_at && (
              <>
                {" | "}Actualizado:{" "}
                {new Date(updated_at).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </>
            )}
          </p>
        )}
      </div>
    </article>
  );
}
