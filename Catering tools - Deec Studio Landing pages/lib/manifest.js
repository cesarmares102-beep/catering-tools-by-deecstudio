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

  var WHATSAPP_MESSAGE =
    "Hola, estoy interesado en CateringTools.\n\n" +
    "Me interesa adquirir mi cotizador web personalizado por $49.99 USD.\n\n" +
    "Quiero comenzar con la configuración de mi cotizador para mi negocio.\n\n" +
    "Quedo atento para conocer el proceso de compra y comenzar.";

  /* Mensaje genérico para los puntos de contacto (nav / FAB) —
     distinto del mensaje de compra que usan los botones "COMPRAR". */
  var WHATSAPP_CONTACT_MESSAGE =
    "Hola, tengo una pregunta sobre CateringTools.";

  window.__BRAND__ = {
    name: "CateringTools",

    whatsapp: {
      number: WHATSAPP_NUMBER,
      message: WHATSAPP_CONTACT_MESSAGE
    },

    /* legacy flat fields — kept so any existing [data-cta-buy] markup still works */
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappMessage: WHATSAPP_MESSAGE,
    whatsappUrl:
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(WHATSAPP_MESSAGE),

    faqCategories: [
      {
        name: "Sobre CateringTools",
        items: [
          {
            q: "¿Qué es CateringTools?",
            a: "CateringTools es un cotizador web personalizado diseñado para empresas de catering y profesionales de eventos. Es una herramienta digital pensada para hacer la creación de presupuestos más rápida, fácil y precisa."
          },
          {
            q: "¿CateringTools es un software o un ERP?",
            a: "No. CateringTools no es un software de gestión ni un ERP. Es una herramienta web digital personalizada enfocada específicamente en facilitar la creación de presupuestos para servicios de catering."
          },
          {
            q: "¿CateringTools es un software SaaS?",
            a: "No. CateringTools no es un SaaS ni funciona como un servicio de suscripción. Es una herramienta web personalizada que se configura para tu negocio y se entrega lista para utilizar."
          },
          {
            q: "¿Para quién está diseñado CateringTools?",
            a: "Para empresas de catering y profesionales de eventos que necesitan preparar presupuestos de forma rápida y profesional, especialmente cuando reciben solicitudes frecuentes de cotización."
          }
        ]
      },
      {
        name: "Pago y acceso",
        items: [
          {
            q: "¿Es por suscripción mensual?",
            a: "No. CateringTools requiere un solo pago de <strong>$49.99 USD</strong>. No tienes mensualidades ni cargos recurrentes."
          },
          {
            q: "¿Tengo acceso de forma permanente?",
            a: "Sí. Después de adquirirlo, tienes acceso permanente a tu cotizador."
          },
          {
            q: "¿Hay algún costo adicional para mantenerlo?",
            a: "No. No necesitas pagar una mensualidad para conservar el acceso a tu herramienta."
          },
          {
            q: "¿CateringTools recibe actualizaciones periódicas?",
            a: "No. CateringTools es una herramienta de pago único y no incluye actualizaciones periódicas ni mantenimiento continuo."
          }
        ]
      },
      {
        name: "Personalización",
        items: [
          {
            q: "¿Mi cotizador viene personalizado para mi negocio?",
            a: "Sí. Configuramos el cotizador con la información de tu negocio, tus servicios, tus precios, paquetes, extras y estructura de cotización."
          },
          {
            q: "¿Puedo utilizar mis propios servicios y precios?",
            a: "Sí. La configuración inicial utiliza los servicios, precios y reglas de cobro que nos proporciones."
          },
          {
            q: "¿Puedo agregar paquetes y extras?",
            a: "Sí. Puedes configurar paquetes, servicios adicionales y extras de acuerdo con la forma en que trabajas."
          },
          {
            q: "¿Puedo agregar la información de mi empresa?",
            a: "Sí. Incorporamos la información de tu negocio necesaria para personalizar tu cotizador y tus presupuestos."
          },
          {
            q: "¿Recibo un cotizador genérico?",
            a: "No. Recibes un cotizador web personalizado para tu negocio, configurado con tu información y tu forma de cobrar."
          }
        ]
      },
      {
        name: "Uso",
        items: [
          {
            q: "¿Puedo utilizar CateringTools desde mi celular?",
            a: "Sí. Puedes utilizarlo desde celular, tablet o computadora."
          },
          {
            q: "¿Puedo crear un presupuesto mientras estoy con mi cliente?",
            a: "Sí. Puedes utilizar tu cotizador desde cualquier dispositivo compatible para preparar presupuestos rápidamente mientras atiendes a tus clientes."
          },
          {
            q: "¿Puedo utilizarlo para diferentes tipos de eventos?",
            a: "Sí. Puedes configurar tus servicios, paquetes, extras y reglas de cobro para adaptarlos a los diferentes tipos de eventos que atiendes."
          },
          {
            q: "¿Necesito conocimientos técnicos para utilizarlo?",
            a: "No. Está diseñado para ser rápido, práctico y sencillo de utilizar."
          }
        ]
      },
      {
        name: "Configuración e implementación",
        items: [
          {
            q: "¿Quién configura mi cotizador?",
            a: "Nosotros realizamos la configuración inicial. Configuramos la información de tu negocio, servicios, precios, paquetes, extras y estructura para entregarte la herramienta lista para utilizar."
          },
          {
            q: "¿Qué información necesito proporcionar después de comprar?",
            a: "Te solicitaremos la información necesaria para configurar tu negocio, como nombre, servicios, precios, paquetes, extras, reglas de cálculo e información de contacto."
          },
          {
            q: "¿Cuánto tarda la configuración?",
            a: "La configuración y entrega se realiza en <strong>hasta 24 horas</strong>, una vez que recibimos la información necesaria."
          },
          {
            q: "¿Recibo ayuda para comenzar a utilizarlo?",
            a: "Sí. Incluye acompañamiento de implementación para ayudarte a comenzar a utilizar tu cotizador."
          }
        ]
      },
      {
        name: "Cambios y uso posterior",
        items: [
          {
            q: "¿Podré modificar mi cotizador después de recibirlo?",
            a: "Sí. Puedes solicitar modificaciones o nuevas configuraciones posteriormente."
          },
          {
            q: "¿Puedo cambiar mis precios o servicios?",
            a: "Sí. Puedes solicitar cambios en la configuración de tus servicios, precios, paquetes o extras cuando sea necesario."
          },
          {
            q: "¿Incluye soporte continuo?",
            a: "No. CateringTools no funciona bajo un modelo de suscripción ni incluye soporte técnico continuo. Incluye acompañamiento de implementación para ayudarte a comenzar a utilizar tu herramienta."
          }
        ]
      },
      {
        name: "Entrega",
        items: [
          {
            q: "¿Cómo recibo mi cotizador?",
            a: "Recibirás tu herramienta digitalmente por correo electrónico."
          },
          {
            q: "¿Cuándo recibiré mi cotizador?",
            a: "La entrega se realiza en <strong>hasta 24 horas</strong> después de recibir toda la información necesaria para la configuración."
          },
          {
            q: "¿Dónde puedo utilizarlo?",
            a: "Puedes acceder desde celular, tablet o computadora, siempre que tengas acceso a internet."
          }
        ]
      }
    ],

    /* ⚠️ DATOS DE DEMOSTRACIÓN — declarado explícitamente por regla de IMPLEMENTATION.md.
       Estos nombres/ciudades/contadores NO son eventos reales. Antes de publicar,
       decide: (a) dejar isDemoData:true y mantenerlos como contenido ilustrativo, o
       (b) poner isDemoData:false y conectar names/visitorCounts a datos reales
       (webhook de ventas, analytics), nunca presentar la lista fija como compras reales. */
    socialProof: {
      isDemoData: true,
      product: "CateringTools",
      names: ["Andrea", "Luis", "Marcela", "Jorge", "Paola", "Daniel"],
      cities: ["CDMX", "Guadalajara", "Monterrey", "Puebla", "Querétaro"],
      visitorCounts: [6, 9, 12, 14, 18],
      rating: 4.8
    }
  };
})();
