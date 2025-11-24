import { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { IsMobile } from '@/hooks/Ismobile';
interface NoticiaMultimediaProps {
  noticia: {
    imagen_video?: string;
    video?: string;
    imagen?: string;
    imagen_movil?: string;
    title_imagen?: string;
  };
  bucketUrl: string;
}

function NoticiaMultimedia({ noticia, bucketUrl }: NoticiaMultimediaProps) {
  const [mostrarVideo, setMostrarVideo] = useState(false);
  const isMobile = IsMobile();

  const getAutoplayUrl = (url: string) => {
    if (!url) return '';

    const hasQuery = url.includes('?');
    return hasQuery ? `${url}&autoplay=1` : `${url}?autoplay=1`;
  };

  if (noticia.imagen_video && noticia.video) {
    
    return (
      <>
        {!mostrarVideo ? (
          <div
            className="relative h-96 w-full cursor-pointer"
            onClick={() => setMostrarVideo(true)}
          >
            <img
              src={`${bucketUrl}/${isMobile ? noticia.imagen_movil || noticia.imagen_video : noticia.imagen_video}`}
              alt={`${noticia.title_imagen}`}
              className="h-full w-full object-contain"
              title={`${noticia.title_imagen}`}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="text-white w-20 h-20 opacity-80 hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        ) : (
          <iframe
            className="md:h-96 w-full"
            src={getAutoplayUrl(noticia.video)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </>
    );
  }

  if (noticia.imagen) {
    return (
      <img
        src={`${bucketUrl}/${isMobile ? noticia.imagen_movil || noticia.imagen : noticia.imagen}`}
        alt={`${noticia.title_imagen}`}
        className="w-full object-contain"
        title={`${noticia.title_imagen}`}
      />

    );
  }

  if (noticia.video) {
    return (
      <iframe
        className="md:h-96 w-full"
        src={getAutoplayUrl(noticia.video)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return null;
}

export default NoticiaMultimedia;
