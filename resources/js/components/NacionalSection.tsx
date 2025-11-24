import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CategorySection } from "./CategorySection";
import { NewsCard } from "./NewsCard";
import { NoticiasProps } from "@/types/Noticias";
import { bucketUrl } from "@/lib/utils";
 

export const NacionalSection: React.FC<NoticiasProps> = ({ noticias, isMobile }) => {

  return (
    <CategorySection title="nacional" color="bg-lightViolet" bgcolor="bg-grey">
      <div className="flex gap-5 max-md:flex-col md:h-[800px]" id="nacional">
        <div className="w-8/12 max-md:w-full md:h-full flex bigcard">
          {noticias.length > 0 && (
            <NewsCard
              iddado={noticias[0].id}
              category="NACIONAL"
              title={noticias[0]?.titulo}
              description={noticias[0].descripcion}
              imageUrl={`${bucketUrl}/${noticias[0].imagen}`}
              variant="large"
              bgColor="bg-white"
              slug={noticias[0].slug}
            />
          )}
        </div>

        <div className="w-4/12 max-md:w-full md:h-full flex flex-col">
          <Swiper
            direction={isMobile ? "horizontal" : "vertical"}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            className="md:h-full w-full flex-grow-0"
            pagination={{ clickable: true }}
            mousewheel
            modules={[Navigation, Mousewheel, Pagination]}
          >
            {noticias.slice(1).map((noticia, index) => (
              <SwiperSlide key={index} className="h-full">
                <NewsCard
                iddado={noticia.id}
                  category="NACIONAL"
                  title={noticia?.titulo }
                  description={noticia.descripcion}
                  imageUrl={`${bucketUrl}/${noticia.imagen}`}
                  variant="large"
                  bgColor="bg-white"
                  slug={noticia.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </CategorySection>
  );
};


