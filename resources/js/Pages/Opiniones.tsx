import { bucketUrl } from "@/lib/utils";
import { router } from "@inertiajs/react";
import Layout from "@/context/Layout";
import { CategorySection } from "@/components/CategorySection";
interface OpinionProps {
    opiniones: {
        author: {
            name: string;
            perfil: string;
        };
        titulo: string;
        descripcion: string;
        contenido: string;
        slug: string;
        autor_nombre_publico: string;
        autor_foto: string;
        created_at: string;
        fecha_publicacion: string;
    }[];
}

const Opinion: React.FC<OpinionProps> = ({ opiniones }) => {
    const handleClick = (slug: string) => {
        router.visit(`/opinion/${slug}`);
    };

    return (
        <Layout>
            <CategorySection
                title="Opinión"
                color="bg-opinion"
                bgcolor="bg-white"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

                    {opiniones.map((opinion) => (
                        <div
                            key={opinion?.titulo}
                            onClick={() => handleClick(opinion.slug)}
                            className="cursor-pointer border-b border-gray-50400"
                        >
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">
                                    {opinion.titulo}
                                </h2>
                                <p>
                                    {opinion.descripcion}
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <img
                                        src={`${bucketUrl}/${opinion?.autor_foto || opinion?.author?.perfil || 'img/periodista_default.webp'}`}
                                        alt={opinion?.autor_nombre_publico || opinion?.author?.name || 'Autor'}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-medium">
                                            {opinion?.autor_nombre_publico || opinion?.author?.name || 'Autor Desconocido'}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {new Date(opinion.fecha_publicacion).toLocaleDateString()}
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CategorySection>
        </Layout>
    );
};

export default Opinion;
