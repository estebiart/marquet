import { Helmet } from "react-helmet";

interface LayoutAMPProps {
  children: React.ReactNode;
}

export default function LayoutAMP({ children }: LayoutAMPProps) {
  return (
    <>
      <Helmet>
        <html lang="es"  />
        <meta charSet="utf-8" />
        <title>AMP Noticias</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <link rel="canonical" href="https://www.minuto60.com" />

        <script async src="https://cdn.ampproject.org/v0.js"></script>

        <style amp-boilerplate>{`
          body {
            -webkit-animation: -amp-start 8s steps(1,end) 0s 1 normal both;
            -moz-animation: -amp-start 8s steps(1,end) 0s 1 normal both;
            -ms-animation: -amp-start 8s steps(1,end) 0s 1 normal both;
            animation: -amp-start 8s steps(1,end) 0s 1 normal both;
          }
          @-webkit-keyframes -amp-start { from { visibility: hidden } to { visibility: visible } }
          @-moz-keyframes -amp-start { from { visibility: hidden } to { visibility: visible } }
          @-ms-keyframes -amp-start { from { visibility: hidden } to { visibility: visible } }
          @keyframes -amp-start { from { visibility: hidden } to { visibility: visible } }
        `}</style>

        <noscript>
          <style amp-boilerplate>{`
            body {
              -webkit-animation: none;
              -moz-animation: none;
              -ms-animation: none;
              animation: none;
              visibility: visible;
            }
          `}</style>
        </noscript>

   
        <style amp-custom>{`
          body { font-family: sans-serif; padding: 0; margin: 0; background: #fff; color: #111; }
          header, footer, main { padding: 16px; max-width: 1280px; margin: 0 auto; }
          h1 { font-size: 2rem; margin-bottom: 0.5rem; }
          .rounded-full { border-radius: 9999px; }
          .rounded-3xl { border-radius: 1.5rem; }
          .overflow-hidden { overflow: hidden; }
          .text-gray-600 { color: #4B5563; }
          .text-blue-600 { color: #2563EB; }
          .mt-4 { margin-top: 1rem; }
          .mt-6 { margin-top: 1.5rem; }
          .flex { display: flex; }
          .gap-4 { gap: 1rem; }
          .items-center { align-items: center; }
          .text-center { text-align: center; }
        `}</style>
      </Helmet>

      <body>
 
        <header>
          <div className="text-center bg-purple-700 text-white p-4">
            <amp-img src="/img/logo-min-60.png" width="200" height="50" alt="Logo"></amp-img>
            <nav className="mt-4">
              <a href="/noticias/categoria?category=nacional">Nacional</a> |
              <a href="/noticias/categoria?category=internacional">Internacional</a> |
              <a href="/noticias/categoria?category=deportes">Deportes</a> |
              <a href="/noticias/categoria?category=entretenimiento">Entretenimiento</a> |
              <a href="/noticias/categoria?category=investigación">Investigación</a>
            </nav>
          </div>
        </header>

 
        <main>
          {children}
        </main>

        <footer>
          <div className="text-center bg-cyan-700 text-white p-4">
            <h2>Síguenos</h2>
            <div className="flex gap-4 justify-center mt-2">
              <a href="https://facebook.com" target="_blank">
                <amp-img src="/img/facebook.png" width="40" height="40" alt="Facebook"></amp-img>
              </a>
              <a href="https://instagram.com" target="_blank">
                <amp-img src="/img/instagram.png" width="40" height="40" alt="Instagram"></amp-img>
              </a>
              <a href="https://tiktok.com" target="_blank">
                <amp-img src="/img/tiktok.png" width="40" height="40" alt="TikTok"></amp-img>
              </a>
              <a href="https://twitter.com" target="_blank">
                <amp-img src="/img/x.png" width="40" height="40" alt="Twitter"></amp-img>
              </a>
              <a href="https://youtube.com" target="_blank">
                <amp-img src="/img/youtube.png" width="40" height="40" alt="YouTube"></amp-img>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <amp-img src="/img/linkedin.png" width="40" height="40" alt="LinkedIn"></amp-img>
              </a>
            </div>
            <p className="mt-4">&copy; Todos los derechos reservados</p>
          </div>
        </footer>
      </body>
    </>
  );
}
