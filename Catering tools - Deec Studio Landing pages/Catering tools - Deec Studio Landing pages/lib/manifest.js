/* ==========================================================================
   CateringTools — brand data & central configuration
   ========================================================================== */
(function () {
  "use strict";

  /**
   * Número de WhatsApp para los CTA de compra, en formato internacional
   * sin signos (52 = México, luego 10 dígitos).
   * Este es el ÚNICO lugar del proyecto donde se configura el número.
   */
  var WHATSAPP_NUMBER = "525642145001";

  /* Mensaje para los puntos de contacto de WhatsApp (nav / FAB) — no
     usado por los botones "Comprar ahora", que abren el checkout de
     Whop directamente (ver checkout-modal en index.html / main.js). */
  var WHATSAPP_CONTACT_MESSAGE =
    "Hola, tengo una pregunta sobre CateringTools.";

  window.__BRAND__ = {
    name: "CateringTools",

    whatsapp: {
      number: WHATSAPP_NUMBER,
      message: WHATSAPP_CONTACT_MESSAGE
    },

    /* ⚠️ DATOS DE DEMOSTRACIÓN — declarado explícitamente por regla de IMPLEMENTATION.md.
       Estos nombres/ubicaciones/contadores NO son eventos reales. Antes de publicar,
       decide: (a) dejar isDemoData:true y mantenerlos como contenido ilustrativo, o
       (b) poner isDemoData:false y conectar names/visitorCounts a datos reales
       (webhook de ventas, analytics), nunca presentar la lista fija como compras reales. */
    socialProof: {
      isDemoData: true,
      product: "CateringTools",
      names: ["Andrea", "Luis", "Marcela", "Jorge", "Paola", "Daniel"],
      /* Ubicaciones de compra — MX y US mezcladas a propósito. main.js
         alterna el país entre toasts consecutivos (misma lógica que ya usa
         para alternar el tipo de mensaje) para que ningún país se sienta
         dominante ni la mezcla se vea forzada. */
      locations: [
        { city: "CDMX", country: "MX" },
        { city: "Guadalajara", country: "MX" },
        { city: "Monterrey", country: "MX" },
        { city: "Puebla", country: "MX" },
        { city: "Querétaro", country: "MX" },
        { city: "Los Angeles, CA", country: "US" },
        { city: "Houston, TX", country: "US" },
        { city: "Dallas, TX", country: "US" },
        { city: "San Diego, CA", country: "US" },
        { city: "Phoenix, AZ", country: "US" },
        { city: "Chicago, IL", country: "US" },
        { city: "Miami, FL", country: "US" },
        { city: "Las Vegas, NV", country: "US" }
      ],
      visitorCounts: [6, 9, 12, 14, 18],
      rating: 4.8
    }
  };
})();
