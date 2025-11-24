import { jsx, jsxs } from "react/jsx-runtime";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import { motion } from "framer-motion";
import "@inertiajs/react";
import "react";
import "axios";
import "sweetalert2";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "clsx";
import "lucide-react";
import "aos";
const Patrocinio = () => {
  const gifs = [
    "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif",
    "https://media.giphy.com/media/l0HlQ7LRal8Rb8i3O/giphy.gif",
    "https://media.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif",
    "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    "https://media.giphy.com/media/3o6Zt8zb1P4rXKJ0i8/giphy.gif",
    "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
    "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif",
    "https://media.giphy.com/media/3o6ZsYm5RBkbbX5dRe/giphy.gif",
    "https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif",
    "https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif"
  ];
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("div", { className: "py-16 px-6 max-w-7xl mx-auto space-y-16", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center space-y-6",
        initial: { opacity: 0, y: -40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl font-extrabold text-gray-900", children: "Nuestros Patrocinadores" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Gracias al apoyo de nuestros patrocinadores, logramos impulsar proyectos innovadores y generar experiencias únicas para nuestra comunidad. 🚀" }),
          /* @__PURE__ */ jsx(
            motion.img,
            {
              src: "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif",
              alt: "Publicidad animada",
              className: "mx-auto rounded-xl shadow-lg max-h-64",
              initial: { scale: 0.8, opacity: 0 },
              whileInView: { scale: 1, opacity: 1 },
              transition: { duration: 0.6 },
              viewport: { once: true }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Marcas que confían en nosotros" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6", children: gifs.map((gif, idx) => /* @__PURE__ */ jsx(
        motion.div,
        {
          className: `rounded-2xl overflow-hidden shadow-lg bg-white 
                  ${idx % 3 === 0 ? "col-span-2 row-span-2" : ""}`,
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: idx * 0.1 },
          viewport: { once: true, amount: 0.3 },
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: gif,
              alt: `Patrocinio ${idx + 1}`,
              className: "w-full h-full object-cover"
            }
          )
        },
        idx
      )) })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "grid md:grid-cols-2 gap-10 items-center",
        initial: { opacity: 0, x: -80 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-semibold", children: "¿Por qué patrocinar con nosotros?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Ofrecemos una plataforma única para que tu marca llegue a miles de personas, con visibilidad en proyectos, eventos y medios digitales. Tu patrocinio no es solo publicidad, es formar parte de algo grande." }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-gray-700", children: [
              /* @__PURE__ */ jsx("li", { children: "Mayor visibilidad de tu marca" }),
              /* @__PURE__ */ jsx("li", { children: "Alianzas estratégicas" }),
              /* @__PURE__ */ jsx("li", { children: "Impacto positivo en la comunidad" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            motion.img,
            {
              src: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
              alt: "Gif publicitario",
              className: "rounded-2xl shadow-lg",
              initial: { scale: 0.8, opacity: 0 },
              whileInView: { scale: 1, opacity: 1 },
              transition: { duration: 0.7 },
              viewport: { once: true }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center py-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl text-white",
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.9 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "¡Conviértete en patrocinador!" }),
          /* @__PURE__ */ jsx("p", { className: "max-w-2xl mx-auto mb-6", children: "Tu marca puede estar aquí, llegando a miles de personas y destacándose en cada evento." }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contacto",
              className: "bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition",
              children: "Contáctanos"
            }
          )
        ]
      }
    )
  ] }) });
};
export {
  Patrocinio as default
};
