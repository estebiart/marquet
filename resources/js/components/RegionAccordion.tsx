import { useState } from "react";

function RegionAccordion({
    cities,
    handleRegionChange,
}: {
    cities: { name: string }[];
    handleRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
    const [selectedCity, setSelectedCity] = useState<{ name: string } | null>(null);

    const handleSelect = (city: { name: string }) => {
        setSelectedCity(city);
        handleRegionChange({ target: { value: city.name } } as React.ChangeEvent<HTMLSelectElement>);
    };

    return (
        <ul className="mb-4 ">
            <h4 className="py-2 text-lg font-bold text-white uppercase tracking-widest  border-b border-white">
                Regiones
            </h4>
            {cities.map((c) => (
                <li
                    key={c.name}
                    onClick={() => handleSelect(c)}
                    className={`py-2 cursor-pointer text-white tracking-wider hover:text-white hover:border-b-2 hover:border-white ${
                        selectedCity?.name === c.name ? "bg-gray-700" : ""
                    }`}
                >
                    {c.name}
                </li>
            ))}
        </ul>
    );
}

export default RegionAccordion;
