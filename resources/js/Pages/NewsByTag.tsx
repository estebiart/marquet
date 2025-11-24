import React, { useEffect, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import Layout from "@/context/Layout";
import { Noticia } from "@/types/Noticias";
import { NewsCard } from "@/components/NewsCard";
import { bucketUrl, getBackgroundColor } from "@/lib/utils";
import { PageProps } from "@inertiajs/core";
import { Link } from '@inertiajs/react';
import axios from 'axios';

interface NewsByTagProps extends PageProps {
    noticias: {
        data: Noticia[];
        links: any[];
        meta: any;
    };
    tag: string;
}


const NewsByTag: React.FC = () => {
    const { noticias, tag } = usePage<NewsByTagProps>().props;
    const [newsData, setNewsData] = useState(noticias);
    const handlePagination = async (page: number | null) => {
        if (page !== null) {
            try {
                const url = `${window.location.pathname}?page=${page}`;
                const response = await axios.get(url);
                console.log(response.data);
                setNewsData(response.data);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (error) {
                console.error("Error fetching paginated news:", error);
            }
        }
    };

     return (
        <Layout>
            <Head title={`Noticias de ${tag}`} />
            <main className="container mx-auto px-4 py-8 mt-20">
                <h1 className="text-3xl font-bold mb-6">Novedades sobre {tag}</h1>
                {noticias.data.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {noticias.data.map((noticia) => (
                            <NewsCard
                                author={noticia.author}
                                key={noticia.id}
                                category={noticia.categorias && noticia.categorias.length > 0 ? noticia.categorias[0].descripcion : "General"}
                                title={ noticia.titulo}
                                iddado={noticia.id}
                                description={noticia.descripcion}
                                imageUrl={`${bucketUrl}/${noticia.imagen}`}
                                imageUrlMovil={`${bucketUrl}/${noticia.imagen_movil}`}
                                accentColor={getBackgroundColor(noticia.categorias && noticia.categorias.length > 0 ? noticia.categorias[0].nombre : "")}
                                slug={noticia.slug}
                                variant="banner"
                            />
                        ))}
                    </div>
                ) : (
                    <p>No hay noticias con la etiqueta "{tag}".</p>
                )}

            </main>
        </Layout>
    );
};

export default NewsByTag;
