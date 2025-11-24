import "clsx";
const VITE_BUCKET_URL = "https://minutobucket.s3.us-east-2.amazonaws.com";
const bucketUrl = VITE_BUCKET_URL;
const getBackgroundColor = (categoria) => {
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
};
const getBorderColor = (categoria) => {
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
};
const getColor = (categoria) => {
  switch (categoria == null ? void 0 : categoria.toLowerCase()) {
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
export {
  getBorderColor as a,
  bucketUrl as b,
  getColor as c,
  getBackgroundColor as g
};
