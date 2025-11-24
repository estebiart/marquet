interface StaticBannerProps {
  imageUrl: string;
  destinationUrl: string;
  shouldRender: boolean;
  width?: number;
  height?: number;
}

const HomeBanner: React.FC<StaticBannerProps> = ({
  imageUrl,
  destinationUrl,
  shouldRender,
  width = 970,
  height = 250,
}) => {
  if (!shouldRender || !imageUrl || !destinationUrl) return null;

  return (
    <div className="w-full px-4 md:px-0 md:mb-20 overflow-hidden opacity-100 max-h-[300px]">
      <div
        className="w-full mx-auto"
        style={{
          maxWidth: `${width}px`,
          aspectRatio: `${width} / ${height}`,
        }}
      >
        <a href={destinationUrl} target="_blank" rel="noopener noreferrer">
          <img
            loading="lazy"
            src={imageUrl}
            alt="Publicidad"
            width={width}
            height={height}
            className="w-full h-full object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;