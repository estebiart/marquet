import axios from "axios";

/**
 * Servicio para obtener noticias por autor con paginación.
 *
 * @param {number} authorId - ID del autor.
 * @param {number} page - Número de página (por defecto 1).
 * @param {number} perPage - Cantidad de noticias por página (por defecto 10).
 * @returns {Promise<any>} - Respuesta de la API.
 */
const obtenerNoticiasPorAutor = async (
  authorId: number,
  page: number = 1,
  perPage: number = 10
): Promise<any> => {
  try {
    const response = await axios.get("/noticias/author", {
      params: {
        author_id: authorId,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Error al obtener noticias por autor:", err);
    throw err;
  }
};

export default obtenerNoticiasPorAutor;
