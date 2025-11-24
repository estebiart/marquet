import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "https://minutobucket.s3.us-east-2.amazonaws.com";
const ssr = createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(
      `./Pages/${name}.tsx`,
      /* @__PURE__ */ Object.assign({ "./Pages/Buscar.tsx": () => import("./Buscar-C-7rk79a.js"), "./Pages/Categoria.tsx": () => import("./Categoria-PaNpdXs7.js"), "./Pages/Home copy.tsx": () => import("./Home copy-l0sNRNKZ.js"), "./Pages/Home.tsx": () => import("./Home-Dvaz38QM.js"), "./Pages/Multimedia.tsx": () => import("./Multimedia-D_C2WMIT.js"), "./Pages/NewsByTag.tsx": () => import("./NewsByTag-D6Uirbps.js"), "./Pages/Noticias.tsx": () => import("./Noticias-NOsO7Zz_.js"), "./Pages/NoticiasAMP.tsx": () => import("./NoticiasAMP-Dfx76sDa.js"), "./Pages/NoticiasGuardadas.tsx": () => import("./NoticiasGuardadas-DFXPAZG0.js"), "./Pages/NoticiasPreview.tsx": () => import("./NoticiasPreview-C0vZGC8B.js"), "./Pages/Opinion.tsx": () => import("./Opinion-DsHIr8Dx.js"), "./Pages/Opiniones.tsx": () => import("./Opiniones-D3A211Ks.js"), "./Pages/Patrocinio.tsx": () => import("./Patrocinio-tFKs-4EH.js"), "./Pages/Perfil.tsx": () => import("./Perfil-C2sqgPvD.js"), "./Pages/PerfilPeriodista.tsx": () => import("./PerfilPeriodista-knwhlRZ8.js"), "./Pages/PeriodistasList.tsx": () => import("./PeriodistasList-CYeNDgcT.js"), "./Pages/PrivacyPolicy.tsx": () => import("./PrivacyPolicy-CmKqtg6M.js"), "./Pages/Region.tsx": () => import("./Region-DLJo7Td8.js"), "./Pages/Settings.tsx": () => import("./Settings-BB0e_d6D.js"), "./Pages/TermsConditions.tsx": () => import("./TermsConditions-DsFUE3mu.js") })
    ),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
export {
  ssr as default
};
