import { jsxs, jsx, Fragment as Fragment$1 } from "react/jsx-runtime";
import { useForm, router, usePage, Head } from "@inertiajs/react";
import { useState, Fragment, useRef, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Transition, Dialog } from "@headlessui/react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "clsx";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
function Footer() {
  useState();
  useForm({
    email: "",
    informacion: "",
    terminosCondiciones: false,
    tratamientoDatos: false
  });
  const categories2 = [
    { name: "Colombia", slug: "colombia" },
    { name: "Deportes", slug: "deportes" },
    { name: "Mundo", slug: "mundo" },
    { name: "Economía", slug: "economia" },
    { name: "Investigación", slug: "investigacion" },
    { name: "Bogotá", slug: "bogota" },
    { name: "Política", slug: "politica" },
    { name: "Judicial", slug: "judicial" },
    { name: "Vida moderna", slug: "vida-moderna" },
    { name: "Entretenimiento y cultura", slug: "entretenimiento-cultura" }
  ];
  return /* @__PURE__ */ jsxs("footer", { className: "w-full bg-black text-white px-5 pt-12 pb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            src: "/img/logo-min-60.png",
            alt: "Logo Minuto60",
            className: "w-[300px] mb-6",
            title: "Logo Minuto60"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("a", { href: "https://whatsapp.com/channel/0029Vb6I0g4KrWQpVHQkm742", target: "_blank", rel: "noopener noreferrer", title: " ver en whatsapp", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/Icon_WP.png", alt: "WhatsApp", className: "w-6 h-6", title: "whatsapp" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/minuto60com/", target: "_blank", rel: "noopener noreferrer", title: " ver en facebook", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_fb.png", alt: "Facebook", className: "w-6 h-6", title: "facebook" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.x.com/minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "ver en X", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_x.png", alt: "X", className: "w-6 h-6", title: "X" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "ver en Instagram", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_IG.png", alt: "Instagram", className: "w-6 h-6", title: "Instagram" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "ver en YouTube", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_YT.png", alt: "YouTube", className: "w-6 h-6", title: "YouTube" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "ver en TikTok", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/Icon-TikTok.png", alt: "TikTok", className: "w-6 h-6", title: "TikTok" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "ver en LinkedIn", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_linkedin.png", alt: "LinkedIn", className: "w-5 h-5", title: "LinkedIn" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-center", children: "PAUTE CON NOSOTROS" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block w-px h-[240px] bg-white " }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-2 w-full max-w-sm", children: categories2.map(({ name, slug }) => /* @__PURE__ */ jsx(
        "a",
        {
          href: `/${slug}`,
          className: "tracking-wider pb-1 transition-colors duration-200 hover:text-white hover:border-b-2 hover:border-white",
          target: "_blank",
          title: slug,
          children: name
        },
        slug
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap justify-center text-xs text-white gap-5", children: [
      /* @__PURE__ */ jsx("a", { href: "/politica-de-privacidad", className: "hover:underline pl-3", title: "Política de privacidad", children: "POLÍTICAS DE PRIVACIDAD" }),
      /* @__PURE__ */ jsx("span", { className: "border-l-2 border-white h-4" }),
      /* @__PURE__ */ jsx("a", { href: "/terminos-y-condiciones", className: "hover:underline pl-3", title: "Términos y condiciones", children: "TÉRMINOS Y CONDICIONES" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 text-center text-xs", children: "COPYRIGHT © - MINUTO 60 2025" }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://tracker.metricool.com/c3po.jpg?hash=e2e0b56c37cab8992e2d2a754e5a3d31",
        style: { display: "none" },
        alt: "metricool pixel"
      }
    )
  ] });
}
const login = async (data) => {
  try {
    const response = await axios.post("/cliente/login", data);
    ;
    if (response.data.status == "success") {
      router.reload();
    }
    return response;
  } catch (err) {
    return err.response.data;
  }
};
const loginGoogle = async (data) => {
  try {
    const res = await axios.post("/cliente/login", { userGo: data, red_social: "google" });
    ;
    if (res.data.status === "success") {
      window.location.href = "/";
    }
  } catch (err) {
    return err.response.data;
  }
};
const register = async (data) => {
  try {
    const response = await axios.post("/cliente/register", data);
    ;
    if (response.data.status == "success") {
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        showConfirmButton: false,
        timer: 1500
      });
    }
    return response.data;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.errors) {
      Swal.fire({
        icon: "error",
        title: "Error al registrarse",
        text: Object.values(err.response.data.errors).join(", "),
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al registrarse",
        showConfirmButton: false,
        timer: 1500
      });
    }
    return err.response.data;
  }
};
const interestsList = [
  "Política",
  "Última Hora",
  "Deportes",
  "Investigación",
  "Música",
  "Economía",
  "Entretenimiento",
  "Cine",
  "Tendencias",
  "Opinión"
];
const YourInterests = ({ isOpen, onClose }) => {
  const [selectedInterests, setSelectedInterests] = useState({});
  if (!isOpen) return null;
  const toggleInterest = (interest) => {
    setSelectedInterests((prev) => ({
      ...prev,
      [interest]: !prev[interest]
    }));
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white w-full max-w-lg rounded-2xl shadow-lg relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-internationalCyan text-white py-3 w-full text-center rounded-t-2xl", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "¿Cuáles son tus intereses?" }) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "absolute top-3 right-3 text-gray-600 hover:text-gray-800",
        children: "✖"
      }
    ),
    /* @__PURE__ */ jsx("form", { className: "mt-4 p-4 space-y-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4   ", children: interestsList.map((interest) => /* @__PURE__ */ jsxs("label", { className: "flex items-center cursor-pointer", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `relative w-9 h-4 rounded-full transition ${selectedInterests[interest] ? "bg-lightViolet" : "bg-gray-300"}`,
          onClick: () => toggleInterest(interest),
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute w-4 h-4 bg-white rounded-full transition transform ${selectedInterests[interest] ? "translate-x-5" : "translate-x-0"}`
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "ml-2 text-lightViolet", children: interest })
    ] }, interest)) }) }),
    /* @__PURE__ */ jsx("div", { className: "p-4 flex justify-center", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "bg-lightViolet text-white py-2 px-6 rounded-full hover:bg-purple-800 transition",
        children: "Finalizar"
      }
    ) })
  ] }) });
};
const ciudades = [
  "Bogotá",
  "Medellín",
  "Cali",
  "Barranquilla",
  "Cartagena",
  "Bucaramanga",
  "Pereira",
  "Santa Marta",
  "Cúcuta",
  "Manizales",
  "Villavicencio",
  "Pasto",
  "Armenia",
  "Montería",
  "Neiva"
];
const ModalRegister = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { data, setData } = useForm({
    email: "",
    name: "",
    password: "",
    genero: "",
    ciudad: "",
    fecha_nacimiento: ""
  });
  const submit = (e) => {
    e.preventDefault();
    register(data);
    onClose();
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== data.password) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
    }
  };
  return /* @__PURE__ */ jsx(Transition, { appear: true, show: isOpen, as: Fragment, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "fixed inset-0 z-50 overflow-y-auto", onClose, children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50" }),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "w-full max-w-xl bg-white rounded-2xl", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-headerColor text-white text-center p-4 rounded-t-2xl", children: /* @__PURE__ */ jsx(Dialog.Title, { className: "text-xl font-semibold", children: "Registrarme" }) }),
            /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  required: true,
                  type: "email",
                  placeholder: "Correo*",
                  className: "w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet",
                  value: data.email,
                  onChange: (e) => setData("email", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  placeholder: "Nombres y Apellidos*",
                  className: "w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet",
                  value: data.name,
                  onChange: (e) => setData("name", e.target.value)
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    className: "w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet",
                    value: data.genero,
                    onChange: (e) => setData("genero", e.target.value),
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Género" }),
                      /* @__PURE__ */ jsx("option", { value: "masculino", children: "Masculino" }),
                      /* @__PURE__ */ jsx("option", { value: "femenino", children: "Femenino" }),
                      /* @__PURE__ */ jsx("option", { value: "otro", children: "Otro" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    required: true,
                    value: data.fecha_nacimiento,
                    onChange: (e) => setData("fecha_nacimiento", e.target.value),
                    type: "date",
                    className: "w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    className: "w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet",
                    value: data.ciudad,
                    onChange: (e) => setData("ciudad", e.target.value),
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Selecciona una ciudad" }),
                      ciudades.map((ciudad) => /* @__PURE__ */ jsx("option", { value: ciudad, children: ciudad }, ciudad))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    required: true,
                    value: data.password,
                    onChange: (e) => setData("password", e.target.value),
                    type: "password",
                    placeholder: "Contraseña*",
                    className: "w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    required: true,
                    type: "password",
                    value: confirmPassword,
                    onChange: handleConfirmPasswordChange,
                    placeholder: "Confirmar Contraseña*",
                    className: "w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                  }
                ),
                error && /* @__PURE__ */ jsx("p", { className: "text-red-500    mt-1", children: error })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                "button",
                {
                  disabled: error !== "" || data.password === "" || confirmPassword === "",
                  className: `w-2/6 mt-2 py-2 rounded-full ${error || data.password === "" || confirmPassword === "" ? "bg-gray-400 cursor-not-allowed" : "bg-lightViolet hover:bg-internationalCyan text-white"}`,
                  children: "Siguiente"
                }
              ) })
            ] }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(YourInterests, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
    ] })
  ] }) });
};
const GoogleAuthButton = () => {
  const clientId = void 0;
  const handleSuccess = async (response) => {
    if (response.credential) {
      const token = response.credential;
      try {
        const user = jwtDecode(token);
        loginGoogle(user);
      } catch (error) {
      }
    }
  };
  return /* @__PURE__ */ jsx(GoogleOAuthProvider, { clientId, children: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
    GoogleLogin,
    {
      theme: "outline",
      size: "large",
      shape: "pill",
      logo_alignment: "center",
      width: "250",
      onSuccess: handleSuccess
    }
  ) }) });
};
const ModalLogin = ({ isOpen, onClose }) => {
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const submit = async (e) => {
    e.preventDefault();
    setErrors({});
    await login(data);
  };
  const openRegister = () => {
    setIsOpenRegister(true);
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white w-full max-w-lg rounded-2xl shadow-lg relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-headerColor text-white py-3 w-full text-center rounded-t-2xl", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Iniciar sesión" }) }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, className: "absolute top-3 right-3 text-gray-600 hover:text-gray-800", children: "✖" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-4 p-4 space-y-4", children: [
        /* @__PURE__ */ jsx("input", { type: "email", value: data.email, onChange: (e) => setData({ ...data, email: e.target.value }), placeholder: "Correo", className: "w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet", required: true }),
        errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.email }),
        /* @__PURE__ */ jsx("input", { type: "password", value: data.password, onChange: (e) => setData({ ...data, password: e.target.value }), placeholder: "Contraseña", className: "w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet", required: true }),
        errors.password && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.password }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center   ", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center cursor-pointer", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `relative w-9 h-4 rounded-full transition ${isChecked ? "bg-lightViolet" : "bg-gray-300"}`,
                onClick: () => setIsChecked(!isChecked),
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `absolute w-4 h-4 bg-white rounded-full transition transform ${isChecked ? "translate-x-5" : "translate-x-0"}`
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "ml-2 text-lightViolet", children: "Recordar" })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "text-lightViolet hover:underline", children: "Olvidé mi contraseña" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center ", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "w-2/6 bg-lightViolet text-white py-2 rounded-full hover:bg-internationalCyan", children: "Entrar" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center mt-2", children: [
          /* @__PURE__ */ jsx("hr", { className: "border-lightViolet w-36" }),
          /* @__PURE__ */ jsx("span", { className: "px-2 text-lightViolet", children: "o" }),
          /* @__PURE__ */ jsx("hr", { className: "border-lightViolet w-36" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-lightViolet flex flex-col sm:flex-row items-center justify-center gap-2 mt-2 w-full", children: /* @__PURE__ */ jsx(GoogleAuthButton, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-headerColor p-4", children: /* @__PURE__ */ jsxs("span", { className: "text-white", children: [
        "No tengo cuenta, quiero ",
        /* @__PURE__ */ jsx("b", { className: "text-white hover:underline", onClick: openRegister, children: "REGISTRARME" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(ModalRegister, { isOpen: isOpenRegister, onClose: () => setIsOpenRegister(false) })
  ] });
};
const Sidebar$1 = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;
  const { categoria } = usePage().props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getBackgroundColor = () => {
    switch (categoria) {
      case "internacional":
        return "bg-internationalCyan";
      case "deportes":
        return "bg-sportsYellow";
      case "nacional":
        return "bg-lightViolet";
      case "entretenimiento":
        return "bg-entreRed";
      case "investigación":
        return "bg-lightViolet";
      case "economía":
        return "bg-economicBlue";
      default:
        return "bg-headerColor";
    }
  };
  const handleClick = () => {
    router.visit(`/cliente/logout`);
  };
  return /* @__PURE__ */ jsxs("div", { className: `absolute top-full right-[-20px] mt-1 w-64 max-md:w-80 max-md:right-12 p-4 ${getBackgroundColor()}`, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "absolute top-2 right-[-20px]",
        children: "✖"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          loading: "lazy",
          src: user.perfil ? user.perfil : "/img/user.png",
          alt: user.name,
          className: "w-12 h-12 rounded-full"
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: user.name }),
        /* @__PURE__ */ jsx("p", { className: "   text-gray-300", children: user.email })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("li", { className: "flex items-center space-x-2 cursor-pointer hover:bg-purple-800 p-2 rounded", children: [
        /* @__PURE__ */ jsx("span", { className: "pi pi-user" }),
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("a", { href: "/cliente/perfil", children: "Mi perfil" }) })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "flex items-center space-x-2 cursor-pointer hover:bg-purple-800 p-2 rounded", children: [
        /* @__PURE__ */ jsx("span", { className: "pi pi-cog" }),
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("a", { href: "/cliente/settings", children: "Ajustes" }) })
      ] }),
      /* @__PURE__ */ jsxs(
        "li",
        {
          className: "flex items-center space-x-2 cursor-pointer hover:bg-purple-800 p-2 rounded",
          onClick: () => setIsModalOpen(true),
          children: [
            /* @__PURE__ */ jsx("span", { className: "pi pi-cog" }),
            /* @__PURE__ */ jsx("span", { children: "Mis intereses" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: `mt-6  ${getBackgroundColor()} shadow-xl border p-2 rounded-xl hover:bg-purple-800`,
        onClick: handleClick,
        children: "Cerrar Sesión"
      }
    ),
    /* @__PURE__ */ jsx(YourInterests, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
};
const Buscar = ({ isOpen, onClose, clasName }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    router.get(route("Buscar"), { search: searchTerm });
    onClose();
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "fixed inset-0 mt-5 md:mt-10 ml-14 md:ml-32 ",
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.3 },
      children: /* @__PURE__ */ jsx("div", { ref: containerRef, className: "w-64", children: /* @__PURE__ */ jsx("form", { onSubmit: handleSearch, className: "flex overflow-hidden", children: /* @__PURE__ */ jsx(
        "input",
        {
          ref: inputRef,
          type: "text",
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          placeholder: "Buscar",
          className: "w-52 md:w-full rounded-e-3xl border-0 text-black h-9",
          autoFocus: true
        }
      ) }) })
    }
  ) });
};
const categories = [
  { name: "Colombia", slug: "colombia" },
  { name: "Deportes", slug: "deportes" },
  { name: "Mundo", slug: "mundo" },
  { name: "Economía", slug: "economia" },
  { name: "Entretenimiento y cultura", slug: "entretenimiento-cultura" },
  { name: "Investigación", slug: "investigacion" },
  { name: "Bogotá", slug: "bogota" },
  { name: "Política", slug: "politica" },
  { name: "Judicial", slug: "judicial" },
  { name: "Vida moderna", slug: "vida-moderna" }
];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex md:h-[43px]", children: !isOpen && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "text-white bg-headerColor p-2",
        "aria-label": "Abrir menú de navegación",
        children: /* @__PURE__ */ jsx(Menu, { size: 26 })
      }
    ) }),
    isOpen && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "fixed top-0 left-0 h-full w-72 bg-headerColor text-white ", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 flex justify-center", children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "p-2 md:invisible",
              onClick: () => setIsOpenSearch(true),
              "aria-label": "Abrir búsqueda",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  src: "/img/search.svg",
                  alt: "Buscar",
                  className: "w-5 h-5",
                  title: "Buscar"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsOpen(false),
              className: "text-white p-2",
              "aria-label": "Cerrar menú",
              children: /* @__PURE__ */ jsx(X, { size: 28 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-4 px-6 py-4 overflow-y-scroll h-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 short:mb-[200px]", children: [
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h4", { className: " py-2 text-lg font-bold text-white uppercase tracking-widest border-b border-white", children: "Categorías" }) }),
          categories.map(({ name, slug }) => /* @__PURE__ */ jsx(
            "a",
            {
              href: `/${slug}`,
              title: slug,
              className: "tracking-wider  pb-1 transition-colors duration-200 hover:text-white hover:border-b-2 hover:border-white",
              children: name
            },
            slug
          )),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `/opinion`,
              className: "tracking-wider  pb-1 transition-colors duration-200 hover:text-white hover:border-b-2 hover:border-white",
              children: "Opinión"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.minuto60.com/elecciones-2026",
              className: "tracking-wider  pb-1 transition-colors duration-200 hover:text-white hover:border-b-2 hover:border-white",
              children: "Elecciones 2026"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "block md:hidden mb-[100px]", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 justify-center", children: [
            /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/minuto60com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_fb.png", alt: "Facebook", className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.x.com/minuto60com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_x.png", alt: "X", className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/minuto60com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_IG.png", alt: "Instagram", className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@minuto60com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_YT.png", alt: "YouTube", className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@minuto60com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/Icon-TikTok.png", alt: "TikTok", className: "w-6 h-6" }) })
          ] }) }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(Buscar, { isOpen: isOpenSearch, onClose: () => setIsOpenSearch(false) })
    ] })
  ] });
};
const Header = ({ setShowLiveStream, adImage, category_interna }) => {
  const [isOpen, setIsOpen] = useState(false);
  useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { auth } = usePage().props;
  const user = auth.user;
  const [category, setCategory] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateCategory = () => {
        const searchParams = new URLSearchParams(window.location.search);
        setCategory(searchParams.get("category") || "");
      };
      updateCategory();
      window.addEventListener("popstate", updateCategory);
      window.addEventListener("resize", updateCategory);
      return () => {
        window.removeEventListener("popstate", updateCategory);
        window.removeEventListener("resize", updateCategory);
      };
    }
  }, []);
  const handleClick = () => {
    router.visit(`/cliente/logout`);
  };
  return /* @__PURE__ */ jsxs("header", { className: "fixed z-30 flex-col w-full text-white bg-headerColor flex content-center items-center py-[10px] md:py-0", children: [
    /* @__PURE__ */ jsxs("nav", { className: "grid grid-cols-12 items-center md:px-20 w-full relative bg-headerColor", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-4 md:col-span-3 flex flex-col items-start relative", children: [
        /* @__PURE__ */ jsx("button", { className: "p-2 hidden md:flex mt-4", onClick: () => setIsOpen(true), "aria-label": "Abrir menú de navegación", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/search.svg", alt: "logo buscar", className: "w-5 h-5", title: "Buscar" }) }),
        /* @__PURE__ */ jsx(Sidebar, {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-4 md:col-span-6 flex justify-center", children: /* @__PURE__ */ jsx("a", { href: "/", title: "Minuto 60", children: /* @__PURE__ */ jsxs("picture", { children: [
        /* @__PURE__ */ jsx("source", { media: "(max-width: 767px)", srcSet: "/img/logo-min-60.png" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            src: "/img/logo-min-60.png",
            alt: "Logo Minuto 60",
            className: "w-[185px] max-md:w-[150px]",
            title: "Minuto 60"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-4 md:col-span-3 hidden md:flex flex-col items-end gap-2", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-end", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "https://whatsapp.com/channel/0029Vb6I0g4KrWQpVHQkm742 ", target: "_blank", rel: "noopener noreferrer", title: "WhatsApp", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/Icon_WP.png", alt: "WhatsApp", className: "w-6 h-6", title: "WhatsApp" }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "Facebook", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_fb.png", alt: "Facebook", className: "w-6 h-6", title: "Facebook" }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.x.com/minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "X", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_x.png", alt: "X", className: "w-6 h-6", title: "X" }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "Instagram", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_IG.png", alt: "Instagram", className: "w-6 h-6", title: "Instagram" }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "YouTube", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_YT.png", alt: "YouTube", className: "w-6 h-6", title: "YouTube" }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "TikTok", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/Icon-TikTok.png", alt: "TikTok", className: "w-6 h-6", title: "TikTok" }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/minuto60com/", target: "_blank", rel: "noopener noreferrer", title: "LinkedIn", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/img/icon_linkedin.png", alt: "LinkedIn", className: "w-5 h-5", title: "LinkedIn" }) }),
        (user == null ? void 0 : user.role) == "cliente" ? /* @__PURE__ */ jsxs("div", { children: [
          " ",
          /* @__PURE__ */ jsx("button", { onClick: handleClick, children: /* @__PURE__ */ jsx("img", { src: "/img/logouth.svg", alt: "user", className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsx("button", { onClick: () => setSidebarOpen(true), children: /* @__PURE__ */ jsx("img", { src: "/img/menu.svg", alt: "user", className: "w-6 h-6" }) })
        ] }) : /* @__PURE__ */ jsx("a", { onClick: () => setModalOpen(true), target: "_blank", rel: "noopener noreferrer", title: "Inicio de sesión", children: /* @__PURE__ */ jsx("img", { src: "/img/usuario.svg", alt: "user", className: "w-6 h-6", title: "usuario" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Buscar, { isOpen, onClose: () => setIsOpen(false) }),
    /* @__PURE__ */ jsx(ModalLogin, { isOpen: loginOpen, onClose: () => setLoginOpen(false) }),
    /* @__PURE__ */ jsx(
      Sidebar$1,
      {
        user: { name: user == null ? void 0 : user.name, email: user == null ? void 0 : user.email, perfil: user == null ? void 0 : user.perfil },
        isOpen: sidebarOpen,
        onClose: () => setSidebarOpen(false)
      }
    ),
    /* @__PURE__ */ jsx(ModalLogin, { isOpen: modalOpen, onClose: () => setModalOpen(false) })
  ] });
};
const LiveStream = () => {
  const API_KEY = "AIzaSyA2lDiIlQ7w1gvQ0BV9oL6UiqT6B7Ynf4A";
  const CHANNEL_ID = "UCNhQZK5-SZZXhp0RoNEwIAA";
  const [videoId, setVideoId] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let intervalId;
    const fetchLiveStream = async () => {
      var _a, _b;
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`Error al obtener datos: ${response.status}`);
        }
        const data = await response.json();
        const liveVideo = (_b = (_a = data.items[0]) == null ? void 0 : _a.id) == null ? void 0 : _b.videoId;
        if (liveVideo) {
          setVideoId(liveVideo);
          setError(null);
        } else {
          setVideoId(null);
          setError(null);
        }
      } catch (err) {
        setError(err == null ? void 0 : err.message);
      }
    };
    fetchLiveStream();
    intervalId = setInterval(fetchLiveStream, 3e4);
    return () => clearInterval(intervalId);
  }, [API_KEY, CHANNEL_ID]);
  const jsonLd = videoId ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Transmisión en vivo",
    "description": "Mira nuestra transmisión en vivo ahora.",
    "thumbnailUrl": `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    "uploadDate": (/* @__PURE__ */ new Date()).toISOString(),
    "isLiveBroadcast": true,
    "publication": [
      {
        "@type": "BroadcastEvent",
        "isLiveBroadcast": true,
        "startDate": (/* @__PURE__ */ new Date()).toISOString()
      }
    ],
    "embedUrl": `https://www.youtube.com/embed/${videoId}`,
    "publisher": {
      "@type": "Organization",
      "name": "Tu Canal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tudominio.com/logo.png"
      }
    }
  } : null;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Transmisión en vivo", children: videoId && /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
      }
    ) }),
    error && /* @__PURE__ */ jsx("p", { style: { color: "red" }, children: error }),
    videoId ? /* @__PURE__ */ jsx(
      "iframe",
      {
        loading: "lazy",
        width: "100%",
        height: "650",
        src: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
        frameBorder: "0",
        allow: "autoplay; encrypted-media",
        allowFullScreen: true,
        title: "YouTube Live Stream"
      }
    ) : !error && /* @__PURE__ */ jsx("p", { children: "No hay transmisiones en vivo en este momento." })
  ] });
};
function Layout({ children, category_interna, noIndex = true }) {
  const [showLiveStream, setShowLiveStream] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1e3 });
    }
  }, []);
  const { pages } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
      /* @__PURE__ */ jsx(Header, { category_interna, setShowLiveStream, adImage: pages == null ? void 0 : pages.ad }),
      showLiveStream && /* @__PURE__ */ jsx(LiveStream, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-1 z-1 py-[45px] lg:py-[95px] flex items-center flex-col max-w-[1280px] mx-auto", children })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Layout as L,
  LiveStream as a
};
