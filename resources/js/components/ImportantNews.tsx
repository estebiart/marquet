import { Noticia } from "@/types/Noticias";
import { router } from '@inertiajs/react';

interface NoticiasProps {
    noticias: Noticia[];
}

export const ImportantNews: React.FC<NoticiasProps> = ({ noticias }) => {    
    const handleClick = (category:string, slug: string, iddado: number) => {
        router.visit(`/${category}/${slug}/${iddado}`);
    };
    return (
        <div className="max-w-4xl mx-auto px-4 py-6">            
            {noticias.map((noticia, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(noticia.categoria,noticia.slug, noticia.id)}
                    className="cursor-pointer border-t border-b border-gray-900 shadow-lg  hover:shadow-xl transition-shadow duration-300 mb-4 overflow-hidden"
                >
                    <div className="grid grid-cols-4">
                        <div className="col-span-3 p-4 flex flex-col justify-center">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                {noticia.titulo}
                            </h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
