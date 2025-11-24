import React, { useEffect, useState } from "react";

interface VideoBannerProps {
  imageUrl: string;
  destinationUrl: string;
  shouldRender: boolean;
  headerSelector?: string;
  extraOffset?: number;
  bannerHeight?: number;
}

const VideoBanner: React.FC<VideoBannerProps> = ({
  imageUrl,
  destinationUrl,
  shouldRender,
  headerSelector,
  extraOffset = 40,
  bannerHeight = 420,
}) => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [isMd, setIsMd] = useState<boolean>(false);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const sel = headerSelector || "header";
      const el =
        document.querySelector(sel) ||
        document.getElementById("header") ||
        document.querySelector(".site-header") ||
        document.querySelector(".main-header");
      const h = el ? Math.round((el as HTMLElement).getBoundingClientRect().height) : 0;
      setHeaderHeight(h);
    };

    updateHeaderHeight();
  const mm = window.matchMedia("(min-width: 768px)");
  const onMq = (e: MediaQueryList | MediaQueryListEvent) => setIsMd(Boolean((e as MediaQueryList).matches));
  setIsMd(mm.matches);
    if (typeof mm.addEventListener === "function") {
      mm.addEventListener("change", onMq);
    } else if (typeof mm.addListener === "function") {
      (mm as any).addListener(onMq);
    }
    window.addEventListener("resize", updateHeaderHeight);
    const ro = new ResizeObserver(updateHeaderHeight);
    const headerEl = document.querySelector(headerSelector || "header");
    if (headerEl) ro.observe(headerEl);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      ro.disconnect();
      if (typeof mm.removeEventListener === "function") {
        mm.removeEventListener("change", onMq);
      } else if (typeof mm.removeListener === "function") {
        (mm as any).removeListener(onMq);
      }
    };
  }, [headerSelector]);

  if (!shouldRender || !imageUrl || !destinationUrl) return null;

  const handleClick = () => {
    window.open(destinationUrl, "_blank", "noopener,noreferrer");
  };

  const containerStyle: React.CSSProperties = isMd
    ? {
        minHeight: `${bannerHeight}px`,
        top: headerHeight ? `${headerHeight}px` : undefined,
      }
    : {
        minHeight: `${bannerHeight}px`,
      };

  const iframeStyle: React.CSSProperties = {
    width: "100%",
    height: `${bannerHeight}px`,
    border: "none",
    display: "block",
  };

  const isImage = /\.(png|jpe?g|gif|avif|webp|svg)(\?.*)?$/i.test(imageUrl);
  const imgStyle: React.CSSProperties = {
    maxWidth: "100%",
    maxHeight: `${bannerHeight}px`,
    width: "auto",
    height: "auto",
    display: "block",
    objectFit: "contain",
  };

  return (
    <div
      className="w-full cursor-pointer overflow-hidden relative md:sticky flex items-center justify-center"
      onClick={handleClick}
      style={containerStyle}
      aria-hidden={false}
    >
      {isImage ? (
        <img
          loading="lazy"
          src={imageUrl}
          alt="banner"
          style={imgStyle}
          className="pointer-events-none"
        />
      ) : (
        <iframe
          loading="lazy"
          src={imageUrl}
          title="video-banner"
          className="w-full block pointer-events-none"
          style={iframeStyle}
          scrolling="no"
        />
      )}
    </div>
  );
};

export default VideoBanner;
