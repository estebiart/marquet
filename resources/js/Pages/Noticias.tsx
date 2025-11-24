declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
  }
}

import RecommendationNews from "@/components/RecommendationNews";
import NoticiaMultimedia from "@/components/NoticiaMultimedia";
import { guardarNoticias } from "@/services/NoticaServicie";
import { bucketUrl, getBackgroundColor } from "@/lib/utils";
import { ImportantNews } from "@/components/ImportantNews";
import InternaSection from "@/components/InternaSection";
import MostViewedNews from "@/components/MostViewedNews";
import ShareButtons from "@/components/ShareButtons";
import { Link, usePage } from "@inertiajs/react";
import { getBorderColor } from "@/lib/utils";
import { PageProps } from "@/types/Noticias";
import React, { useEffect } from "react";
import Layout from "@/context/Layout";
import { es } from 'date-fns/locale';
import { format } from 'date-fns';
import DOMPurify from "isomorphic-dompurify";
import 'moment/locale/es';

declare const twttr: any;
declare const instgrm: any;
declare global {
  interface Window {
    tiktokEmbedLoaded?: boolean;
  }
}

import MenuFlow from "@/components/MenuFlow";
import FacebookComments from "@/components/FacebookComments";
import parse, { HTMLReactParserOptions, Element, Text } from "html-react-parser";
import Minuto from "@/components/Minuto";

interface ViewerProps {
  html: string;
}




const Noticias: React.FC = () => {
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
  const { noticia, message } = usePage().props as any;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        autor: noticia.author.name,
        fecha_publicacion: noticia.fecha_publicacion,
        seccion: noticia.categorias[0].nombre,
        noticia_id: noticia.id,
      });
    }
  }, [noticia]);
  const parsePdfEmbeds = (content: string): string => {
    return content.replace(/\[pdf_embed\](.*?)\[\/pdf_embed\]/g, (match, url) => {
      return `
      <iframe
        src="${url.trim()}"
        width="100%"
        height="600"
        style="
          max-width: 100%;
          margin: 1rem auto;
          display: block;
          border: none;
          border-radius: 8px;
          overflow: hidden;
        "
        allow="autoplay"
        frameborder="0"
      ></iframe>
    `
    })
  }

  const parseAudioEmbeds = (content: string): string => {
    return content.replace(/\[audio_embend\](.*?)\[\/audio_embend\]/g, (match, url) => {
      console.log("see url", url);
      return `
      <audio controls class="my-4 w-full">
        <source src="${url.trim()}" type="audio/mpeg">
        Tu navegador no soporta la etiqueta de audio.
      </audio>
    `;
    });
  }


  const category = noticia?.categorias[0]?.nombre;
  const descripcion = noticia?.categorias[0]?.descripcion;

  message && alert(message);
  const handleClick = async () => {
    await guardarNoticias(noticia.id);
  };

  const FormattedDate = (date: string) => {
    const rawFormatted = format(new Date(date), "d 'de' MMMM 'de' yyyy - h:mm a", {
      locale: es,
    });
    const lowerCased = rawFormatted.replace('AM', 'a. m.').replace('PM', 'p. m.');
    return lowerCased;
  };

  const fondo = getBorderColor(noticia.category);
  const { topweek, latestnewspublished, noticiasRecomendadas, importantNews, topNoticia, minutos, etiquetasRelacionadas } = usePage<PageProps>().props;
  // para embebidos y contenido noticia
  const fullContent = (noticia?.contenido || '');
const sanitizedContent = DOMPurify.sanitize(fullContent, {
  ADD_TAGS: ["iframe"],
  ADD_ATTR: [
    "allow",
    "allowfullscreen",
    "frameborder",
    "src",
    "width",
    "height"
  ],
  FORBID_ATTR: ["style"]
});



  let contentWithEmbeds = sanitizedContent;
  contentWithEmbeds = parsePdfEmbeds(contentWithEmbeds);
  contentWithEmbeds = parseInstagramEmbeds(contentWithEmbeds);
  contentWithEmbeds = parseAudioEmbeds(contentWithEmbeds); // Procesa los audios aquí

  noticia.embebido?.forEach((embed: any, index: any) => {
    const placeholder = `{{EMBED_${index}}}`;
    if (embed.html) {
      contentWithEmbeds = contentWithEmbeds.replace(placeholder, embed.html);
    }
  });

  noticia.noticia_embebida?.forEach((related: any, index: number) => {
    const placeholder = `{{RELATED_${index}}}`;
    if (related.html) {
      contentWithEmbeds = contentWithEmbeds.replace(placeholder, related.html);
    }
  });

  if (noticia.audios) {
    const audioTag = `<audio controls class="my-4 w-full">
      <source src='${bucketUrl}/${noticia.audios}' type='audio/mpeg'>
      Tu navegador no soporta la etiqueta de audio.
    </audio>`;
    contentWithEmbeds = contentWithEmbeds.replace('{{AUDIO}}', audioTag);
  }

const sanitizedFinalContent = DOMPurify.sanitize(contentWithEmbeds, {
  ADD_TAGS: ["audio", "source", "iframe", "blockquote", "section"],
  ADD_ATTR: [
    "controls", "src", "type",
    "allow", "allowfullscreen", "frameborder", "width", "height",
    "data-instgrm-permalink", "data-instgrm-version", "style"
  ],
  FORBID_ATTR: ["style"]
});


  useEffect(() => {
    console.log("entroofff");
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Twitter
      if (typeof window !== "undefined" &&
        window.twttr &&
        window.twttr.widgets &&
        typeof window.twttr.widgets.load === "function") {

        window.twttr.widgets.load();
      }
      else {
        const twitterScript = document.createElement("script");
        twitterScript.src = "https://platform.twitter.com/widgets.js";
        twitterScript.async = true;
        document.body.appendChild(twitterScript);
      }

      // Instagram
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

      // TikTok
      // const existingTikTok = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      // if (window.tiktokEmbedLoaded) {
      //   if (existingTikTok) {
      //     existingTikTok.remove();
      //   }

      //   const newScript = document.createElement("script");
      //   newScript.src = "https://www.tiktok.com/embed.js";
      //   newScript.async = true;
      //   document.body.appendChild(newScript);
      // } else {
      //   window.tiktokEmbedLoaded = true;
      // }

      // Abrir enlaces en nueva pestaña
      const links = document.querySelectorAll('.tiptap a[href]');
      links.forEach((link) => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      });

      // Scroll horizontal para tablas
      const tables = document.querySelectorAll('.tiptap table');
      tables.forEach((table) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'scroll-table';
        if (!table.parentElement?.classList.contains('scroll-table')) {
          table.parentNode?.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        }
      });
    }
  }, []);

  // useEffect(() => {
  //   const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');

  //   if (!existingScript) {
  //     const script = document.createElement('script');
  //     script.src = 'https://www.tiktok.com/embed.js';
  //     script.async = true;
  //     script.onload = () => {
  //       console.log("TikTok script loaded");
  //     };
  //     document.body.appendChild(script);
  //   }
  // }, []);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const tiktokIframe = document.querySelector('.tiktok-embed iframe');
  //     if (!tiktokIframe) {
  //       console.warn('TikTok embed bloqueado o falló al cargar.');
  //       // Mostrar un mensaje o link alternativo
  //     }
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, []);
  // useEffect(() => {
  //   const loadTikTok = () => {
  //     const script = document.createElement('script');
  //     script.src = 'https://www.tiktok.com/embed.js';
  //     script.async = true;
  //     document.body.appendChild(script);
  //   };

  //   const timeout = setTimeout(() => {
  //     loadTikTok();
  //   }, 500); 

  //   return () => clearTimeout(timeout);
  // }, []);

  // fin para embebidos y contenido noticia



  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const ampUrl = `/amp/${category}/${noticia.slug}/${noticia.id}`;
  const normalizeTagForUrl = (tag: string): string => {
    // La etiqueta ya viene normalizada del backend (minúsculas, sin acentos, espacios en lugar de guiones)
    // Solo necesitamos convertir espacios a guiones para la URL y limpiar guiones extra.
    let urlSlug = tag.replace(/\s+/g, '-'); // Reemplazar uno o más espacios con un solo guion
    urlSlug = urlSlug.replace(/^-+|-+$/g, ''); // Eliminar guiones al principio o al final
    return urlSlug;
  };
  return (
    <>
      <Layout category_interna={category} >

        <div className={` my-4 max-[600px]:mx-5 max-w-[1280px] px-4`}>
          <div className={`h-[16px] w-[12px] mt-[99px] ${getBackgroundColor(category)} absolute`} />
          <div className="font-bold p-4 mt-20 uppercase" >
            <Link href="/" title="Inicio">Inicio</Link> /{" "}
            {category ? (
              <Link
                href={`/${category}`}
                title={descripcion || category}
                className="hover:underline"
              >
                {descripcion || category}
              </Link>
            ) : (
              descripcion
            )}
          </div>

          <div className="grid gap-4">
            {importantNews && importantNews.length > 0 && (
              <ImportantNews noticias={importantNews} />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

              <div className="order-2">
                <NoticiaMultimedia noticia={noticia} bucketUrl={bucketUrl} />
                {(noticia?.pie_de_pagina?.pie_de_foto || noticia?.pie_de_pagina?.credito) && (
                  <div className="items-center gap-2 italic text-sm text-gray-500">
                    {noticia.pie_de_pagina.pie_de_foto && <span>{noticia.pie_de_pagina.pie_de_foto}</span>}
                    {noticia.pie_de_pagina.pie_de_foto && noticia.pie_de_pagina.credito && <span> - </span>}
                    {noticia.pie_de_pagina.credito && (
                      <span className="font-bold text-gray-600 ">
                        Crédito: {noticia.pie_de_pagina.credito}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="md:p-4 flex flex-col justify-between gap-4 md:gap-1 order-1">
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm">
                  <span>{FormattedDate(noticia.fecha_publicacion)}</span>
                  <div className="flex gap-1 sm:gap-2 sm:items-center sm:ml-2 mt-1 sm:mt-0">
                    <span className="hidden sm:inline">|</span>
                    <span>
                      Actualizado - {FormattedDate(noticia.actualizar_noticia ?? noticia.updated_at)}
                    </span>
                  </div>
                </div>
                <div className="text-7xl md:text-9xl ">
                  <h1>{noticia.titulo}</h1>
                </div>

                <div className="text-1xl md:text-2xl ">
                  {noticia.descripcion}
                </div>

                <div className="flex gap-4">
                  {/* <img
                    loading="lazy"
                    src={noticia.author.perfil ? `${bucketUrl}/${noticia.author.perfil}` : '/img/periodista_default.webp'}
                    className="rounded w-16 h-16" alt={noticia.author.name} title={noticia.author.name}
                  /> */}
                  <article>
                    <p className="italic text-gray-500">
                      <a
                        href={`/periodista/${noticia.author.slug.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}`}
                        className="text-headerColor2 hover:underline"
                        title={noticia.author.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {noticia.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600 text-xs uppercase tracking-wide font-semibold italic">
                      Periodista Digital
                    </p>
                  </article>
                </div>
                {/* Etiquetas de la noticia */}
                {/* {Array.isArray(noticia?.etiquetas) && noticia.etiquetas.length > 0 && (
                  <TagList etiquetas={noticia.etiquetas} />
                )} */}
                <ShareButtons title={noticia?.metadata?.seo_title || noticia?.titulo} url={currentUrl} />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
              <div className="md:p-4 md:col-span-7">
                <div className="tiptap">


                  {Array.isArray(minutos) && minutos.length > 0 ? (
                    <>
                      <div
                        className="text-1xl md:text-3xl mt-2 flex flex-col"
                        dangerouslySetInnerHTML={{ __html: sanitizedFinalContent }}
                      />
                      <Minuto minutos={minutos} />

                    </>
                  ) : (
                    <div
                      className="text-1xl md:text-3xl mt-2 flex flex-col"
                      dangerouslySetInnerHTML={{ __html: sanitizedFinalContent }}
                    />
                  )}

                  {/* <Viewer html={sanitizedFinalContent} /> */}
                </div>
                {/* <FacebookComments url={currentUrl} /> */}
              </div>
              <div className="md:p-4 md:col-span-3">
                <InternaSection noticias={latestnewspublished} />
                <MostViewedNews noticias={topweek} />
              </div>
            </div>

            {noticia.recommendations &&
              Array.isArray(noticia.recommendations) &&
              noticia.recommendations.length > 0 && (
                <div>
                  <RecommendationNews noticias={noticiasRecomendadas} />
                </div>
              )}
          </div>

          <div>
            {Array.isArray(etiquetasRelacionadas) && etiquetasRelacionadas.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Temas Relacionados</h2>
                <div className="flex flex-wrap gap-2">
                  {etiquetasRelacionadas.map((etiqueta) => (
                    <Link
                      key={etiqueta.slug}
                      href={`/temas/${normalizeTagForUrl(etiqueta.slug)}`}
                      className=" bg-red-300 text-sm font-medium px-3 py-1 rounded-full hover:bg-red-400"
                    >
                      {etiqueta.tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {
            topweek.length > 0 && (
              <MenuFlow noticias={topNoticia} />
            )
          }
        </div>
      </Layout>
    </>
  );

};

export default Noticias;