// Aviso de cookies de Omnia Technology — se inyecta en todas las páginas del sitio.
// Bloquea la navegación hasta que el visitante acepta; la aceptación se guarda en
// localStorage (por origen, válida para todas las páginas) para no volver a mostrarse.
(function () {
  var STORAGE_KEY = 'omnia_cookies_aceptadas';

  if (localStorage.getItem(STORAGE_KEY)) return;

  function init() {
    var style = document.createElement('style');
    style.textContent =
      '.omnia-cc-overlay{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;' +
      'background:rgba(6,9,16,0.82);backdrop-filter:blur(4px);padding:20px;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;}' +
      '.omnia-cc-box{background:#12172a;border:1px solid rgba(237,239,245,0.12);border-radius:16px;max-width:460px;width:100%;' +
      'padding:26px 26px 22px;box-shadow:0 30px 70px rgba(0,0,0,0.5);color:#EDEFF5;}' +
      '.omnia-cc-title{font-size:18px;font-weight:700;margin:0 0 10px;display:flex;align-items:center;gap:8px;}' +
      '.omnia-cc-text{font-size:13.5px;line-height:1.6;color:rgba(237,239,245,0.72);margin:0 0 18px;}' +
      '.omnia-cc-text a{color:#8F7FFF;text-decoration:underline;}' +
      '.omnia-cc-btn{display:block;width:100%;background:#6C5CE7;color:#fff;border:none;border-radius:10px;' +
      'padding:12px 18px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:background .2s ease;}' +
      '.omnia-cc-btn:hover{background:#4A3AC9;}';
    document.head.appendChild(style);

    var overlay = document.createElement('div');
    overlay.className = 'omnia-cc-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'omnia-cc-title');
    overlay.innerHTML =
      '<div class="omnia-cc-box">' +
      '<p class="omnia-cc-title" id="omnia-cc-title">🍪 Usamos cookies</p>' +
      '<p class="omnia-cc-text">Usamos cookies y almacenamiento local, propios y de terceros, para que el sitio funcione correctamente y para fines estadísticos. Al hacer clic en «Aceptar y continuar» consientes su uso conforme a nuestra <a href="politica-de-cookies.html" target="_blank" rel="noopener">Política de Cookies</a>.</p>' +
      '<button type="button" class="omnia-cc-btn" id="omnia-cc-accept">Aceptar y continuar</button>' +
      '</div>';

    document.body.appendChild(overlay);
    var previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    document.getElementById('omnia-cc-accept').addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
      overlay.remove();
      document.body.style.overflow = previousOverflow;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
