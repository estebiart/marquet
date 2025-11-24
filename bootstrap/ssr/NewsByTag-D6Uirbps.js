import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { usePage, Head } from "@inertiajs/react";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import { N as NewsCard } from "./NewsCard-Lu698CMQ.js";
import { b as bucketUrl, g as getBackgroundColor } from "./utils-ErVxQVks.js";
import axios from "axios";
import "sweetalert2";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "clsx";
import "lucide-react";
import "framer-motion";
import "aos";
const formatTagForDisplay = (tagSlug) => {
  const words = tagSlug.split("-");
  const formattedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return formattedWords.join(" ");
};
const NewsByTag = () => {
  const { noticias, tag } = usePage().props;
  const [newsData, setNewsData] = useState(noticias);
  const displayTag = formatTagForDisplay(tag);
  const handlePagination = async (page) => {
    if (page !== null) {
      try {
        const url = `${window.location.pathname}?page=${page}`;
        const response = await axios.get(url);
        console.log(response.data);
        setNewsData(response.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching paginated news:", error);
      }
    }
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(Head, { title: `Noticias de ${displayTag}` }),
    /* @__PURE__ */ jsxs("main", { className: "container mx-auto px-4 py-8 mt-20", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold mb-6", children: [
        "Novedades sobre ",
        displayTag
      ] }),
      newsData.data.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: newsData.data.map((noticia) => /* @__PURE__ */ jsx(
        NewsCard,
        {
          author: noticia.author,
          category: noticia.categorias && noticia.categorias.length > 0 ? noticia.categorias[0].descripcion : "General",
          title: noticia.titulo2 || noticia.titulo,
          iddado: noticia.id,
          description: noticia.descripcion,
          imageUrl: `${bucketUrl}/${noticia.imagen}`,
          imageUrlMovil: `${bucketUrl}/${noticia.imagen_movil}`,
          accentColor: getBackgroundColor(noticia.categorias && noticia.categorias.length > 0 ? noticia.categorias[0].nombre : ""),
          slug: noticia.slug,
          variant: "banner"
        },
        noticia.id
      )) }) : /* @__PURE__ */ jsxs("p", { children: [
        'No hay noticias con la etiqueta "',
        displayTag,
        '".'
      ] }),
      newsData.links.length > 3 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center mt-8 space-x-2", children: newsData.links.map((link, index) => {
        var _a, _b;
        const currentPage = ((_a = newsData.meta) == null ? void 0 : _a.current_page) ?? 1;
        const lastPage = ((_b = newsData.meta) == null ? void 0 : _b.last_page) ?? null;
        let pageNumber = null;
        if (link.label === "pagination.previous") {
          pageNumber = currentPage - 1;
        } else if (link.label === "pagination.next") {
          pageNumber = currentPage + 1;
        } else {
          const parsed = parseInt(String(link.label), 10);
          pageNumber = Number.isNaN(parsed) ? null : parsed;
        }
        const disabled = pageNumber === null || pageNumber < 1 || lastPage !== null && pageNumber > lastPage;
        return /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handlePagination(pageNumber),
            className: `px-4 py-2 text-sm rounded-lg ${link.active ? "bg-headerColor text-white" : "bg-gray-200 text-gray-700"} ${disabled ? "cursor-not-allowed opacity-50" : ""}`,
            dangerouslySetInnerHTML: {
              __html: link.label === "pagination.previous" ? "&laquo; Anterior" : link.label === "pagination.next" ? "Siguiente &raquo;" : link.label
            },
            disabled
          },
          index
        );
      }) })
    ] })
  ] });
};
export {
  NewsByTag as default
};
