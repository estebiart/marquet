import React, { useEffect } from 'react';
declare global {
  interface Window {
    FB: any;
  }
}
interface FacebookCommentsProps {
  url: string;
}

const FacebookComments: React.FC<FacebookCommentsProps> = ({ url }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [url]);

  return (
    <div>
      <div
        className="fb-comments"
        data-href={url}
        data-width="100%"
        data-numposts="5"
      ></div>
    </div>
  );
};

export default FacebookComments;