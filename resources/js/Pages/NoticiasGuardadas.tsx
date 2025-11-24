import { Head, usePage } from '@inertiajs/react';
import Layout from "@/context/Layout";
import { NewsCard } from '@/components/NewsCard';
import { bucketUrl, getBackgroundColor } from "@/lib/utils";
import { Noticia, PageProps, PageStructure } from "@/types/Noticias";

export default function NoticiasGuardadas() {
  const { categoria } = usePage().props as any;
  const { noticias } = usePage<PageProps>().props;
  return (
    <Layout>
      <h1 className={`text-7xl  inline-block border-b-8 pb-3`} style={{ borderColor: "#5D2783" }}>
        Noticias guardadas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 mb-8">
        {(noticias as Noticia[]).map((noticia, index) => (
          <div key={index} className="w-full">
            <NewsCard
              category={categoria ? categoria : noticia?.categoria}
              title={noticia.titulo}
              iddado={noticia.id}
              description={noticia.descripcion}
              imageUrl={`${bucketUrl}/${noticia.imagen}`}
              accentColor={getBackgroundColor(categoria)}
              slug={noticia.slug}
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}