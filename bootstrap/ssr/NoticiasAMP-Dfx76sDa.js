import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Helmet } from "react-helmet";
import { I as InternaSection } from "./InternaSection-C2TxGTzk.js";
import { b as bucketUrl } from "./utils-ErVxQVks.js";
import "@inertiajs/react";
import "clsx";
function LayoutAMP({ children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("html", { lang: "es" }),
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("title", { children: "AMP Noticias" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width,minimum-scale=1,initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.minuto60.com" }),
      /* @__PURE__ */ jsx("script", { async: true, src: "https://cdn.ampproject.org/v0.js" }),
      /* @__PURE__ */ jsx("style", { "amp-boilerplate": true, children: `
          body {
            -webkit-animation: -amp-start 8s steps(1,end) 0s 1 normal both;
            -moz-animation: -amp-start 8s steps(1,end) 0s 1 normal both;
            -ms-animation: -amp-start 8s steps(1,end) 0s 1 normal both;
            animation: -amp-start 8s steps(1,end) 0s 1 normal both;
          }
          @-webkit-keyframes -amp-start { from { visibility: hidden } to { visibility: visible } }
          @-moz-keyframes -amp-start { from { visibility: hidden } to { visibility: visible } }
          @-ms-keyframes -amp-start { from { visibility: hidden } to { visibility: visible } }
          @keyframes -amp-start { from { visibility: hidden } to { visibility: visible } }
        ` }),
      /* @__PURE__ */ jsx("noscript", { children: /* @__PURE__ */ jsx("style", { "amp-boilerplate": true, children: `
            body {
              -webkit-animation: none;
              -moz-animation: none;
              -ms-animation: none;
              animation: none;
              visibility: visible;
            }
          ` }) }),
      /* @__PURE__ */ jsx("style", { "amp-custom": true, children: `
          body { font-family: sans-serif; padding: 0; margin: 0; background: #fff; color: #111; }
          header, footer, main { padding: 16px; max-width: 1280px; margin: 0 auto; }
          h1 { font-size: 2rem; margin-bottom: 0.5rem; }
          .rounded-full { border-radius: 9999px; }
          .rounded-3xl { border-radius: 1.5rem; }
          .overflow-hidden { overflow: hidden; }
          .text-gray-600 { color: #4B5563; }
          .text-blue-600 { color: #2563EB; }
          .mt-4 { margin-top: 1rem; }
          .mt-6 { margin-top: 1.5rem; }
          .flex { display: flex; }
          .gap-4 { gap: 1rem; }
          .items-center { align-items: center; }
          .text-center { text-align: center; }
        ` })
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("div", { className: "text-center bg-purple-700 text-white p-4", children: [
        /* @__PURE__ */ jsx("amp-img", { src: "/img/logo-min-60.png", width: "200", height: "50", alt: "Logo" }),
        /* @__PURE__ */ jsxs("nav", { className: "mt-4", children: [
          /* @__PURE__ */ jsx("a", { href: "/noticias/categoria?category=nacional", children: "Nacional" }),
          " |",
          /* @__PURE__ */ jsx("a", { href: "/noticias/categoria?category=internacional", children: "Internacional" }),
          " |",
          /* @__PURE__ */ jsx("a", { href: "/noticias/categoria?category=deportes", children: "Deportes" }),
          " |",
          /* @__PURE__ */ jsx("a", { href: "/noticias/categoria?category=entretenimiento", children: "Entretenimiento" }),
          " |",
          /* @__PURE__ */ jsx("a", { href: "/noticias/categoria?category=investigación", children: "Investigación" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("main", { children }),
      /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", { className: "text-center bg-cyan-700 text-white p-4", children: [
        /* @__PURE__ */ jsx("h2", { children: "Síguenos" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 justify-center mt-2", children: [
          /* @__PURE__ */ jsx("a", { href: "https://facebook.com", target: "_blank", children: /* @__PURE__ */ jsx("amp-img", { src: "/img/facebook.png", width: "40", height: "40", alt: "Facebook" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com", target: "_blank", children: /* @__PURE__ */ jsx("amp-img", { src: "/img/instagram.png", width: "40", height: "40", alt: "Instagram" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://tiktok.com", target: "_blank", children: /* @__PURE__ */ jsx("amp-img", { src: "/img/tiktok.png", width: "40", height: "40", alt: "TikTok" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://twitter.com", target: "_blank", children: /* @__PURE__ */ jsx("amp-img", { src: "/img/x.png", width: "40", height: "40", alt: "Twitter" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://youtube.com", target: "_blank", children: /* @__PURE__ */ jsx("amp-img", { src: "/img/youtube.png", width: "40", height: "40", alt: "YouTube" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://linkedin.com", target: "_blank", children: /* @__PURE__ */ jsx("amp-img", { src: "/img/linkedin.png", width: "40", height: "40", alt: "LinkedIn" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4", children: "© Todos los derechos reservados" })
      ] }) })
    ] })
  ] });
}
const NoticiasAMP = ({ noticia, topweek }) => {
  var _a;
  if (!noticia) return /* @__PURE__ */ jsx(LayoutAMP, { children: /* @__PURE__ */ jsx("p", { children: "Cargando..." }) });
  const category = ((_a = noticia.categorias[0]) == null ? void 0 : _a.nombre) || "Noticias";
  const formattedDate = (date) => {
    const raw = format(new Date(date), "d 'de' MMMM 'de' yyyy - h:mm a", { locale: es });
    return raw.replace("AM", "a.m.").replace("PM", "p. m.");
  };
  return /* @__PURE__ */ jsxs(LayoutAMP, { children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h1", { children: noticia.titulo }),
      /* @__PURE__ */ jsx("p", { children: formattedDate(noticia.created_at) }),
      /* @__PURE__ */ jsx("p", { children: noticia.descripcion })
    ] }),
    /* @__PURE__ */ jsxs("nav", { children: [
      /* @__PURE__ */ jsx("a", { href: "/", children: "Inicio" }),
      " / ",
      category
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx(
        "amp-img",
        {
          loading: "lazy",
          src: `${bucketUrl}/${noticia.author.perfil}`,
          width: "64",
          height: "64",
          layout: "fixed",
          alt: `Perfil de ${noticia.author.name}`,
          className: "rounded"
        }
      ),
      /* @__PURE__ */ jsxs("p", { children: [
        "Por ",
        /* @__PURE__ */ jsx("a", { href: `/periodista/${noticia.author.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")}`, children: noticia.author.name })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("article", { children: /* @__PURE__ */ jsx("p", { children: noticia.contenido ? noticia.contenido.replace(/<[^>]+>/g, "") : "" }) }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(InternaSection, { noticias: topweek }) })
  ] });
};
export {
  NoticiasAMP as default
};
