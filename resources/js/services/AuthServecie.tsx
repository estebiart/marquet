import axios from 'axios';
import Swal from 'sweetalert2'
import { router } from '@inertiajs/react';



export const login = async (data: any) => {
    try {
        const response = await axios.post("/cliente/login", data) as { data: any };;
        if (response.data.status == "success") {
            router.reload();
        }
        return response;
    } catch (err: any) {
        return err.response.data;
    }
};
export const loginGoogle = async (data: any) => {
    try {
        const res = await axios.post("/cliente/login", { userGo: data, red_social: "google" })as { data: any };;
        if (res.data.status === "success") {
            window.location.href = "/";
        }
    }
    catch (err: any) {
        return err.response.data;
    }
}
export const loginFaceboock = async (data: any) => {
    try {
        const res = await axios.post("/cliente/login", { userFace: data, red_social: "facebook" })as { data: any };;
        if (res.data.status === "success") {
            window.location.href = "/home";
        }
    } catch {
     
    }
}

export const register = async (data: any) => {
    try {
        const response = await axios.post("/cliente/register", data)as { data: any };;
        if (response.data.status == "success") {
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                showConfirmButton: false,
                timer: 1500
            });
        }
        return response.data;
    } catch (err: any) {
        if (err.response && err.response.data && err.response.data.errors) {
            Swal.fire({
                icon: 'error',
                title: 'Error al registrarse',
                text: Object.values(err.response.data.errors).join(', '),
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error al registrarse',
                showConfirmButton: false,
                timer: 1500
            });
        }
        return err.response.data;
    }
};