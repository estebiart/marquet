import { jsx } from "react/jsx-runtime";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import { b as bucketUrl } from "./utils-ErVxQVks.js";
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
const Multimedia = ({ imagenes }) => {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-32", children: imagenes.map((ruta, idx) => /* @__PURE__ */ jsx(
    "a",
    {
      href: `${bucketUrl}/${ruta}`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "cursor-pointer",
      children: /* @__PURE__ */ jsx(
        "img",
        {
          loading: "lazy",
          src: `${bucketUrl}/${ruta}`,
          alt: `imagen-${idx}`,
          className: "w-full rounded shadow hover:opacity-80 transition"
        }
      )
    },
    idx
  )) }) });
};
export {
  Multimedia as default
};
