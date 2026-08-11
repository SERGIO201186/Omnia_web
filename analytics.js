// Google Analytics 4 (GA4) + conversión de Google Ads de Omnia Technology —
// se carga en todas las páginas del sitio.
(function () {
  var GA_MEASUREMENT_ID = 'G-05XS3EW0CR';

  // ID de conversión de Google Ads (formato "AW-XXXXXXXXXX") y la etiqueta de
  // la acción de conversión (formato "AbCdEfGhIjKlMnOpQrSt"), ambos los
  // encuentras en Google Ads → Herramientas y configuración → Conversiones →
  // tu acción de conversión → "Configuración de etiquetas" → "Usar Google Tag".
  // Mientras no los reemplaces, omniaTrackConversion() no hace nada (evita
  // mandar datos falsos a una cuenta de Ads sin configurar).
  var GOOGLE_ADS_ID = 'AW-XXXXXXXXXX';
  var GOOGLE_ADS_CONVERSION_LABEL = 'XXXXXXXXXXXXXXXXXXXX';

  var gaReady = !!GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.indexOf('XXXX') === -1;
  var adsReady = GOOGLE_ADS_ID.indexOf('XXXX') === -1 && GOOGLE_ADS_CONVERSION_LABEL.indexOf('XXXX') === -1;

  if (!gaReady && !adsReady) {
    console.warn('Omnia Analytics: configura GA_MEASUREMENT_ID y/o GOOGLE_ADS_ID en analytics.js para activarlos.');
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());

  // Un solo script de gtag.js sirve para ambos productos (Analytics y Ads);
  // solo hay que llamar a gtag('config', ...) una vez por cada ID que uses.
  var tagId = gaReady ? GA_MEASUREMENT_ID : GOOGLE_ADS_ID;
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + tagId;
  document.head.appendChild(script);

  if (gaReady) gtag('config', GA_MEASUREMENT_ID);
  if (adsReady) gtag('config', GOOGLE_ADS_ID);

  // Llama a esto justo cuando una solicitud de demo/lead se registra con
  // éxito (ver los handleSubmit/handleFormSubmit de cada página) — le avisa
  // a Google Ads que esa visita se convirtió, sin importar que el formulario
  // sea un modal que no cambia de URL.
  window.omniaTrackConversion = function () {
    if (!adsReady) return;
    gtag('event', 'conversion', { send_to: GOOGLE_ADS_ID + '/' + GOOGLE_ADS_CONVERSION_LABEL });
  };
})();
