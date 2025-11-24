import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import DOMPurify from "dompurify";
import { b as bucketUrl } from "./utils-ErVxQVks.js";
import { router } from "@inertiajs/react";
import "react";
import "axios";
import "sweetalert2";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "clsx";
import "lucide-react";
import "framer-motion";
import "aos";
const Opinion = ({ opinion, otrosAutores }) => {
  var _a, _b, _c;
  const handleClick = (slug) => {
    router.visit(`/opinion/${slug}`);
  };
  const fotoAutor = (opinion == null ? void 0 : opinion.autor_foto) ?? ((_a = opinion == null ? void 0 : opinion.author) == null ? void 0 : _a.perfil) ?? "img/periodista_default.webp";
  const nombreAutor = (opinion == null ? void 0 : opinion.autor_nombre_publico) || ((_b = opinion == null ? void 0 : opinion.author) == null ? void 0 : _b.name) || "Autor";
  const fullContent = opinion.contenido || "";
  const sanitizedContent = DOMPurify.sanitize(fullContent, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "src", "width", "height"]
  });
  let contentWithEmbeds = sanitizedContent;
  function formatTextWithBreaks(text, maxLength = 30) {
    if (!text) return "";
    const words = text.split(" ");
    let lines = [];
    let currentLine = "";
    for (let word of words) {
      if ((currentLine + word).length <= maxLength) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines.join("\n");
  }
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx("div", { className: "mt-32 p-3 sm:p-0", children: /* @__PURE__ */ jsx("h1", { children: opinion.titulo }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto p-3 sm:p-0", children: /* @__PURE__ */ jsx("p", { className: "text-2xl", children: opinion.descripcion }) }),
    /* @__PURE__ */ jsx("div", { className: ` my-4 max-[600px]:mx-5 max-w-[1280px]`, children: /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-10 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-4 md:col-span-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-4", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: `${bucketUrl}/${fotoAutor}`,
              alt: nombreAutor,
              className: "w-12 h-12 rounded-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("p", { className: "font-semibold", children: (opinion == null ? void 0 : opinion.autor_nombre_publico) ?? ((_c = opinion == null ? void 0 : opinion.author) == null ? void 0 : _c.name) }) }),
            /* @__PURE__ */ jsx("div", { style: { whiteSpace: "pre-line" }, children: formatTextWithBreaks(opinion == null ? void 0 : opinion.autor_biografia, 90) }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-gray-600 text-sm", children: /* @__PURE__ */ jsx("span", { children: opinion.fecha_publicacion }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "tiptap", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-1xl md:text-3xl mt-2 flex flex-col",
            dangerouslySetInnerHTML: { __html: contentWithEmbeds }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-4 md:col-span-3", children: /* @__PURE__ */ jsxs("section", { className: "mx-auto mt-10", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-[#ef0c52] pl-3 mb-6", children: "Otros autores" }),
        otrosAutores.map((autor, index) => {
          var _a2, _b2, _c2, _d;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: "max-w-4xl mx-auto overflow-hidden mb-4 border-b border-gray-300",
              onClick: () => handleClick(autor.opiniones[0].slug),
              style: { cursor: "pointer" },
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center p-4 space-x-4", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    src: `${bucketUrl}/${(autor == null ? void 0 : autor.autor_foto) || ((_a2 = opinion == null ? void 0 : opinion.author) == null ? void 0 : _a2.perfil) || "img/periodista_default.webp"}`,
                    alt: (autor == null ? void 0 : autor.autor_nombre_publico) || ((_b2 = opinion == null ? void 0 : opinion.author) == null ? void 0 : _b2.name) || "Autor",
                    className: "w-20 h-20 rounded-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-gray-900 w-[180px] break-words", children: (_c2 = autor == null ? void 0 : autor.opiniones[0]) == null ? void 0 : _c2.titulo }),
                  /* @__PURE__ */ jsx("p", { className: "text-base", children: (autor == null ? void 0 : autor.autor_nombre_publico) || ((_d = opinion == null ? void 0 : opinion.author) == null ? void 0 : _d.name) || "Autor Desconocido" })
                ] })
              ] })
            },
            index
          );
        })
      ] }) })
    ] }) }) })
  ] });
};
export {
  Opinion as default
};
