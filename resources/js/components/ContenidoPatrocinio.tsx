import { Link } from '@inertiajs/react';
import { bucketUrl } from '@/lib/utils';
import React from 'react';

const ContenidoPatrocinio: React.FC = () => {

    const textPatrocinio = "Contenido Patrocinado";
    const titlePatrocinio = "Los jóvenes eligen: Consejos de Juventud en Colombia";
    const slugPatrocinio = "los-jovenes-eligen-consejos-de-juventud-en-colombia";
    const descriptionPatrocinio = "¿Tienes dudas acerca de los Consejos de Juventud en Colombia? Aquí te contamos todo lo que debes saber.";
    const patrocinioImageUrl = bucketUrl + '/images/santa-rosa-20250807-103632.webp';

    return (
        <Link
            href={`/contenido-patrocinado/${slugPatrocinio}`}
            className="mt-16 flex flex-col md:flex-row bg-black text-white rounded-2xl overflow-hidden shadow-lg"
        >
            <div className="w-full md:w-1/2">
                <img
                    src={patrocinioImageUrl}
                    alt="Patrocinio"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <span className="text-sm uppercase text-gray-400 mb-2">
                    {textPatrocinio}
                </span>
                <h2 className="text-2xl font-bold mb-4">
                    {titlePatrocinio}
                </h2>
                <p className="text-gray-300">
                    {descriptionPatrocinio}
                </p>
            </div>
        </Link>
    );
};

export default ContenidoPatrocinio;
