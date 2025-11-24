import { Dialog, Transition } from "@headlessui/react";
import { register } from "@/services/AuthServecie";
import YourInterests from "./YourInterests";
import { useForm } from "@inertiajs/react";
import { Fragment, useState } from "react";
import React from "react";
import GoogleAuthButton from "./Google";
import FacebookButton from "./Facebook";

type ModelRegisterProps = {
    isOpen: boolean;
    onClose: () => void;
};
const ciudades = [
    "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena",
    "Bucaramanga", "Pereira", "Santa Marta", "Cúcuta", "Manizales",
    "Villavicencio", "Pasto", "Armenia", "Montería", "Neiva"
];

const ModalRegister: React.FC<ModelRegisterProps> = ({ isOpen, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const { data, setData } = useForm({
        email: "",
        name: "",
        password: "",
        genero: "",
        ciudad: "",
        fecha_nacimiento: ""
    });

    const submit = (e: any) => {
        e.preventDefault();
        const response = register(data);
        onClose();
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== data.password) {
            setError("Las contraseñas no coinciden");
        } else {
            setError("");
        }
    };

    return (
        <Transition  appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
                <div className="fixed inset-0 bg-black bg-opacity-50" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-xl bg-white rounded-2xl">
                            <div className="bg-headerColor text-white text-center p-4 rounded-t-2xl">
                                <Dialog.Title className="text-xl font-semibold">Registrarme</Dialog.Title>
                            </div>

                            <div className="p-6">
                                <form onSubmit={submit} className="space-y-4">
                                    <input
                                        required
                                        type="email"
                                        placeholder="Correo*"
                                        className="w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                                        value={data.email}
                                        onChange={(e) => setData("email", e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Nombres y Apellidos*"
                                        className="w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                    />

                                    <div className="grid grid-cols-3 gap-2">
                                        <select
                                            className="w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                                            value={data.genero}
                                            onChange={(e) => setData("genero", e.target.value)}
                                        >
                                            <option value="" disabled>Género</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="femenino">Femenino</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                        <input
                                            required
                                            value={data.fecha_nacimiento}
                                            onChange={(e) => setData("fecha_nacimiento", e.target.value)}
                                            type="date"
                                            className="w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                                        />
                                        <select
                                            className="w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                                            value={data.ciudad}
                                            onChange={(e) => setData("ciudad", e.target.value)}
                                        >
                                            <option value="" disabled>Selecciona una ciudad</option>
                                            {ciudades.map((ciudad) => (
                                                <option key={ciudad} value={ciudad}>{ciudad}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <input
                                            required
                                            value={data.password}
                                            onChange={(e) => setData("password", e.target.value)}
                                            type="password" placeholder="Contraseña*"
                                            className="w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                                        />
                                        <input
                                            required
                                            type="password"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                            placeholder="Confirmar Contraseña*"
                                            className="w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet"
                                        />
                                        {error && <p className="text-red-500    mt-1">{error}</p>}
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            disabled={error !== "" || data.password === "" || confirmPassword === ""}
                                            className={`w-2/6 mt-2 py-2 rounded-full ${error || data.password === "" || confirmPassword === ""
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-lightViolet hover:bg-internationalCyan text-white"
                                                }`}
                                        >
                                            Siguiente
                                        </button>
                                    </div>

                                </form>
                             {/*
                                <div className="flex items-center justify-center mt-2">
                                    <hr className="border-lightViolet w-36" />
                                    <span className="px-2 text-lightViolet">o</span>
                                    <hr className="border-lightViolet w-36" />
                                </div>
                            
                                <div className="text-lightViolet flex flex-col sm:flex-row  justify-evenly gap-2 mt-2">
                                      <GoogleAuthButton />
                                      <FacebookButton/>
                                </div> */}
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    <YourInterests isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </div>
            </Dialog>
        </Transition>
    )

}

export default ModalRegister;