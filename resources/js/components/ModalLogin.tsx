import { login } from "@/services/AuthServecie";
import ModalRegister from "./ModalRegister";
import { useState } from "react";
import React from "react";
import Google from "./Google";
import FacebookButton from "./Facebook";
import GoogleAuthButton from "./Google";
type ModelLoginProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ModalLogin: React.FC<ModelLoginProps> = ({ isOpen, onClose }) => {
    const [isOpenRegister, setIsOpenRegister] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});



    const submit = async (e: any) => {
        e.preventDefault();
        setErrors({});

        const response = await login(data);
        // if (response.data?.status == "success") {
        //     onClose();
        // }
        // else {
        //     setErrors(response.errors);
        // }
    };

    const openRegister = () => {
        setIsOpenRegister(true);
     
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="bg-headerColor text-white py-3 w-full text-center rounded-t-2xl">
                        <h2 className="text-xl font-bold">Iniciar sesión</h2>
                    </div>
                    <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-800">✖</button>
                    <form onSubmit={submit} className="mt-4 p-4 space-y-4">
                        <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="Correo" className="w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet" required />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                        <input type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} placeholder="Contraseña" className="w-full px-4 py-2 border border-lightViolet text-lightViolet rounded-full focus:outline-none focus:ring-2 focus:ring-lightViolet" required />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}

                        <div className="flex justify-between items-center   ">
                            <label className="flex items-center cursor-pointer">
                                <div
                                    className={`relative w-9 h-4 rounded-full transition ${isChecked ? "bg-lightViolet" : "bg-gray-300"}`}
                                    onClick={() => setIsChecked(!isChecked)}
                                >
                                    <div
                                        className={`absolute w-4 h-4 bg-white rounded-full transition transform ${isChecked ? "translate-x-5" : "translate-x-0"}`}
                                    ></div>
                                </div>
                                <span className="ml-2 text-lightViolet">Recordar</span>
                            </label>
                            <button className="text-lightViolet hover:underline">Olvidé mi contraseña</button>
                        </div>
                        <div className="flex justify-center items-center ">
                            <button type="submit" className="w-2/6 bg-lightViolet text-white py-2 rounded-full hover:bg-internationalCyan">Entrar</button>
                        </div>

                        <div className="flex items-center justify-center mt-2">
                            <hr className="border-lightViolet w-36" />
                            <span className="px-2 text-lightViolet">o</span>
                            <hr className="border-lightViolet w-36" />
                        </div>
                         <div className="text-lightViolet flex flex-col sm:flex-row items-center justify-center gap-2 mt-2 w-full">
                            <GoogleAuthButton />
                          
                        </div> 


                    </form>
                    <div className="bg-headerColor p-4">
                        <span className="text-white">No tengo cuenta, quiero <b className="text-white hover:underline" onClick={openRegister}>REGISTRARME</b></span>
                    </div>
                </div>
            </div>
            <ModalRegister isOpen={isOpenRegister} onClose={() => setIsOpenRegister(false)}></ModalRegister>
        </>
    );
};

export default ModalLogin;