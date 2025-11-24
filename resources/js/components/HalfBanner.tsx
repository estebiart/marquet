import React, { useEffect, useRef, useState } from 'react';

interface HalfBannerProps {
  imageUrl: string;
  destinationUrl: string;
  shouldRender: boolean;
}

const HalfBanner: React.FC<HalfBannerProps> = ({ imageUrl, destinationUrl, shouldRender }) => {
  const width = 300;
  const height = 600;
  const aspectRatio = `${width} / ${height}`;

  const [visible, setVisible] = useState(true);
  const hideTimerRef = useRef<number | undefined>(undefined);
  const lastScrollRef = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!shouldRender || !imageUrl || !destinationUrl) return;

    // Mostrar inicialmente y programar ocultar
    setVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = window.setTimeout(() => setVisible(false), 3000);

    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      if (y < lastScrollRef.current) {
        setVisible(true);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = window.setTimeout(() => setVisible(false), 5000);
      }
      lastScrollRef.current = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll as EventListener);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [shouldRender, imageUrl, destinationUrl]);

  // 🔑 Ocultar si el footer es visible
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const limit =6000; // límite de scroll en px
      if (window.scrollY < limit) {
        setVisible(true); // aparece solo si pasa el límite
      } else {
        setVisible(false); // si no, oculto
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);





  if (!shouldRender || !imageUrl || !destinationUrl) return null;
  if (!visible) return null;

  return (
    <div
      className="w-full px-4 mt-1 mx-auto hidden md:block"
      style={{ maxWidth: `${width}px` }}
    >
      <div
        className="w-full h-auto"
        style={{
          aspectRatio: aspectRatio,
        }}
      >
        <a href={destinationUrl} target="_blank" rel="noopener noreferrer">
          <img
            loading="lazy"
            src={imageUrl}
            alt="Publicidad"
            className="w-full h-full object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default HalfBanner;
