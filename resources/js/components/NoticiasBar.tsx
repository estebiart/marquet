import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Geolocalizacion, { cities } from './Geolocalizacion';
import RegionAccordion from "./RegionAccordion";
import { Etiqueta, Noticia } from '@/types/Noticias';
import { Link } from '@inertiajs/react';


type NoticiasBarProps = {
  onToggleRegion: () => void;
  etiquetas: Etiqueta[];
  noticias: Noticia[];
};

const NoticiasBar: React.FC<NoticiasBarProps> = ({ onToggleRegion, etiquetas, noticias }) => {
  const [fechaHora, setFechaHora] = useState('');
  const formatearFecha = (date: Date) => {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const dia = dias[date.getDay()];
    const fecha = date.toLocaleDateString('es-CO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replace(/\//g, '.');
    const hora = date.toLocaleTimeString('es-CO', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return `${dia}, ${fecha} - ${hora}`;
  };
  const [region, setRegion] = useState<string | null>(null);
  useEffect(() => {
    const actualizarFecha = () => {
      setFechaHora(formatearFecha(new Date()));
    };

    actualizarFecha();
    const intervalo = setInterval(actualizarFecha, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const normalizeTagForUrl = (tag: string): string => {
    // La etiqueta ya viene normalizada del backend (minúsculas, sin acentos, espacios en lugar de guiones)
    // Solo necesitamos convertir espacios a guiones para la URL y limpiar guiones extra.
    let urlSlug = tag.replace(/\s+/g, '-'); // Reemplazar uno o más espacios con un solo guion
    urlSlug = urlSlug.replace(/^-+|-+$/g, ''); // Eliminar guiones al principio o al final
    return urlSlug;
  };

  return (
    <div className="z-10 absolute top-[70px]  md:top-[100px] w-full border-b text-sm flex items-center px-4 py-2 overflow-hidden bar  bg-white">
      <span className="text-gray-600 mr-4 whitespace-nowrap  hidden md:block">
        <strong>{fechaHora}</strong>
      </span>

      <Link href="#" className="text-gray-600 font-semibold hover:underline mr-2 whitespace-nowrap hidden md:block">
        Temas del día
      </Link>

      <div className="flex-1 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-4 whitespace-nowrap min-w-max">
            <div className="flex items-center">
              {etiquetas.slice(0, 12).map((tagItem, index) => (
                <React.Fragment key={tagItem.tag + index}>
                  <span className="text-gray-600 mx-2"> </span>
                  <Link
                    href={`/temas/${normalizeTagForUrl(tagItem.slug)}`}
                    className=" bg-red-300 text-sm font-medium px-3 py-1 rounded-full hover:bg-red-400"
                  >
                    {tagItem.tag}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
      </div>

      {/* <div className="flex items-center ml-auto space-x-4 whitespace-nowrap pl-4">
        <div className=" flex items-center">
          <Geolocalizacion
            onRegionDetected={(region) => setRegion(region)}
            renderButton={(getLocation) => (
              <button
                onClick={() => {
                  getLocation();
                }}
                className="flex items-center gap-2 text-white  bg-headerColor  font-semibold uppercase tracking-wider hover:text-white transition-colors duration-200"
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

              </button>
            )}

          />
        </div>
        <div className="border-l h-4 mx-1 border-gray-300"></div>
        {region ? (
          <span className="text-gray-600 text-sm font-semibold ml-2 whitespace-nowrap">
            {region}
          </span>
        ) : (
          <a
            href='/noticias/region?region=Bogotá'
            className="text-gray-600 text-sm font-semibold hover:underline whitespace-nowrap"
          >
            Bogotá
          </a>
        )}


      </div> */}

    </div>
  );
};

export default NoticiasBar;
