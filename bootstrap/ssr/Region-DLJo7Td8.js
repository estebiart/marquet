import { jsx, jsxs } from "react/jsx-runtime";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import { C as CategorySection } from "./CategorySection-DmPqgZ0L.js";
import { b as bucketUrl, g as getBackgroundColor } from "./utils-ErVxQVks.js";
import { N as NewsCard } from "./NewsCard-Lu698CMQ.js";
import "@inertiajs/react";
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
const Region = ({ noticias, region }) => {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(CategorySection, { title: region ? region.toUpperCase() : "NOTICIAS", color: "bg-black", bgcolor: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: " ", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-5 ", children: noticias.map((noticia, index) => {
      var _a;
      return /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
        NewsCard,
        {
          category: ((_a = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _a.nombre) || region,
          title: (noticia == null ? void 0 : noticia.titulo2) ? noticia == null ? void 0 : noticia.titulo2 : noticia == null ? void 0 : noticia.titulo,
          iddado: noticia.id,
          description: noticia.descripcion,
          imageUrl: `${bucketUrl}/${noticia.imagen}`,
          accentColor: getBackgroundColor(region),
          slug: noticia.slug,
          variant: "banner",
          subvariant: "stretch"
        }
      ) }, index);
    }) }) }),
    /* @__PURE__ */ jsx("div", { className: "" })
  ] }) }) });
};
export {
  Region as default
};
