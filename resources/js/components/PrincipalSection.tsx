import { bucketUrl, getBackgroundColor } from "@/lib/utils";
import { NewsCard } from "./NewsCard";
import { Noticia } from "@/types/Noticias";
import { CategorySection } from "./CategorySection";
import { Link } from "@inertiajs/react";

interface DestacadosProps {
    tipo: "noticia" | "publicidad";
    noticias: Noticia[];
    categoria?: string;
    url?: string;
    imgPublicidad?: string;
}
export const PrincipalSection: React.FC<DestacadosProps> = ({
    tipo,
    noticias,
    categoria,
    url,
    imgPublicidad,
}) => {
    if (tipo === "noticia") {
        return (
            <>
                {noticias.length >= 4 && (
                    <div className=" flex gap-2 mb-16">
                        {noticias.slice(0, 4).map((noticia, idx) => (
                            <div
                                key={noticia.id}
                                className={`rounded-lg"
                                    }`}
                            >
                                <NewsCard
                                    iddado={noticia.id}
                                    category={categoria}
                                    title={ noticia.titulo}
                                    description={noticia.descripcion}
                                    imageUrl={`${bucketUrl}/${noticia.imagen}`}
                                    imageUrlMovil={`${bucketUrl}/${noticia.imagen_movil}`}
                                    accentColor={getBackgroundColor(categoria)}
                                    mobileVersion="horizontal"
                                    variant="banner"
                                    textColor="text-white"
                                    author={noticia.author}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </>
        );
    }
    return (
        <div className="mb-16 flex flex-col gap-4">
            {imgPublicidad && (
                <div className="">
                    <Link href={url || "#"} className="block" target="_blank" rel="noopener noreferrer">
                        <div className="relative w-full h-40 rounded-2xl overflow-hidden">
                            <img
                                loading="lazy"
                                src={`${bucketUrl}/${imgPublicidad}`}
                                className="object-cover w-full h-full border"
                                alt={noticias[0]?.titulo}
                            />
                            <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                                Contenido patrocinado
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-headerColor pl-3 mb-6">
                Recomendamos
            </h4>

            {(imgPublicidad ? noticias.slice(0, 3) : noticias.slice(0, 4)).map((noticia, index) => {
                return (
                    <div key={noticia.id} className={`rounded-lg  `}>
                        <NewsCard
                            iddado={noticia.id}
                            category={categoria}
                            title={ noticia.titulo}
                            description={noticia.descripcion}
                            imageUrl={`${bucketUrl}/${noticia.imagen}`}
                            accentColor={getBackgroundColor(categoria)}
                            mobileVersion="horizontal"
                            variant="banner"
                            textColor="text-white"
                            author={noticia.author}
                        />
                    </div>
                );
            })}
        </div>
    );
};
