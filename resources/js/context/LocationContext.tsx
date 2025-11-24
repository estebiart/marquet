import React, { createContext, useContext, useState, ReactNode } from "react";

interface City {
  name: string;
  latitude: number;
  longitude: number;
}

interface LocationContextProps {
  ciudad: City | null;
  setCiudad: (city: City | null) => void;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ciudad, setCiudad] = useState<City | null>(null);

  return (
    <LocationContext.Provider value={{ ciudad, setCiudad }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextProps => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
