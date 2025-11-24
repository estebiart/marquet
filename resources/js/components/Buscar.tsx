import React, { useState, useEffect, useRef } from "react";
import { router } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";

type BuscarProps = {
    isOpen: boolean;
    onClose: () => void;
    clasName?: string;
};

const Buscar: React.FC<BuscarProps> = ({ isOpen, onClose, clasName }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route("Buscar"), { search: searchTerm });
        onClose();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    if (!isOpen) return null;

return (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                className="fixed inset-0 mt-5 md:mt-10 ml-14 md:ml-32 "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                <div ref={containerRef} className="w-64">
                    <form onSubmit={handleSearch} className="flex overflow-hidden">
                        <input
                            ref={inputRef}
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Buscar"
                            className="w-52 md:w-full rounded-e-3xl border-0 text-black h-9"
                            autoFocus
                        />
                    </form>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

};

export default Buscar;
