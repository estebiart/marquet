import React, { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
  siteName?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url, siteName = 'Minuto60.com' }) => {
  const message = `📰 *${siteName}*\n"${title}"\n👉 ${url}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedMessage = encodeURIComponent(message);
  const [copiado, setCopiado] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="flex flex-wrap gap-3 mt-4 items-center">
      <a
        aria-label='Compartir en WhatsApp'
        href={`https://wa.me/?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        title='Compartir en WhatsApp'
        className="flex items-center gap-2 bg-headerColor px-2 py-2 rounded-lg hover:bg-green-600 transition"
      >
        <img loading="lazy" src="/img/Icon_WP.png" alt="WhatsApp" className="w-6 h-6" title='Compartir en WhatsApp' />
      </a>

      <a
        aria-label='Compartir en Facebook'
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        title='Compartir en Facebook'
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-headerColor px-2 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        <img loading="lazy" src="/img/icon_fb.png" alt="Facebook" className="w-6 h-6" title='Compartir en Facebook' />
      </a>

      <a
        aria-label='Compartir en X'
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`}
        target="_blank"
        title='Compartir en X'
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-headerColor px-2 py-2 rounded-lg hover:bg-gray-900 transition"
      >
        <img loading="lazy" src="/img/icon_x.png" alt="X" className="w-6 h-6" title='Compartir en X' />
      </a>

      <a
        aria-label='Compartir en LinkedIn'
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        title='Compartir en LinkedIn'
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-headerColor px-2 py-2 rounded-lg hover:bg-blue-800 transition"
      >
        <img loading="lazy" src="/img/icon_linkedin.png" alt="LinkedIn" className="w-6 h-6" title='Compartir en LinkedIn' />
      </a>

      <button
        onClick={handleCopy}
        className="flex items-center gap-2 bg-gray-700 px-2 py-2 rounded-lg hover:bg-gray-800 transition text-white"
         aria-label="Copiar al portapapeles"
      >
        {copiado ? (
          <>
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-sm">¡Copiado!</span>
          </>
        ) : (
          <>
            <ClipboardCopy className="w-5 h-5" />
          </>
        )}
      </button>
    </div>
  );
};

export default ShareButtons;
