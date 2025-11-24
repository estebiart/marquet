import React from 'react';

interface SimpleVideoBannerProps {
  iframeUrl: string;
  shouldRender: boolean;
  href?: string; // URL de destino al hacer clic
}

const SimpleVideoBanner: React.FC<SimpleVideoBannerProps> = ({ iframeUrl, shouldRender, href }) => {
  if (!shouldRender || !iframeUrl) {
    return null;
  }

  return (
    <div
      id="opinionid"
      className="flex justify-center relative w-full overflow-hidden "
    >
      <div className=" hidden md:flex w-full max-w-[970px] relative pt-[56.7%] md:pt-0 md:h-[540px]">
        <iframe
          src={iframeUrl}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          allow="autoplay; fullscreen; picture-in-picture"
          scrolling="no"
          title="Video Banner"
        />

        <a
          href={href ?? 'https://www.whatsapp.com/channel/0029Vb6I0g4KrWQpVHQkm742'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir enlace del banner"
          className="absolute inset-0 z-10"
        />
      </div>
    </div>
  );
};

export default SimpleVideoBanner;