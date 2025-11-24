import React from 'react';

type Props = {
  url?: string;
  className?: string;
};

const DEFAULT_URL = 'https://www.whatsapp.com/channel/0029Vb6I0g4KrWQpVHQkm742';

const WhatsapFlotante: React.FC<Props> = ({ url = DEFAULT_URL, className = '' }) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Únete a nuestro canal de WhatsApp"
        title="Únete a nuestro canal de WhatsApp"
        className={
          "fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-green-700 shadow-lg rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:scale-105 transition-transform " +
          className
        }
      >
        <img
          src="/img/Icon_WP.png"
          alt="WhatsApp"
          className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-green-700 p-0.5"
        />
        <span className="text-white font-semibold text-sm md:text-base">
          Únete a nuestro canal
        </span>
      </a>
    </div>

  );
};

export default WhatsapFlotante;
