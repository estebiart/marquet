import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { usePage, useForm } from "@inertiajs/react";
import { L as Layout } from "./Layout-7cMQKDgR.js";
import axios from "axios";
import { route as route$1 } from "ziggy-js";
import "sweetalert2";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "clsx";
import "lucide-react";
import "framer-motion";
import "aos";
const Ziggy = { "url": "http://18.223.219.35", "port": null, "defaults": {}, "routes": { "filament.exports.download": { "uri": "filament/exports/{export}/download", "methods": ["GET", "HEAD"], "parameters": ["export"], "bindings": { "export": "id" } }, "filament.imports.failed-rows.download": { "uri": "filament/imports/{import}/failed-rows/download", "methods": ["GET", "HEAD"], "parameters": ["import"], "bindings": { "import": "id" } }, "filament.admin.auth.login": { "uri": "admin/login", "methods": ["GET", "HEAD"] }, "filament.admin.auth.logout": { "uri": "admin/logout", "methods": ["POST"] }, "filament.admin.pages.dashboard": { "uri": "admin", "methods": ["GET", "HEAD"] }, "filament.admin.resources.activity-logs.index": { "uri": "admin/activity-logs", "methods": ["GET", "HEAD"] }, "filament.admin.resources.categorias.index": { "uri": "admin/categorias", "methods": ["GET", "HEAD"] }, "filament.admin.resources.categorias.create": { "uri": "admin/categorias/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.categorias.edit": { "uri": "admin/categorias/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.categorias.view": { "uri": "admin/categorias/{record}", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.etiqueta-destacadas.index": { "uri": "admin/etiqueta-destacadas", "methods": ["GET", "HEAD"] }, "filament.admin.resources.etiqueta-destacadas.create": { "uri": "admin/etiqueta-destacadas/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.etiqueta-destacadas.edit": { "uri": "admin/etiqueta-destacadas/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.locations.index": { "uri": "admin/locations", "methods": ["GET", "HEAD"] }, "filament.admin.resources.locations.create": { "uri": "admin/locations/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.locations.edit": { "uri": "admin/locations/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.media-items.index": { "uri": "admin/media-items", "methods": ["GET", "HEAD"] }, "filament.admin.resources.media-items.create": { "uri": "admin/media-items/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.media-items.edit": { "uri": "admin/media-items/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.media.index": { "uri": "admin/media", "methods": ["GET", "HEAD"] }, "filament.admin.resources.media.create": { "uri": "admin/media/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.media.edit": { "uri": "admin/media/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.minutos.index": { "uri": "admin/minutos", "methods": ["GET", "HEAD"] }, "filament.admin.resources.minutos.create": { "uri": "admin/minutos/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.minutos.edit": { "uri": "admin/minutos/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.noticias.index": { "uri": "admin/noticias", "methods": ["GET", "HEAD"] }, "filament.admin.resources.noticias.create": { "uri": "admin/noticias/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.noticias.edit": { "uri": "admin/noticias/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.opinions.index": { "uri": "admin/opinions", "methods": ["GET", "HEAD"] }, "filament.admin.resources.opinions.create": { "uri": "admin/opinions/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.opinions.edit": { "uri": "admin/opinions/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.pages.index": { "uri": "admin/pages", "methods": ["GET", "HEAD"] }, "filament.admin.resources.pages.create": { "uri": "admin/pages/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.pages.edit": { "uri": "admin/pages/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.page-types.index": { "uri": "admin/page-types", "methods": ["GET", "HEAD"] }, "filament.admin.resources.page-types.create": { "uri": "admin/page-types/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.page-types.edit": { "uri": "admin/page-types/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.perfil-periodistas.index": { "uri": "admin/perfil-periodistas", "methods": ["GET", "HEAD"] }, "filament.admin.resources.perfil-periodistas.create": { "uri": "admin/perfil-periodistas/create", "methods": ["GET", "HEAD"] }, "filament.admin.resources.perfil-periodistas.edit": { "uri": "admin/perfil-periodistas/{record}/edit", "methods": ["GET", "HEAD"], "parameters": ["record"] }, "filament.admin.resources.subscribeds.index": { "uri": "admin/subscribeds", "methods": ["GET", "HEAD"] }, "filamentblog.post.index": { "uri": "blogs", "methods": ["GET", "HEAD"] }, "filamentblog.post.all": { "uri": "blogs/all", "methods": ["GET", "HEAD"] }, "filamentblog.post.search": { "uri": "blogs/search", "methods": ["GET", "HEAD"] }, "filamentblog.post.show": { "uri": "blogs/{post}", "methods": ["GET", "HEAD"], "parameters": ["post"], "bindings": { "post": "slug" } }, "filamentblog.post.subscribe": { "uri": "blogs/subscribe", "methods": ["POST"] }, "filamentblog.category.post": { "uri": "blogs/categories/{category}", "methods": ["GET", "HEAD"], "parameters": ["category"], "bindings": { "category": "slug" } }, "filamentblog.tag.post": { "uri": "blogs/tags/{tag}", "methods": ["GET", "HEAD"], "parameters": ["tag"], "bindings": { "tag": "slug" } }, "filamentblog.comment.store": { "uri": "blogs/posts/{post}/comment", "methods": ["POST"], "parameters": ["post"], "bindings": { "post": "slug" } }, "filamentblog.post.login": { "uri": "blogs/login", "methods": ["GET", "HEAD"] }, "sanctum.csrf-cookie": { "uri": "sanctum/csrf-cookie", "methods": ["GET", "HEAD"] }, "livewire.update": { "uri": "livewire/update", "methods": ["POST"] }, "livewire.upload-file": { "uri": "livewire/upload-file", "methods": ["POST"] }, "livewire.preview-file": { "uri": "livewire/preview-file/{filename}", "methods": ["GET", "HEAD"], "parameters": ["filename"] }, "Home": { "uri": "/", "methods": ["GET", "HEAD"] }, "perfil": { "uri": "cliente/perfil", "methods": ["GET", "HEAD"] }, "settings": { "uri": "cliente/settings", "methods": ["GET", "HEAD"] }, "noticias.generateUploadUrl": { "uri": "noticias/generate-upload-url", "methods": ["POST"] }, "noticias.confirmUpload": { "uri": "videos/confirm-upload", "methods": ["POST"] }, "noticias.guardar": { "uri": "noticias/guardar", "methods": ["POST"] }, "noticias.ver": { "uri": "noticias/ver", "methods": ["GET", "HEAD"] }, "Mostrar": { "uri": "mostrarmasbuscar", "methods": ["POST"] }, "noticias.categoria": { "uri": "{categoria}", "methods": ["GET", "HEAD"], "parameters": ["categoria"] }, "noticias.region": { "uri": "noticias/region", "methods": ["GET", "HEAD"] }, "Buscar": { "uri": "buscar", "methods": ["GET", "HEAD"] }, "noticias.preview": { "uri": "noticias/preview/{noticia}", "methods": ["GET", "HEAD"], "parameters": ["noticia"], "bindings": { "noticia": "id" } }, "noticia.amp": { "uri": "amp/{categoria}/{slug}/{id}", "methods": ["GET", "HEAD"], "parameters": ["categoria", "slug", "id"] }, "noticia.show": { "uri": "{categoria}/{slug}/{id}", "methods": ["GET", "HEAD"], "parameters": ["categoria", "slug", "id"] }, "storage.local": { "uri": "storage/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
function route(name, params = {}, absolute = true, config = Ziggy) {
  return route$1(name, params, absolute, config);
}
const Perfil = () => {
  const { user } = usePage().props;
  const [uploading, setUploading] = useState(false);
  const { data, setData, post } = useForm({
    name: "",
    genero: "",
    fecha_nacimiento: "",
    ciudad: "",
    telefono: "",
    image: ""
  });
  const fileInputRef = useRef(null);
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  useEffect(() => {
    if (user) {
      setData({
        name: user.name || "",
        genero: user.genero || "",
        fecha_nacimiento: user.fecha_nacimiento || "",
        ciudad: user.ciudad || "",
        telefono: user.telefono || "",
        image: user.profile_image || ""
      });
    }
  }, [user]);
  const handleFileChange = async (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    try {
      setUploading(true);
      const { data: data2 } = await axios.post(
        route("get-presigned-url").toString(),
        {
          fileName: file.name,
          fileType: file.type
        }
      );
      const uploadUrl = data2.uploadUrl.url;
      const filePath = data2.filePath;
      await axios.put(uploadUrl, file, {
        headers: { "Content-Type": file.type }
      });
      const S3_BUCKET_URL = "https://minutobucket.s3.us-east-2.amazonaws.com";
      const imageUrl = `${S3_BUCKET_URL}/${filePath}`;
      setData("image", imageUrl);
    } catch (error) {
    } finally {
      setUploading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("genero", data.genero);
    formData.append("fecha_nacimiento", data.fecha_nacimiento);
    formData.append("ciudad", data.ciudad);
    formData.append("telefono", data.telefono);
    post("/updateprofile", {
      data: formData,
      onSuccess: () => {
        alert("¡Bien hecho! El perfil ha sido actualizado.");
      }
    });
  };
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("div", { className: "p-4 max-w-sm mx-auto sm:mx-0 sm:ml-auto sm:mr-auto mb-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-2", children: "PERFIL" }),
    /* @__PURE__ */ jsx("div", { className: "h-2 bg-lightViolet w-5/6 mb-6" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "name",
          value: data.name,
          onChange: (e) => setData("name", e.target.value),
          placeholder: "Nombres y Apellidos*",
          className: "mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ jsxs(
          "select",
          {
            name: "genero",
            value: data.genero,
            onChange: (e) => setData("genero", e.target.value),
            className: "mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Genero" }),
              /* @__PURE__ */ jsx("option", { value: "Masculino", children: "Masculino" }),
              /* @__PURE__ */ jsx("option", { value: "Femenino", children: "Femenino" }),
              /* @__PURE__ */ jsx("option", { value: "Otro", children: "Otro" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "date",
            name: "fecha_nacimiento",
            value: data.fecha_nacimiento,
            onChange: (e) => setData("fecha_nacimiento", e.target.value),
            placeholder: "Fecha de Nacimiento",
            className: "mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "ciudad",
            value: data.ciudad,
            onChange: (e) => setData("ciudad", e.target.value),
            placeholder: "Ciudad",
            className: "mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "tel",
          name: "telefono",
          value: data.telefono,
          onChange: (e) => setData("telefono", e.target.value),
          placeholder: "Telefono",
          className: "mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-4", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            accept: "image/*",
            ref: fileInputRef,
            onChange: handleFileChange,
            className: "hidden",
            disabled: uploading
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleClick,
            className: `px-4 py-2    font-medium text-white bg-lightViolet rounded-full hover:bg-internationalCyan transition-all ${uploading ? "opacity-50 cursor-not-allowed" : ""}`,
            disabled: uploading,
            children: uploading ? "Subiendo..." : "Seleccionar imagen"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "w-3/6 mt-2 bg-lightViolet text-white py-2 rounded-full hover:bg-internationalCyan",
          children: "Actualizar"
        }
      ) })
    ] })
  ] }) });
};
export {
  Perfil as default
};
