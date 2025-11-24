import React from "react";
import { PageProps } from "@/types/Noticias";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import LayoutAMP from "@/context/LayoutAMP";
import InternaSection from "@/components/InternaSection";
import { bucketUrl } from "@/lib/utils";


const NoticiasAMP: React.FC<PageProps> = ({ noticia, topweek }) => {
  if (!noticia) return <LayoutAMP><p>Cargando...</p></LayoutAMP>;

  const category = noticia.categorias[0]?.nombre || "Noticias";

  const formattedDate = (date: string) => {
    const raw = format(new Date(date), "d 'de' MMMM 'de' yyyy - h:mm a", { locale: es });
    return raw.replace("AM", "a.m.").replace("PM", "p. m.");
  };

  return (
    <LayoutAMP>
      <header>
        <h1>{noticia.titulo}</h1>
        <p>{formattedDate(noticia.created_at)}</p>
        <p>{noticia.descripcion}</p>
      </header>

      <nav>
        <a href="/">Inicio</a> / {category}
      </nav>

      <section>
        <amp-img
          loading="lazy"
          src={`${bucketUrl}/${noticia.author.perfil}`}
          width="64"
          height="64"
          layout="fixed"
          alt={`Perfil de ${noticia.author.name}`}
          className="rounded"
        />
        <p>Por <a href={`/periodista/${noticia.author.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")}`}>{noticia.author.name}</a></p>
      </section>

      <section>
        <article>
          <p>{noticia.contenido ? noticia.contenido.replace(/<[^>]+>/g, '') : ""}</p>
        </article>
      </section>

      <section>
        <InternaSection noticias={topweek} />
      </section>
    </LayoutAMP>
  );
};

export default NoticiasAMP;
