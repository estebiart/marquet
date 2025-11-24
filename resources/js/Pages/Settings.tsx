import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import Layout from '@/context/Layout';

interface User {
    id: number;
    name: string;
    email: string;
    curent_password: string;
    password: string;
    password_confirmation: string;
}

const Settings: React.FC = () => {
    const { user } = usePage<PageProps<{ user: User }>>().props;

    const { data, setData, post } = useForm({
        current_password: '',
        new_password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/updatesettings', { data });
    }

    return (
        <Layout>
            <div className="p-4 max-w-sm mx-auto sm:mx-0 sm:ml-auto sm:mr-auto mb-4">
                <h1 className="text-4xl font-bold mb-2">AJUSTES</h1>
                <p className="h-2 bg-internationalCyan w-5/6 mb-6"></p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Correo"
                        value={user?.email}
                        disabled
                        className="mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                    />
                    <input
                        type="password"
                        name="current_password"
                        placeholder="Contraseña actual"
                        value={data.current_password}
                        onChange={e => setData('current_password', e.target.value)}
                        className="mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                    />
                    <input
                        type="password"
                        required
                        name="password"
                        placeholder="Contraseña nueva"
                        value={data.new_password}
                        onChange={e => setData('new_password', e.target.value)}
                        className="mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                    />
                    <input
                        type="password"
                        required
                        name="password_confirmation"
                        placeholder="Confirmar contraseña"
                        value={data.password_confirmation}
                        onChange={e => setData('password_confirmation', e.target.value)}
                        className="mt-4 w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                    />
                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="w-2/6 mt-2 bg-lightViolet text-white py-2 rounded-full hover:bg-internationalCyan"
                        >
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Settings;
