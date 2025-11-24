import React, { useEffect, useState } from 'react';

interface Contador365Props {
  href?: string; // URL destino al hacer clic
  newTab?: boolean; // Abrir en nueva pestaña
}

const Contador365: React.FC<Contador365Props> = ({
  href = 'https://www.minuto60.com/elecciones-2026',
  newTab = true,
}) => {
  const [diasRestantes, setDiasRestantes] = useState<number>(0);

  useEffect(() => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const fechaFinal = new Date('2026-08-07');
    fechaFinal.setHours(0, 0, 0, 0);

    const diferenciaTiempo = fechaFinal.getTime() - hoy.getTime();
    const dias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));

    setDiasRestantes(dias >= 0 ? dias : 0);
  }, []);

  return (
    <div className="relative mx-auto overflow-hidden mt-20 md:mt-28 w-full">
  {/* Versión para desktop */}
  <div
    className="hidden md:block" // 👈 importante: solo se ve desde 'md' en adelante
    style={{
      transform: 'scale(0.84)',
      transformOrigin: 'top left',
      width: '119%',
      height: '100%',
    }}
  >
    <iframe
      src="https://devminuto.s3.us-east-2.amazonaws.com/publicidad/index.html"
      title="Publicidad Desktop"
      className="border-none"
      style={{
        width: '1500px',
        height: '150px',
        border: 'none',
        overflow: 'hidden',
      }}
      scrolling="no"
    />
  </div>

  {/* Versión para móvil */}
  <div className="block md:hidden relative w-full overflow-hidden" style={{ height: '150px' }}>
    <iframe
      src="https://devminuto.s3.us-east-2.amazonaws.com/publicidad/movil.html"
      title="Publicidad Móvil"
      className="absolute top-0 left-0 origin-top-left scale-[0.54] w-[830px] h-[150px]"
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
    />
    {href && (
      <a
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        aria-label="Abrir enlace del contador móvil"
        className="absolute inset-0 z-10 cursor-pointer"
      />
    )}
  </div>
</div>

  );
};

export default Contador365;
