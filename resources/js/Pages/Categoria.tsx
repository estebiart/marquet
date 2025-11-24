import { usePage } from "@inertiajs/react";
import Layout from "@/context/Layout";
import { CategorySection } from "@/components/CategorySection";
import { bucketUrl, getBackgroundColor } from "@/lib/utils";
import { Noticia, PageProps } from "@/types/Noticias";
import { NewsCard } from "@/components/NewsCard";
import { useState } from "react";
import axios from 'axios';
import LoadMoreButton from "@/components/LoadMoreButton";
import { PrincipalSection } from "@/components/PrincipalSection";
import { Head } from '@inertiajs/react';
import { IsMobile } from "@/hooks/Ismobile";
import VideoBanner from "@/components/VideoBanner";

interface CategoriaProps {
  noticias: {
    data: Noticia[];
    next_page_url: string | null;
    current_page: number;
    last_page: number;
  };
  categoria: string;
  categoria_descripcion: string;
}
interface NoticiasPaginadas {
  data: Noticia[];
  next_page_url: string | null;
  current_page: number;
  last_page: number;
}


const Categoria: React.FC<CategoriaProps> = ({ noticias }) => {
  const [items, setItems] = useState<Noticia[]>(noticias.data);
  const [nextPageUrl, setNextPageUrl] = useState(noticias.next_page_url);
  const [currentPage, setCurrentPage] = useState(1);
  const { destacados, notices, importantNews } = usePage<PageProps>().props as any;
  const { categoria, categoria_descripcion, categoryData } = usePage<any>().props;

  const bannerImageUrl = bucketUrl + '/publicidad/colpensiones/20251021-PENSIONDERIESGO_500x500.jpg';
  const bannerDestinationUrl = 'https://www.colpensiones.gov.co/5133';


  // Hook auxiliar para filtrar por IDs
  const getNewsByIds = (
    ids: string[] | undefined | null,
    allNews: Noticia[]
  ): Noticia[] => {
    if (!Array.isArray(ids)) return [];
    return allNews.filter((noticia) =>
      ids.includes(noticia.id.toString())
    );
  };

  // Datos destacados
  const destacado = destacados?.destacado_categoria?.[0] ?? null;
  const idsNoticias = destacado?.noticias ?? [];
  let noticiasDestacadas: Noticia[] = [];
  let otrosDatos:
    | { noticias: Noticia[]; url: string; img_publicidad: string }
    | null = null;
  if (destacado) {
    switch (destacado.tipo_contenido) {
      case "noticia":
        noticiasDestacadas = getNewsByIds(idsNoticias, notices);
        break;
      case "publicidad":
        otrosDatos = {
          noticias: getNewsByIds(idsNoticias, notices),
          url: destacado.url,
          img_publicidad: destacado.img_publicidad,
        };
        break;
      default:
        break;
    }
  }

  const cargarMasNoticias = async () => {
    if (!nextPageUrl) return;
    try {
      const url = new URL(nextPageUrl);
      url.searchParams.set("category", categoria);
      const nextPage = currentPage + 1;
      const response = await axios.get<NoticiasPaginadas>(`/${categoria}?page=${nextPage}&category=${categoria}`);
      setItems((prev) => [...prev, ...response.data.data]);
      setNextPageUrl(response.data.next_page_url);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error(error);
    }
  };


  const isMobile = IsMobile();
  return (
    <>
      <Layout>
        <CategorySection
          title={categoria.toUpperCase()}
          color="bg-black"
          bgcolor="bg-white"
        >
          {/* {importantNews && importantNews.length > 0 && (
            <ImportantNews noticias={importantNews} />
          )} */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 mt-10 ">
            <div className="order-first md:order-last "  >
             <VideoBanner
                imageUrl={bannerImageUrl}
                destinationUrl={bannerDestinationUrl}
                shouldRender={true}
              />

              {destacado?.tipo_contenido && (
                <PrincipalSection
                  tipo={destacado.tipo_contenido}
                  noticias={
                    destacado.tipo_contenido === "noticia"
                      ? noticiasDestacadas
                      : otrosDatos?.noticias || []
                  }
                  categoria={categoria}
                  url={otrosDatos?.url}
                  imgPublicidad={otrosDatos?.img_publicidad}
                />
              )}
            </div>

            <div >
              <div className="grid grid-cols-1 gap-5 mb-4">
                {items.map((noticia) => (
                  <div key={noticia.id} className="w-full">
                    <NewsCard
                      category={categoria_descripcion || noticia.categoria}
                      title={noticia.titulo}
                      iddado={noticia.id}
                      description={noticia.descripcion}
                      imageUrl={`${bucketUrl}/${noticia.imagen || noticia.imagen_video}`}
                      imageUrlMovil={`${bucketUrl}/${noticia.imagen_movil}`}
                      showPlayIcon={!noticia.imagen && !!noticia.imagen_video}
                      accentColor={getBackgroundColor(categoria)}
                      slug={noticia.slug}
                      variant="banner"
                      subvariant={isMobile ? undefined : "stretch"}
                      author={noticia.author}
                      title_imagen={noticia.title_imagen}
                      fecha={noticia.fecha_publicacion}
                      updated_at={noticia.updated_at}
                    />
                  </div>
                ))}
              </div>

              {nextPageUrl && (
                <div className="text-center mt-6">
                  <LoadMoreButton onClick={cargarMasNoticias} />
                </div>
              )}
            </div>
          </div>
        </CategorySection>
      </Layout>
    </>
  );
};

export default Categoria;
