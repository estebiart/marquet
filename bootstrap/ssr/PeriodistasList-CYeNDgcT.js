import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Head, Link } from "@inertiajs/react";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import { b as bucketUrl } from "./utils-ErVxQVks.js";
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
const PeriodistasList = () => {
  const { periodistas = [] } = usePage().props;
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Periodistas" }),
    /* @__PURE__ */ jsx("div", { className: "w-full min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-10 mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center", children: "Periodistas de minuto60" }),
      !periodistas || periodistas.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600", children: "No hay periodistas para mostrar." }) : /* @__PURE__ */ jsx("ul", { className: "grid gap-6 md:grid-cols-2", children: periodistas.map((p) => /* @__PURE__ */ jsx("li", { className: "bg-white/70 backdrop-blur rounded-xl border border-white/40 shadow p-4", children: /* @__PURE__ */ jsxs(
        Link,
        {
          href: p.slug ? `/periodista/${p.slug}` : "#",
          className: "flex items-center gap-4 hover:text-rose-600",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: p.perfil ? `${bucketUrl}/${p.perfil}` : "/img/periodista_default.webp",
                alt: p.name,
                loading: "lazy",
                className: "w-16 h-16 object-cover rounded-full border-2 border-gray-200 shrink-0"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold truncate", children: p.name }),
              p.bio && /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm overflow-hidden text-ellipsis", children: p.bio })
            ] })
          ]
        }
      ) }, p.id)) })
    ] }) })
  ] });
};
export {
  PeriodistasList as default
};
