
import { NewsCard } from "./NewsCard";
import { Noticia } from "@/types/Noticias";
import { bucketUrl, getBackgroundColor } from "@/lib/utils";
import { CategorySection } from "./CategorySection";
import { IsMobile } from "@/hooks/Ismobile";

interface DestacadosProps {
  noticias: Noticia[];
  title?: string;
}

const FeaturedNews: React.FC<DestacadosProps> = ({ noticias, title }) => {
  const isMobile = IsMobile();
  return (
    <CategorySection title="" color="" bgcolor="bg-gray-100">
      {
        noticias.length >= 4 && (
          <section className="mx-auto bg-gray-100">
            <h2 className="text-center text-xl font-bold mb-6">LO MÁS DESTACADO DE LA SEMANA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-[30px]">
              <div className="md:col-span-3 bg-beige rounded-2xl">
                <NewsCard
                  author={noticias[0]?.author}
                  iddado={noticias[0]?.id}
                  category={noticias[0].categorias[0]?.descripcion}
                  title={noticias[0]?.titulo}
                  description={noticias[0]?.descripcion}
                  imageUrl={`${bucketUrl}/${noticias[0]?.imagen || noticias[0]?.imagen_video}`}
                  imageUrlMovil= {`${bucketUrl}/${noticias[0]?.imagen_movil || noticias[0]?.imagen}`}
                  mobileVersion="horizontal"
                  accentColor={getBackgroundColor(noticias[0].categorias[0]?.nombre)}
                  title_imagen={noticias[0]?.title_imagen}
                  subvariant={isMobile ? undefined : "stretch"}
                  variant="banner"
                  textColor="text-white"
                />
              </div>
              {[1, 2, 3].map((i) => (
                <div key={noticias[i]?.id} className="bg-beige rounded-2xl">
                  <NewsCard
                    author={noticias[i]?.author}
                    iddado={noticias[i]?.id}
                    category={noticias[i].categorias[0]?.descripcion}
                    title={noticias[i]?.titulo}
                    description={noticias[i]?.descripcion}
                    imageUrl={`${bucketUrl}/${noticias[i]?.imagen || noticias[i]?.imagen_video}`}
                    imageUrlMovil={`${bucketUrl}/${noticias[i]?.imagen_movil || noticias[i]?.imagen}`}
                    mobileVersion="horizontal"
                    accentColor={getBackgroundColor(noticias[i].categorias[0]?.nombre)}
                    title_imagen={noticias[i]?.title_imagen}
                    variant="banner"
                    textColor="text-white"
                  />
                </div>
              ))}
            </div>
          </section>


        )}
    </CategorySection>
  );


}

export default FeaturedNews;