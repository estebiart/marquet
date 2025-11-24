import { CategorySection } from "./CategorySection";
import { NewsCard } from "./NewsCard";
import { Noticia } from "@/types/Noticias";
import { bucketUrl, getBackgroundColor } from "@/lib/utils";
import InternaSection from "./InternaSection";
import { LazyYoutube } from "./LazyYoutube";



interface DestacadosProps {
  destacado1?: Noticia;
  destacado2?: Noticia;
  destacado3?: Noticia;
  destacado4?: Noticia;
  destacado5?: Noticia;
  video?: string;
  title_video?: string;
  p1?: string;
  p2?: string;
  n1?: Noticia[];
  n2?: Noticia[];
  latestnewspublished: Noticia[]
}
export const DestacadosSection: React.FC<DestacadosProps> = ({ destacado1, destacado2, destacado3, destacado4, destacado5, video, p1, p2, n1, n2, latestnewspublished, title_video }) => {
  return (
    <CategorySection title="" color="bg-black" bgcolor="bg-white">
      <>
        <div className=" grilla flex flex-col sm:grid sm:grid-cols-3  gap-4 md:mb-4">
          {destacado1 && destacado2 && destacado3 && (
            <>
              <div className="sm:col-span-2 sm:row-start-1">
                <NewsCard
                  author={destacado1?.author}
                  iddado={destacado1?.id}
                  category={destacado1?.categorias[0]?.descripcion}
                  title={ destacado1?.titulo}
                  description={destacado1?.descripcion}
                  imageUrl={`${bucketUrl}/${destacado1?.imagen || destacado1?.imagen_video}`}
                  showPlayIcon={!destacado1?.imagen && !!destacado1?.imagen_video}
                  imageUrlMovil={`${bucketUrl}/${destacado1?.imagen_movil || destacado1?.imagen || destacado1?.imagen_video} `}
                  accentColor={getBackgroundColor(destacado1?.categorias[0]?.nombre)}
                  title_imagen={destacado1?.title_imagen}
                  mobileVersion="horizontal"
                  variant="banner"
                  subvariant="principal"
                  textColor="text-white"
                />
              </div>

              {
                (p1 && p1.length > 0) &&
                <div>
                  <img
                    loading="lazy"
                    src={`${bucketUrl}/${p1}`}
                    className="w-full h-full object-cover"
                    alt={destacado1?.titulo}
                  />
                </div>

              }

              <div className="w-full h-full object-cover" >
                <div className="flex flex-col gap-4"
                >
                  <div>
                    <NewsCard
                      author={destacado2?.author}
                      iddado={destacado2?.id}
                      category={destacado2?.categorias[0]?.descripcion}
                      title={ destacado2?.titulo}
                      description=""
                      imageUrl={`${bucketUrl}/${destacado2?.imagen || destacado2?.imagen_video}`}
                      showPlayIcon={!destacado2?.imagen && !!destacado2?.imagen_video}
                      imageUrlMovil={`${bucketUrl}/${destacado2?.imagen_movil || destacado2?.imagen || destacado2?.imagen_video}`}
                      accentColor={getBackgroundColor(destacado2.categorias[0]?.nombre)}
                      title_imagen={destacado2?.title_imagen}
                      mobileVersion="horizontal"
                      variant="banner"
                      textColor="text-white"
                      subvariant="fetchpriority"
                    />
                  </div>
                  <div>
                    <NewsCard
                      author={destacado3?.author}
                      iddado={destacado3?.id}
                      category={destacado3?.categorias[0]?.descripcion}
                      title={destacado3?.titulo}
                      description=""
                      imageUrl={`${bucketUrl}/${destacado3?.imagen || destacado3?.imagen_video}`}
                      showPlayIcon={!destacado3?.imagen && !!destacado3?.imagen_video}
                      imageUrlMovil={`${bucketUrl}/${destacado3?.imagen_movil || destacado3?.imagen || destacado3?.imagen_video}`}
                      accentColor={getBackgroundColor(destacado3.categorias[0]?.nombre)}
                      title_imagen={destacado3?.title_imagen}
                      mobileVersion="horizontal"
                      variant="banner"
                      textColor="text-white"
                    />
                  </div>

                </div>

                {/* <InternaSection noticias={latestnewspublished} /> */}
              </div>
              {destacado4 && (
                <div className="sm:col-span-1 sm:row-start-2 sm:col-start-2 ">
                  <NewsCard
                    author={destacado4?.author}
                    iddado={destacado4?.id}
                    category={destacado4?.categorias[0]?.descripcion}
                    title={ destacado4?.titulo}
                    description={destacado4?.descripcion}
                    imageUrl={`${bucketUrl}/${destacado4?.imagen || destacado4?.imagen_video}`}
                    showPlayIcon={!destacado4?.imagen && !!destacado4?.imagen_video}
                    imageUrlMovil={`${bucketUrl}/${destacado4?.imagen_movil || destacado4?.imagen || destacado4?.imagen_video}`}
                    accentColor={getBackgroundColor(destacado4?.categorias[0]?.nombre)}
                    title_imagen={destacado4?.title_imagen}
                    mobileVersion="horizontal"
                    variant="banner"
                    textColor="text-white"
                  />
                </div>
              )}
              {destacado5 && (
                <div className="sm:row-start-2 sm:col-start-1 defer-visibility">
                  <NewsCard
                    author={destacado5?.author}
                    iddado={destacado5?.id}
                    category={destacado5?.categorias[0]?.descripcion}
                    title={destacado5?.titulo}
                    description={destacado5?.descripcion}
                    imageUrl={`${bucketUrl}/${destacado5?.imagen || destacado5?.imagen_video}`}
                    showPlayIcon={!destacado5?.imagen && !!destacado5?.imagen_video}
                    imageUrlMovil={`${bucketUrl}/${destacado5?.imagen_movil || destacado5?.imagen || destacado5?.imagen_video}`}
                    accentColor={getBackgroundColor(destacado5?.categorias[0]?.nombre)}
                    title_imagen={destacado5?.title_imagen}
                    mobileVersion="horizontal"
                    variant="banner"
                    textColor="text-white"
                  />
                </div>
              )}
            </>
          )}
          <div className=" sm:col-start-3 defer-visibility">
            {
              (n1 && n1.length > 0) &&
              <NewsCard
                author={n1[0]?.author}
                iddado={n1[0]?.id}
                category={n1[0]?.categorias[0]?.descripcion}
                title={n1[0]?.titulo}
                description={n1[0]?.descripcion}
                imageUrl={`${bucketUrl}/${n1[0]?.imagen || n1[0]?.imagen_video}`}
                showPlayIcon={!n1[0]?.imagen && !!n1[0]?.imagen_video}
                imageUrlMovil={`${bucketUrl}/${n1[0]?.imagen_movil || n1[0]?.imagen || n1[0]?.imagen_video}`}
                accentColor={getBackgroundColor(n1[0]?.categorias[0]?.nombre)}
                title_imagen={n1[0]?.title_imagen}
                mobileVersion="horizontal"
                variant="banner"
                textColor="text-white"
              />
            }
          </div>


          <div className="relative sm:col-span-2  mb-20 md:mb-0 overflow-hidden defer-visibility">
            {video && <LazyYoutube videoUrl={video} title={title_video || ""} />}
          </div>

          <div className="sm:col-span-1 overflow-hidden defer-visibility">
            {p2 && p2.length > 0 && (
              <img
                loading="lazy"
                src={`${bucketUrl}/${p2}`}
                className="w-[300px] h-[250px] object-cover"
                alt={destacado1?.titulo}
              />
            )}

            {n2 && n2.length > 0 && (
              <div className=" md:h-[250px]">
                <NewsCard
                  author={n2[0]?.author}
                  iddado={n2[0]?.id}
                  category={n2[0]?.categorias[0]?.descripcion}
                  title={n2[0]?.titulo}
                  description={n2[0]?.descripcion}
                  imageUrl={`${bucketUrl}/${n2[0]?.imagen || n2[0]?.imagen_video}`}
                  showPlayIcon={!n2[0]?.imagen && !!n2[0]?.imagen_video}
                  imageUrlMovil={`${bucketUrl}/${n2[0]?.imagen_movil || n2[0]?.imagen || n2[0]?.imagen_video}`}
                  accentColor={getBackgroundColor(n2[0]?.categorias[0]?.nombre)}
                  title_imagen={n2[0]?.title_imagen}
                  mobileVersion="horizontal"
                  variant="banner"
                  textColor="text-white"
                />
              </div>
            )}
          </div>


        </div>

      </>
    </CategorySection>
  );
};

