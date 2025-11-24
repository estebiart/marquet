import React, { useState, useEffect, useRef } from 'react';

const headerDimension = (url: any) => {
  const match = url.match(/(\d+)x(\d+)\.jpg$/);
  if (match && match.length === 3) {
    return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
  }
  return { width: 728, height: 90 };
};

interface DynamicBannerProps {
  imageUrl: string;
  destinationUrl: string;
  shouldRender: boolean;
}

const HeaderBanner: React.FC<DynamicBannerProps> = ({ imageUrl, destinationUrl, shouldRender }) => {
  const [showAd, setShowAd] = useState(true);
  const [shouldRenderAd, setShouldRenderAd] = useState(true);
  const lastScrollY = useRef(0); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
          setShowAd(false);
          setShouldRenderAd(false);
        } 
        
        else if (currentScrollY < lastScrollY.current && currentScrollY < 100) {
          setShouldRenderAd(true);
          setShowAd(true);
        }

        lastScrollY.current = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  if (!shouldRender || !shouldRenderAd || !imageUrl || !destinationUrl) {
    return null;
  }

  const { width, height } = headerDimension(imageUrl);
  const maxWidth = width;
  const aspectRatio = `${width} / ${height}`;

  return (
    <div
      className={`w-full px-4 md:px-0 overflow-hidden transition-all duration-300 ease-in-out ${showAd ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0"}`}
    >
      <div
        className="w-full mx-auto"
        style={{
          maxWidth: `${maxWidth}px`,
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

export default HeaderBanner;