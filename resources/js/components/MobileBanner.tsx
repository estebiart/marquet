import React from 'react';

const isMediaVideo = (url: string): boolean => url.endsWith('.mp4');

interface MobileBannerProps {
  imageUrl: string;
  destinationUrl: string;
  shouldRender: boolean;
}

const MobileBanner: React.FC<MobileBannerProps> = ({ imageUrl, destinationUrl, shouldRender }) => {
  if (!shouldRender || !imageUrl || !destinationUrl) {
    return null;
  }

  return (
    <div className="px-4 mt-2 overflow-visible opacity-100 mx-auto md:hidden">
      <div className="flex justify-center">
        <a href={destinationUrl} target="_blank" rel="noopener noreferrer">
          {isMediaVideo(imageUrl) ? (
            <video
              src={imageUrl}
              autoPlay
              muted
              loop
              playsInline
              style={{ display: 'block', width: 'auto', height: 'auto' }}
            />
          ) : (
            <img
              loading="lazy"
              src={imageUrl}
              alt="Publicidad"
              style={{ display: 'block', width: 'auto', height: 'auto' }}
            />
          )}
        </a>
      </div>
    </div>
  );
};

export default MobileBanner;