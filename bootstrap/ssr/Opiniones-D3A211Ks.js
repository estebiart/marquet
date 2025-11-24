import { jsx, jsxs } from "react/jsx-runtime";
import { b as bucketUrl } from "./utils-ErVxQVks.js";
import { router } from "@inertiajs/react";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import { C as CategorySection } from "./CategorySection-DmPqgZ0L.js";
import "clsx";
import "react";
import "axios";
import "sweetalert2";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "lucide-react";
import "framer-motion";
import "aos";
const Opinion = ({ opiniones }) => {
  const handleClick = (slug) => {
    router.visit(`/opinion/${slug}`);
  };
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(
    CategorySection,
    {
      title: "Opinión",
      color: "bg-opinion",
      bgcolor: "bg-white",
      children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 p-4", children: opiniones.map((opinion) => {
        var _a, _b, _c;
        return /* @__PURE__ */ jsx(
          "div",
          {
            onClick: () => handleClick(opinion.slug),
            className: "cursor-pointer border-b border-gray-50400",
            children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold mb-2", children: opinion.titulo }),
              /* @__PURE__ */ jsx("p", { children: opinion.descripcion }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `${bucketUrl}/${(opinion == null ? void 0 : opinion.autor_foto) || ((_a = opinion == null ? void 0 : opinion.author) == null ? void 0 : _a.perfil) || "img/periodista_default.webp"}`,
                    alt: (opinion == null ? void 0 : opinion.autor_nombre_publico) || ((_b = opinion == null ? void 0 : opinion.author) == null ? void 0 : _b.name) || "Autor",
                    className: "w-10 h-10 rounded-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: (opinion == null ? void 0 : opinion.autor_nombre_publico) || ((_c = opinion == null ? void 0 : opinion.author) == null ? void 0 : _c.name) || "Autor Desconocido" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: new Date(opinion.fecha_publicacion).toLocaleDateString() })
                ] })
              ] })
            ] })
          },
          opinion == null ? void 0 : opinion.titulo
        );
      }) })
    }
  ) });
};
export {
  Opinion as default
};
