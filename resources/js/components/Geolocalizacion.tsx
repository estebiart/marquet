import React, { useState } from "react";
import { useLocation } from "@/context/LocationContext";
import { router } from "@inertiajs/react";

interface City {
  name: string;
  latitude: number;
  longitude: number;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface GeolocalizacionProps {
  renderButton: (getLocation: () => void) => JSX.Element;
  renderSelect?: (
    city: City | null,
    handleRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  ) => JSX.Element;
  onRegionDetected?: (cityName: string) => void;
}



export const cities: City[] = [
  { name: "Colombia", latitude: 0, longitude: 0 },
  { name: "Bogotá", latitude: 4.711, longitude: -74.0721 },
  { name: "Medellín", latitude: 6.2442, longitude: -75.5812 },
  { name: "Cali", latitude: 3.4516, longitude: -76.5319 },
  { name: "Barranquilla", latitude: 10.9685, longitude: -74.7813 },
  { name: "Cartagena", latitude: 10.391, longitude: -75.4794 },
  { name: "Bucaramanga", latitude: 7.1193, longitude: -73.1227 },
  { name: "Cúcuta", latitude: 7.8939, longitude: -72.5078 },
  { name: "Pereira", latitude: 4.8087, longitude: -75.6906 },
  { name: "Santa Marta", latitude: 11.2408, longitude: -74.199 },
  { name: "Ibagué", latitude: 4.4389, longitude: -75.2322 },
  { name: "Villavicencio", latitude: 4.1514, longitude: -73.6379 },
  { name: "Pasto", latitude: 1.2136, longitude: -77.2811 },
  { name: "Manizales", latitude: 5.0689, longitude: -75.5174 },
  { name: "Montería", latitude: 8.7575, longitude: -75.8831 },
  { name: "Armenia", latitude: 4.5386, longitude: -75.672 },
];

const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;
const haversineDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
    Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const findClosestCity = (latitude: number, longitude: number): City | null => {
  let closestCity: City | null = null;
  let shortestDistance = Infinity;
  cities.forEach((city) => {
    const distance = haversineDistance(
      latitude,
      longitude,
      city.latitude,
      city.longitude
    );

    if (distance < shortestDistance) {
      shortestDistance = distance;
      closestCity = city;
    }
  });
  return closestCity;
};

const Geolocalizacion: React.FC<GeolocalizacionProps> = ({ renderButton, renderSelect, onRegionDetected }) => {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [city, setCity] = useState<City | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { setCiudad } = useLocation();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          const closestCity = findClosestCity(latitude, longitude);
          setCity(closestCity);
          setCiudad(closestCity);
          if (closestCity) {
            onRegionDetected?.(closestCity.name); 
            router.visit(`/noticias/region?region=${encodeURIComponent(closestCity.name)}`);
          }
        },
        () => setError("Error al obtener la ubicación")
      );
    } else {
      setError("Geolocalización no soportada");
    }
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value;
    const selectedCity = cities.find((c) => c.name === selectedRegion) || null;
    setCity(selectedCity);
    setCiudad(selectedCity);
    if (selectedCity) {
      onRegionDetected?.(selectedCity.name);
      router.get(`/noticias/region?region=${encodeURIComponent(selectedCity.name)}`);
    }
  };

  return (
    <>
    
  {renderSelect && renderSelect(city, handleRegionChange)}

      {error && <p className="text-red-500   ">{error}</p>}
        {renderButton(getLocation)}
    </>
  );
};

export default Geolocalizacion;