import { bucketUrl, getBackgroundColor } from "@/lib/utils";
import { Link } from "@inertiajs/react";

interface DestacadosProps {
  id?: number;
  slug?: string;
  titulo?: string;
  imagen_movil?: string;
  descripcion?: string;
  url?: string;
  imagen_url?: string;
  author?: any;
  categoria?: string;
  title_imagen?: string;
}

export const SingleNewCard: React.FC<DestacadosProps> = ({ titulo, descripcion, url, imagen_url, imagen_movil, author, categoria, title_imagen, slug, id }) => {

  const buildUrl = (categoria?: string, slug?: string, id?: number) => {
    if (categoria && slug && id !== undefined) {
      return `/${categoria}/${slug}/${id}`;
    }
    return "#";
  };

  return (
    <div className="overflow-hidden border-gray-200">
      <Link href={url ?? buildUrl(categoria, slug, id)} className="block">
        {(imagen_url || imagen_movil) && (
          <div className="w-full h-60">
            <picture>
              {/* Imagen para pantallas móviles */}
              {imagen_movil && (
                <source
                  media="(max-width: 768px)"
                  srcSet={`${bucketUrl}/${imagen_movil}`}
                />
              )}
              {/* Imagen por defecto (escritorio) */}
              <img
                loading="lazy"
                src={`${bucketUrl}/${imagen_url}`}
                alt={titulo || "Imagen publicitaria"}
                className="object-cover w-full h-full"
                title={title_imagen || titulo}
              />
            </picture>
          </div>
        )}

        {(titulo || descripcion) && (
          <div>
            <div className={`h-[65px] w-[4px] mt-1 ${getBackgroundColor(categoria)} absolute`} />
            {titulo && <h3 className="font-semibold text-gray-800 pl-[15px] mt-[10px]">{titulo}</h3>}
            {author && <p className="mt-2 text-gray-600">{author.name}</p>}
            {descripcion && <p className="mt-2 line-clamp-4 text-gray-600">{descripcion}</p>}
          </div>
        )}
      </Link>
    </div>
  );
};
