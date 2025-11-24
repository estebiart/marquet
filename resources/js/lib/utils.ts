import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const VITE_BUCKET_URL = import.meta.env.VITE_BUCKET_URL;

export const bucketUrl = VITE_BUCKET_URL;

export const getBackgroundColor = (categoria: string | undefined) => {
  switch (categoria) {
    case "colombia":
      return "bg-colombia";
    case "deportes":
      return "bg-deportes";
    case "mundo":
      return "bg-mundo";
    case "economia":
      return "bg-economia";
    case "entretenimiento-cultura":
      return "bg-entretenimientoCultura";
    case "investigacion":	
      return "bg-investigacion";
    case "bogota":
      return "bg-bogota";
    case "politica":
      return "bg-politica";
    case "judicial":
      return "bg-judicial";
    case "vida-moderna":
      return "bg-vidaModerna";
    default:
      return "bg-headerColor";
  }
}
export const getBorderColor = (categoria: string | undefined) => {

  switch (categoria) {
    case "colombia":
      return "bg-colombia";
    case "deportes":
      return "bg-deportes";
    case "mundo":
      return "bg-mundo";
    case "economia":
      return "bg-economia";
    case "entretenimiento-cultura":
      return "bg-entretenimientoCultura";
    case "investigacion":
      return "bg-investigacion";
    case "bogota":
      return "bg-bogota";
    case "politica":
      return "bg-politica";
    case "judicial":
      return "bg-judicial";
    case "vida-moderna":
      return "bg-vidaModerna";
    default:
      return "#ef0c52";
  }
}

export const getColor = (categoria: string | undefined) => {
  switch (categoria?.toLowerCase()) {
    case "colombia":
      return "#841eaf";
    case "deportes":
      return "#ea4600";
    case "mundo":
      return "#aa205e";
    case "economia":
      return "#01bbba";
    case "entretenimiento-cultura":
      return "#90ea00";
    case "investigacion":
      return "#822d18";
    case "bogota":
      return "#ff0000";
    case "politica":
      return "#4c4646";
    case "judicial":
      return "#000000";
    case "vida-moderna":
      return "#23209e";
    default:
      return "#ef0c52"; 
  }
};

