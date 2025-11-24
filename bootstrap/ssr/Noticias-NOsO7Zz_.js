import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { router, Link, usePage } from "@inertiajs/react";
import { g as getBackgroundColor, b as bucketUrl, a as getBorderColor } from "./utils-ErVxQVks.js";
import { S as ShareButtons, N as NoticiaMultimedia, M as Minuto } from "./Minuto-BOgnSMqJ.js";
import "sweetalert2";
import { I as InternaSection } from "./InternaSection-C2TxGTzk.js";
import { useState, useEffect } from "react";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import { es } from "date-fns/locale";
import { format } from "date-fns";
import DOMPurify from "dompurify";
import "moment/locale/es.js";
import "clsx";
import "lucide-react";
import "./Ismobile-DoDsVIou.js";
import "axios";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "framer-motion";
import "aos";
const RecommendationNews = ({ noticias }) => {
  const handleClick = (categoria, slug, iddado) => {
    router.visit(`${categoria}/${slug}/${iddado}`);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: noticias.length >= 4 && /* @__PURE__ */ jsxs("section", { className: "mx-auto mt-10 max-w-7xl px-4", children: [
    /* @__PURE__ */ jsx("h4", { className: "text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-headerColor pl-3 mb-6", children: "Noticias recomendadas" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4", children: noticias.slice(0, 4).map((noticia, index) => {
      var _a, _b, _c;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white shadow p-4 border border-gray-200 hover:shadow-md transition",
          onClick: () => {
            var _a2;
            return handleClick((_a2 = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _a2.nombre, noticia.slug, noticia.id);
          },
          children: [
            /* @__PURE__ */ jsx("div", { className: `h-[16px] w-[12px] ${getBackgroundColor((_a = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _a.nombre)} absolute` }),
            /* @__PURE__ */ jsx("p", { className: "ml-4 capitalize", children: (_b = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _b.nombre }),
            /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-gray-800 mb-2", children: noticia.titulo }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mb-2", children: noticia.descripcion }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: (_c = noticia.author) == null ? void 0 : _c.name })
          ]
        },
        index
      );
    }) })
  ] }) });
};
const ImportantNews = ({ noticias }) => {
  const handleClick = (category, slug, iddado) => {
    router.visit(`/${category}/${slug}/${iddado}`);
  };
  return /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 py-6", children: noticias.map((noticia, index) => /* @__PURE__ */ jsx(
    "div",
    {
      onClick: () => handleClick(noticia.categoria, noticia.slug, noticia.id),
      className: "cursor-pointer border-t border-b border-gray-900 shadow-lg  hover:shadow-xl transition-shadow duration-300 mb-4 overflow-hidden",
      children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4", children: /* @__PURE__ */ jsx("div", { className: "col-span-3 p-4 flex flex-col justify-center", children: /* @__PURE__ */ jsx("h5", { className: "text-lg font-bold text-gray-900 mb-1", children: noticia.titulo }) }) })
    },
    index
  )) });
};
const MostViewedNews = ({ noticias }) => {
  const handleClick = (categoria, slug, iddado) => {
    router.visit(`/${categoria}/${slug}/${iddado}`);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: noticias.length >= 4 && /* @__PURE__ */ jsxs("section", { className: "mx-auto mt-10", children: [
    /* @__PURE__ */ jsx("h4", { className: "text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-headerColor pl-3 mb-6", children: "Resumen semanal" }),
    noticias.map((noticia, index) => {
      var _a;
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: "max-w-4xl mx-auto overflow-hidden mb-4 border-b border-gray-300",
          onClick: () => handleClick(noticia.categoria, noticia.slug, noticia.id),
          style: { cursor: "pointer" },
          children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "md:p-4 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: `${bucketUrl}/${noticia.imagen}`,
                alt: "",
                className: " block md:hidden aspect-video w-full object-cover"
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
function MenuFlow({ noticias }) {
  var _a, _b;
  const parseInstagramEmbeds = (content) => {
    return content.replace(/\[instagram_embed\](.*?)\[\/instagram_embed\]/g, (match, url) => {
      return `
     <iframe
        src="${url.trim()}"
        width="100%"
        height="700"
        style="
          max-width: 400px;
          width: 100%;
          margin: 1rem auto;
          display: block;
          border: none;
          border-radius: 8px;
          overflow: hidden;
        "
        scrolling="no"
        allowtransparency="true"
        allow="encrypted-media"
        frameborder="0"
      ></iframe>
    `;
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [hiddenTemporarily, setHiddenTemporarily] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const noticia = noticias[0];
  useEffect(() => {
    if (!hiddenTemporarily) {
      const timer = setTimeout(() => {
        setShowPreview(true);
      }, 5e3);
      return () => clearTimeout(timer);
    }
  }, [hiddenTemporarily]);
  const handleClosePreview = () => {
    setShowPreview(false);
    setHiddenTemporarily(true);
    setTimeout(() => {
      setShowPreview(true);
      setHiddenTemporarily(false);
    }, 25e3);
  };
  const fullContent = (noticia == null ? void 0 : noticia.contenido) || "";
  const sanitizedContent = typeof window !== "undefined" ? DOMPurify.sanitize(fullContent, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "frameborder",
      "src",
      "width",
      "height"
    ]
  }) : fullContent;
  let contentWithEmbeds = sanitizedContent;
  contentWithEmbeds = parseInstagramEmbeds(contentWithEmbeds);
  (_a = noticia == null ? void 0 : noticia.embebido) == null ? void 0 : _a.forEach((embed, index) => {
    const placeholder = `{{EMBED_${index}}}`;
    if (embed.html) {
      contentWithEmbeds = contentWithEmbeds.replace(placeholder, embed.html);
    }
  });
  (_b = noticia == null ? void 0 : noticia.noticia_embebida) == null ? void 0 : _b.forEach((related, index) => {
    const placeholder = `{{RELATED_${index}}}`;
    if (related.html) {
      contentWithEmbeds = contentWithEmbeds.replace(placeholder, related.html);
    }
  });
  if (noticia == null ? void 0 : noticia.audios) {
    const audioTag = `<audio controls class="my-4 w-full">
      <source src='${bucketUrl}/${noticia.audios}' type='audio/mpeg'>
      Tu navegador no soporta la etiqueta de audio.
    </audio>`;
    contentWithEmbeds = contentWithEmbeds.replace("[_AUDIO_]", audioTag);
  }
  const sanitizedFinalContent = typeof window !== "undefined" ? DOMPurify.sanitize(contentWithEmbeds, {
    ADD_TAGS: ["audio", "source", "iframe"],
    ADD_ATTR: [
      "controls",
      "src",
      "type",
      "allow",
      "allowfullscreen",
      "frameborder",
      "width",
      "height",
      "data-instgrm-permalink",
      "data-instgrm-version"
    ]
  }) : contentWithEmbeds;
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        if (window.twttr) {
          window.twttr.widgets.load();
        } else {
          const twitterScript = document.createElement("script");
          twitterScript.src = "https://platform.twitter.com/widgets.js";
          twitterScript.async = true;
          document.body.appendChild(twitterScript);
        }
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        } else {
          const instagramScript = document.createElement("script");
          instagramScript.src = "https://www.instagram.com/embed.js";
          instagramScript.async = true;
          instagramScript.onload = () => {
            if (window.instgrm) {
              window.instgrm.Embeds.process();
            }
          };
          document.body.appendChild(instagramScript);
        }
        const links = document.querySelectorAll(".tiptap a[href]");
        links.forEach((link) => {
          link.setAttribute("target", "_blank");
          link.setAttribute("rel", "noopener noreferrer");
        });
        const tables = document.querySelectorAll(".tiptap table");
        tables.forEach((table) => {
          var _a2, _b2;
          const wrapper = document.createElement("div");
          wrapper.className = "scroll-table";
          if (!((_a2 = table.parentElement) == null ? void 0 : _a2.classList.contains("scroll-table"))) {
            (_b2 = table.parentNode) == null ? void 0 : _b2.insertBefore(wrapper, table);
            wrapper.appendChild(table);
          }
        });
      }, 7e3);
    }
  }, [sanitizedFinalContent]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showPreview && !isOpen && noticia && /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => setIsOpen(true),
        className: "fixed bottom-0 left-0 right-0 z-50 cursor-pointer md:hidden transition duration-500 ease-out transform translate-y-0 opacity-100",
        children: /* @__PURE__ */ jsxs("div", { className: "bg-headerColor shadow-lg rounded-t-xl p-3 h-auto flex flex-col gap-2 max-w-xl mx-auto relative animate-slideUp", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                handleClosePreview();
              },
              className: "absolute top-2 right-2 text-white text-1xl rounded-full w-5 h-5 flex items-center justify-center",
              children: "✕"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-semibold text-center", children: "Lo más visto" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                loading: "lazy",
                src: `${bucketUrl}/${noticia.imagen}`,
                alt: noticia.titulo,
                className: "w-16 h-16 object-cover rounded"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-white text-sm font-semibold line-clamp-2", children: noticia.titulo }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-white", children: "Haz clic para leer" })
            ] })
          ] })
        ] })
      }
    ),
    isOpen && noticia && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-40 flex justify-center items-end bg-black bg-opacity-40",
        onClick: () => setIsOpen(false),
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-full max-h-[90%] rounded-t-2xl overflow-hidden transform transition-all duration-500 ease-out translate-y-0 opacity-100 animate-slideUp",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "w-full bg-headerColor relative flex items-center justify-center px-4 py-2", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-white font-bold text-center", children: "Lo más leído" }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setIsOpen(false),
                    className: "absolute right-2 top-1/2 -translate-y-1/2 bg-headerColor text-white rounded-full w-6 h-6 flex items-center justify-center",
                    children: "✕"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white w-full p-4 overflow-y-auto max-h-[calc(90vh-3.5rem)]", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: noticia.titulo }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: noticia.descripcion }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    src: `${bucketUrl}/${noticia.imagen}`,
                    alt: noticia.titulo,
                    className: "w-full mt-2 mb-4"
                  }
                ),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      loading: "lazy",
                      src: `${bucketUrl}/${noticia.author.perfil}`,
                      className: " w-16 h-16",
                      alt: noticia.author.name
                    }
                  ),
                  /* @__PURE__ */ jsxs("article", { children: [
                    /* @__PURE__ */ jsxs("p", { className: "italic text-gray-500", children: [
                      "Por",
                      " ",
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: `/periodista/${noticia.author.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")}`,
                          className: "text-headerColor hover:underline",
                          title: "Ir a la página del periodista",
                          children: noticia.author.name
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-xs italic", children: "Redactor y creador de contenido" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ShareButtons, { title: noticia == null ? void 0 : noticia.titulo2, url: currentUrl }) }),
                /* @__PURE__ */ jsx("div", { className: "tiptap", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "text-1xl md:text-3xl mt-2 flex flex-col",
                    dangerouslySetInnerHTML: { __html: sanitizedFinalContent }
                  }
                ) })
              ] })
            ]
          }
        )
      }
    )
  ] });
}
const Noticias = () => {
  var _a, _b, _c, _d, _e, _f;
  const parseInstagramEmbeds = (content) => {
    return content.replace(/\[instagram_embed\](.*?)\[\/instagram_embed\]/g, (match, url) => {
      return `
     <iframe
        src="${url.trim()}"
        width="100%"
        height="700"
        style="
          max-width: 400px;
          width: 100%;
          margin: 1rem auto;
          display: block;
          border: none;
          border-radius: 8px;
          overflow: hidden;
        "
        scrolling="no"
        allowtransparency="true"
        allow="encrypted-media"
        frameborder="0"
      ></iframe>
    `;
    });
  };
  const { noticia, message } = usePage().props;
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        autor: noticia.author.name,
        fecha_publicacion: noticia.fecha_publicacion,
        seccion: noticia.categorias[0].nombre,
        noticia_id: noticia.id
      });
    }
  }, [noticia]);
  const parsePdfEmbeds = (content) => {
    return content.replace(/\[pdf_embed\](.*?)\[\/pdf_embed\]/g, (match, url) => {
      return `
      <iframe
        src="${url.trim()}"
        width="100%"
        height="600"
        style="
          max-width: 100%;
          margin: 1rem auto;
          display: block;
          border: none;
          border-radius: 8px;
          overflow: hidden;
        "
        allow="autoplay"
        frameborder="0"
      ></iframe>
    `;
    });
  };
  const parseAudioEmbeds = (content) => {
    return content.replace(/\[audio_embend\](.*?)\[\/audio_embend\]/g, (match, url) => {
      console.log("see url", url);
      return `
      <audio controls class="my-4 w-full">
        <source src="${url.trim()}" type="audio/mpeg">
        Tu navegador no soporta la etiqueta de audio.
      </audio>
    `;
    });
  };
  const category = (_a = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _a.nombre;
  const descripcion = (_b = noticia == null ? void 0 : noticia.categorias[0]) == null ? void 0 : _b.descripcion;
  message && alert(message);
  const FormattedDate = (date) => {
    const rawFormatted = format(new Date(date), "d 'de' MMMM 'de' yyyy - h:mm a", {
      locale: es
    });
    const lowerCased = rawFormatted.replace("AM", "a. m.").replace("PM", "p. m.");
    return lowerCased;
  };
  getBorderColor(noticia.category);
  const { topweek, latestnewspublished, noticiasRecomendadas, importantNews, topNoticia, minutos, etiquetasRelacionadas } = usePage().props;
  const fullContent = (noticia == null ? void 0 : noticia.contenido) || "";
  const sanitizedContent = typeof window !== "undefined" ? DOMPurify.sanitize(fullContent, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "frameborder",
      "src",
      "width",
      "height"
    ],
    FORBID_ATTR: ["style"]
  }) : fullContent;
  let contentWithEmbeds = sanitizedContent;
  contentWithEmbeds = parsePdfEmbeds(contentWithEmbeds);
  contentWithEmbeds = parseInstagramEmbeds(contentWithEmbeds);
  contentWithEmbeds = parseAudioEmbeds(contentWithEmbeds);
  (_c = noticia.embebido) == null ? void 0 : _c.forEach((embed, index) => {
    const placeholder = `{{EMBED_${index}}}`;
    if (embed.html) {
      contentWithEmbeds = contentWithEmbeds.replace(placeholder, embed.html);
    }
  });
  (_d = noticia.noticia_embebida) == null ? void 0 : _d.forEach((related, index) => {
    const placeholder = `{{RELATED_${index}}}`;
    if (related.html) {
      contentWithEmbeds = contentWithEmbeds.replace(placeholder, related.html);
    }
  });
  if (noticia.audios) {
    const audioTag = `<audio controls class="my-4 w-full">
      <source src='${bucketUrl}/${noticia.audios}' type='audio/mpeg'>
      Tu navegador no soporta la etiqueta de audio.
    </audio>`;
    contentWithEmbeds = contentWithEmbeds.replace("{{AUDIO}}", audioTag);
  }
  const sanitizedFinalContent = typeof window !== "undefined" ? DOMPurify.sanitize(contentWithEmbeds, {
    ADD_TAGS: ["audio", "source", "iframe", "blockquote", "section"],
    ADD_ATTR: [
      "controls",
      "src",
      "type",
      "allow",
      "allowfullscreen",
      "frameborder",
      "width",
      "height",
      "data-instgrm-permalink",
      "data-instgrm-version",
      "style"
    ],
    FORBID_ATTR: ["style"]
  }) : contentWithEmbeds;
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (typeof window !== "undefined" && window.twttr && window.twttr.widgets && typeof window.twttr.widgets.load === "function") {
        window.twttr.widgets.load();
      } else {
        const twitterScript = document.createElement("script");
        twitterScript.src = "https://platform.twitter.com/widgets.js";
        twitterScript.async = true;
        document.body.appendChild(twitterScript);
      }
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const instagramScript = document.createElement("script");
        instagramScript.src = "https://www.instagram.com/embed.js";
        instagramScript.async = true;
        instagramScript.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
        document.body.appendChild(instagramScript);
      }
      const existingTikTok = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (window.tiktokEmbedLoaded) {
        if (existingTikTok) {
          existingTikTok.remove();
        }
        const newScript = document.createElement("script");
        newScript.src = "https://www.tiktok.com/embed.js";
        newScript.async = true;
        document.body.appendChild(newScript);
      } else {
        window.tiktokEmbedLoaded = true;
      }
      const links = document.querySelectorAll(".tiptap a[href]");
      links.forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });
      const tables = document.querySelectorAll(".tiptap table");
      tables.forEach((table) => {
        var _a2, _b2;
        const wrapper = document.createElement("div");
        wrapper.className = "scroll-table";
        if (!((_a2 = table.parentElement) == null ? void 0 : _a2.classList.contains("scroll-table"))) {
          (_b2 = table.parentNode) == null ? void 0 : _b2.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        }
      });
    }
  }, []);
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.onload = () => {
        console.log("TikTok script loaded");
      };
      document.body.appendChild(script);
    }
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const tiktokIframe = document.querySelector(".tiktok-embed iframe");
      if (!tiktokIframe) {
        console.warn("TikTok embed bloqueado o falló al cargar.");
      }
    }, 3e3);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const loadTikTok = () => {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    };
    const timeout = setTimeout(() => {
      loadTikTok();
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  `/amp/${category}/${noticia.slug}/${noticia.id}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Layout, { category_interna: category, children: /* @__PURE__ */ jsxs("div", { className: ` my-4 max-[600px]:mx-5 max-w-[1280px] px-4`, children: [
    /* @__PURE__ */ jsx("div", { className: `h-[16px] w-[12px] mt-[99px] ${getBackgroundColor(category)} absolute` }),
    /* @__PURE__ */ jsxs("div", { className: "font-bold p-4 mt-20 uppercase", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", title: "Inicio", children: "Inicio" }),
      " /",
      " ",
      category ? /* @__PURE__ */ jsx(
        Link,
        {
          href: `/${category}`,
          title: descripcion || category,
          className: "hover:underline",
          children: descripcion || category
        }
      ) : descripcion
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4", children: [
      importantNews && importantNews.length > 0 && /* @__PURE__ */ jsx(ImportantNews, { noticias: importantNews }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:p-4 flex flex-col justify-between gap-4 md:gap-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm", children: [
            /* @__PURE__ */ jsx("span", { children: FormattedDate(noticia.fecha_publicacion) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-1 sm:gap-2 sm:items-center sm:ml-2 mt-1 sm:mt-0", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "|" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "Actualizado - ",
                FormattedDate(noticia.actualizar_noticia ?? noticia.updated_at)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-7xl md:text-9xl ", children: /* @__PURE__ */ jsx("h1", { children: noticia.titulo }) }),
          /* @__PURE__ */ jsx("div", { className: "text-1xl md:text-2xl ", children: noticia.descripcion }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                loading: "lazy",
                src: noticia.author.perfil ? `${bucketUrl}/${noticia.author.perfil}` : "/img/periodista_default.webp",
                className: "rounded w-16 h-16",
                alt: noticia.author.name,
                title: noticia.author.name
              }
            ),
            /* @__PURE__ */ jsxs("article", { children: [
              /* @__PURE__ */ jsx("p", { className: "italic text-gray-500", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/periodista/${noticia.author.slug.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")}`,
                  className: "text-headerColor hover:underline",
                  title: noticia.author.name,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: noticia.author.name
                }
              ) }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-xs uppercase tracking-wide font-semibold italic", children: "Periodista Digital" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(ShareButtons, { title: noticia == null ? void 0 : noticia.titulo2, url: currentUrl })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(NoticiaMultimedia, { noticia, bucketUrl }),
          (((_e = noticia == null ? void 0 : noticia.pie_de_pagina) == null ? void 0 : _e.pie_de_foto) || ((_f = noticia == null ? void 0 : noticia.pie_de_pagina) == null ? void 0 : _f.credito)) && /* @__PURE__ */ jsxs("div", { className: "items-center gap-2 italic text-sm text-gray-500", children: [
            noticia.pie_de_pagina.pie_de_foto && /* @__PURE__ */ jsx("span", { children: noticia.pie_de_pagina.pie_de_foto }),
            noticia.pie_de_pagina.pie_de_foto && noticia.pie_de_pagina.credito && /* @__PURE__ */ jsx("span", { children: " - " }),
            noticia.pie_de_pagina.credito && /* @__PURE__ */ jsxs("span", { className: "font-bold text-gray-600 ", children: [
              "Crédito: ",
              noticia.pie_de_pagina.credito
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-10 gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "md:p-4 md:col-span-7", children: /* @__PURE__ */ jsx("div", { className: "tiptap", children: Array.isArray(minutos) && minutos.length > 0 ? /* @__PURE__ */ jsx(Minuto, { minutos }) : /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-1xl md:text-3xl mt-2 flex flex-col",
            dangerouslySetInnerHTML: { __html: sanitizedFinalContent }
          }
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:p-4 md:col-span-3", children: [
          /* @__PURE__ */ jsx(InternaSection, { noticias: latestnewspublished }),
          /* @__PURE__ */ jsx(MostViewedNews, { noticias: topweek })
        ] })
      ] }),
      noticia.recommendations && Array.isArray(noticia.recommendations) && noticia.recommendations.length > 0 && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(RecommendationNews, { noticias: noticiasRecomendadas }) })
    ] }),
    topweek.length > 0 && /* @__PURE__ */ jsx(MenuFlow, { noticias: topNoticia })
  ] }) }) });
};
export {
  Noticias as default
};
