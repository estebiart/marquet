import Layout from "@/context/Layout";
import { usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { DestacadosSection } from "@/components/DestacadosSection";
import { bucketUrl } from "@/lib/utils";
import moment from 'moment';
import 'moment/locale/es';
import { PageProps } from "@/types/Noticias";
import { getBorderColor } from "@/lib/utils";
import { guardarNoticias } from "@/services/NoticaServicie";
import { Helmet } from 'react-helmet';
// import { EtiquetasMarquee } from "@/components/EtiquetasMarquee";
import { format } from 'date-fns';
import { ca, es } from 'date-fns/locale';
import InternaSection from "@/components/InternaSection";
import ShareButtons from "@/components/ShareButtons";
import NoticiaMultimedia from "@/components/NoticiaMultimedia";
import Minuto from "@/components/Minuto";
declare const twttr: any;
declare const instgrm: any;

type MobilePreviewProps = {
  width: number;
  height: number;
  children: React.ReactNode;
};

const MobilePreview = ({ width, height, children }: MobilePreviewProps) => {
  const scale = 0.65; // Puedes ajustar esto
  const transformStyle = {
    transform: `scale(${scale})`,
    transformOrigin: 'top center',
    width: `${width}px`,
    height: `${height}px`,
    overflow: 'hidden',
  };

  return (
    <div className="flex justify-center">
      <div
        className="bg-white border border-gray-300 rounded-2xl shadow-md transition-all duration-300"
        style={transformStyle}
      >
        <div className="w-full h-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
const NoticiasPreview: React.FC = () => {
  const { noticia, message, author, minutos } = usePage().props as any;
  type Dispositivo = {
    width: number;
    height: number;
  };

  const dispositivos: { [key: string]: Dispositivo } = {
    // Movil
    'iPhone 8': { width: 375, height: 667 },
    'iPhone 14 Pro': { width: 390, height: 844 },
    'iPhone XR': { width: 414, height: 896 },
    'Pixel 5': { width: 393, height: 851 },
    'Galaxy S20': { width: 412, height: 915 },

    // PC
    'Laptop 13': { width: 1280, height: 800 },
    'Laptop 15': { width: 1440, height: 900 },
    'Desktop HD': { width: 1366, height: 768 },
    'Desktop Full HD': { width: 1920, height: 1080 },
    'Desktop 2K': { width: 2560, height: 1440 },
    'Desktop 4K': { width: 3840, height: 2160 },
  };
  const [dispositivoSeleccionado, setDispositivoSeleccionado] = useState('iPhone 8');
  const { width, height } = dispositivos[dispositivoSeleccionado];
  const isMobile = width <= 600;


  const category = "categoria";
  message && alert(message);
  const handleClick = async () => {
    await guardarNoticias(noticia.id)
  };

  const FormattedDate = (date: string) => {
    const rawFormatted = format(new Date(date), "d 'de' MMMM 'de' yyyy - h:mm a", {
      locale: es,
    });
    const lowerCased = rawFormatted.replace('AM', 'a.m.').replace('PM', 'p.m.');
    return lowerCased;
  };

  const fondo = getBorderColor(noticia.categoria);
  const { topweek } = usePage<PageProps>().props;
  const fullContent = (noticia.contenido || '');
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

  const sanitizedContent = DOMPurify.sanitize(fullContent, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'src', 'width', 'height']
  });

  let contentWithEmbeds = sanitizedContent;
  contentWithEmbeds = parsePdfEmbeds(contentWithEmbeds);
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
      related.html = related.html.replace(
        /<img([^>]+)class="hidden"/,
        '<img$1class="w-full h-24 md:h-32 object-cover md:w-2/5"'
      );
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
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const sanitizedFinalContent = DOMPurify.sanitize(contentWithEmbeds, {
    ADD_TAGS: ['audio', 'source', 'iframe'],
    ADD_ATTR: [
      'controls', 'src', 'type',
      'allow', 'allowfullscreen', 'frameborder', 'width', 'height',
      'data-instgrm-permalink', 'data-instgrm-version'
    ],
    FORBID_ATTR: ['style']
  });

  useEffect(() => {
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

    // Estilos dinámicos
    const style = document.createElement("style");
    style.innerHTML = `
    .twitter-tweet {
      padding-left: ${isMobile ? "1rem" : "9rem"} !important;
    }

    .instagram-media {
      margin-top: 30px !important;
      margin-bottom: 30px !important;
      margin-left: ${isMobile ? "-0.5rem" : "9rem"} !important;
    }

    .scroll-table {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-left: ${isMobile ? "0" : "9rem"} !important;
      margin-right: ${isMobile ? "0" : "9rem"} !important;
    }

    .scroll-table table {
      width: max-content;
    }
  `;
    document.head.appendChild(style);

    // Envolver tablas
    const tables = document.querySelectorAll(".tiptap table");
    tables.forEach((table) => {
      if (!table.parentElement?.classList.contains("scroll-table")) {
        const wrapper = document.createElement("div");
        wrapper.className = "scroll-table";
        table.parentNode?.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  }, [sanitizedContent]);

  return (
    <div>
      <div className="flex flex-col space-y-4 w-fit">
        <select
          id="dispositivo"
          value={dispositivoSeleccionado}
          onChange={(e) => setDispositivoSeleccionado(e.target.value)}
        >
          {Object.keys(dispositivos).map((nombre) => (
            <option key={nombre} value={nombre}>
              {nombre}
            </option>
          ))}
        </select>
        <button onClick={() => window.history.back()}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          ⬅ Volver atrás
        </button>
      </div>
      <MobilePreview width={width} height={height}>
        <div className={`my-4 ${isMobile ? 'mx-5' : 'mx-auto'} max-w-[1280px]`}>
          <div className={`font-bold uppercase ${!isMobile ? 'p-4' : ''}`}>
            <a href="/" title="Inicio">Inicio</a> / {category}
          </div>
          <div className="grid gap-4">
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              <div className={`flex flex-col justify-between gap-4 ${isMobile ? 'p-0' : 'p-4'}`}>
                <div className={`flex flex-col ${!isMobile ? 'flex-row items-center' : ''} text-sm text-gray-600`}>
                  <span>{FormattedDate(noticia.fecha_publicacion)}</span>
                  <span className={`${!isMobile ? 'ml-2' : ''}`}>
                    Actualizado {FormattedDate(noticia.actualizar_noticia ?? noticia.updated_at)}
                  </span>
                </div>
                <div className={`${isMobile ? 'text-6xl' : 'text-9xl'}`}>
                  <h1>{noticia.titulo}</h1>
                </div>

                <div className={`${isMobile ? 'text-xl' : 'text-2xl'}`}>
                  {noticia.descripcion}
                </div>

                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src={author.perfil ? `${bucketUrl}/${author.perfil}` : '/img/periodista_default.webp'}
                    className="rounded w-16 h-16" alt={author.name}
                  />
                  <article>
                    <p className="italic text-gray-500">
                      {' '}
                      <a
                        className="text-headerColor2 hover:underline"
                      >
                        Autor
                      </a>
                    </p>
                    <p className="text-gray-600 text-xs uppercase tracking-wide font-semibold italic">
                      Periodista Digital
                    </p>
                  </article>
                </div>
                <ShareButtons title={noticia?.metadata?.seo_title || noticia?.titulo} url={currentUrl} />
              </div>
              <div className={`${!isMobile ? 'p-4' : ''}`}>
                <NoticiaMultimedia noticia={noticia} bucketUrl={bucketUrl} />
                {(noticia?.pie_de_pagina?.pie_de_foto || noticia?.pie_de_pagina?.credito) && (
                  <div className=" items-center gap-2 italic text-sm text-gray-500">
                    {noticia.pie_de_pagina.pie_de_foto && <span>{noticia.pie_de_pagina.pie_de_foto}</span>}
                    {noticia.pie_de_pagina.pie_de_foto && noticia.pie_de_pagina.credito && <span>-</span>}
                    {noticia.pie_de_pagina.credito && (
                      <span className="font-bold text-gray-600 ">
                        crédito {noticia.pie_de_pagina.credito}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-10'} gap-4`}>
              <div className="col-span-7">
                <div className="tiptap">
                  {Array.isArray(minutos) && minutos.length > 0 ? (
                    <Minuto minutos={minutos} />
                  ) : (
                    <div
                      className="text-1xl md:text-2xl mt-2 flex flex-col"
                      dangerouslySetInnerHTML={{ __html: sanitizedFinalContent }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobilePreview>
    </div>
  );
};
export default NoticiasPreview;
