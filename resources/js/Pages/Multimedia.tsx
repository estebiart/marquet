import Layout from "@/context/Layout";
import { bucketUrl } from "@/lib/utils";
import { Helmet } from "react-helmet";
const Multimedia = ({ imagenes }: any) => {
    return (
        <Layout>
            {/* <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ImageGallery",
                        "name": "Galería multimedia",
                        "image": imagenes.map((ruta: string) => `${bucketUrl}/${ruta}`),
                        "associatedMedia": imagenes.map((ruta: string) => ({
                            "@type": "ImageObject",
                            "contentUrl": `${bucketUrl}/${ruta}`,
                            "url": `${bucketUrl}/${ruta}`,
                            "description": "Imagen publicada en la galería",
                        }))
                    })}
                </script>
            </Helmet> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-32">
                {imagenes.map((ruta: string, idx: number) => (
                    <a
                        key={idx}
                        href={`${bucketUrl}/${ruta}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                    >
                        <img
                            loading="lazy"
                            src={`${bucketUrl}/${ruta}`}
                            alt={`imagen-${idx}`}
                            className="w-full rounded shadow hover:opacity-80 transition"
                        />
                    </a>
                ))}
            </div>
        </Layout>
    );
};
export default Multimedia;
