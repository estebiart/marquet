import React from "react";
import Marquee from "react-fast-marquee";

interface EtiquetasMarqueeProps {
  etiquetas: string[];
}

export const EtiquetasMarquee: React.FC<EtiquetasMarqueeProps> = ({ etiquetas }) => {
  if (!etiquetas || etiquetas.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden bg-footerColor border-y-2 border-white py-2">
      <Marquee speed={50} direction="left" gradient={false} loop={0}>
        {etiquetas.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-white text-headerColor2 hover:text-white hover:bg-headerColor transition-colors px-4 py-1 rounded-full    font-semibold shadow-md mx-3"
          >
            #{tag}
          </span>
        ))}
      </Marquee>
    </div>
  );
};