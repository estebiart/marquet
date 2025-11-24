import { jsxs, jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { a as getBorderColor, b as bucketUrl } from "./utils-ErVxQVks.js";
import "moment/locale/es.js";
import "sweetalert2";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { S as ShareButtons, N as NoticiaMultimedia, M as Minuto } from "./Minuto-BOgnSMqJ.js";
import "clsx";
import "lucide-react";
import "./Ismobile-DoDsVIou.js";
const MobilePreview = ({ width, height, children }) => {
  const scale = 0.65;
  const transformStyle = {
    transform: `scale(${scale})`,
    transformOrigin: "top center",
    width: `${width}px`,
    height: `${height}px`,
    overflow: "hidden"
  };
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "bg-white border border-gray-300 rounded-2xl shadow-md transition-all duration-300",
      style: transformStyle,
      children: /* @__PURE__ */ jsx("div", { className: "w-full h-full overflow-auto", children })
    }
  ) });
};
const NoticiasPreview = () => {
  var _a, _b, _c, _d;
  const { noticia, message, author, minutos } = usePage().props;
  const dispositivos = {
    // Movil
    "iPhone 8": { width: 375, height: 667 },
    "iPhone 14 Pro": { width: 390, height: 844 },
    "iPhone XR": { width: 414, height: 896 },
    "Pixel 5": { width: 393, height: 851 },
    "Galaxy S20": { width: 412, height: 915 },
    // PC
    "Laptop 13": { width: 1280, height: 800 },
    "Laptop 15": { width: 1440, height: 900 },
    "Desktop HD": { width: 1366, height: 768 },
    "Desktop Full HD": { width: 1920, height: 1080 },
    "Desktop 2K": { width: 2560, height: 1440 },
    "Desktop 4K": { width: 3840, height: 2160 }
  };
  const [dispositivoSeleccionado, setDispositivoSeleccionado] = useState("iPhone 8");
  const { width, height } = dispositivos[dispositivoSeleccionado];
  const isMobile = width <= 600;
  const category = "categoria";
  message && alert(message);
  const FormattedDate = (date) => {
    const rawFormatted = format(new Date(date), "d 'de' MMMM 'de' yyyy - h:mm a", {
      locale: es
    });
    const lowerCased = rawFormatted.replace("AM", "a.m.").replace("PM", "p.m.");
    return lowerCased;
  };
  getBorderColor(noticia.categoria);
  usePage().props;
  const fullContent = noticia.contenido || "";
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
  const sanitizedContent = DOMPurify.sanitize(fullContent, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "src", "width", "height"]
  });
  let contentWithEmbeds = sanitizedContent;
  contentWithEmbeds = parsePdfEmbeds(contentWithEmbeds);
  contentWithEmbeds = parseAudioEmbeds(contentWithEmbeds);
  (_a = noticia.embebido) == null ? void 0 : _a.forEach((embed, index) => {
    const placeholder = `{{EMBED_${index}}}`;
    if (embed.html) {
      contentWithEmbeds = contentWithEmbeds.replace(placeholder, embed.html);
    }
  });
  (_b = noticia.noticia_embebida) == null ? void 0 : _b.forEach((related, index) => {
    const placeholder = `{{RELATED_${index}}}`;
    if (related.html) {
      related.html = related.html.replace(
        /<img([^>]+)class="hidden"/,
        '<img$1class="w-full h-24 md:h-32 object-cover md:w-2/5"'
      );
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
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const sanitizedFinalContent = DOMPurify.sanitize(contentWithEmbeds, {
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
    ],
    FORBID_ATTR: ["style"]
  });
  useEffect(() => {
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
    const style = document.createElement("style");
    style.innerHTML = `
    .twitter-tweet {
      padding-left: ${isMobile ? "1rem" : "9rem"} !important;
    }

    .instagram-media {
      margin-top: 30px !important;
      margin-bottom: 30px !important;
      margin-left: ${isMobile ? "-0.5rem" : "9rem"} !important;
    }

    .scroll-table {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-left: ${isMobile ? "0" : "9rem"} !important;
      margin-right: ${isMobile ? "0" : "9rem"} !important;
    }

    .scroll-table table {
      width: max-content;
    }
  `;
    document.head.appendChild(style);
    const tables = document.querySelectorAll(".tiptap table");
    tables.forEach((table) => {
      var _a2, _b2;
      if (!((_a2 = table.parentElement) == null ? void 0 : _a2.classList.contains("scroll-table"))) {
        const wrapper = document.createElement("div");
        wrapper.className = "scroll-table";
        (_b2 = table.parentNode) == null ? void 0 : _b2.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  }, [sanitizedContent]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-4 w-fit", children: [
      /* @__PURE__ */ jsx(
        "select",
        {
          id: "dispositivo",
          value: dispositivoSeleccionado,
          onChange: (e) => setDispositivoSeleccionado(e.target.value),
          children: Object.keys(dispositivos).map((nombre) => /* @__PURE__ */ jsx("option", { value: nombre, children: nombre }, nombre))
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.history.back(),
          className: "bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300",
          children: "⬅ Volver atrás"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(MobilePreview, { width, height, children: /* @__PURE__ */ jsxs("div", { className: `my-4 ${isMobile ? "mx-5" : "mx-auto"} max-w-[1280px]`, children: [
      /* @__PURE__ */ jsxs("div", { className: `font-bold uppercase ${!isMobile ? "p-4" : ""}`, children: [
        /* @__PURE__ */ jsx("a", { href: "/", title: "Inicio", children: "Inicio" }),
        " / ",
        category
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: `grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-4`, children: [
          /* @__PURE__ */ jsxs("div", { className: `flex flex-col justify-between gap-4 ${isMobile ? "p-0" : "p-4"}`, children: [
            /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${!isMobile ? "flex-row items-center" : ""} text-sm text-gray-600`, children: [
              /* @__PURE__ */ jsx("span", { children: FormattedDate(noticia.fecha_publicacion) }),
              /* @__PURE__ */ jsxs("span", { className: `${!isMobile ? "ml-2" : ""}`, children: [
                "Actualizado ",
                FormattedDate(noticia.actualizar_noticia ?? noticia.updated_at)
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: `${isMobile ? "text-6xl" : "text-9xl"}`, children: /* @__PURE__ */ jsx("h1", { children: noticia.titulo }) }),
            /* @__PURE__ */ jsx("div", { className: `${isMobile ? "text-xl" : "text-2xl"}`, children: noticia.descripcion }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  src: author.perfil ? `${bucketUrl}/${author.perfil}` : "/img/periodista_default.webp",
                  className: "rounded w-16 h-16",
                  alt: author.name
                }
              ),
              /* @__PURE__ */ jsxs("article", { children: [
                /* @__PURE__ */ jsxs("p", { className: "italic text-gray-500", children: [
                  " ",
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      className: "text-headerColor hover:underline",
                      children: "Autor"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-xs uppercase tracking-wide font-semibold italic", children: "Periodista Digital" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(ShareButtons, { title: noticia == null ? void 0 : noticia.titulo2, url: currentUrl })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `${!isMobile ? "p-4" : ""}`, children: [
            /* @__PURE__ */ jsx(NoticiaMultimedia, { noticia, bucketUrl }),
            (((_c = noticia == null ? void 0 : noticia.pie_de_pagina) == null ? void 0 : _c.pie_de_foto) || ((_d = noticia == null ? void 0 : noticia.pie_de_pagina) == null ? void 0 : _d.credito)) && /* @__PURE__ */ jsxs("div", { className: " items-center gap-2 italic text-sm text-gray-500", children: [
              noticia.pie_de_pagina.pie_de_foto && /* @__PURE__ */ jsx("span", { children: noticia.pie_de_pagina.pie_de_foto }),
              noticia.pie_de_pagina.pie_de_foto && noticia.pie_de_pagina.credito && /* @__PURE__ */ jsx("span", { children: "-" }),
              noticia.pie_de_pagina.credito && /* @__PURE__ */ jsxs("span", { className: "font-bold text-gray-600 ", children: [
                "crédito ",
                noticia.pie_de_pagina.credito
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `grid ${isMobile ? "grid-cols-1" : "grid-cols-10"} gap-4`, children: /* @__PURE__ */ jsx("div", { className: "col-span-7", children: /* @__PURE__ */ jsx("div", { className: "tiptap", children: Array.isArray(minutos) && minutos.length > 0 ? /* @__PURE__ */ jsx(Minuto, { minutos }) : /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-1xl md:text-2xl mt-2 flex flex-col",
            dangerouslySetInnerHTML: { __html: sanitizedFinalContent }
          }
        ) }) }) })
      ] })
    ] }) })
  ] });
};
export {
  NoticiasPreview as default
};
