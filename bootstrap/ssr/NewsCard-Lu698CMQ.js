import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { router } from "@inertiajs/react";
function NewsCard({
  category,
  title,
  description,
  author,
  imageUrl,
  imageUrlMovil,
  subvariant = "full",
  accentColor = "bg-purple-900",
  iddado,
  slug,
  title_imagen = "",
  fecha = "",
  updated_at = "",
  showPlayIcon = false
}) {
  const handleClick = () => {
    router.visit(`/${category}/${slug}/${iddado}`);
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      onClick: handleClick,
      className: `flex  gap-2 cursor-pointer ${subvariant === "stretch" ? "flex-row" : "flex-col"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ jsxs("picture", { children: [
            /* @__PURE__ */ jsx(
              "source",
              {
                media: "(max-width: 768px)",
                srcSet: imageUrlMovil && imageUrlMovil.trim() !== "" && !imageUrlMovil.includes("undefined") && !imageUrlMovil.includes("null") && !imageUrlMovil.endsWith("/null") && !imageUrlMovil.endsWith("/undefined") ? imageUrlMovil : imageUrl
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                fetchPriority: subvariant === "fetchpriority" ? "high" : "low",
                loading: subvariant === "principal" ? void 0 : "lazy",
                src: imageUrl,
                alt: title,
                title: title_imagen || title,
                className: "aspect-video w-full object-cover"
              }
            )
          ] }),
          showPlayIcon && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxs("span", { className: "relative inline-flex items-center justify-center", children: [
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
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex-1 ",
            children: [
              /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: `h-[16px] w-[12px] mt-1 ${accentColor} absolute` }),
                /* @__PURE__ */ jsx("p", { className: "pl-[20px]", children: category })
              ] }) }),
              /* @__PURE__ */ jsx("h3", { className: `${subvariant === "principal" ? "md:text-[46px]" : ""}`, children: title }),
              /* @__PURE__ */ jsx("p", { children: description }),
              /* @__PURE__ */ jsxs("p", { className: "mt-2", children: [
                /* @__PURE__ */ jsx("span", { className: "", children: "Por" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: author == null ? void 0 : author.name })
              ] }),
              (fecha || updated_at) && /* @__PURE__ */ jsxs("p", { className: "text-gray-500 text-sm mt-1", children: [
                fecha && /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Fecha:",
                  " ",
                  new Date(fecha).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })
                ] }),
                updated_at && /* @__PURE__ */ jsxs(Fragment, { children: [
                  " | ",
                  "Actualizado:",
                  " ",
                  new Date(updated_at).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  NewsCard as N
};
