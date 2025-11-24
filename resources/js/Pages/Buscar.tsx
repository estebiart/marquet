import Layout from "@/context/Layout";
import { usePage } from '@inertiajs/react';
import { IsMobile } from "@/hooks/Ismobile";
import { useEffect, useState } from "react";
import buscarNoticias from "@/services/BuscarService";

import { Noticia, PageProps, PageStructure } from "@/types/Noticias";
import { NewsCard } from "@/components/NewsCard";
import { bucketUrl, getBackgroundColor } from "@/lib/utils";
import LoadMoreButton from "@/components/LoadMoreButton";
import axios from 'axios';

import { Helmet } from "react-helmet";

const Buscar: React.FC = () => {
  const { categoria } = usePage().props as any;
  const { ultimasNoticias } = usePage().props as any;
  const [vernoticas, setNoticiasver] = useState<Noticia[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const isMobile = IsMobile();
  const searchParams = new URLSearchParams(window.location.search);
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    const cargarPaginaInicial = async () => {
      console.log("Entro buee")
      try {
        const data = await buscarNoticias(searchTerm, 1);
        setNoticiasver(data.noticias.data);
        setCurrentPage(data.noticias.current_page);
        setLastPage(data.noticias.last_page);
      } catch (err) {
        console.error("Error al cargar las noticias iniciales:", err);
      }
    };

    cargarPaginaInicial();
  }, [searchTerm]);

  const cargarPagina = async () => {
    if (currentPage >= lastPage || loading) return;

    setLoading(true);
    try {
      const data = await buscarNoticias(searchTerm, currentPage + 1);
      setNoticiasver((prevData) => [...prevData, ...data.noticias.data]);
      setCurrentPage(data.noticias.current_page);
    } catch (err) {
      console.error("Error al cargar más noticias:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>     
      <header className="flex flex-col items-start fixed top-[61px] md:top-[95px] w-full z-80">
        <div className={`w-full max-w-screen-md mx-auto bg-gray-800 text-white italic font-bold text-center uppercase py-2 rounded-b-[15px]`}>
          Resultados para: "{searchTerm}"
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 mt-14">
        <div className=" ">
          <div className="grid grid-cols-1 gap-5 mt-8 mb-8 py-[45px] ">
            {
              vernoticas && vernoticas.length > 0 ? (
                (vernoticas as Noticia[]).map((noticia, index) => (
                  <div key={index} className="w-full">
                    <NewsCard
                      category={noticia?.categorias[0]?.descripcion}
                      title={noticia?.titulo}
                      iddado={noticia.id}
                      description={noticia.descripcion}
                      imageUrl={`${bucketUrl}/${noticia.imagen || noticia.imagen_video}`}
                      showPlayIcon={!noticia.imagen && !!noticia.imagen_video}
                      accentColor={getBackgroundColor(noticia?.categorias[0]?.nombre)}
                      slug={noticia.slug}
                      variant="banner"
                      author={noticia.author}
                      subvariant={isMobile ? undefined : "stretch"}
                    />
                  </div>
                ))
              ) : (
                <>
                <div className="flex items-center justify-center h-64">
                  <p className="text-gray-500">No se encontraron resultados.</p>
                </div>
                <div className="flex flex-col items-center justify-center min-h-screen md:ml-40 p-4">
                  <h1 className="text-3xl font-bold text-center mb-5">Actualidad</h1>
                  <div className="space-y-10">
                    {(ultimasNoticias as Noticia[]).map((noticia, index) => (
                      <div key={index} className="w-full">
                        <NewsCard
                          category={noticia?.categorias[0]?.descripcion}
                          title={noticia?.titulo}
                          iddado={noticia.id}
                          description={noticia.descripcion}
                          imageUrl={`${bucketUrl}/${noticia.imagen || noticia.imagen_video}`}
                          showPlayIcon={!noticia.imagen && !!noticia.imagen_video}
                          accentColor={getBackgroundColor(noticia?.categorias[0]?.nombre)}
                          slug={noticia.slug}
                          variant="banner"
                          author={noticia.author}
                          subvariant={isMobile ? undefined : "stretch"}
                          
                        />
                      </div>
                    ))}
                  </div>
                </div>
                </>
              )
            }

          </div>
          <div className="flex flex-col items-center justify-center py-4">
            {currentPage < lastPage && (
              <button
                onClick={cargarPagina}
                className="bg-lightViolet text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-purple-800 transition duration-300 w-44"
                disabled={loading}
              >
                {loading ? "Cargando..." : "Cargar más"}
              </button>
            )}
          </div>
        </div>
        <div className="">
          {/* <InternaSection noticias={items} /> */}
        </div>
      </div>
    </Layout>
  )

}

export default Buscar;

