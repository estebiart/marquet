export interface Opinion {
    id: number;
    titulo: string;
    slug: string;
    descripcion: string;
    fecha_publicacion: string;
    contenido: string;
    autor_nombre_publico?: string;
    autor_foto?: string;
    autor_cargo?: string;
    autor_biografia?: string;
    updated_at: string;
    created_at: string;
    author: {
        id: number;
        name: string;
        perfil: string;
    }
}

export interface OpinionResumen {
    id: number;
    titulo: string;
    slug: string;
    fecha_publicacion: string;
}

export interface AutorOpinion {
    autor_nombre_publico: string;
    autor_foto?: string;
    autor_cargo?: string;
    autor_biografia?: string;
    opiniones: OpinionResumen[];
}
