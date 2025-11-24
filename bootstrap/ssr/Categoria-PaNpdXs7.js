import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Link, usePage } from "@inertiajs/react";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import { C as CategorySection } from "./CategorySection-DmPqgZ0L.js";
import { b as bucketUrl, g as getBackgroundColor } from "./utils-ErVxQVks.js";
import { N as NewsCard } from "./NewsCard-Lu698CMQ.js";
import { useState } from "react";
import axios from "axios";
import { I as IsMobile } from "./Ismobile-DoDsVIou.js";
import "sweetalert2";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "clsx";
import "lucide-react";
import "framer-motion";
import "aos";
const LoadMoreButton = ({ onClick }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: "\n        bg-lightViolet \n        text-white \n        text-lg font-medium \n        px-6 py-2 rounded-full \n        hover:bg-purple-800 transition \n        duration-300 w-44",
      children: "Cargar más"
    }
  );
};
const PrincipalSection = ({
  tipo,
  noticias,
  categoria,
  url,
  imgPublicidad
}) => {
  var _a;
  if (tipo === "noticia") {
    return /* @__PURE__ */ jsx(Fragment, { children: noticias.length >= 4 && /* @__PURE__ */ jsx("div", { className: " flex gap-2 mb-16", children: noticias.slice(0, 4).map((noticia, idx) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `rounded-lg    "
                                    }`,
        children: /* @__PURE__ */ jsx(
          NewsCard,
          {
            iddado: noticia.id,
            category: categoria,
            title: (noticia == null ? void 0 : noticia.titulo2) ? noticia == null ? void 0 : noticia.titulo2 : noticia == null ? void 0 : noticia.titulo,
            description: noticia.descripcion,
            imageUrl: `${bucketUrl}/${noticia.imagen}`,
            imageUrlMovil: `${bucketUrl}/${noticia.imagen_movil}`,
            accentColor: getBackgroundColor(categoria),
            mobileVersion: "horizontal",
            variant: "banner",
            textColor: "text-white",
            author: noticia.author
          }
        )
      },
      noticia.id
    )) }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mb-16 flex flex-col gap-4", children: [
    imgPublicidad && /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Link, { href: url || "#", className: "block", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-40 rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          loading: "lazy",
          src: `${bucketUrl}/${imgPublicidad}`,
          className: "object-cover w-full h-full border",
          alt: (_a = noticias[0]) == null ? void 0 : _a.titulo2
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded", children: "Contenido patrocinado" })
    ] }) }) }),
    /* @__PURE__ */ jsx("h4", { className: "text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-headerColor pl-3 mb-6", children: "Recomendamos" }),
    (imgPublicidad ? noticias.slice(0, 3) : noticias.slice(0, 4)).map((noticia, index) => {
      return /* @__PURE__ */ jsx("div", { className: `rounded-lg  `, children: /* @__PURE__ */ jsx(
        NewsCard,
        {
          iddado: noticia.id,
          category: categoria,
          title: (noticia == null ? void 0 : noticia.titulo2) ? noticia == null ? void 0 : noticia.titulo2 : noticia == null ? void 0 : noticia.titulo,
          description: noticia.descripcion,
          imageUrl: `${bucketUrl}/${noticia.imagen}`,
          accentColor: getBackgroundColor(categoria),
          mobileVersion: "horizontal",
          variant: "banner",
          textColor: "text-white",
          author: noticia.author
        }
      ) }, noticia.id);
    })
  ] });
};
const Categoria = ({ noticias }) => {
  var _a;
  const [items, setItems] = useState(noticias.data);
  const [nextPageUrl, setNextPageUrl] = useState(noticias.next_page_url);
  const [currentPage, setCurrentPage] = useState(1);
  const { destacados, notices, importantNews } = usePage().props;
  const { categoria, categoria_descripcion, categoryData } = usePage().props;
  const getNewsByIds = (ids, allNews) => {
    if (!Array.isArray(ids)) return [];
    return allNews.filter(
      (noticia) => ids.includes(noticia.id.toString())
    );
  };
  const destacado = ((_a = destacados == null ? void 0 : destacados.destacado_categoria) == null ? void 0 : _a[0]) ?? null;
  const idsNoticias = (destacado == null ? void 0 : destacado.noticias) ?? [];
  let noticiasDestacadas = [];
  let otrosDatos = null;
  if (destacado) {
    switch (destacado.tipo_contenido) {
      case "noticia":
        noticiasDestacadas = getNewsByIds(idsNoticias, notices);
        break;
      case "publicidad":
        otrosDatos = {
          noticias: getNewsByIds(idsNoticias, notices),
          url: destacado.url,
          img_publicidad: destacado.img_publicidad
        };
        break;
    }
  }
  const cargarMasNoticias = async () => {
    if (!nextPageUrl) return;
    try {
      const url = new URL(nextPageUrl);
      url.searchParams.set("category", categoria);
      const nextPage = currentPage + 1;
      const response = await axios.get(`/${categoria}?page=${nextPage}&category=${categoria}`);
      setItems((prev) => [...prev, ...response.data.data]);
      setNextPageUrl(response.data.next_page_url);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error(error);
    }
  };
  const isMobile = IsMobile();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(
    CategorySection,
    {
      title: categoria.toUpperCase(),
      color: "bg-black",
      bgcolor: "bg-white",
      children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "order-first md:order-last", children: (destacado == null ? void 0 : destacado.tipo_contenido) && /* @__PURE__ */ jsx(
          PrincipalSection,
          {
            tipo: destacado.tipo_contenido,
            noticias: destacado.tipo_contenido === "noticia" ? noticiasDestacadas : (otrosDatos == null ? void 0 : otrosDatos.noticias) || [],
            categoria,
            url: otrosDatos == null ? void 0 : otrosDatos.url,
            imgPublicidad: otrosDatos == null ? void 0 : otrosDatos.img_publicidad
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "order-last md:order-first", children: [
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-5 mb-4", children: items.map((noticia) => /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
            NewsCard,
            {
              category: categoria_descripcion || noticia.categoria,
              title: (noticia == null ? void 0 : noticia.titulo2) || noticia.titulo,
              iddado: noticia.id,
              description: noticia.descripcion,
              imageUrl: `${bucketUrl}/${noticia.imagen || noticia.imagen_video}`,
              imageUrlMovil: `${bucketUrl}/${noticia.imagen_movil}`,
              showPlayIcon: !noticia.imagen && !!noticia.imagen_video,
              accentColor: getBackgroundColor(categoria),
              slug: noticia.slug,
              variant: "banner",
              subvariant: isMobile ? void 0 : "stretch",
              author: noticia.author,
              title_imagen: noticia.title_imagen,
              fecha: noticia.fecha_publicacion,
              updated_at: noticia.updated_at
            }
          ) }, noticia.id)) }),
          nextPageUrl && /* @__PURE__ */ jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsx(LoadMoreButton, { onClick: cargarMasNoticias }) })
        ] })
      ] })
    }
  ) }) });
};
export {
  Categoria as default
};
