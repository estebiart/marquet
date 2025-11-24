import { bucketUrl } from "@/lib/utils";
import { router } from "@inertiajs/react";
import { Opinion } from "@/types/Opinion";

interface OpinionProps {
    opiniones: Opinion[];
}

const Opinions: React.FC<OpinionProps> = ({ opiniones }) => {
    const handleClick = (slug: string) => {
        router.visit(`/opinion/${slug}`);
    };

    return (
        <section className="w-full mx-auto my-10 border-t border-b border-gray-200 px-10 sm:px-32">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight border-l-4 border-[#ef0c52] pl-3 mb-6 mt-4">
                OPINIÓN
            </h4>

            <div
                className="
          grid gap-6 mb-10
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
        "
            >
                {opiniones.map((opinion) => (
                    <article
                        key={opinion.id}
                        onClick={() => handleClick(opinion.slug)}
                        className="
              flex flex-col items-center text-center 
              p-4 shadow-sm 
              cursor-pointer
            "
                    >
                        <img
                            loading="lazy"
                            src={`${bucketUrl}/${opinion?.autor_foto ||
                                opinion?.author?.perfil ||
                                "img/periodista_default.webp"
                                }`}
                            alt={opinion?.autor_nombre_publico || "Autor"}
                            className="w-20 h-20 rounded-full object-cover mb-3"
                        />

                        <h3 className="font-semibold text-lg text-gray-900 truncate w-full">
                            {opinion?.titulo}
                        </h3>

                        <p className="italic text-sm text-gray-600">
                            {opinion?.autor_nombre_publico ||
                                opinion?.author?.name ||
                                "Autor Desconocido"}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Opinions;
