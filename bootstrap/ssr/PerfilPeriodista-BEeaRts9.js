import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { L as Layout } from "./Layout-CjpJ7LUY.js";
import { b as bucketUrl, g as getBackgroundColor } from "./utils-ErVxQVks.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { N as NewsCard } from "./NewsCard-lVm2KxmN.js";
import "sweetalert2";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "clsx";
import "lucide-react";
import "framer-motion";
import "aos";
const obtenerPerfilPeriodista = async (slug) => {
  try {
    const response = await axios.get(`/mostrarperiodista/${slug}`);
    ;
    return {
      usuario: response.data.usuario,
      otrosUsuarios: response.data.otros_usuarios
    };
  } catch (error) {
    console.error("Error al obtener el perfil del periodista:", error);
    throw error;
  }
};
const obtenerNoticiasPorAutor = async (authorId, page = 1, perPage = 10) => {
  try {
    const response = await axios.get("/noticias/author", {
      params: {
        author_id: authorId,
        page,
        per_page: perPage
      }
    });
    return response.data;
  } catch (err) {
    console.error("Error al obtener noticias por autor:", err);
    throw err;
  }
};
const PerfilPeriodista = () => {
  let slug = "";
  let origin = "";
  let pathname = "";
  if (typeof window !== "undefined") {
    pathname = window.location.pathname;
    slug = pathname.split("/").pop() || "";
    origin = window.location.origin;
  }
  const [usuario, setUsuario] = useState(null);
  const [otrosUsuarios, setOtrosUsuarios] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await obtenerPerfilPeriodista(slug);
        setUsuario(data.usuario);
        setOtrosUsuarios(data.otrosUsuarios);
      } catch (err) {
        console.error(err);
      }
    };
    cargarDatos();
  }, [slug]);
  useEffect(() => {
    const cargarNoticiasIniciales = async () => {
      if (!usuario) return;
      try {
        const data = await obtenerNoticiasPorAutor(usuario.id, 1);
        setNoticias(data.data);
        setCurrentPage(data.current_page);
        setLastPage(data.last_page);
      } catch (err) {
        console.error("Error al cargar noticias iniciales:", err);
      }
    };
    cargarNoticiasIniciales();
  }, [usuario]);
  const cargarMasNoticias = async () => {
    if (!usuario || currentPage >= lastPage || loading) return;
    setLoading(true);
    try {
      const data = await obtenerNoticiasPorAutor(usuario.id, currentPage + 1);
      setNoticias((prevNoticias) => [...prevNoticias, ...data.data]);
      setCurrentPage(data.current_page);
    } catch (err) {
      console.error("Error al cargar más noticias:", err);
    } finally {
      setLoading(false);
    }
  };
  if (!usuario) return null;
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-gradient-to-br bg-blue-50 to-white px-6 py-10 mt-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-md bg-white/30 border border-white/20 rounded-3xl shadow-2xl max-w-5xl mx-auto p-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 transition-all duration-500", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "relative flex justify-center w-full md:w-1/3",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              className: "w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl z-10",
              src: usuario.perfil ? `${bucketUrl}/${usuario.perfil}` : "/img/periodista_default.webp",
              alt: usuario.name
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 text-center md:text-left space-y-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-800 drop-shadow-sm", children: usuario.name }),
        usuario.urls && Array.isArray(usuario.urls) && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center md:justify-start gap-2", children: usuario.urls.map((red, index) => /* @__PURE__ */ jsx(
          "a",
          {
            href: red.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 hover:underline",
            children: red.nombre
          },
          index
        )) }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-lg", children: usuario.bio }),
        usuario.arl_url && /* @__PURE__ */ jsx(
          Link,
          {
            href: usuario.arl_url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition duration-300",
            children: "Ver ARL"
          }
        )
      ] })
    ] }),
    noticias.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-16 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-center text-gray-800", children: "Noticias publicadas" }),
      /* @__PURE__ */ jsx("ul", { className: "grid gap-6 md:grid-cols-2", children: noticias.map((noticia) => {
        var _a, _b;
        const categoria = (_b = (_a = noticia == null ? void 0 : noticia.categorias) == null ? void 0 : _a[0]) == null ? void 0 : _b.descripcion;
        return /* @__PURE__ */ jsx(
          NewsCard,
          {
            author: { name: usuario.name },
            category: categoria ? categoria : "",
            title: noticia == null ? void 0 : noticia.titulo,
            iddado: noticia.id,
            description: noticia.descripcion,
            imageUrl: `${bucketUrl}/${noticia.imagen_movil || noticia.imagen || noticia.imagen_video}`,
            accentColor: getBackgroundColor(categoria ? categoria : ""),
            slug: noticia.slug,
            variant: "banner"
          },
          noticia.id
        );
      }) }),
      currentPage < lastPage && /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-8", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: cargarMasNoticias,
          className: "bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300",
          disabled: loading,
          children: loading ? "Cargando..." : "Cargar más"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-center text-gray-800", children: "Otros periodistas de minuto60" }),
      /* @__PURE__ */ jsx(
        "ul",
        {
          className: "grid gap-6 md:grid-cols-2",
          children: otrosUsuarios.map((periodista) => /* @__PURE__ */ jsx("li", { className: "  shadow p-4 flex items-center space-x-4", children: /* @__PURE__ */ jsxs("a", { href: `${origin}/periodista/${periodista.slug}`, className: " hover:text-rose-600", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: periodista.perfil ? `${bucketUrl}/${periodista.perfil}` : "/img/periodista_default.webp",
                alt: periodista.name,
                className: "w-16 h-16 object-cover rounded-full border-2 border-gray-200"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: periodista.name }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: periodista.bio })
            ] })
          ] }) }, periodista.id))
        }
      )
    ] })
  ] }) });
};
export {
  PerfilPeriodista as default
};
