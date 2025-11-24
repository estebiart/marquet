import axios from 'axios';
import Swal from "sweetalert2";
import { router } from '@inertiajs/react';


export const create = async (data: any) => {
    try {
      
        const responce = await axios.post("/subscribeds/create", data);
        return responce;
        
    } catch (err: any) {
        return err;
    }
}