// En tu archivo SectionGrilla.jsx
import React, { useEffect, useRef, useState } from 'react';
import { bucketUrl, getBackgroundColor, getColor } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { SingleNewCard } from "@/components/SingleNewCard";
import { Noticia } from "@/types/Noticias";
import InternaSection from "./InternaSection";
import MostViewedNews from "./MostViewedNews";
import HalfBanner from "@/components/HalfBanner";

interface DestacadosProps {
  noticias: Noticia[];
  title?: string;
  topweek: any;
}
const bannerImageUrl = bucketUrl + '/publicidad/colpensiones/20251021-PENSIONDERIESGO_300x600.jpg';
const bannerDestinationUrl = 'https://www.colpensiones.gov.co/5133';

export function SectionGrilla({ item, noticias, topweek }: { item: any, noticias: Noticia[], topweek: any }) {
  const bannerWrapperRef = useRef<HTMLDivElement | null>(null);
  const bannerInnerRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [fixedStyle, setFixedStyle] = useState<React.CSSProperties | undefined>(undefined);
  const [spacerHeight, setSpacerHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(min-width: 768px)');
    const topOffset = 96; // equivalent to md:top-24

    function recalc() {
      const wrapper = bannerWrapperRef.current;
      const inner = bannerInnerRef.current;
      if (!wrapper || !inner) return;

      const rect = wrapper.getBoundingClientRect();
      const docTop = window.scrollY || window.pageYOffset;
      const elTop = rect.top + docTop;

      const shouldFix = mq.matches && (window.scrollY + topOffset) > elTop;

      if (shouldFix) {
        setIsFixed(true);
        setFixedStyle({
          position: 'fixed',
          top: `${topOffset}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
        });
        setSpacerHeight(inner.getBoundingClientRect().height);
      } else {
        setIsFixed(false);
        setFixedStyle(undefined);
        setSpacerHeight(undefined);
      }
    }

    let raf = 0;
    function onScroll() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(recalc);
    }

    // initial calc
    recalc();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', recalc);
    mq.addEventListener?.('change', recalc);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', recalc);
      mq.removeEventListener?.('change', recalc);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
   return (
    <section className="p-[48px] md:p-4 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {noticias.map((noticia, idx) => (
            <div key={idx} className="flex flex-col border-b border-gray-300 pb-2 mb-2">
              <a href={`/${noticia?.categorias[0]?.nombre}/${noticia.slug}/${noticia.id}`} className="flex flex-col" >
                <div className="relative">
                  <picture>
                    <source
                      media="(max-width: 768px)"
                    />
                    <img
                      src={`${bucketUrl}/${noticia.imagen_movil}`} 
                      alt={noticia.metadata?.seo_title || noticia.titulo}
                      title={noticia.title_imagen}
                      loading="lazy"
                      className="aspect-video w-full object-cover"
                    />
                  </picture>

                  {!noticia.imagen && !!noticia.imagen_video && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="relative inline-flex items-center justify-center">
                        <span className="block rounded-full w-20 h-20 md:w-24 md:h-24 border-[3px] border-white/90" />
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                          className="absolute w-8 h-8 md:w-10 md:h-10 fill-white"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className="sr-only">Video</span>
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="mt-2 font-medium text-gray-800 hover:text-[#ef0c52]">{noticia.metadata.seo_title}</h3>
                <p className={`text-[14px] md:text-xs pt-4 !text-[${getColor(noticia?.categorias[0]?.nombre)}]`}>
                  Por {noticia.author.name}
                </p>
              </a>
            </div>
          ))}
        </div>

        <div className="md:self-sticky">
          {item.tipo === 'publicidad' ? (
            <div ref={bannerWrapperRef}>
              {isFixed && spacerHeight ? <div style={{ height: spacerHeight }} aria-hidden="true" /> : null}
              <div ref={bannerInnerRef} style={isFixed ? fixedStyle : undefined}>
                <HalfBanner
                  shouldRender={true}
                  imageUrl={bannerImageUrl}
                  destinationUrl={bannerDestinationUrl}
                />
              </div>
            </div>
          ) : (
            <SingleNewCard
              id={item?.data?.id}
              slug={item?.data?.slug}
              categoria={item?.data?.categorias?.[0]?.descripcion || ''}
              author={item?.data?.author}
              titulo={item?.data?.metadata?.seo_title || item?.data?.titulo}
              descripcion={item?.data?.descripcion}
              url={item?.data?.url}
              imagen_url={item?.tipo === 'noticia' ? item?.data?.imagen_movil : item?.data?.imagen_movil_url}
              imagen_movil={item?.tipo === 'noticia' ? item?.data?.imagen_movil : item?.data?.imagen_movil_url}
              title_imagen={item?.data?.title_imagen}
            />
          )}
        </div>
      </div>
    </section>
  );
}