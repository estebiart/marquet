import React, { useState } from "react";

type ModalPropsInterests = {
    isOpen: boolean;
    onClose: () => void;
};

const interestsList = [
    "Política", "Última Hora", "Deportes", "Investigación",
    "Música", "Economía", "Entretenimiento", "Cine",
    "Tendencias", "Opinión"
];

const YourInterests: React.FC<ModalPropsInterests> = ({ isOpen, onClose }) => {
    const [selectedInterests, setSelectedInterests] = useState<Record<string, boolean>>({});

    if (!isOpen) return null;

    const toggleInterest = (interest: string) => {
        setSelectedInterests(prev => ({
            ...prev,
            [interest]: !prev[interest]
        }));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg relative overflow-hidden">
                <div className="bg-internationalCyan text-white py-3 w-full text-center rounded-t-2xl">
                    <h2 className="text-xl font-bold">¿Cuáles son tus intereses?</h2>
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                >
                    ✖
                </button>
                <form className="mt-4 p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4   ">
                        {interestsList.map((interest) => (
                            <label key={interest} className="flex items-center cursor-pointer">
                                <div
                                    className={`relative w-9 h-4 rounded-full transition ${selectedInterests[interest] ? "bg-lightViolet" : "bg-gray-300"}`}
                                    onClick={() => toggleInterest(interest)}
                                >
                                    <div
                                        className={`absolute w-4 h-4 bg-white rounded-full transition transform ${selectedInterests[interest] ? "translate-x-5" : "translate-x-0"}`}
                                    ></div>
                                </div>
                                <span className="ml-2 text-lightViolet">{interest}</span>
                            </label>
                        ))}
                    </div>
                </form>
                <div className="p-4 flex justify-center">
                    <button 
                        onClick={onClose} 
                        className="bg-lightViolet text-white py-2 px-6 rounded-full hover:bg-purple-800 transition"
                    >
                        Finalizar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YourInterests;
