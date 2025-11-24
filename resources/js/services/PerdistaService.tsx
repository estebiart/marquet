import axios from 'axios';
import Swal from "sweetalert2";



export const obtenerPerfilPeriodista = async (slug:any) => {
  try {
    const response = await axios.get(`/mostrarperiodista/${slug}`)as { data: any };;
      return {
      usuario: response.data.usuario,
      otrosUsuarios: response.data.otros_usuarios
    };
  } catch (error) {
    console.error('Error al obtener el perfil del periodista:', error);
    throw error;
  }
};