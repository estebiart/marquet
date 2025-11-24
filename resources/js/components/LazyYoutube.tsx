import { useState } from "react";

interface LazyYoutubeProps {
  videoUrl: string;
  title: string;
}

function extractVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);

    // Ej: https://www.youtube.com/watch?v=dQw4w9WgXcQ
    if (parsed.searchParams.get("v")) return parsed.searchParams.get("v");

    // Ej: https://www.youtube.com/embed/dQw4w9WgXcQ
    const match = parsed.pathname.match(/\/embed\/([a-zA-Z0-9_-]+)/);
    if (match) return match[1];

    return null;
  } catch {
    return null;
  }
}

export const LazyYoutube: React.FC<LazyYoutubeProps> = ({ videoUrl, title }) => {
  const [loaded, setLoaded] = useState(false);

  const videoId = extractVideoId(videoUrl);
  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full aspect-video bg-black overflow-hidden">
        {loaded ? (
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full relative cursor-pointer" onClick={() => setLoaded(true)}>
            <img
              src={thumbnail}
              alt="Miniatura del video"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="text-white bg-black/60 rounded-full text-4xl p-4">▶️</button>
            </div>
          </div>
        )}
      </div>
      {title && (
        <h4 className="mt-3 text-base font-semibold text-gray-900 dark:text-white text-center">
          {title}
        </h4>
      )}
    </div>
  );
};
