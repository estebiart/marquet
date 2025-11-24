import { usePage } from "@inertiajs/react";
import Layout from "@/context/Layout";
import { CategorySection } from "@/components/CategorySection";
import { bucketUrl, getBackgroundColor } from "@/lib/utils";
import { Noticia } from "@/types/Noticias";
import { NewsCard } from "@/components/NewsCard";

interface RegionProps {
  noticias: Noticia[];
  region: string;
}

const Region: React.FC<RegionProps> = ({ noticias, region }) => {

  return (
    <Layout>
      <CategorySection title={region ? region.toUpperCase() : "NOTICIAS"} color="bg-black" bgcolor="bg-white">

        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6">
          <div className=" ">
                <div className="grid grid-cols-1 gap-5 ">
                  {noticias.map((noticia, index) => (
                    <div key={index} className="w-full">
        
                      <NewsCard
                        category={noticia?.categorias[0]?.nombre || region}
                        title={noticia.titulo}
                        iddado={noticia.id}
                        description={noticia.descripcion}
                        imageUrl={`${bucketUrl}/${noticia.imagen}`}
                        accentColor={getBackgroundColor(region)}
                        slug={noticia.slug}
                        variant="banner"
                        subvariant="stretch"
                      />
                    </div>
                  ))}
                </div>
          </div>
          <div className="">
            {/* <InternaSection noticias={items} /> */}
          </div>
        </div>
      </CategorySection>
    </Layout>
  );
};

export default Region;
