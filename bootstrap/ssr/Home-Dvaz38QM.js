import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, createContext, useEffect } from "react";
import { N as NewsCard } from "./NewsCard-Lu698CMQ.js";
import { C as CategorySection } from "./CategorySection-DmPqgZ0L.js";
import { Link, router, usePage } from "@inertiajs/react";
import { L as Layout, a as LiveStream } from "./Layout-7cMQKDgR.js";
import { b as bucketUrl, g as getBackgroundColor, c as getColor } from "./utils-ErVxQVks.js";
import { I as IsMobile } from "./Ismobile-DoDsVIou.js";
import "axios";
import "sweetalert2";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "clsx";
import "lucide-react";
import "framer-motion";
import "aos";
function extractVideoId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.searchParams.get("v")) return parsed.searchParams.get("v");
    const match = parsed.pathname.match(/\/embed\/([a-zA-Z0-9_-]+)/);
    if (match) return match[1];
    return null;
  } catch {
    return null;
  }
}
const LazyYoutube = ({ videoUrl, title }) => {
  const [loaded, setLoaded] = useState(false);
  const videoId = extractVideoId(videoUrl);
  if (!videoId) return null;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "relative w-full aspect-video bg-black overflow-hidden", children: loaded ? /* @__PURE__ */ jsx(
      "iframe",
      {
        className: "w-full h-full",
        src: embedUrl,
        title: "YouTube video player",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowFullScreen: true,
        loading: "lazy"
      }
    ) : /* @__PURE__ */ jsxs("div", { className: "w-full h-full relative cursor-pointer", onClick: () => setLoaded(true), children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: thumbnail,
          alt: "Miniatura del video",
          className: "w-full h-full object-cover",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("button", { className: "text-white bg-black/60 rounded-full text-4xl p-4", children: "▶️" }) })
    ] }) }),
    title && /* @__PURE__ */ jsx("h4", { className: "mt-3 text-base font-semibold text-gray-900 dark:text-white text-center", children: title })
  ] });
};
const DestacadosSection = ({ destacado1, destacado2, destacado3, destacado4, destacado5, video, p1, p2, n1, n2, latestnewspublished, title_video }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T;
  return /* @__PURE__ */ jsx(CategorySection, { title: "", color: "bg-black", bgcolor: "bg-white", children: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: " grilla flex flex-col sm:grid sm:grid-cols-3  gap-4 md:mb-4", children: [
    destacado1 && destacado2 && destacado3 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "  sm:col-span-2 sm:row-start-1", children: /* @__PURE__ */ jsx(
        NewsCard,
        {
          author: destacado1 == null ? void 0 : destacado1.author,
          iddado: destacado1 == null ? void 0 : destacado1.id,
          category: (_a = destacado1 == null ? void 0 : destacado1.categorias[0]) == null ? void 0 : _a.descripcion,
          title: (destacado1 == null ? void 0 : destacado1.titulo2) ? destacado1 == null ? void 0 : destacado1.titulo2 : destacado1 == null ? void 0 : destacado1.titulo,
          description: destacado1 == null ? void 0 : destacado1.descripcion,
          imageUrl: `${bucketUrl}/${(destacado1 == null ? void 0 : destacado1.imagen) || (destacado1 == null ? void 0 : destacado1.imagen_video)}`,
          showPlayIcon: !(destacado1 == null ? void 0 : destacado1.imagen) && !!(destacado1 == null ? void 0 : destacado1.imagen_video),
          imageUrlMovil: `${bucketUrl}/${(destacado1 == null ? void 0 : destacado1.imagen_movil) || (destacado1 == null ? void 0 : destacado1.imagen) || (destacado1 == null ? void 0 : destacado1.imagen_video)} `,
          accentColor: getBackgroundColor((_b = destacado1 == null ? void 0 : destacado1.categorias[0]) == null ? void 0 : _b.nombre),
          title_imagen: destacado1 == null ? void 0 : destacado1.title_imagen,
          mobileVersion: "horizontal",
          variant: "banner",
          subvariant: "principal",
          textColor: "text-white"
        }
      ) }),
      p1 && p1.length > 0 && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          loading: "lazy",
          src: `${bucketUrl}/${p1}`,
          className: "w-full h-full object-cover",
          alt: destacado1 == null ? void 0 : destacado1.titulo2
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "w-full h-full object-cover", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col gap-4",
          children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              NewsCard,
              {
                author: destacado2 == null ? void 0 : destacado2.author,
                iddado: destacado2 == null ? void 0 : destacado2.id,
                category: (_c = destacado2 == null ? void 0 : destacado2.categorias[0]) == null ? void 0 : _c.descripcion,
                title: (destacado2 == null ? void 0 : destacado2.titulo2) ? destacado2 == null ? void 0 : destacado2.titulo2 : destacado2 == null ? void 0 : destacado2.titulo,
                description: "",
                imageUrl: `${bucketUrl}/${(destacado2 == null ? void 0 : destacado2.imagen) || (destacado2 == null ? void 0 : destacado2.imagen_video)}`,
                showPlayIcon: !(destacado2 == null ? void 0 : destacado2.imagen) && !!(destacado2 == null ? void 0 : destacado2.imagen_video),
                imageUrlMovil: `${bucketUrl}/${(destacado2 == null ? void 0 : destacado2.imagen_movil) || (destacado2 == null ? void 0 : destacado2.imagen) || (destacado2 == null ? void 0 : destacado2.imagen_video)}`,
                accentColor: getBackgroundColor((_d = destacado2.categorias[0]) == null ? void 0 : _d.nombre),
                title_imagen: destacado2 == null ? void 0 : destacado2.title_imagen,
                mobileVersion: "horizontal",
                variant: "banner",
                textColor: "text-white",
                subvariant: "fetchpriority"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              NewsCard,
              {
                author: destacado3 == null ? void 0 : destacado3.author,
                iddado: destacado3 == null ? void 0 : destacado3.id,
                category: (_e = destacado3 == null ? void 0 : destacado3.categorias[0]) == null ? void 0 : _e.descripcion,
                title: (destacado3 == null ? void 0 : destacado3.titulo2) ? destacado3 == null ? void 0 : destacado3.titulo2 : destacado3 == null ? void 0 : destacado3.titulo,
                description: "",
                imageUrl: `${bucketUrl}/${(destacado3 == null ? void 0 : destacado3.imagen) || (destacado3 == null ? void 0 : destacado3.imagen_video)}`,
                showPlayIcon: !(destacado3 == null ? void 0 : destacado3.imagen) && !!(destacado3 == null ? void 0 : destacado3.imagen_video),
                imageUrlMovil: `${bucketUrl}/${(destacado3 == null ? void 0 : destacado3.imagen_movil) || (destacado3 == null ? void 0 : destacado3.imagen) || (destacado3 == null ? void 0 : destacado3.imagen_video)}`,
                accentColor: getBackgroundColor((_f = destacado3.categorias[0]) == null ? void 0 : _f.nombre),
                title_imagen: destacado3 == null ? void 0 : destacado3.title_imagen,
                mobileVersion: "horizontal",
                variant: "banner",
                textColor: "text-white"
              }
            ) })
          ]
        }
      ) }),
      destacado4 && /* @__PURE__ */ jsx("div", { className: "sm:col-span-1 sm:row-start-2 sm:col-start-2", children: /* @__PURE__ */ jsx(
        NewsCard,
        {
          author: destacado4 == null ? void 0 : destacado4.author,
          iddado: destacado4 == null ? void 0 : destacado4.id,
          category: (_g = destacado4 == null ? void 0 : destacado4.categorias[0]) == null ? void 0 : _g.descripcion,
          title: (destacado4 == null ? void 0 : destacado4.titulo2) ? destacado4 == null ? void 0 : destacado4.titulo2 : destacado4 == null ? void 0 : destacado4.titulo,
          description: destacado4 == null ? void 0 : destacado4.descripcion,
          imageUrl: `${bucketUrl}/${(destacado4 == null ? void 0 : destacado4.imagen) || (destacado4 == null ? void 0 : destacado4.imagen_video)}`,
          showPlayIcon: !(destacado4 == null ? void 0 : destacado4.imagen) && !!(destacado4 == null ? void 0 : destacado4.imagen_video),
          imageUrlMovil: `${bucketUrl}/${(destacado4 == null ? void 0 : destacado4.imagen_movil) || (destacado4 == null ? void 0 : destacado4.imagen) || (destacado4 == null ? void 0 : destacado4.imagen_video)}`,
          accentColor: getBackgroundColor((_h = destacado4 == null ? void 0 : destacado4.categorias[0]) == null ? void 0 : _h.nombre),
          title_imagen: destacado4 == null ? void 0 : destacado4.title_imagen,
          mobileVersion: "horizontal",
          variant: "banner",
          textColor: "text-white"
        }
      ) }),
      destacado5 && /* @__PURE__ */ jsx("div", { className: "sm:row-start-2 sm:col-start-1", children: /* @__PURE__ */ jsx(
        NewsCard,
        {
          author: destacado5 == null ? void 0 : destacado5.author,
          iddado: destacado5 == null ? void 0 : destacado5.id,
          category: (_i = destacado5 == null ? void 0 : destacado5.categorias[0]) == null ? void 0 : _i.descripcion,
          title: (destacado5 == null ? void 0 : destacado5.titulo2) ? destacado5 == null ? void 0 : destacado5.titulo2 : destacado5 == null ? void 0 : destacado5.titulo,
          description: destacado5 == null ? void 0 : destacado5.descripcion,
          imageUrl: `${bucketUrl}/${(destacado5 == null ? void 0 : destacado5.imagen) || (destacado5 == null ? void 0 : destacado5.imagen_video)}`,
          showPlayIcon: !(destacado5 == null ? void 0 : destacado5.imagen) && !!(destacado5 == null ? void 0 : destacado5.imagen_video),
          imageUrlMovil: `${bucketUrl}/${(destacado5 == null ? void 0 : destacado5.imagen_movil) || (destacado5 == null ? void 0 : destacado5.imagen) || (destacado5 == null ? void 0 : destacado5.imagen_video)}`,
          accentColor: getBackgroundColor((_j = destacado5 == null ? void 0 : destacado5.categorias[0]) == null ? void 0 : _j.nombre),
          title_imagen: destacado5 == null ? void 0 : destacado5.title_imagen,
          mobileVersion: "horizontal",
          variant: "banner",
          textColor: "text-white"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: " sm:col-start-3", children: n1 && n1.length > 0 && /* @__PURE__ */ jsx(
      NewsCard,
      {
        author: (_k = n1[0]) == null ? void 0 : _k.author,
        iddado: (_l = n1[0]) == null ? void 0 : _l.id,
        category: (_n = (_m = n1[0]) == null ? void 0 : _m.categorias[0]) == null ? void 0 : _n.descripcion,
        title: ((_o = n1[0]) == null ? void 0 : _o.titulo2) ? (_p = n1[0]) == null ? void 0 : _p.titulo2 : (_q = n1[0]) == null ? void 0 : _q.titulo,
        description: (_r = n1[0]) == null ? void 0 : _r.descripcion,
        imageUrl: `${bucketUrl}/${((_s = n1[0]) == null ? void 0 : _s.imagen) || ((_t = n1[0]) == null ? void 0 : _t.imagen_video)}`,
        showPlayIcon: !((_u = n1[0]) == null ? void 0 : _u.imagen) && !!((_v = n1[0]) == null ? void 0 : _v.imagen_video),
        imageUrlMovil: `${bucketUrl}/${((_w = n1[0]) == null ? void 0 : _w.imagen_movil) || ((_x = n1[0]) == null ? void 0 : _x.imagen) || ((_y = n1[0]) == null ? void 0 : _y.imagen_video)}`,
        accentColor: getBackgroundColor((_A = (_z = n1[0]) == null ? void 0 : _z.categorias[0]) == null ? void 0 : _A.nombre),
        title_imagen: (_B = n1[0]) == null ? void 0 : _B.title_imagen,
        mobileVersion: "horizontal",
        variant: "banner",
        textColor: "text-white"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "relative sm:col-span-2  mb-20 md:mb-0 overflow-hidden", children: video && /* @__PURE__ */ jsx(LazyYoutube, { videoUrl: video, title: title_video || "" }) }),
    /* @__PURE__ */ jsxs("div", { className: "sm:col-span-1 overflow-hidden", children: [
      p2 && p2.length > 0 && /* @__PURE__ */ jsx(
        "img",
        {
          loading: "lazy",
          src: `${bucketUrl}/${p2}`,
          className: "w-[300px] h-[250px] object-cover",
          alt: destacado1 == null ? void 0 : destacado1.titulo2
        }
      ),
      n2 && n2.length > 0 && /* @__PURE__ */ jsx("div", { className: "w-[300px] md:h-[250px]", children: /* @__PURE__ */ jsx(
        NewsCard,
        {
          author: (_C = n2[0]) == null ? void 0 : _C.author,
          iddado: (_D = n2[0]) == null ? void 0 : _D.id,
          category: (_F = (_E = n2[0]) == null ? void 0 : _E.categorias[0]) == null ? void 0 : _F.descripcion,
          title: ((_G = n2[0]) == null ? void 0 : _G.titulo2) ? (_H = n2[0]) == null ? void 0 : _H.titulo2 : (_I = n2[0]) == null ? void 0 : _I.titulo,
          description: (_J = n2[0]) == null ? void 0 : _J.descripcion,
          imageUrl: `${bucketUrl}/${((_K = n2[0]) == null ? void 0 : _K.imagen) || ((_L = n2[0]) == null ? void 0 : _L.imagen_video)}`,
          showPlayIcon: !((_M = n2[0]) == null ? void 0 : _M.imagen) && !!((_N = n2[0]) == null ? void 0 : _N.imagen_video),
          imageUrlMovil: `${bucketUrl}/${((_O = n2[0]) == null ? void 0 : _O.imagen_movil) || ((_P = n2[0]) == null ? void 0 : _P.imagen) || ((_Q = n2[0]) == null ? void 0 : _Q.imagen_video)}`,
          accentColor: getBackgroundColor((_S = (_R = n2[0]) == null ? void 0 : _R.categorias[0]) == null ? void 0 : _S.nombre),
          title_imagen: (_T = n2[0]) == null ? void 0 : _T.title_imagen,
          mobileVersion: "horizontal",
          variant: "banner",
          textColor: "text-white"
        }
      ) })
    ] })
  ] }) }) });
};
const FeaturedNews = ({ noticias, title }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const isMobile = IsMobile();
  return /* @__PURE__ */ jsx(CategorySection, { title: "", color: "", bgcolor: "bg-gray-100", children: noticias.length >= 4 && /* @__PURE__ */ jsxs("section", { className: "mx-auto bg-gray-100", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-center text-xl font-bold mb-6", children: "LO MÁS DESTACADO DE LA SEMANA" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 p-[30px]", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-3 bg-beige rounded-2xl", children: /* @__PURE__ */ jsx(
        NewsCard,
        {
          author: (_a = noticias[0]) == null ? void 0 : _a.author,
          iddado: (_b = noticias[0]) == null ? void 0 : _b.id,
          category: (_c = noticias[0].categorias[0]) == null ? void 0 : _c.descripcion,
          title: ((_d = noticias[0]) == null ? void 0 : _d.titulo2) || ((_e = noticias[0]) == null ? void 0 : _e.titulo),
          description: (_f = noticias[0]) == null ? void 0 : _f.descripcion,
          imageUrl: `${bucketUrl}/${((_g = noticias[0]) == null ? void 0 : _g.imagen) || ((_h = noticias[0]) == null ? void 0 : _h.imagen_video)}`,
          imageUrlMovil: `${bucketUrl}/${((_i = noticias[0]) == null ? void 0 : _i.imagen_movil) || ((_j = noticias[0]) == null ? void 0 : _j.imagen)}`,
          mobileVersion: "horizontal",
          accentColor: getBackgroundColor((_k = noticias[0].categorias[0]) == null ? void 0 : _k.nombre),
          title_imagen: (_l = noticias[0]) == null ? void 0 : _l.title_imagen,
          subvariant: isMobile ? void 0 : "stretch",
          variant: "banner",
          textColor: "text-white"
        }
      ) }),
      [1, 2, 3].map((i) => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m;
        return /* @__PURE__ */ jsx("div", { className: "bg-beige rounded-2xl", children: /* @__PURE__ */ jsx(
          NewsCard,
          {
            author: (_a2 = noticias[i]) == null ? void 0 : _a2.author,
            iddado: (_b2 = noticias[i]) == null ? void 0 : _b2.id,
            category: (_c2 = noticias[i].categorias[0]) == null ? void 0 : _c2.descripcion,
            title: ((_d2 = noticias[i]) == null ? void 0 : _d2.titulo2) || ((_e2 = noticias[i]) == null ? void 0 : _e2.titulo),
            description: (_f2 = noticias[i]) == null ? void 0 : _f2.descripcion,
            imageUrl: `${bucketUrl}/${((_g2 = noticias[i]) == null ? void 0 : _g2.imagen) || ((_h2 = noticias[i]) == null ? void 0 : _h2.imagen_video)}`,
            imageUrlMovil: `${bucketUrl}/${((_i2 = noticias[i]) == null ? void 0 : _i2.imagen_movil) || ((_j2 = noticias[i]) == null ? void 0 : _j2.imagen)}`,
            mobileVersion: "horizontal",
            accentColor: getBackgroundColor((_k2 = noticias[i].categorias[0]) == null ? void 0 : _k2.nombre),
            title_imagen: (_l2 = noticias[i]) == null ? void 0 : _l2.title_imagen,
            variant: "banner",
            textColor: "text-white"
          }
        ) }, (_m = noticias[i]) == null ? void 0 : _m.id);
      })
    ] })
  ] }) });
};
const SingleNewCard = ({ titulo, descripcion, url, imagen_url, imagen_movil, author, categoria, title_imagen, slug, id }) => {
  const buildUrl = (categoria2, slug2, id2) => {
    if (categoria2 && slug2 && id2 !== void 0) {
      return `/${categoria2}/${slug2}/${id2}`;
    }
    return "#";
  };
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden border-gray-200", children: /* @__PURE__ */ jsxs(Link, { href: url ?? buildUrl(categoria, slug, id), className: "block", children: [
    (imagen_url || imagen_movil) && /* @__PURE__ */ jsx("div", { className: "w-full h-60", children: /* @__PURE__ */ jsxs("picture", { children: [
      imagen_movil && /* @__PURE__ */ jsx(
        "source",
        {
          media: "(max-width: 768px)",
          srcSet: `${bucketUrl}/${imagen_movil}`
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          loading: "lazy",
          src: `${bucketUrl}/${imagen_url}`,
          alt: titulo || "Imagen publicitaria",
          className: "object-cover w-full h-full",
          title: title_imagen || titulo
        }
      )
    ] }) }),
    (titulo || descripcion) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: `h-[65px] w-[4px] mt-1 ${getBackgroundColor(categoria)} absolute` }),
      titulo && /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 pl-[15px] mt-[10px]", children: titulo }),
      author && /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: author.name }),
      descripcion && /* @__PURE__ */ jsx("p", { className: "mt-2 line-clamp-4 text-gray-600", children: descripcion })
    ] })
  ] }) });
};
const HalfBanner = ({ imageUrl, destinationUrl, shouldRender }) => {
  const width = 300;
  const height = 600;
  const aspectRatio = `${width} / ${height}`;
  if (!shouldRender || !imageUrl || !destinationUrl) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "w-full px-4 mt-2 overflow-hidden opacity-100 max-h-[650px] mx-auto hidden md:block",
      style: {
        maxWidth: `${width}px`
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-full h-auto",
          style: {
            aspectRatio
          },
          children: /* @__PURE__ */ jsx("a", { href: destinationUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: imageUrl,
              alt: "Publicidad",
              className: "w-full h-full object-contain"
            }
          ) })
        }
      )
    }
  );
};
const bannerImageUrl = bucketUrl + "/publicidad/DK_HALF+PAGE300x600.jpg";
const bannerDestinationUrl = " https://www.eep.com.co/es/";
function SectionGrilla({ item, noticias, topweek }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  return /* @__PURE__ */ jsx("section", { className: "p-[48px] md:p-4 max-w-screen-xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: noticias.map((noticia, idx) => {
      var _a2, _b2;
      return /* @__PURE__ */ jsx("div", { className: "flex flex-col border-b border-gray-300 pb-2 mb-2", children: /* @__PURE__ */ jsxs(Link, { href: `/${(_a2 = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _a2.nombre}/${noticia.slug}/${noticia.id}`, className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `${bucketUrl}/${noticia.imagen_video || noticia.imagen}`,
              alt: noticia.titulo2 ? noticia.titulo2 : noticia.titulo,
              loading: "lazy",
              className: "aspect-video block w-full object-cover"
            }
          ),
          !noticia.imagen && !!noticia.imagen_video && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxs("span", { className: "relative inline-flex items-center justify-center", children: [
            /* @__PURE__ */ jsx("span", { className: "block rounded-full w-20 h-20 md:w-24 md:h-24 border-[3px] border-white/90" }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                focusable: "false",
                className: "absolute w-8 h-8 md:w-10 md:h-10 fill-white",
                children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7z" })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Video" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("h5", { className: "mt-2 font-medium text-gray-800 hover:text-[#ef0c52]", children: noticia.titulo2 ? noticia.titulo2 : noticia.titulo }),
        /* @__PURE__ */ jsxs("p", { className: `text-[14px] md:text-xs pt-4 !text-[${getColor((_b2 = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _b2.nombre)}]`, children: [
          "Por ",
          noticia.author.name
        ] })
      ] }) }, idx);
    }) }),
    /* @__PURE__ */ jsx("div", { children: item.tipo === "publicidad" ? /* @__PURE__ */ jsx(
      HalfBanner,
      {
        shouldRender: true,
        imageUrl: bannerImageUrl,
        destinationUrl: bannerDestinationUrl
      }
    ) : /* @__PURE__ */ jsx(
      SingleNewCard,
      {
        id: (_a = item == null ? void 0 : item.data) == null ? void 0 : _a.id,
        slug: (_b = item == null ? void 0 : item.data) == null ? void 0 : _b.slug,
        categoria: ((_e = (_d = (_c = item == null ? void 0 : item.data) == null ? void 0 : _c.categorias) == null ? void 0 : _d[0]) == null ? void 0 : _e.descripcion) || "",
        author: (_f = item == null ? void 0 : item.data) == null ? void 0 : _f.author,
        titulo: ((_g = item == null ? void 0 : item.data) == null ? void 0 : _g.titulo2) || ((_h = item == null ? void 0 : item.data) == null ? void 0 : _h.titulo),
        descripcion: (_i = item == null ? void 0 : item.data) == null ? void 0 : _i.descripcion,
        url: (_j = item == null ? void 0 : item.data) == null ? void 0 : _j.url,
        imagen_url: (item == null ? void 0 : item.tipo) === "noticia" ? (_k = item == null ? void 0 : item.data) == null ? void 0 : _k.imagen : (_l = item == null ? void 0 : item.data) == null ? void 0 : _l.imagen_url,
        imagen_movil: (item == null ? void 0 : item.tipo) === "noticia" ? (_m = item == null ? void 0 : item.data) == null ? void 0 : _m.imagen_movil : (_n = item == null ? void 0 : item.data) == null ? void 0 : _n.imagen_movil_url,
        title_imagen: (_o = item == null ? void 0 : item.data) == null ? void 0 : _o.title_imagen
      }
    ) })
  ] }) });
}
function RegionAccordion({
  cities: cities2,
  handleRegionChange
}) {
  const [selectedCity, setSelectedCity] = useState(null);
  const handleSelect = (city) => {
    setSelectedCity(city);
    handleRegionChange({ target: { value: city.name } });
  };
  return /* @__PURE__ */ jsxs("ul", { className: "mb-4 ", children: [
    /* @__PURE__ */ jsx("h4", { className: "py-2 text-lg font-bold text-white uppercase tracking-widest  border-b border-white", children: "Regiones" }),
    cities2.map((c) => /* @__PURE__ */ jsx(
      "li",
      {
        onClick: () => handleSelect(c),
        className: `py-2 cursor-pointer text-white tracking-wider hover:text-white hover:border-b-2 hover:border-white ${(selectedCity == null ? void 0 : selectedCity.name) === c.name ? "bg-gray-700" : ""}`,
        children: c.name
      },
      c.name
    ))
  ] });
}
createContext(void 0);
const cities = [
  { name: "Colombia", latitude: 0, longitude: 0 },
  { name: "Bogotá", latitude: 4.711, longitude: -74.0721 },
  { name: "Medellín", latitude: 6.2442, longitude: -75.5812 },
  { name: "Cali", latitude: 3.4516, longitude: -76.5319 },
  { name: "Barranquilla", latitude: 10.9685, longitude: -74.7813 },
  { name: "Cartagena", latitude: 10.391, longitude: -75.4794 },
  { name: "Bucaramanga", latitude: 7.1193, longitude: -73.1227 },
  { name: "Cúcuta", latitude: 7.8939, longitude: -72.5078 },
  { name: "Pereira", latitude: 4.8087, longitude: -75.6906 },
  { name: "Santa Marta", latitude: 11.2408, longitude: -74.199 },
  { name: "Ibagué", latitude: 4.4389, longitude: -75.2322 },
  { name: "Villavicencio", latitude: 4.1514, longitude: -73.6379 },
  { name: "Pasto", latitude: 1.2136, longitude: -77.2811 },
  { name: "Manizales", latitude: 5.0689, longitude: -75.5174 },
  { name: "Montería", latitude: 8.7575, longitude: -75.8831 },
  { name: "Armenia", latitude: 4.5386, longitude: -75.672 }
];
const Contador365 = ({ href = "https://www.minuto60.com/elecciones-2026", newTab = true }) => {
  const [diasRestantes, setDiasRestantes] = useState(0);
  useEffect(() => {
    const hoy = /* @__PURE__ */ new Date();
    hoy.setHours(0, 0, 0, 0);
    const fechaFinal = /* @__PURE__ */ new Date("2026-08-07");
    fechaFinal.setHours(0, 0, 0, 0);
    const diferenciaTiempo = fechaFinal.getTime() - hoy.getTime();
    const dias = Math.ceil(diferenciaTiempo / (1e3 * 60 * 60 * 24));
    setDiasRestantes(dias >= 0 ? dias : 0);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative mx-auto overflow-hidden md:mt-8 mt-4", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://devminuto.s3.us-east-2.amazonaws.com/publicidad/banner+1500x150px_V2.1.gif",
        alt: "Publicidad",
        className: "w-full h-auto block",
        loading: "lazy",
        decoding: "async"
      }
    ),
    href && /* @__PURE__ */ jsx(
      "a",
      {
        href,
        target: newTab ? "_blank" : void 0,
        rel: newTab ? "noopener noreferrer" : void 0,
        "aria-label": "Abrir enlace del contador",
        className: "absolute inset-0 z-10 cursor-pointer"
      }
    )
  ] });
};
const Opinions = ({ opiniones }) => {
  const handleClick = (slug) => {
    router.visit(`/opinion/${slug}`);
  };
  return /* @__PURE__ */ jsxs("section", { className: "w-full mx-auto my-10 border-t border-b border-gray-200 px-10 sm:px-32", children: [
    /* @__PURE__ */ jsx("h4", { className: "text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-[#ef0c52] pl-3 mb-6 mt-4", children: "OPINIÓN" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "\n          grid gap-6 mb-10\n          grid-cols-1\n          sm:grid-cols-2\n          md:grid-cols-3\n          lg:grid-cols-5\n        ",
        children: opiniones.map((opinion) => {
          var _a, _b;
          return /* @__PURE__ */ jsxs(
            "article",
            {
              onClick: () => handleClick(opinion.slug),
              className: "\n              flex flex-col items-center text-center \n              p-4 shadow-sm \n              cursor-pointer\n            ",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    src: `${bucketUrl}/${(opinion == null ? void 0 : opinion.autor_foto) || ((_a = opinion == null ? void 0 : opinion.author) == null ? void 0 : _a.perfil) || "img/periodista_default.webp"}`,
                    alt: (opinion == null ? void 0 : opinion.autor_nombre_publico) || "Autor",
                    className: "w-20 h-20 rounded-full object-cover mb-3"
                  }
                ),
                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-lg text-gray-900 truncate w-full", children: opinion == null ? void 0 : opinion.titulo }),
                /* @__PURE__ */ jsx("p", { className: "italic text-sm text-gray-600", children: (opinion == null ? void 0 : opinion.autor_nombre_publico) || ((_b = opinion == null ? void 0 : opinion.author) == null ? void 0 : _b.name) || "Autor Desconocido" })
              ]
            },
            opinion.id
          );
        })
      }
    )
  ] });
};
const getDimensionsFromUrl$1 = (url) => {
  const match = url.match(/(\d+)x(\d+)\.(jpg|mp4|gif)$/);
  if (match && match.length >= 3) {
    return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
  }
  return { width: 300, height: 250 };
};
const isMediaVideo = (url) => {
  return url.endsWith(".mp4");
};
const MobileBanner = ({ imageUrl, destinationUrl, shouldRender }) => {
  if (!shouldRender || !imageUrl || !destinationUrl) {
    return null;
  }
  const { width, height } = getDimensionsFromUrl$1(imageUrl);
  const aspectRatio = `${width} / ${height}`;
  const maxHeight = height > 150 ? "max-h-[270px]" : "max-h-[120px]";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `w-full px-4 mt-2 overflow-hidden opacity-100 mx-auto md:hidden ${maxHeight}`,
      style: {
        maxWidth: `${width}px`
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-full h-auto",
          style: {
            aspectRatio
          },
          children: /* @__PURE__ */ jsx("a", { href: destinationUrl, target: "_blank", rel: "noopener noreferrer", children: isMediaVideo(imageUrl) ? /* @__PURE__ */ jsx(
            "video",
            {
              src: imageUrl,
              autoPlay: true,
              muted: true,
              loop: true,
              playsInline: true,
              className: "w-full h-full object-contain"
            }
          ) : /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: imageUrl,
              alt: "Publicidad",
              className: "w-full h-full object-contain"
            }
          ) })
        }
      )
    }
  );
};
const getDimensionsFromUrl = (url) => {
  const match = url.match(/(\d+)x(\d+)\.jpg$/);
  if (match && match.length === 3) {
    return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
  }
  return { width: 728, height: 90 };
};
const HomeBanner = ({ imageUrl, destinationUrl, shouldRender }) => {
  if (!shouldRender || !imageUrl || !destinationUrl) {
    return null;
  }
  const { width, height } = getDimensionsFromUrl(imageUrl);
  const maxWidth = width;
  const aspectRatio = `${width} / ${height}`;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "w-full px-4 md:px-0 mb-20 overflow-hidden opacity-100 max-h-[300px]",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-full mx-auto",
          style: {
            maxWidth: `${maxWidth}px`,
            aspectRatio
          },
          children: /* @__PURE__ */ jsx("a", { href: destinationUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: imageUrl,
              alt: "Publicidad",
              className: "w-full h-full object-contain"
            }
          ) })
        }
      )
    }
  );
};
const SimpleVideoBanner = ({ iframeUrl, shouldRender, href }) => {
  if (!shouldRender || !iframeUrl) {
    return null;
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: " hidden md:block relative w-full mx-auto ml-80  overflow-hidden mt-12",
      style: {
        maxHeight: "520px",
        aspectRatio: "970 / 400"
      },
      children: [
        /* @__PURE__ */ jsx(
          "iframe",
          {
            src: iframeUrl,
            className: "absolute top-0 left-0 w-full h-full",
            allow: "autoplay; fullscreen; picture-in-picture",
            scrolling: "no",
            title: "Video Banner"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: href ?? "https://www.eep.com.co/es/",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Abrir enlace del banner",
            className: "absolute inset-0 z-10"
          }
        )
      ]
    }
  );
};
const HomePage = () => {
  const bannerImageUrl2 = bucketUrl + "/publicidad/FE_MEDIA+PAGINA970x250.jpg";
  const bannerDestinationUrl2 = "https://www.eep.com.co/es/";
  const image1 = bucketUrl + "/publicidad/FE_TARJETAS+VERTICALES300x250.jpg";
  const destinationUrl = "https://www.eep.com.co/es/";
  const videoImagen = bucketUrl + "/publicidad/video/960x540pxV2/index.html";
  const [mostrarRegion, setMostrarRegion] = useState(false);
  const { categoria } = usePage().props;
  const { pages, noticias, topweek, latestnews, opiniones, latestnewspublished, importantNews } = usePage().props;
  const { cantidad } = usePage().props;
  useState(cantidad);
  const pageType = (pages == null ? void 0 : pages.page_type) ?? { structure: [] };
  const [noticiasver, setNoticiasver] = useState(noticias);
  const [showAdModal, setShowAdModal] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);
  const [etiquetas, setEtiquetas] = useState([]);
  useState([]);
  const getNewsByIds = (ids, allNews) => {
    if (!Array.isArray(ids)) return [];
    const newsMap = new Map(allNews.map((n) => [n.id.toString(), n]));
    return ids.map((id) => newsMap.get(String(id))).filter((n) => !!n);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAdModal(false);
    }, 7e3);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
    };
    handleOrientationChange();
    window.addEventListener("resize", handleOrientationChange);
    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);
  const renderComponent = (item, key) => {
    switch (item.component) {
      case "LiveSection":
        return /* @__PURE__ */ jsx(LiveStream, {}, key);
      case "FeaturedNews":
        return /* @__PURE__ */ jsx(FeaturedNews, { noticias: topweek }, key);
      case "Opinions":
        return /* @__PURE__ */ jsx(Opinions, { opiniones }, key);
      case "HomeBanner":
        return /* @__PURE__ */ jsx(HomeBanner, { shouldRender: true, imageUrl: bannerImageUrl2, destinationUrl: bannerDestinationUrl2 }, key);
      case "MobileBanner":
        return /* @__PURE__ */ jsx(MobileBanner, { shouldRender: true, imageUrl: image1, destinationUrl }, key);
      case "SimpleVideoBanner":
        return /* @__PURE__ */ jsx(SimpleVideoBanner, { shouldRender: true, iframeUrl: videoImagen }, key);
      case "SingleNewCard":
        if (item.tipo_contenido === "noticia") {
          const noticia_unic = item.noticia_id ? getNewsByIds([item.noticia_id], noticias) : [];
          return /* @__PURE__ */ jsx(
            SectionGrilla,
            {
              noticias: latestnews,
              topweek,
              item: {
                tipo: "noticia",
                data: noticia_unic[0]
              }
            },
            key
          );
        } else {
          return /* @__PURE__ */ jsx(
            SectionGrilla,
            {
              noticias: latestnews,
              topweek,
              item: {
                tipo: "publicidad",
                data: {
                  imagen_url: item.imagen_url,
                  url: item.url
                }
              }
            },
            key
          );
        }
      case "DestacadosSection":
        const videoDestacado = item.video_url ? item.video_url : "";
        const video_title = item.title_video ? item.title_video : "";
        const p1 = item.publicidad1 ? item.publicidad1 : "";
        const p2 = item.publicidad2 ? item.publicidad2 : "";
        const n1 = item.noticia_izquierda ? getNewsByIds(item.noticia_izquierda, noticias) : [];
        const n2 = item.noticia_abajo ? getNewsByIds(item.noticia_abajo, noticias) : [];
        const destacado1 = getNewsByIds([item.destacado_1], noticias)[0];
        const destacado2 = getNewsByIds([item.destacado_2], noticias)[0];
        console.log(destacado2);
        const destacado3 = getNewsByIds([item.destacado_3], noticias)[0];
        const destacado4 = getNewsByIds([item.destacado_4], noticias)[0];
        const destacado5 = getNewsByIds([item.destacado_5], noticias)[0];
        return /* @__PURE__ */ jsx(DestacadosSection, { destacado1, destacado2, destacado3, destacado4, destacado5, video: videoDestacado, title_video: video_title, p1, p2, n1, n2, latestnewspublished }, key);
      default:
        return null;
    }
  };
  const renderStructure = (structure) => {
    return structure.map((item, index) => renderComponent(item, index));
  };
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get("search");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const pathSegments = window.location.pathname.split("/");
  const categoriapath = pathSegments.length > 2 ? pathSegments[2] : void 0;
  usePage().props;
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    fetch("/api/popular-tags").then((response) => response.json()).then((data) => setEtiquetas(data)).catch((error) => console.error("Error fetching popular tags:", error));
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Layout, { children: [
    mostrarRegion && /* @__PURE__ */ jsx("div", { className: "fixed top-16 right-4 z-50 bg-white border shadow-lg rounded-lg p-4 w-80", children: /* @__PURE__ */ jsx(
      RegionAccordion,
      {
        cities,
        handleRegionChange: (value) => {
          setMostrarRegion(false);
        }
      }
    ) }),
    /* @__PURE__ */ jsx(Contador365, {}),
    /* @__PURE__ */ jsx("main", { className: "overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex relative flex-col w-full bg-blend-normal", children: [
      /* @__PURE__ */ jsx("h1", { className: "hidden", children: "Últimas noticias Minuto60" }),
      (searchQuery || categoriapath) && /* @__PURE__ */ jsx(CategorySection, { title: categoria ? categoria.toUpperCase() : "NOTICIAS", color: "bg-black", bgcolor: "", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: noticiasver.map((noticia, index) => /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
        NewsCard,
        {
          category: categoria ? categoria : "",
          title: (noticia == null ? void 0 : noticia.titulo2) ? noticia == null ? void 0 : noticia.titulo2 : noticia == null ? void 0 : noticia.titulo,
          iddado: noticia.id,
          description: noticia.descripcion,
          imageUrl: `${bucketUrl}/${noticia.imagen}`,
          imageUrlMovil: `${bucketUrl}/${noticia.imagen_movil}`,
          accentColor: getBackgroundColor(categoria ? categoria : ""),
          slug: noticia.slug,
          variant: "banner",
          subvariant: "stretch"
        }
      ) }, index)) }) }),
      !categoriapath && !searchQuery && /* @__PURE__ */ jsx(Fragment, { children: pageType.structure.length > 0 ? renderStructure(pageType.structure) : /* @__PURE__ */ jsx("p", { children: "No hay contenido disponible" }) })
    ] }) })
  ] }) });
};
export {
  HomePage,
  HomePage as default
};
