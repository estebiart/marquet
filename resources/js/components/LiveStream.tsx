import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';

const LiveStream = () => {
  const API_KEY = import.meta.env.VITE_API_KEY_LIVE;
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID_LIVE;

  const [videoId, setVideoId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchLiveStream = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Error al obtener datos: ${response.status}`);
        }

        const data = await response.json();
        const liveVideo = data.items[0]?.id?.videoId;

        if (liveVideo) {
          setVideoId(liveVideo);
          setError(null);
        } else {
          setVideoId(null);
          setError(null);
        }
      } catch (err: any) {
        setError(err?.message);
      }
    };

    fetchLiveStream();
    intervalId = setInterval(fetchLiveStream, 30000);

    return () => clearInterval(intervalId);
  }, [API_KEY, CHANNEL_ID]);

  const jsonLd = videoId
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Transmisión en vivo",
        "description": "Mira nuestra transmisión en vivo ahora.",
        "thumbnailUrl": `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        "uploadDate": new Date().toISOString(),
        "isLiveBroadcast": true,
        "publication": [
          {
            "@type": "BroadcastEvent",
            "isLiveBroadcast": true,
            "startDate": new Date().toISOString()
          }
        ],
        "embedUrl": `https://www.youtube.com/embed/${videoId}`,
        "publisher": {
          "@type": "Organization",
          "name": "Tu Canal",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tudominio.com/logo.png"
          }
        }
      }
      
    : null;

  return (
    <div>
      <Head title="Transmisión en vivo">
        {videoId && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {videoId ? (
        <iframe
          loading="lazy"
          width="100%"
          height="650"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Live Stream"
        ></iframe>
      ) : (
        !error && <p>No hay transmisiones en vivo en este momento.</p>
      )}
    </div>
  );
};

export default LiveStream;
