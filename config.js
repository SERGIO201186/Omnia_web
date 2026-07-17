// Configuración central de Omnia Technology
// Este archivo almacena la URL del Apps Script y se carga en todos los HTML

(function() {
  // URL del Apps Script (reemplaza esto con tu URL publicada)
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzhU4ElNfiCO808AgiXcIxj3cazaAdrtiXdpGJ_f-FnCb3LqsrseZbBSCJ7-WaMrxdWcA/exec';
  
  // Guardar en localStorage automáticamente
  if (!localStorage.getItem('omnia_api_url')) {
    localStorage.setItem('omnia_api_url', APPS_SCRIPT_URL);
  }
  
  // Exponer globalmente para debugging
  window.OmniaConfig = {
    apiUrl: APPS_SCRIPT_URL,
    sheetName: 'Control Omnia',
    environment: 'production'
  };
  
  console.log('✓ Omnia Config loaded:', window.OmniaConfig);
})();
