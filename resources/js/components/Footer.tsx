import React from "react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { create } from "@/services/SubscrivedServecie";

export function Footer() {
  const [validate, setValidate] = useState<any>();

  const { data, setData } = useForm({
    email: "",
    informacion: "",
    terminosCondiciones: false,
    tratamientoDatos: false,
  });
  const submit = async (e: any) => {
    e.preventDefault();
    const datavalidate = await create(data)
    setValidate(datavalidate);
  };

  const categories = [
    { name: "Colombia", slug: "colombia" },
    { name: "Deportes", slug: "deportes" },
    { name: "Mundo", slug: "mundo" },
    { name: "Economía", slug: "economia" },
    { name: "Investigación", slug: "investigacion" },
    { name: "Bogotá", slug: "bogota" },
    { name: "Política", slug: "politica" },
    { name: "Judicial", slug: "judicial" },
    { name: "Vida moderna", slug: "vida-moderna" },
    { name: "Entretenimiento y cultura", slug: "entretenimiento-cultura" },
  ];
  return (
    <footer className="w-full bg-black text-white px-5 pt-12 pb-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-10">

        {/* Logo y redes */}
        <div className="flex flex-col items-center">
          <img
            width={276}
            height={80}
            loading="lazy"
            src="/img/logo-min-60.png"
            alt="Logo Minuto60"
            className="w-[300px] mb-6"
            title="Logo Minuto60"
          />
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://whatsapp.com/channel/0029Vb6I0g4KrWQpVHQkm742" target="_blank" rel="noopener noreferrer" title=" ver en whatsapp">
              <img loading="lazy" src="/img/Icon_WP.png" alt="WhatsApp" className="w-6 h-6" title="whatsapp" />
            </a>
            <a href="https://www.facebook.com/minuto60com/" target="_blank" rel="noopener noreferrer" title=" ver en facebook">
              <img loading="lazy" src="/img/icon_fb.png" alt="Facebook" className="w-6 h-6" title="facebook" />
            </a>
            <a href="https://www.x.com/minuto60com/" target="_blank" rel="noopener noreferrer" title="ver en X">
              <img loading="lazy" src="/img/icon_x.png" alt="X" className="w-6 h-6" title="X" />
            </a>
            <a href="https://www.instagram.com/minuto60com/" target="_blank" rel="noopener noreferrer" title="ver en Instagram">
              <img loading="lazy" src="/img/icon_IG.png" alt="Instagram" className="w-6 h-6" title="Instagram" />
            </a>
            <a href="https://www.youtube.com/@minuto60com/" target="_blank" rel="noopener noreferrer" title="ver en YouTube">
              <img loading="lazy" src="/img/icon_YT.png" alt="YouTube" className="w-6 h-6" title="YouTube" />
            </a>
            <a href="https://www.tiktok.com/@minuto60com/" target="_blank" rel="noopener noreferrer" title="ver en TikTok">
              <img loading="lazy" src="/img/Icon-TikTok.png" alt="TikTok" className="w-6 h-6" title="TikTok" />
            </a>
            <a href="https://www.linkedin.com/company/minuto60com/" target="_blank" rel="noopener noreferrer" title="ver en LinkedIn">
              <img loading="lazy" src="/img/icon_linkedin.png" alt="LinkedIn" className="w-5 h-5" title="LinkedIn" />
            </a>
            {/* <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="/img/Icon_WP.png" alt="WhatsApp" className="w-6 h-6" />
            </a> */}
          </div>
          <p className="text-xs text-center">PAUTE CON NOSOTROS</p>
        </div>


        {/* Línea divisoria */}
        <div className="hidden md:block w-px h-[240px] bg-white "></div>

        {/* Formulario de suscripción */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full max-w-sm">
          {categories.map(({ name, slug }) => (
            <a
              key={slug}
              href={`/${slug}`}
              className="tracking-wider pb-1 transition-colors duration-200 hover:text-white hover:border-b-2 hover:border-white"
              target="_blank"
              title={slug}
            >
              {name}
            </a>
          ))}

          {/* <form onSubmit={submit} >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full mb-3 p-2 bg-[#FF8C42] text-white placeholder-white rounded border-none"
              onChange={(e) => setData("email", e.target.value)}
            />
            <input
              type="text"
              placeholder="¿Qué información deseas recibir?"
              className="w-full mb-3 p-2 bg-[#FF8C42] text-white placeholder-white rounded border-none"
              onChange={(e) => setData("informacion", e.target.value)}
            />
            <div className="flex items-start gap-2 text-xs mb-4">
              <input type="checkbox" className="mt-1" onChange={(e) => setData("terminosCondiciones", e.target.checked)} />
              <label>Acepto términos y condiciones</label>
            </div>
            <div className="flex items-start gap-2 text-xs mb-6">
              <input type="checkbox" className="mt-1" onChange={(e) => setData("tratamientoDatos", e.target.checked)} />
              <label>Acepto política de tratamiento de datos</label>
            </div>
            {
              validate?.status == 201 && <div className="flex items-start gap-2 text-xs mb-6 bg-orange-100 text-green-700 p-3 rounded-md shadow-sm">
                <svg className="w-4 h-4 mt-0.5 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Suscripción realizada correctamente</span>
              </div>
            }
            {
              validate?.status == 422 &&
              <div className="flex items-start gap-2 text-xs mb-6 bg-yellow-100 text-yellow-800 p-3 rounded-md shadow-sm">
                <svg className="w-4 h-4 mt-0.5 text-yellow-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                {validate?.response?.data?.errors?.email && <span>{validate?.response?.data?.errors?.email[0]}</span>}
                {validate?.response?.data?.errors?.terminosCondiciones && <span>{validate?.response?.data?.errors?.terminosCondiciones[0]}</span>}
                {validate?.response?.data?.errors?.tratamientoDatos && <span>{validate?.response?.data?.errors?.tratamientoDatos[0]}</span>}
              </div>
            }

            <button className="bg-buttonColor text-white py-2 px-6 rounded hover:bg-[#8478ad]">
              SUSCRIBIRME
            </button>
          </form> */}
        </div >
      </div >

      {/* Links de abajo */}
      <div className="mt-10 flex flex-wrap justify-center text-xs text-white gap-5">
        {/* <a href="/contacto" className="hover:underline">CONTÁCTANOS</a>
        <span className="border-l-2 border-white h-4"></span>
        <a href="/mapa-sitio" className="hover:underline pl-3">MAPA DE SITIO</a>
        <span className="border-l-2 border-white h-4"></span>
        <a href="/directrices" className="hover:underline pl-3">DIRECTRICES</a>
        <span className="border-l-2 border-white h-4"></span>
        <a href="/editoriales" className="hover:underline pl-3">EDITORIALES</a>
        <span className="border-l-2 border-white h-4"></span> */}
        <a href="/politica-de-privacidad" className="hover:underline pl-3" title="Política de privacidad">POLÍTICAS DE PRIVACIDAD</a>
        <span className="border-l-2 border-white h-4"></span>
        <a href="/terminos-y-condiciones" className="hover:underline pl-3" title="Términos y condiciones">TÉRMINOS Y CONDICIONES</a>
      </div>


      {/* Copyright */}
      <div className="mt-4 text-center text-xs">
        COPYRIGHT © - MINUTO 60 2025
      </div>
      <img
        src="https://tracker.metricool.com/c3po.jpg?hash=e2e0b56c37cab8992e2d2a754e5a3d31"
        style={{ display: "none" }}
        alt="metricool pixel"
      />


    </footer >

  );
}
