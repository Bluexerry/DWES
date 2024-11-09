// eslint.config.mjs
import airbnbBase from 'eslint-config-airbnb-base';

export default [
  {
    // Incluye directamente las reglas de airbnb-base
    rules: {
      ...airbnbBase.rules, // Copia las reglas de airbnb-base directamente
      // Puedes agregar reglas adicionales aquí si lo necesitas
    },
  },
];
