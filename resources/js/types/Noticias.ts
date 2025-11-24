export interface Noticia {
    id: number; 
    noticia_id: number;
    categorias: Categoria[];
    titulo: string;
    
  etiquetas: string[];
    imagen: string;
    imagen_video: string;
    imagen_movil?: string;
    contenido: string;
    categoria: string;
    resumen: string;
    destacada: boolean; 
    descripcion: string;
    fecha_publicacion: string;
    status: string;
    embebido: Array<any>;
    noticia_embebida: Array<any>;
    audios?: string;
    metadata: { 
      meta_keywords: string;
      seo_description: string;
      seo_title: string;
    }; 
    views: number;
    author_id: number;
    author: {
      id: number;
      name: string;
      perfil: string;
    };
    slug: string;
    is_minuto: boolean;
    title_imagen: string;
    updated_at: string;
  }
export type Etiqueta = {
  etiqueta: string;
  // Puede incluir otras propiedades en otros contextos
  [key: string]: any;
};

 export interface Categoria {
    id: number;
    nombre: string;
    descripcion: string;
  }

  export interface NoticiasProps {
    noticias: Noticia[];
    isMobile?: boolean;
    more?: Noticia[];
  }
  import type { PageProps as InertiaPageProps } from '@inertiajs/core';
  export interface PageProps extends InertiaPageProps {
    categoria: Categoria;
    pages: {
      ad: string;
      page_type: {
        structure: PageStructure[];
      };
      metadata: { 
        meta_keywords: string;
        seo_description: string;
        seo_title: string;
      };
    };
    baseUrl: string;
    noticias: Noticia[];
    auth: any;
    ziggy: any;
    [key: string]: any;
  
  }
 export interface PageStructure {
    component: string;
    structure?: any[];
    Destacados?: Noticia[];
    Populares?: Noticia[];
    [key: string]: any;
  }
  