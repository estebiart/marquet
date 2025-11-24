import { jsxs, jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import { N as NewsCard } from "./NewsCard-Lu698CMQ.js";
import { b as bucketUrl, g as getBackgroundColor } from "./utils-ErVxQVks.js";
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
function NoticiasGuardadas() {
  const { categoria } = usePage().props;
  const { noticias } = usePage().props;
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx("h1", { className: `text-7xl  inline-block border-b-8 pb-3`, style: { borderColor: "#5D2783" }, children: "Noticias guardadas" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 mb-8", children: noticias.map((noticia, index) => /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
      NewsCard,
      {
        category: categoria ? categoria : noticia == null ? void 0 : noticia.categoria,
        title: (noticia == null ? void 0 : noticia.titulo2) ? noticia == null ? void 0 : noticia.titulo2 : noticia == null ? void 0 : noticia.titulo,
        iddado: noticia.id,
        description: noticia.descripcion,
        imageUrl: `${bucketUrl}/${noticia.imagen}`,
        accentColor: getBackgroundColor(categoria),
        slug: noticia.slug
      }
    ) }, index)) })
  ] });
}
export {
  NoticiasGuardadas as default
};
