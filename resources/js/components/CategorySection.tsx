import { CategoryProps } from "@/types/News";
import React from "react";
import { usePage } from "@inertiajs/react";

export const CategorySection: React.FC<CategoryProps> = ({
  title,
  color,
  children,
  bgcolor,
}) => {
  const { categoria, categoria_descripcion } = usePage().props as {
    categoria?: string;
    categoria_descripcion?: string;
  }
  const formatearCategoria = (cat?: string) => {
    if (!cat) return '';

    if (cat === 'vida-moderna') {
      return 'Vida Moderna';
    } else if (cat === 'entretenimiento-cultura') {
      return 'Entretenimiento y Cultura';
    } else {
      return cat
        .split('-')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
    }
  };

  const categoriaFormateada = categoria_descripcion ?? formatearCategoria(categoria);
  const getBackgroundColor = () => {
    switch (categoria) {
      case "colombia":
        return "bg-colombia";
      case "deportes":
        return "bg-deportes";
      case "mundo":
        return "bg-mundo";
      case "economia":
        return "bg-economia";
      case "entretenimiento-cultura":
        return "bg-entretenimientoCultura";
      case "investigacion":
        return "bg-investigacion";
      case "bogota":
        return "bg-bogota";
      case "politica":
        return "bg-politica";
      case "judicial":
        return "bg-judicial";
      case "vida-moderna":
        return "bg-vidaModerna";
      default:
        return "bg-headerColor";
    }
  };

  const getDefaultBackgroundColor = () => {
    switch (title.toLowerCase()) {
      case "colombia":
        return "bg-colombia";
      case "deportes":
        return "bg-deportes";
      case "mundo":
        return "bg-mundo";
      case "economia":
        return "bg-economia";
      case "entretenimiento-cultura":
        return "bg-entretenimientoCultura";
      case "investigacion":
        return "bg-investigacion";
      case "bogota":
        return "bg-bogota";
      case "politica":
        return "bg-politica";
      case "judicial":
        return "bg-judicial";
      case "vida-moderna":
        return "bg-vidaModerna";
      default:
        return "bg-headerColor";
    }
  };

  const finalBgColor = categoria ? getBackgroundColor() : (color || getDefaultBackgroundColor());


  return (
    <section className={`pb-20 flex p-4 md:p-0 justify-center flex-col ${bgcolor} items-center`}>
      {categoriaFormateada && (
          <h1 className="hidden">{`Noticias de ${categoriaFormateada} - Minuto 60`}</h1>
        )}
      {title && (
        <header className="flex flex-col items-startfixed top-[95px] w-full z-60">
          <div className={`w-full max-w-screen-md mx-auto ${finalBgColor}  text-white italic font-bold text-center uppercase py-2 rounded-b-[15px]`}>
            <h1 className="text-[16px] md:text-[18px]">{categoriaFormateada || title} </h1>
          </div>
        </header>
      )}
      <div className="md:mt-10 max-w-[1280px]">{children}</div>
    </section>
  );
};
