

import Layout from '@/context/Layout';
import React from 'react'
import DOMPurify from "dompurify";
import { bucketUrl } from "@/lib/utils";
import { router } from '@inertiajs/react';
import type { Opinion, AutorOpinion } from '@/types/Opinion';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Head } from '@inertiajs/react';

interface OpinionProps {
    opinion: Opinion;
    otrosAutores: AutorOpinion[];
}

const Opinion: React.FC<OpinionProps> = ({ opinion, otrosAutores }) => {

    const handleClick = (slug: string) => {
        router.visit(`/opinion/${slug}`);
    };

    const fotoAutor = opinion?.autor_foto ?? opinion?.author?.perfil ?? 'img/periodista_default.webp';
    const nombreAutor = opinion?.autor_nombre_publico || opinion?.author?.name || 'Autor';

    const fullContent = (opinion.contenido || '');
    const sanitizedContent = DOMPurify.sanitize(fullContent, {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'src', 'width', 'height']
    });
    let contentWithEmbeds = sanitizedContent;
    function formatTextWithBreaks(text: any, maxLength = 30) {
        if (!text) return "";
        const words = text.split(" ");
        let lines = [];
        let currentLine = "";

        for (let word of words) {
            if ((currentLine + word).length <= maxLength) {
                currentLine += (currentLine ? " " : "") + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        if (currentLine) lines.push(currentLine);

        return lines.join("\n");
    }

    return (
        <Layout>
            <div className="mt-32 p-3 sm:p-0">
                <h1>{opinion.titulo}</h1>
            </div>

            <div className='mx-auto p-3 sm:p-0'>
                <p className='text-2xl'>{opinion.descripcion}</p>
            </div>
            <div className={` my-4 max-[600px]:mx-5 max-w-[1280px]`} >
                <div className='grid gap-4'>
                    <div className='grid grid-cols-1 md:grid-cols-10 gap-4'>
                        <div className='p-4 md:col-span-7'>
                            <div className="flex items-center gap-4 mt-4">
                                <img
                                    loading="lazy"
                                    src={`${bucketUrl}/${fotoAutor}`}
                                    alt={nombreAutor}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div className="text-sm">
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold">{opinion?.autor_nombre_publico ?? opinion?.author?.name}</p>
                                    </div>
                                    <div style={{ whiteSpace: "pre-line" }}>
                                        {formatTextWithBreaks(opinion?.autor_biografia, 90)}
                                    </div>


                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-gray-600 text-sm">
                                        <span>{(opinion.fecha_publicacion)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tiptap">
                                <div
                                    className="text-1xl md:text-3xl mt-2 flex flex-col"
                                    dangerouslySetInnerHTML={{ __html: contentWithEmbeds }}
                                />
                            </div>
                        </div>
                        <div className='p-4 md:col-span-3'>
                            <section className="mx-auto mt-10">
                                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-[#ef0c52] pl-3 mb-6">
                                    Otros autores
                                </h4>
                                {otrosAutores.map((autor, index) => (
                                    <div key={index} className="max-w-4xl mx-auto overflow-hidden mb-4 border-b border-gray-300"
                                        onClick={() => handleClick(autor.opiniones[0].slug)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="flex items-center p-4 space-x-4">
                                            <img
                                                loading="lazy"
                                                src={`${bucketUrl}/${autor?.autor_foto || opinion?.author?.perfil || 'img/periodista_default.webp'}`}
                                                alt={autor?.autor_nombre_publico || opinion?.author?.name || 'Autor'}
                                                className="w-20 h-20 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="text-lg font-bold text-gray-900 w-[180px] break-words">
                                                    {autor?.opiniones[0]?.titulo}
                                                </p>

                                                <p className="text-base">
                                                    {autor?.autor_nombre_publico || opinion?.author?.name || 'Autor Desconocido'}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Opinion