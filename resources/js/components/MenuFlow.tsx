
import { Noticia } from '@/types/Noticias';
import { useEffect, useState } from 'react';
import DOMPurify from "dompurify";
import { bucketUrl } from "@/lib/utils";
import ShareButtons from './ShareButtons';
import { Link } from '@inertiajs/react';

interface NoticiasProps {
    noticias: Noticia[];

}

export default function MenuFlow({ noticias }: NoticiasProps) {
    const parseInstagramEmbeds = (content: string): string => {
        return content.replace(/\[instagram_embed\](.*?)\[\/instagram_embed\]/g, (match, url) => {
            return `
     <iframe
        src="${url.trim()}"
        width="100%"
        height="700"
        style="
          max-width: 400px;
          width: 100%;
          margin: 1rem auto;
          display: block;
          border: none;
          border-radius: 8px;
          overflow: hidden;
        "
        scrolling="no"
        allowtransparency="true"
        allow="encrypted-media"
        frameborder="0"
      ></iframe>
    `;
        });
    };
    const [isOpen, setIsOpen] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [hiddenTemporarily, setHiddenTemporarily] = useState(false);

    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const noticia = noticias[0];
    useEffect(() => {
        if (!hiddenTemporarily) {
            const timer = setTimeout(() => {
                setShowPreview(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [hiddenTemporarily]);

    const handleClosePreview = () => {
        setShowPreview(false);
        setHiddenTemporarily(true);
        setTimeout(() => {
            setShowPreview(true);
            setHiddenTemporarily(false);
        }, 25000);
    };

    const fullContent = (noticia?.contenido || '');
    const sanitizedContent =
        typeof window !== "undefined"
            ? DOMPurify.sanitize(fullContent, {
                ADD_TAGS: ["iframe"],
                ADD_ATTR: [
                    "allow",
                    "allowfullscreen",
                    "frameborder",
                    "src",
                    "width",
                    "height"
                ]
            })
            : fullContent;



    let contentWithEmbeds = sanitizedContent;
    contentWithEmbeds = parseInstagramEmbeds(contentWithEmbeds);
    noticia?.embebido?.forEach((embed: any, index: any) => {
        const placeholder = `{{EMBED_${index}}}`;
        if (embed.html) {
            contentWithEmbeds = contentWithEmbeds.replace(placeholder, embed.html);
        }
    });

    noticia?.noticia_embebida?.forEach((related: any, index: number) => {
        const placeholder = `{{RELATED_${index}}}`;
        if (related.html) {
            contentWithEmbeds = contentWithEmbeds.replace(placeholder, related.html);
        }
    });

    if (noticia?.audios) {
        const audioTag = `<audio controls class="my-4 w-full">
      <source src='${bucketUrl}/${noticia.audios}' type='audio/mpeg'>
      Tu navegador no soporta la etiqueta de audio.
    </audio>`;
        contentWithEmbeds = contentWithEmbeds.replace('[_AUDIO_]', audioTag);
    }

    const sanitizedFinalContent =
        typeof window !== "undefined"
            ? DOMPurify.sanitize(contentWithEmbeds, {
                ADD_TAGS: ["audio", "source", "iframe"],
                ADD_ATTR: [
                    "controls", "src", "type",
                    "allow", "allowfullscreen", "frameborder", "width", "height",
                    "data-instgrm-permalink", "data-instgrm-version"
                ]
            })
            : contentWithEmbeds;
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                if (window.twttr) {
                    window.twttr.widgets.load();
                } else {
                    const twitterScript = document.createElement("script");
                    twitterScript.src = "https://platform.twitter.com/widgets.js";
                    twitterScript.async = true;
                    document.body.appendChild(twitterScript);
                }

                if (window.instgrm) {
                    window.instgrm.Embeds.process();
                } else {
                    const instagramScript = document.createElement("script");
                    instagramScript.src = "https://www.instagram.com/embed.js";
                    instagramScript.async = true;
                    instagramScript.onload = () => {
                        if (window.instgrm) {
                            window.instgrm.Embeds.process();
                        }
                    };
                    document.body.appendChild(instagramScript);
                }

                const links = document.querySelectorAll('.tiptap a[href]');
                links.forEach((link) => {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'noopener noreferrer');
                });

                const tables = document.querySelectorAll('.tiptap table');
                tables.forEach((table) => {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'scroll-table';
                    if (!table.parentElement?.classList.contains('scroll-table')) {
                        table.parentNode?.insertBefore(wrapper, table);
                        wrapper.appendChild(table);
                    }
                });
            }, 7000);
        }
    }, [sanitizedFinalContent]);

    return (
        <>
            {showPreview && !isOpen && noticia && (
                <div
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-0 left-0 right-0 z-50 cursor-pointer md:hidden transition duration-500 ease-out transform translate-y-0 opacity-100"
                >
                    <div className="bg-headerColor shadow-lg rounded-t-xl p-3 h-auto flex flex-col gap-2 max-w-xl mx-auto relative animate-slideUp">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClosePreview();
                            }}
                            className="absolute top-2 right-2 text-white text-1xl rounded-full w-5 h-5 flex items-center justify-center"
                        >
                            ✕
                        </button>

                        <p className="text-white text-sm font-semibold text-center">Lo más visto</p>

                        <div className="flex items-center gap-2">
                            <img
                                loading="lazy"
                                src={`${bucketUrl}/${noticia.imagen}`}
                                alt={noticia.titulo}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                                <h4 className="text-white text-sm font-semibold line-clamp-2">{noticia.titulo}</h4>
                                <p className="text-xs text-white">Haz clic para leer</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {isOpen && noticia && (
                <div
                    className="fixed inset-0 z-40 flex justify-center items-end bg-black bg-opacity-40"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-full max-h-[90%] rounded-t-2xl overflow-hidden transform transition-all duration-500 ease-out translate-y-0 opacity-100 animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="w-full bg-headerColor relative flex items-center justify-center px-4 py-2">
                            <h4 className="text-white font-bold text-center">Lo más leído</h4>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-headerColor text-white rounded-full w-6 h-6 flex items-center justify-center"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="bg-white w-full p-4 overflow-y-auto max-h-[calc(90vh-3.5rem)]">
                            <h3 className="text-xl font-bold mb-2">{noticia.titulo}</h3>
                            <p className="text-sm text-gray-600">{noticia.descripcion}</p>
                            <img
                                loading="lazy"
                                src={`${bucketUrl}/${noticia.imagen}`}
                                alt={noticia.titulo}
                                className="w-full mt-2 mb-4"
                            />

                            <div>
                                <div className="flex gap-4">
                                    <img
                                        loading="lazy"
                                        src={`${bucketUrl}/${noticia.author.perfil}`}
                                        className=" w-16 h-16"
                                        alt={noticia.author.name}
                                    />
                                    <article>
                                        <p className="italic text-gray-500">
                                            Por{' '}
                                            <Link
                                                href={`/periodista/${noticia.author.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}`}
                                                className="text-headerColor2 hover:underline"
                                                title='Ir a la página del periodista'
                                            >
                                                {noticia.author.name}
                                            </Link>
                                        </p>

                                        <p className="text-gray-600 text-xs italic">Redactor y creador de contenido</p>
                                    </article>
                                </div>
                            </div>
                            <div>
                                <ShareButtons title={noticia?.metadata?.seo_title || noticia?.titulo} url={currentUrl} />
                            </div>

                            <div className="tiptap">
                                <div
                                    className="text-1xl md:text-3xl mt-2 flex flex-col"
                                    dangerouslySetInnerHTML={{ __html: sanitizedFinalContent }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}
