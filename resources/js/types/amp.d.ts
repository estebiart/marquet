declare namespace JSX {
  interface IntrinsicElements {
    "amp-img": React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
      layout?: string;
      width: number | string;
      height: number | string;
      alt: string;
    };
    "amp-video": React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> & {
      layout?: string;
      width: number | string;
      height: number | string;
      alt?: string;
      poster?: string;
    };
    "amp-audio": React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> & {
      layout?: string;
      width?: number | string;
      height?: number | string;
    };
    "amp-iframe": React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> & {
      layout?: string;
      width: number | string;
      height: number | string;
      sandbox?: string;
    };
    // Agrega otras etiquetas AMP si las usas...
  }
}
