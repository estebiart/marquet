import axios from 'axios';
import Swal from 'sweetalert2'
import { router } from '@inertiajs/react';

export const obtenerNoticias = async (id:any) => {
  try {
    const response = await axios.get(`/noticiasdata/${id}`) as { data: any };;
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener la noticia:', error);
    throw error;
  }
};