// Google Analytics 4 (GA4) de Omnia Technology — se carga en todas las páginas del sitio.
(function () {
  var GA_MEASUREMENT_ID = 'G-05XS3EW0CR';

  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.indexOf('XXXX') !== -1) {
    console.warn('Omnia Analytics: configura tu GA_MEASUREMENT_ID real en analytics.js para activar Google Analytics.');
    return;
  }

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
})();
