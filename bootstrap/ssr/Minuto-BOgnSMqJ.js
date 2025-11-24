import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { PlayCircle, Check, ClipboardCopy } from "lucide-react";
import { I as IsMobile } from "./Ismobile-DoDsVIou.js";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import DOMPurify from "dompurify";
function NoticiaMultimedia({ noticia, bucketUrl }) {
  const [mostrarVideo, setMostrarVideo] = useState(false);
  const isMobile = IsMobile();
  const getAutoplayUrl = (url) => {
    if (!url) return "";
    const hasQuery = url.includes("?");
    return hasQuery ? `${url}&autoplay=1` : `${url}?autoplay=1`;
  };
  if (noticia.imagen_video && noticia.video) {
    return /* @__PURE__ */ jsx(Fragment, { children: !mostrarVideo ? /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative h-96 w-full cursor-pointer",
        onClick: () => setMostrarVideo(true),
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: `${bucketUrl}/${isMobile ? noticia.imagen_movil || noticia.imagen_video : noticia.imagen_video}`,
              alt: "Imagen del video",
              className: "h-full w-full object-contain",
              title: `${noticia.title_imagen}`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(PlayCircle, { className: "text-white w-20 h-20 opacity-80 hover:opacity-100 transition-opacity duration-200" }) })
        ]
      }
    ) : /* @__PURE__ */ jsx(
      "iframe",
      {
        loading: "lazy",
        className: "md:h-96 w-full",
        src: getAutoplayUrl(noticia.video),
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    ) });
  }
  if (noticia.imagen) {
    return /* @__PURE__ */ jsx(
      "img",
      {
        loading: "lazy",
        src: `${bucketUrl}/${isMobile ? noticia.imagen_movil || noticia.imagen : noticia.imagen}`,
        alt: "Imagen principal",
        className: "w-full object-contain",
        title: `${noticia.title_imagen}`
      }
    );
  }
  if (noticia.video) {
    return /* @__PURE__ */ jsx(
      "iframe",
      {
        loading: "lazy",
        className: "md:h-96 w-full",
        src: getAutoplayUrl(noticia.video),
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    );
  }
  return null;
}
const ShareButtons = ({ title, url, siteName = "Minuto60.com" }) => {
  const message = `📰 *${siteName}*
"${title}"
👉 ${url}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedMessage = encodeURIComponent(message);
  const [copiado, setCopiado] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mt-4 items-center", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        "aria-label": "Compartir en WhatsApp",
        href: `https://wa.me/?text=${encodedMessage}`,
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Compartir en WhatsApp",
        className: "flex items-center gap-2 bg-headerColor px-2 py-2 rounded-lg hover:bg-green-600 transition",
        children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/Icon_WP.png", alt: "WhatsApp", className: "w-6 h-6", title: "Compartir en WhatsApp" })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        "aria-label": "Compartir en Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        target: "_blank",
        title: "Compartir en Facebook",
        rel: "noopener noreferrer",
        className: "flex items-center gap-2 bg-headerColor px-2 py-2 rounded-lg hover:bg-blue-700 transition",
        children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_fb.png", alt: "Facebook", className: "w-6 h-6", title: "Compartir en Facebook" })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        "aria-label": "Compartir en X",
        href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`,
        target: "_blank",
        title: "Compartir en X",
        rel: "noopener noreferrer",
        className: "flex items-center gap-2 bg-headerColor px-2 py-2 rounded-lg hover:bg-gray-900 transition",
        children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_x.png", alt: "X", className: "w-6 h-6", title: "Compartir en X" })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        "aria-label": "Compartir en LinkedIn",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        target: "_blank",
        title: "Compartir en LinkedIn",
        rel: "noopener noreferrer",
        className: "flex items-center gap-2 bg-headerColor px-2 py-2 rounded-lg hover:bg-blue-800 transition",
        children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_linkedin.png", alt: "LinkedIn", className: "w-6 h-6", title: "Compartir en LinkedIn" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleCopy,
        className: "flex items-center gap-2 bg-gray-700 px-2 py-2 rounded-lg hover:bg-gray-800 transition text-white",
        "aria-label": "Copiar al portapapeles",
        children: copiado ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-green-400" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "¡Copiado!" })
        ] }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ClipboardCopy, { className: "w-5 h-5" }) })
      }
    )
  ] });
};
const Minuto = ({ minutos }) => {
  console.log(minutos, "minutos props");
  const parseAudioEmbeds = (content) => {
    return content.replace(/\[audio_embend\]\s*(.*?)\s*\[\/audio_embend\]/gi, (_match, url) => {
      const src = String(url ?? "").trim();
      if (!src) return "";
      return `
                <audio controls class="my-4 w-full">
                  <source src="${src}" type="audio/mpeg">
                  Tu navegador no soporta la etiqueta de audio.
                </audio>
            `;
    });
  };
  const extractContentFromParsed = (parsed) => {
    var _a;
    if (parsed == null) return null;
    if (Array.isArray(parsed)) {
      const parts = parsed.map((p) => {
        if (typeof p === "string") return p;
        return String((p == null ? void 0 : p.contenido) ?? (p == null ? void 0 : p.html) ?? (p == null ? void 0 : p.content) ?? (p == null ? void 0 : p.text) ?? "");
      }).filter(Boolean);
      return parts.join("");
    }
    const candidates = [
      parsed.contenido,
      parsed.content,
      parsed.html,
      parsed.body,
      parsed.text,
      parsed.descripcion,
      (_a = parsed == null ? void 0 : parsed.data) == null ? void 0 : _a.html
    ];
    for (const c of candidates) {
      if (c !== void 0 && c !== null && String(c).trim() !== "") return String(c);
    }
    if (typeof parsed.contenido === "object" && parsed.contenido !== null) {
      const nested = parsed.contenido;
      if (typeof nested === "string" && nested.trim() !== "") return nested;
      const nestedCandidates = [nested.html, nested.content, nested.text];
      for (const nc of nestedCandidates) {
        if (nc) return String(nc);
      }
    }
    const joinedValues = Object.values(parsed).filter((v) => typeof v === "string" && v.trim() !== "").join(" ");
    if (joinedValues) return joinedValues;
    return null;
  };
  const getRawContenido = (minuto) => {
    var _a, _b;
    if (!minuto) return null;
    const candidates = [
      minuto.contenido,
      minuto.contenido_normal,
      minuto.id_titulo_minuto,
      minuto.titulo_minuto,
      minuto.html,
      minuto.content,
      minuto.body,
      minuto.text,
      minuto.raw,
      minuto.descripcion,
      (_a = minuto == null ? void 0 : minuto.data) == null ? void 0 : _a.contenido,
      (_b = minuto == null ? void 0 : minuto.data) == null ? void 0 : _b.html
    ];
    for (const c of candidates) {
      if (c === void 0 || c === null) continue;
      if (typeof c === "string" && c.trim() === "") continue;
      return c;
    }
    return null;
  };
  const parseContenidoField = (contenidoField) => {
    if (contenidoField === null || contenidoField === void 0) return "";
    if (typeof contenidoField === "object") {
      return String(extractContentFromParsed(contenidoField) ?? "");
    }
    if (typeof contenidoField === "string") {
      const trimmed = contenidoField.trim();
      if (trimmed === "" || trimmed.toLowerCase() === "null" || trimmed.toLowerCase() === "undefined") return "";
      try {
        const parsed = JSON.parse(trimmed);
        const extracted = extractContentFromParsed(parsed);
        return String(extracted ?? trimmed);
      } catch (e) {
        return trimmed;
      }
    }
    return "";
  };
  const contenidoemb = (contenido, embebido) => {
    let result = contenido ?? "";
    if (embebido && Array.isArray(embebido)) {
      embebido.forEach((embed, index) => {
        const placeholder = `{{EMBED_${index}}}`;
        if (embed && embed.html) {
          result = result.replace(placeholder, embed.html);
        }
      });
    }
    return result;
  };
  const minutosOrdenados = [...minutos].sort((a, b) => {
    return new Date(b.creado_en).getTime() - new Date(a.creado_en).getTime();
  });
  const FormattedDate = (date) => {
    try {
      const rawFormatted = format(new Date(date), "h:mm a", {
        locale: es
      });
      const lowerCased = rawFormatted.replace("AM", "a. m.").replace("PM", "p. m.");
      return lowerCased;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Hora no disponible";
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-4", children: minutosOrdenados.map((minuto) => {
    const raw = getRawContenido(minuto);
    const contenidoHtml = parseContenidoField(raw);
    let contenidoWithAudio = parseAudioEmbeds(contenidoHtml);
    const contenidoConEmbeds = contenidoemb(contenidoWithAudio, minuto.embebido);
    const sanitized = typeof window !== "undefined" ? DOMPurify.sanitize(contenidoConEmbeds, {
      ADD_TAGS: ["iframe", "audio", "source"],
      ADD_ATTR: [
        "allow",
        "allowfullscreen",
        "frameborder",
        "src",
        "width",
        "height",
        "controls"
      ]
    }) : contenidoConEmbeds;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "border-l-4 border-headerColor p-4 ",
        style: { borderTop: "none", borderRight: "none", borderBottom: "none" },
        children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold text-lg mb-2", children: FormattedDate(minuto.creado_en) }),
          /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: sanitized } }),
          minuto.audios && /* @__PURE__ */ jsxs("audio", { controls: true, className: "mt-2 w-full", children: [
            /* @__PURE__ */ jsx("source", { src: minuto.audios, type: "audio/mpeg" }),
            "Tu navegador no soporta audio HTML5."
          ] })
        ]
      },
      minuto.id
    );
  }) });
};
export {
  Minuto as M,
  NoticiaMultimedia as N,
  ShareButtons as S
};
