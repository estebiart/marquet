
import { bucketUrl } from "@/lib/utils";
import { Noticia } from "@/types/Noticias";
import { router } from '@inertiajs/react';

interface DestacadosProps {
    noticias: Noticia[];
}

const MostViewedNews: React.FC<DestacadosProps> = ({ noticias }) => {
    const handleClick = (categoria: string, slug: string, iddado: number) => {
             window.location.href = `/${categoria}/${slug}/${iddado}`;
    };
    return (

        <>
            {/* noticias más vistas */}
            {
                noticias.length >= 4 && (
                    <section className="mx-auto mt-10">
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-headerColor pl-3 mb-6">
                            Resumen semanal 
                        </h4>
                        {noticias.map((noticia, index) => (
                            <div key={index} className="max-w-4xl mx-auto overflow-hidden mb-4 border-b border-gray-300"
                                onClick={() => handleClick(noticia.categoria, noticia.slug, noticia.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="">
                                    <div className="md:p-4 flex flex-col justify-center">
                                    <picture className="block md:hidden">
                                    <source
                                        media="(max-width: 768px)"
                                        srcSet={
                                        noticia.imagen_movil &&
                                        noticia.imagen_movil.trim() !== "" &&
                                        !noticia.imagen_movil.includes("undefined") &&
                                        !noticia.imagen_movil.includes("null") &&
                                        !noticia.imagen_movil.endsWith("/null") &&
                                        !noticia.imagen_movil.endsWith("/undefined")
                                            ? `${bucketUrl}/${noticia.imagen_movil}`
                                            : `${bucketUrl}/${noticia.imagen}`
                                        }
                                    />
                                    <img
                                        loading="lazy"
                                        fetchPriority="low"
                                        srcSet={`
                                        ${bucketUrl}/${noticia.imagen_movil || noticia.imagen} 480w,
                                        ${bucketUrl}/${noticia.imagen} 800w
                                        `}
                                        sizes="(max-width: 768px) 480px, 800px"
                                        src={`${bucketUrl}/${noticia.imagen}`}
                                        alt={noticia.titulo || ""}
                                        title={noticia.titulo || ""}
                                        className="aspect-video w-full object-cover"
                                    />
                                    </picture>

                                        <p className="text-[20px] font-bold">
                                            {noticia.titulo}
                                        </p>

                                        <p className="mt-2">
                                            <span className="">Por</span> <span className="font-bold">{noticia.author?.name}</span>
                                        </p>
                                        <p className="text-sm">
                                             {new Date(noticia.fecha_publicacion).toLocaleDateString('es-ES', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                )}
        </>
    );
}

export default MostViewedNews;