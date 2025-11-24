// import React, { useEffect, useState } from "react";
// import { NewsCard } from "@/components/NewsCard";
// import { CategorySection } from "@/components/CategorySection";
// import { usePage } from '@inertiajs/react';
// import Layout from "@/context/Layout";
// import { DestacadosSection } from "@/components/DestacadosSection";
// import { Noticia, PageProps, PageStructure } from "@/types/Noticias";
// import { bucketUrl, getBackgroundColor } from "@/lib/utils";
// import axios from 'axios';
// import LiveStream from "@/components/LiveStream";
// import FeaturedNews from "@/components/FeaturedNews";
// import { SectionGrilla } from "@/components/SectionGrilla";
// import NoticiasBar from "@/components/NoticiasBar";
// import RegionAccordion from "@/components/RegionAccordion";
// import Geolocalizacion, { cities } from "@/components/Geolocalizacion";
// import NoticiasGuardadas from "./NoticiasGuardadas";
// import { Head } from '@inertiajs/react';
// import Opinions from "@/components/Opinions";

// import { ImportantNews } from "@/components/ImportantNews";
// import Categoria from "./Categoria";


// export const HomePage: React.FC = () => {

//   const [mostrarRegion, setMostrarRegion] = useState(false);
//   const { categoria } = usePage().props as { categoria?: string };
//   const { pages, noticias, topweek, latestnews, opiniones, latestnewspublished, importantNews } = usePage<PageProps>().props;

//   const { cantidad } = usePage().props as any;
//   const [cantidadvariada, setCantidadvariada] = useState(cantidad);
//   const pageType = pages?.page_type ?? { structure: [] };
//   const [noticiasver, setNoticiasver] = useState<Noticia[]>(noticias);

//   const getNewsByIds = (ids: string[] | undefined | null, allNews: Noticia[]): Noticia[] => {
//     if (!Array.isArray(ids)) return [];

//     const newsMap = new Map(allNews.map(n => [n.id.toString(), n]));

//     return ids.map(id => newsMap.get(id)).filter((n): n is Noticia => !!n);
//   };



//   const renderComponent = (item: PageStructure, key: number) => {
//     switch (item.component) {
//       case "LiveSection":
//         return <LiveStream key={key} />;
//       case "FeaturedNews":
//         return <FeaturedNews key={key} noticias={topweek} />;
//       case "Opinions":
//         return <Opinions key={key} opiniones={opiniones} />;
//       case "SingleNewCard":
//         if (item.tipo_contenido === "noticia") {
//           const noticia_unic = item.noticia_id ? getNewsByIds([item.noticia_id], noticias) : [];
//           return (
//             <SectionGrilla
//               key={key}
//               noticias={latestnews}
//               topweek={topweek}
//               item={{
//                 tipo: 'noticia',
//                 data: noticia_unic[0]
//               }}
//             />
//           );
//         } else {
//           return (
//             <SectionGrilla
//               key={key}
//               noticias={latestnews}
//               topweek={topweek}
//               item={{
//                 tipo: 'publicidad',
//                 data: {
//                   imagen_url: item.imagen_url,
//                   url: item.url
//                 }
//               }}
//             />
//           );
//         }

//       case "DestacadosSection":
//         const videoDestacado = item.video_url ? item.video_url : "";
//         const p1 = item.publicidad1 ? item.publicidad1 : "";
//         const p2 = item.publicidad2 ? item.publicidad2 : "";
//         const n1 = item.noticia_izquierda ? getNewsByIds(item.noticia_izquierda, noticias) : [];
//         const n2 = item.noticia_abajo ? getNewsByIds(item.noticia_abajo, noticias) : [];
       
//         const destacado1 = getNewsByIds([item.destacado_1], noticias)[0];
//         // console.log("d1", destacado1);
//         const destacado2 = getNewsByIds([item.destacado_2], noticias)[0];
//         const destacado3 = getNewsByIds([item.destacado_3], noticias)[0];
//         const destacado4 = getNewsByIds([item.destacado_4], noticias)[0];
//         const destacado5 = getNewsByIds([item.destacado_5], noticias)[0];
//         return <DestacadosSection key={key} destacado1={destacado1} destacado2={destacado2} destacado3={destacado3} destacado4={destacado4} destacado5={destacado5} video={videoDestacado} p1={p1} p2={p2} n1={n1} n2={n2} latestnewspublished={latestnewspublished} />;
//       default:
//         return null;
//     }
//   };

//   const renderStructure = (structure: PageStructure[]) => {
//     return structure.map((item, index) => renderComponent(item, index));
//   };

//   const searchParams = new URLSearchParams(window.location.search);
//   const searchQuery = searchParams.get("search");
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const pathSegments = window.location.pathname.split("/");
//   const categoriapath = pathSegments.length > 2 ? pathSegments[2] : undefined;
//   const { etiquetasDestacadas, noticiasPorEtiqueta, etiquetasConNoticias } = usePage().props as any;

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const mostrarmas = async () => {
//     const mostrarmasver = async () => {
//       const data = {
//         categoria: categoria,
//         search: searchQuery,
//         cantidad: cantidadvariada,
//       }
//       try {
//    const response = await axios.post(route('mostrarmas'), data);
//         setNoticiasver(response.data.noticias)
//         setCantidadvariada(response.data.cantidad)

//         return response;
//       } catch (err: any) {
//         return err.response.data;
//       }

//     };
//     await mostrarmasver()
//   }
//   return (
//     <>
//       <Layout>

//         {mostrarRegion && (
//           <div className="fixed top-16 right-4 z-50 bg-white border shadow-lg rounded-lg p-4 w-80">
//             <RegionAccordion
//               cities={cities}
//               handleRegionChange={(value) => {
//                 setMostrarRegion(false);
//               }}
//             />
//           </div>
//         )}
//         <main className="overflow-hidden">
//           <div className="flex relative flex-col w-full bg-blend-normal mt-[40px]">
//             {/* {importantNews && importantNews.length > 0 && (
//               <ImportantNews noticias={importantNews} />
//             )} */}
//             <h1 className="hidden">Últimas noticias Minuto60</h1>

//             {(searchQuery || categoriapath) && (
//               <CategorySection title={categoria ? categoria.toUpperCase() : "NOTICIAS"} color="bg-black" bgcolor="">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//                   {(noticiasver as Noticia[]).map((noticia, index) => (

//                     <div key={index} className="w-full">
//                       <NewsCard
//                         category={categoria ? categoria : ""}
//                         title={noticia?.titulo2 ? noticia?.titulo2 : noticia?.titulo}
//                         iddado={noticia.id}
//                         description={noticia.descripcion}
//                         imageUrl={`${bucketUrl}/${noticia.imagen}`}
//                         imageUrlMovil={`${bucketUrl}/${noticia.imagen_movil}`}
//                         accentColor={getBackgroundColor(categoria ? categoria : "")}
//                         slug={noticia.slug}
//                         variant="banner"
//                         subvariant="stretch"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </CategorySection>
//             )}
//             {(!categoriapath && !searchQuery) && (
//               <>
//                 {pageType.structure.length > 0 ? renderStructure(pageType.structure) : <p>No hay contenido disponible</p>}
//               </>
//             )}
//           </div>

//         </main>

//       </Layout>
//     </>
//   );
// };

// export default HomePage;
