import React, { useState } from "react";
import { router, usePage } from '@inertiajs/react';
import YourInterests from "./YourInterests";

interface SidebarProps {
    user: {
        name: string;
        email: string;
        perfil: string;
    };
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, isOpen, onClose }) => {
    if (!isOpen) return null;
    const { categoria } = usePage().props as { categoria?: string };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getBackgroundColor = () => {
        switch (categoria) {
            case 'internacional':
                return 'bg-internationalCyan';
            case 'deportes':
                return 'bg-sportsYellow';
            case 'nacional':
                return 'bg-lightViolet';
            case 'entretenimiento':
                return 'bg-entreRed';
            case 'investigación':
                return 'bg-lightViolet';
            case 'economía':
                return 'bg-economicBlue';
            default:
                 return "bg-headerColor";
        }
    };
    const handleClick = () => {
        router.visit(`/cliente/logout`);
    };
    return (
        <div className={`absolute top-full right-[-20px] mt-1 w-64 max-md:w-80 max-md:right-12 p-4 ${getBackgroundColor()}`}>
            <button
                onClick={onClose}
                className="absolute top-2 right-[-20px]"
            >
                ✖
            </button>
            <div className="flex items-center space-x-3 mb-6">
                <img
                    loading="lazy"
                    src={user.perfil ? user.perfil : "/img/user.png"}
                    alt={user.name}
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <p className="   text-gray-300">{user.email}</p>
                </div>
            </div>
            <ul className="space-y-2">
                <li className="flex items-center space-x-2 cursor-pointer hover:bg-purple-800 p-2 rounded">
                    <span className="pi pi-user"></span>
                    <span>
                        <a href="/cliente/perfil">
                            Mi perfil
                        </a>
                    </span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer hover:bg-purple-800 p-2 rounded">
                    <span className="pi pi-cog"></span>
                    <span>
                        <a href="/cliente/settings">
                            Ajustes
                        </a>
                    </span>
                </li>
                <li
                    className="flex items-center space-x-2 cursor-pointer hover:bg-purple-800 p-2 rounded"
                    onClick={() => setIsModalOpen(true)}
                >
                    <span className="pi pi-cog"></span>
                    <span>Mis intereses</span>
                </li>
               {/* <li className="flex items-center space-x-2 cursor-pointer hover:bg-purple-800 p-2 rounded">
                    <span className="pi pi-bookmark"></span>
                    <a href="/noticias/ver">
                    <span>Noticias Guardadas</span>
                    </a>
                    
                </li>*/}
            </ul>
            <button className={`mt-6  ${getBackgroundColor()} shadow-xl border p-2 rounded-xl hover:bg-purple-800`}
                onClick={handleClick}
            >
                Cerrar Sesión
            </button>
            <YourInterests isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
};

export default Sidebar;
