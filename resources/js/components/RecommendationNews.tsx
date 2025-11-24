import { Noticia } from "@/types/Noticias";
import { router } from '@inertiajs/react';

import { getBackgroundColor } from "@/lib/utils";

interface DestacadosProps {
    noticias: Noticia[];
}

const RecommendationNews: React.FC<DestacadosProps> = ({ noticias }) => {
    
    const handleClick = (categoria :string, slug: string, iddado: number) => {
       router.visit(`${categoria}/${slug}/${iddado}`);
    };
    return (
        <>
            {noticias.length >= 4 && (
                <section className="mx-auto mt-10 max-w-7xl px-4">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-headerColor pl-3 mb-6">
                        Noticias recomendadas
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {noticias.slice(0, 4).map((noticia, index) => (
                            <div
                                key={index}
                                className="bg-white shadow p-4 border border-gray-200 hover:shadow-md transition"
                                onClick={() => handleClick(noticia?.categorias[0]?.nombre ,noticia.slug, noticia.id)}
                            >
                                <div className={`h-[16px] w-[12px] ${getBackgroundColor(noticia?.categorias[0]?.nombre)} absolute`} />
                                <p className="ml-4 capitalize">{noticia?.categorias[0]?.nombre}</p>
                                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                                    {noticia.titulo}
                                </h3>
                                <p className="text-xs text-gray-600 mb-2">
                                    {noticia.descripcion}
                                </p>
                                <p className="text-xs text-gray-600">{noticia.author?.name}</p>
                                
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default RecommendationNews;
