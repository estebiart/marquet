import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, useForm } from "@inertiajs/react";
import { L as Layout } from "./Layout-CjpJ7LUY.js";
import "react";
import "axios";
import "sweetalert2";
import "@headlessui/react";
import "@react-oauth/google";
import "jwt-decode";
import "clsx";
import "lucide-react";
import "framer-motion";
import "aos";
const Settings = () => {
  const { user } = usePage().props;
  const { data, setData, post } = useForm({
    current_password: "",
    new_password: "",
    password_confirmation: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/updatesettings", { data });
  };
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("div", { className: "p-4 max-w-sm mx-auto sm:mx-0 sm:ml-auto sm:mr-auto mb-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-2", children: "AJUSTES" }),
    /* @__PURE__ */ jsx("p", { className: "h-2 bg-internationalCyan w-5/6 mb-6" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Correo",
          value: user == null ? void 0 : user.email,
          disabled: true,
          className: "mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          name: "current_password",
          placeholder: "Contraseña actual",
          value: data.current_password,
          onChange: (e) => setData("current_password", e.target.value),
          className: "mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          required: true,
          name: "password",
          placeholder: "Contraseña nueva",
          value: data.new_password,
          onChange: (e) => setData("new_password", e.target.value),
          className: "mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          required: true,
          name: "password_confirmation",
          placeholder: "Confirmar contraseña",
          value: data.password_confirmation,
          onChange: (e) => setData("password_confirmation", e.target.value),
          className: "mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "w-2/6 mt-2 bg-lightViolet text-white py-2 rounded-full hover:bg-internationalCyan",
          children: "Actualizar"
        }
      ) })
    ] })
  ] }) });
};
export {
  Settings as default
};
