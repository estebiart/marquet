import React, { useEffect, useRef, useState } from 'react';
import { usePage, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import Layout from '@/context/Layout';
import axios from 'axios';
import { route } from '@/ziggy';


interface User {
    id: number;
    name: string;
    genero?: string;
    fecha_nacimiento?: string;
    ciudad?: string;
    telefono?: string;
    profile_image?: string;
}


const Perfil: React.FC = () => {
    const { user } = usePage<PageProps<{ user: User }>>().props;
    const [uploading, setUploading] = useState(false);
    const { data, setData, post } = useForm({
        name: '',
        genero: '',
        fecha_nacimiento: '',
        ciudad: '',
        telefono: '',
        image: '',
    });
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    useEffect(() => {
        if (user) {
            setData({
                name: user.name || '',
                genero: user.genero || '',
                fecha_nacimiento: user.fecha_nacimiento || '',
                ciudad: user.ciudad || '',
                telefono: user.telefono || '',
                image: user.profile_image || '',
            });
        }
    }, [user]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];
        try {
            setUploading(true);

        interface PresignedUrlResponse {
                uploadUrl: { url: string };
                filePath: string;
                }

                const { data } = await axios.post<PresignedUrlResponse>(
                route('get-presigned-url').toString(),
                {
                    fileName: file.name,
                    fileType: file.type,
                }
                );


            const uploadUrl = data.uploadUrl.url;
            const filePath = data.filePath;

            await axios.put(uploadUrl, file, {
                headers: { 'Content-Type': file.type }
            });
            const S3_BUCKET_URL = import.meta.env.VITE_BUCKET_URL;
            const imageUrl = `${S3_BUCKET_URL}/${filePath}`;

            setData('image', imageUrl);
        } catch (error) {

        } finally {
            setUploading(false);
        }
    };



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("genero", data.genero);
        formData.append("fecha_nacimiento", data.fecha_nacimiento);
        formData.append("ciudad", data.ciudad);
        formData.append("telefono", data.telefono);


        post('/updateprofile', {
            data: formData,
            onSuccess: () => {
                alert('¡Bien hecho! El perfil ha sido actualizado.');
            }
        });
    };

    return (
        <Layout>
            <div className="p-4 max-w-sm mx-auto sm:mx-0 sm:ml-auto sm:mr-auto mb-4">
                <h1 className="text-4xl font-bold mb-2">PERFIL</h1>
                <div className="h-2 bg-lightViolet w-5/6 mb-6"></div>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        placeholder="Nombres y Apellidos*"
                        className="mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                    />
                    <div className="flex space-x-2">
                        <select
                            name="genero"
                            value={data.genero}
                            onChange={e => setData('genero', e.target.value)}
                            className="mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                        >
                            <option value="">Genero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <input
                            type="date"
                            name="fecha_nacimiento"
                            value={data.fecha_nacimiento}
                            onChange={e => setData('fecha_nacimiento', e.target.value)}
                            placeholder="Fecha de Nacimiento"
                            className="mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                        />
                        <input
                            type="text"
                            name="ciudad"
                            value={data.ciudad}
                            onChange={e => setData('ciudad', e.target.value)}
                            placeholder="Ciudad"
                            className="mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                        />
                    </div>
                    <input
                        type="tel"
                        name="telefono"
                        value={data.telefono}
                        onChange={e => setData('telefono', e.target.value)}
                        placeholder="Telefono"
                        className="mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                    />
                    <div className="flex items-center mt-4">
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            disabled={uploading}
                        />
                        <button
                            type="button"
                            onClick={handleClick}
                            className={`px-4 py-2    font-medium text-white bg-lightViolet rounded-full hover:bg-internationalCyan transition-all ${uploading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={uploading}
                        >
                            {uploading ? "Subiendo..." : "Seleccionar imagen"}
                        </button>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="w-3/6 mt-2 bg-lightViolet text-white py-2 rounded-full hover:bg-internationalCyan"
                        >
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Perfil;
