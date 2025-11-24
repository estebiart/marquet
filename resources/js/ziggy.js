// ziggy.js
import { route as ziggyRoute } from 'ziggy-js';
import { Ziggy as ZiggyConfig } from './ziggy.generated'; // Ajusta si tu archivo generado se llama diferente

// Este objeto ZiggyConfig es el que Laravel expone con las rutas
// Si en el navegador hay una versión más actualizada de Ziggy, la usamos
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(ZiggyConfig.routes, window.Ziggy.routes);
}

export const Ziggy = ZiggyConfig;

export function route(name, params = {}, absolute = true, config = ZiggyConfig) {
  return ziggyRoute(name, params, absolute, config);
}
