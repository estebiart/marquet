import axios from "axios";

/**
 * Servicio para realizar búsquedas de noticias con paginación.
 *
 * @param {string} search 
 * @param {number} page 
 * @returns {Promise<any>}
 */
const buscarNoticias = async (search: string, page: number = 1): Promise<any> => {
    try {
        const response = await axios.get("/getbuscar", {
            params: {
                search,
                page,
            },
        });
        return response.data;
    } catch (err) {
        console.error("Error al buscar noticias:", err);
        throw err;
    }
};

export default buscarNoticias;