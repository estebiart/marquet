import { jsx, jsxs } from "react/jsx-runtime";
import { L as Layout } from "./Layout-CjpJ7LUY.js";
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
const TermsConditions = ({ content }) => {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4", children: "Términos y Condiciones" }),
    /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: content } })
  ] }) });
};
export {
  TermsConditions as default
};
