import axios from "axios"
import Swal from "sweetalert2";

export const guardarNoticias = async (noticia_id: any) => {

    try {

        const response = await axios.post("/noticias/guardar", {noticia_id : noticia_id}) as { data: any };

        if (response.data.status == 'success') {
            Swal.fire({
                icon: 'success',
                title: 'Noticia guardada correctamente',
                showConfirmButton: false,
            });
        }

    } catch (err: any) {

        Swal.fire({
            icon: 'error',
            title: 'Error al guardar',
            text: Object.values(err.response.data.errors).join(', '),
            showConfirmButton: false,
        });

    }

}