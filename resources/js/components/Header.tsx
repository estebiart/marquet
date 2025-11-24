import Geolocalizacion, { cities } from './Geolocalizacion';
import { router, usePage } from '@inertiajs/react';
import ModalRegister from "./ModalRegister";
import React, { useEffect } from "react";

import ModalLogin from "./ModalLogin";
import SidebarUser from "./SidebarUser";
import { bucketUrl } from "@/lib/utils";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";
import Buscar from "./Buscar";
import HeaderBanner from './HeaderBanner';

interface HeaderProps {
  setShowLiveStream: (value: boolean) => void;
  adImage?: string;
  category_interna?: string;
}

export const Header: React.FC<HeaderProps> = ({ setShowLiveStream, adImage, category_interna }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { auth } = usePage().props as any;
  const user = auth.user;
  const [category, setCategory] = useState("");

  const bannerImageUrl = bucketUrl+'/publicidad/colpensiones/20251021-PENSIONDERIESGO_970X90-03.gif';
  const bannerDestinationUrl = 'https://www.colpensiones.gov.co/5133';

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

  return (
    <header className="fixed z-30 flex-col w-full text-white bg-headerColor flex content-center items-center py-[10px] md:py-0">

     <HeaderBanner
        shouldRender={true}
        imageUrl={bannerImageUrl}
        destinationUrl={bannerDestinationUrl}
      /> 

      <nav className="grid grid-cols-12 items-center md:px-20 w-full relative bg-headerColor">
        <div className="col-span-4 md:col-span-3 flex flex-col items-start relative">
          <button className="p-2 hidden md:flex mt-4" onClick={() => setIsOpen(true)} aria-label="Abrir menú de navegación">
            <img loading="lazy" src="/img/search.svg" alt="logo buscar" className="w-5 h-5" title="Buscar" />
          </button>
          <SidebarMenu />
        </div>

        {/* Columna 2: Logo */}
        <div className="col-span-4 md:col-span-6 flex justify-center">
          <a href="/" title="Minuto 60">
            <picture>
              <source media="(max-width: 767px)" srcSet="/img/logo-min-60.png" />
              <img
                width={276}
                height={80}
                loading="lazy"
                src="/img/logo-min-60.png"
                alt="Logo Minuto 60"
                className="w-[185px] max-md:w-[150px]"
                title="Minuto 60"
              />
            </picture>
          </a>
        </div>

        {/* Columna 3: Redes sociales + En Vivo */}
        <div className="col-span-4 md:col-span-3 hidden md:flex flex-col items-end gap-2">
          <div className="flex flex-col items-end">
            {/* Íconos */}
            <div className="flex gap-4">
              <a href="https://whatsapp.com/channel/0029Vb6I0g4KrWQpVHQkm742 " target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <img loading="lazy" src="/img/Icon_WP.png" alt="WhatsApp" className="w-6 h-6" title="WhatsApp" />
              </a>
              <a href="https://www.facebook.com/minuto60com/" target="_blank" rel="noopener noreferrer" title="Facebook">
                <img loading="lazy" src="/img/icon_fb.png" alt="Facebook" className="w-6 h-6" title="Facebook" />
              </a>
              <a href="https://www.x.com/minuto60com/" target="_blank" rel="noopener noreferrer" title="X">
                <img loading="lazy" src="/img/icon_x.png" alt="X" className="w-6 h-6" title="X" />
              </a>
              <a href="https://www.instagram.com/minuto60com/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <img loading="lazy" src="/img/icon_IG.png" alt="Instagram" className="w-6 h-6" title="Instagram" />
              </a>
              <a href="https://www.youtube.com/@minuto60com/" target="_blank" rel="noopener noreferrer" title="YouTube">
                <img loading="lazy" src="/img/icon_YT.png" alt="YouTube" className="w-6 h-6" title="YouTube" />
              </a>
              <a href="https://www.tiktok.com/@minuto60com/" target="_blank" rel="noopener noreferrer" title="TikTok">
                <img loading="lazy" src="/img/Icon-TikTok.png" alt="TikTok" className="w-6 h-6" title="TikTok" />
              </a>
              <a href="https://www.linkedin.com/company/minuto60com/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <img loading="lazy" src="/img/icon_linkedin.png" alt="LinkedIn" className="w-5 h-5" title="LinkedIn" />
              </a>
              {/*
                user?.role == 'cliente' ? <div> <button onClick={handleClick}>
                  <img src="/img/logouth.svg" alt="user" className="w-6 h-6" />



                </button>
                  <button onClick={() => setSidebarOpen(true)}>
                    <img src="/img/menu.svg" alt="user" className="w-6 h-6" />

                  </button>

                </div> : <a onClick={() => setModalOpen(true)} target="_blank" rel="noopener noreferrer" title="Inicio de sesión">
                  <img src="/img/usuario.svg" alt="user" className="w-6 h-6" title="usuario" />
                </a>
              */}

            </div>

            {/* Botón centrado debajo de los íconos */}
            {/* <div className="flex justify-center w-full mt-5">
              <div
                className="bg-darkViolet w-28 h-8 flex items-center justify-center text-white rounded-[5px] cursor-pointer gap-2"
                onClick={() => setShowLiveStream(true)}
              >
                <img src="/img/signal.svg" alt="Live icon" className="w-[18px]" />
                <span className="  ">En vivo</span>
              </div>
            </div> */}
          </div>
        </div>
      </nav>


      <Buscar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <ModalLogin isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <SidebarUser
        user={{ name: user?.name, email: user?.email, perfil: user?.perfil }}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <ModalLogin isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
};