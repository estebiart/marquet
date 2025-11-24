import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { b as bucketUrl } from "./utils-ErVxQVks.js";
import { router } from "@inertiajs/react";
const InternaSection = ({ noticias }) => {
  const handleClick = (categoria, iddado, slug) => {
    router.visit(`/${categoria}/${slug}/${iddado}`);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: noticias.length >= 4 && /* @__PURE__ */ jsxs("section", { className: "mx-auto", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-headerColor pl-3 mb-2", children: "Actualidad" }),
    noticias.map((noticia, index) => {
      var _a;
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: "max-w-4xl mx-auto overflow-hidden mb-4 border-b border-gray-300",
          onClick: () => {
            var _a2;
            return handleClick((_a2 = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _a2.nombre, noticia.id, noticia.slug);
          },
          style: { cursor: "pointer" },
          children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "md:p-4 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: `${bucketUrl}/${noticia.imagen}`,
                alt: "",
                className: "block md:hidden aspect-video w-full object-cover"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-[20px] font-bold", children: noticia.titulo2 ? noticia.titulo2 : noticia.titulo }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2", children: [
              /* @__PURE__ */ jsx("span", { className: "", children: "Por" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: (_a = noticia.author) == null ? void 0 : _a.name })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: new Date(noticia.fecha_publicacion).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }) })
          ] }) })
        },
        index
      );
    })
  ] }) });
};
export {
  InternaSection as I
};
