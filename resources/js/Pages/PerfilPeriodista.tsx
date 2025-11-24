import { Link, router } from '@inertiajs/react';
import Layout from '@/context/Layout';
import { bucketUrl } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { obtenerPerfilPeriodista } from '@/services/PerdistaService';
import { NewsCard } from '@/components/NewsCard';
import { getBackgroundColor } from "@/lib/utils";
import obtenerNoticiasPorAutor from '@/services/NoticiasService';

interface Noticia {
    id: number;
    titulo: string;
    slug: string;
    categorias?: any;
    descripcion: string;
    metadata?: {
        seo_title?: string;
    };
    fecha_publicacion: string;
    imagen: string;
    imagen_movil: string;
    imagen_video: string;
}

interface Usuario {
    id: number;
    name: string;
    slug: string;
    email: string;
    perfil: string;
    bio: string;
    arl_url: string;
    urls: any[];
    noticias: Noticia[];
}

const PerfilPeriodista: React.FC = () => {

    let slug = '';
    let origin = '';
    let pathname = '';

    if (typeof window !== 'undefined') {
        pathname = window.location.pathname;
        slug = pathname.split('/').pop() || '';
        origin = window.location.origin;
    }

    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [otrosUsuarios, setOtrosUsuarios] = useState<Usuario[]>([]);
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const data = await obtenerPerfilPeriodista(slug);
                setUsuario(data.usuario);
                setOtrosUsuarios(data.otrosUsuarios);
            } catch (err) {
                console.error(err)
            }
        };
        cargarDatos();
    }, [slug]);

    useEffect(() => {
        const cargarNoticiasIniciales = async () => {
            if (!usuario) return; // Ensure usuario is not null
            try {
                const data = await obtenerNoticiasPorAutor(usuario.id, 1);
                setNoticias(data.data);
                setCurrentPage(data.current_page);
                setLastPage(data.last_page);
            } catch (err) {
                console.error("Error al cargar noticias iniciales:", err);
            }
        };

        cargarNoticiasIniciales();
    }, [usuario]);

    const cargarMasNoticias = async () => {
        if (!usuario || currentPage >= lastPage || loading) return; // Ensure usuario is not null

        setLoading(true);
        try {
            const data = await obtenerNoticiasPorAutor(usuario.id, currentPage + 1);
            setNoticias((prevNoticias) => [...prevNoticias, ...data.data]);
            setCurrentPage(data.current_page);
        } catch (err) {
            console.error("Error al cargar más noticias:", err);
        } finally {
            setLoading(false);
        }
    };

    if (!usuario) return null;

    const handleClick = (categoria: string, slug: string, iddado: number) => {
        router.visit(`/${categoria}/${slug}/${iddado}`);
    };

    return (
        <Layout>
            <div className="w-full min-h-screen bg-gradient-to-br bg-blue-50 to-white px-6 py-10 mt-32">
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-3xl shadow-2xl max-w-5xl mx-auto p-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 transition-all duration-500">
                    <div
                        className="relative flex justify-center w-full md:w-1/3"
                    >
                        {/* <img
                            loading="lazy"
                            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl z-10"
                            src={usuario.perfil ? `${bucketUrl}/${usuario.perfil}` : '/img/periodista_default.webp'}
                            alt={usuario.name}
                        /> */}
                    </div>

                    <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
                        <h1 className="text-4xl font-bold text-gray-800 drop-shadow-sm">{usuario.name}</h1>
                        {usuario.urls && Array.isArray(usuario.urls) && (
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {usuario.urls.map((red, index) => (
                                    <a
                                        key={index}
                                        href={red.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {red.nombre}
                                    </a>
                                ))}
                            </div>
                        )}
                        <p className="text-gray-700 text-lg">{usuario.bio}</p>


                        {usuario.arl_url && (
                            <Link
                                href={usuario.arl_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition duration-300"
                            >
                                Ver ARL
                            </Link>
                        )}
                    </div>
                </div>
                {noticias.length > 0 && (
                    <div className="mt-16 max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Noticias publicadas</h2>
                        <ul className="grid gap-6 md:grid-cols-2">
                            {noticias.map((noticia) => {
                                const categoria = noticia?.categorias?.[0]?.descripcion;
                                return (
                                    <NewsCard
                                        key={noticia.id}
                                        author={{ name: usuario.name }}
                                        category={categoria ? categoria : ""}
                                        title={ noticia?.titulo}
                                        iddado={noticia.id}
                                        description={noticia.descripcion}
                                        imageUrl={`${bucketUrl}/${noticia.imagen_movil || noticia.imagen || noticia.imagen_video}`}
                                        accentColor={getBackgroundColor(categoria ? categoria : "")}
                                        slug={noticia.slug}
                                        variant="banner"
                                    />
                                );
                            })}
                        </ul>
                        {currentPage < lastPage && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={cargarMasNoticias}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                                    disabled={loading}
                                >
                                    {loading ? "Cargando..." : "Cargar más"}
                                </button>
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-16 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Otros periodistas de minuto60</h2>
                    <ul className="grid gap-6 md:grid-cols-2"
                    >
                        {otrosUsuarios.map((periodista) => (
                            <li key={periodista.id} className="  shadow p-4 flex items-center space-x-4">
                                <a href={`${origin}/periodista/${periodista.slug}`} className=" hover:text-rose-600">
                                    <img
                                        src={periodista.perfil ? `${bucketUrl}/${periodista.perfil}` : '/img/periodista_default.webp'}
                                        alt={periodista.name}
                                        className="w-16 h-16 object-cover rounded-full border-2 border-gray-200"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">{periodista.name}</h3>
                                        <p className="text-gray-600">{periodista.bio}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </Layout>
    );
};

export default PerfilPeriodista;
