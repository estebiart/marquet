import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Geolocalizacion, { cities } from './Geolocalizacion';
import RegionAccordion from "./RegionAccordion";
import Buscar from "./Buscar";
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
    { name: "Vida moderna", slug: "vida-moderna" },
];
const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    return (
        <>
            <div className="flex md:h-[43px]">
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-white bg-headerColor p-2"
                        aria-label="Abrir menú de navegación"
                    >
                        <Menu size={26} />
                    </button>
                )}
            </div>


            {isOpen && (
                <div >
                    <div className="fixed top-0 left-0 h-full w-72 bg-headerColor text-white ">
                        <div className="flex justify-between items-center p-4">
                            <div className="w-10 flex justify-center">
                                <button
                                    className="p-2 md:invisible"
                                    onClick={() => setIsOpenSearch(true)}
                                    aria-label="Abrir búsqueda"
                                >
                                    <img
                                        loading="lazy"
                                        src="/img/search.svg"
                                        alt="Buscar"
                                        className="w-5 h-5"
                                        title="Buscar"
                                    />
                                </button>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white p-2"
                                aria-label="Cerrar menú"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-4 px-6 py-4 overflow-y-scroll h-full">
                            <div className="flex flex-col gap-4 short:mb-[200px]">
                                <div className="">
                                    <h4 className=" py-2 text-lg font-bold text-white uppercase tracking-widest border-b border-white">
                                        Categorías
                                    </h4>

                                </div>
                                {categories.map(({ name, slug }) => (
                                    <a
                                        key={slug}
                                        href={`/${slug}`}
                                        title={slug}
                                        className="tracking-wider  pb-1 transition-colors duration-200 hover:text-white hover:border-b-2 hover:border-white"
                                    >
                                        {name}
                                    </a>
                                ))}
                                <a
                                href={`/opinion`}
                                className="tracking-wider  pb-1 transition-colors duration-200 hover:text-white hover:border-b-2 hover:border-white"
                            >
                                Opinión
                            </a>

                                <a
                                href="https://www.minuto60.com/elecciones-2026"
                                className="tracking-wider  pb-1 transition-colors duration-200 hover:text-white hover:border-b-2 hover:border-white"
                                
                            >
                                Elecciones 2026
                            </a>

                                {/* <div className="mt-4">
                                <Geolocalizacion
                                    renderSelect={(city, handleRegionChange) => (
                                        <div className="relative mt-2">
                                            <RegionAccordion cities={cities} handleRegionChange={handleRegionChange} />
                                        </div>
                                    )}
                                                                        renderButton={(getLocation) => (
                                        <button
                                            onClick={getLocation}
                                            className="flex items-center gap-2 text-white    font-semibold uppercase tracking-wider hover:text-white transition-colors duration-200 mb-[200px]"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 23 18"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 2a5 5 0 0 1 5 5c0 2.5-2 5-5 8-3-3-5-5.5-5-8a5 5 0 0 1 5-5zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                                />
                                            </svg>
                                          <p>Ubicación</p>
                                        </button>
                                    )}
                                />
                            </div> */}
                                <div className="block md:hidden mb-[100px]">
                                    <div className="">
                                        <div className="flex gap-4 justify-center">
                                            <a href="https://www.facebook.com/minuto60com/" target="_blank" rel="noopener noreferrer">
                                                <img loading="lazy" src="/img/icon_fb.png" alt="Facebook" className="w-6 h-6" />
                                            </a>
                                            <a href="https://www.x.com/minuto60com/" target="_blank" rel="noopener noreferrer">
                                                <img loading="lazy" src="/img/icon_x.png" alt="X" className="w-6 h-6" />
                                            </a>
                                            <a href="https://www.instagram.com/minuto60com/" target="_blank" rel="noopener noreferrer">
                                                <img loading="lazy" src="/img/icon_IG.png" alt="Instagram" className="w-6 h-6" />
                                            </a>
                                            <a href="https://www.youtube.com/@minuto60com/" target="_blank" rel="noopener noreferrer">
                                                <img loading="lazy" src="/img/icon_YT.png" alt="YouTube" className="w-6 h-6" />
                                            </a>
                                            <a href="https://www.tiktok.com/@minuto60com/" target="_blank" rel="noopener noreferrer">
                                                <img loading="lazy" src="/img/Icon-TikTok.png" alt="TikTok" className="w-6 h-6" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>

                    </div>
                    <Buscar isOpen={isOpenSearch} onClose={() => setIsOpenSearch(false)} />
                </div>
            )}
        </>
    );
};

export default Sidebar;