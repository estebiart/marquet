import React from "react";
import { NewsItem } from "./NewsItem";
import { Noticia, NoticiasProps } from "@/types/Noticias";
import { getBackgroundColor } from "@/lib/utils";


export const Sidebar :React.FC<any> = ({ noticias }) =>  {
  return (
    <aside className="ml-5 w-[30%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col  max-md:mt-8 max-h-[527px] overflow-auto">
        <header className="bg-darkViolet flex items-center relative flex-col px-12 py-3 text-3xl font-bold text-white uppercase max-md:px-5 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none">
          <h2 className=" font-bold">Más noticias</h2>
        </header>
        <div className="flex relative flex-col px-4 pt-5 w-full max-md:pr-5 bg-white rounded-[30px] rounded-tl-none rounded-tr-none">
        {noticias.map((noticia: Noticia, index: any) => (
          <NewsItem
            category={noticia.categoria}
            content={noticia.descripcion}
            date={noticia.fecha_publicacion}
            underlineColor={getBackgroundColor(noticia?.categoria)}
            iddado={noticia.id}
            slug={noticia.slug}
            key={index}
          />
        ))}
        </div>
      </div>
    </aside>
  );
}
