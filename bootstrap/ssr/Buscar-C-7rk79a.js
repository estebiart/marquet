import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import { usePage } from "@inertiajs/react";
import { I as IsMobile } from "./Ismobile-DoDsVIou.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { N as NewsCard } from "./NewsCard-Lu698CMQ.js";
import { b as bucketUrl, g as getBackgroundColor } from "./utils-ErVxQVks.js";
import "sweetalert2";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "clsx";
import "lucide-react";
import "framer-motion";
import "aos";
const buscarNoticias = async (search, page = 1) => {
  try {
    const response = await axios.get("/getbuscar", {
      params: {
        search,
        page
      }
    });
    return response.data;
  } catch (err) {
    console.error("Error al buscar noticias:", err);
    throw err;
  }
};
const Buscar = () => {
  usePage().props;
  const { ultimasNoticias } = usePage().props;
  const [vernoticas, setNoticiasver] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const isMobile = IsMobile();
  const searchParams = new URLSearchParams(window.location.search);
  const searchTerm = searchParams.get("search") || "";
  useEffect(() => {
    const cargarPaginaInicial = async () => {
      console.log("Entro buee");
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
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx("header", { className: "flex flex-col items-start fixed top-[61px] md:top-[95px] w-full z-80", children: /* @__PURE__ */ jsxs("div", { className: `w-full max-w-screen-md mx-auto bg-gray-800 text-white italic font-bold text-center uppercase py-2 rounded-b-[15px]`, children: [
      'Resultados para: "',
      searchTerm,
      '"'
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 mt-14", children: [
      /* @__PURE__ */ jsxs("div", { className: " ", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-5 mt-8 mb-8 py-[45px] ", children: vernoticas && vernoticas.length > 0 ? vernoticas.map((noticia, index) => {
          var _a, _b;
          return /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
            NewsCard,
            {
              category: (_a = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _a.descripcion,
              title: noticia == null ? void 0 : noticia.titulo2,
              iddado: noticia.id,
              description: noticia.descripcion,
              imageUrl: `${bucketUrl}/${noticia.imagen || noticia.imagen_video}`,
              showPlayIcon: !noticia.imagen && !!noticia.imagen_video,
              accentColor: getBackgroundColor((_b = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _b.nombre),
              slug: noticia.slug,
              variant: "banner",
              author: noticia.author,
              subvariant: isMobile ? void 0 : "stretch"
            }
          ) }, index);
        }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "No se encontraron resultados." }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen md:ml-40 p-4", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-center mb-5", children: "Actualidad" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-10", children: ultimasNoticias.map((noticia, index) => {
              var _a, _b;
              return /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
                NewsCard,
                {
                  category: (_a = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _a.descripcion,
                  title: noticia == null ? void 0 : noticia.titulo2,
                  iddado: noticia.id,
                  description: noticia.descripcion,
                  imageUrl: `${bucketUrl}/${noticia.imagen || noticia.imagen_video}`,
                  showPlayIcon: !noticia.imagen && !!noticia.imagen_video,
                  accentColor: getBackgroundColor((_b = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _b.nombre),
                  slug: noticia.slug,
                  variant: "banner",
                  author: noticia.author,
                  subvariant: isMobile ? void 0 : "stretch"
                }
              ) }, index);
            }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center py-4", children: currentPage < lastPage && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: cargarPagina,
            className: "bg-lightViolet text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-purple-800 transition duration-300 w-44",
            disabled: loading,
            children: loading ? "Cargando..." : "Cargar más"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "" })
    ] })
  ] });
};
export {
  Buscar as default
};
