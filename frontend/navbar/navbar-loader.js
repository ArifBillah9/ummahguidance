// ===== NAVBAR LOADER =====
// Dynamically load navbar on all pages

(function() {
  'use strict';
  
  console.log('%c🔄 NAVBAR LOADER STARTED', 'color: blue; font-weight: bold; font-size: 12px;');

  // Load navbar.html using fetch
  async function loadNavbar() {
    try {
      console.log('%c📥 Fetching navbar.html...', 'color: orange; font-weight: bold;');
      
      const response = await fetch('navbar/navbar.html');
      
      if (!response.ok) {
        throw new Error(`Failed to load navbar: ${response.status}`);
      }
      
      const navbarContent = await response.text();
      
      // Extract and inject only the navbar elements (not the full HTML structure)
      // We'll parse the fetched HTML and inject the relevant parts
      const parser = new DOMParser();
      const doc = parser.parseFromString(navbarContent, 'text/html');
      
      // Get all style tags from the fetched document
      const styleTags = doc.querySelectorAll('style');
      styleTags.forEach(style => {
        document.head.appendChild(style.cloneNode(true));
      });
      console.log('✅ Styles injected');
      
      // Get the navbar elements
      const navbar = doc.querySelector('.navbar');
      const sidebar = doc.querySelector('.navbar-sidebar');
      const backdrop = doc.querySelector('.navbar-sidebar-backdrop');
      
      // Inject them at the beginning of body
      if (navbar) {
        document.body.insertAdjacentElement('afterbegin', navbar.cloneNode(true));
      }
      if (sidebar) {
        document.body.insertAdjacentElement('afterbegin', sidebar.cloneNode(true));
      }
      if (backdrop) {
        document.body.insertAdjacentElement('afterbegin', backdrop.cloneNode(true));
      }
      console.log('✅ HTML injected');
      
      // Get and execute script tags from the fetched document
      const scriptTags = doc.querySelectorAll('script');
      scriptTags.forEach(scriptTag => {
        if (scriptTag.src) {
          // External script
          const newScript = document.createElement('script');
          newScript.src = scriptTag.src;
          newScript.async = false;
          document.body.appendChild(newScript);
        } else if (scriptTag.textContent) {
          // Inline script
          const newScript = document.createElement('script');
          newScript.textContent = scriptTag.textContent;
          newScript.async = false;
          document.body.appendChild(newScript);
        }
      });
      console.log('✅ JavaScript executed');
      
      console.log('%c✅ NAVBAR LOADER COMPLETE', 'color: green; font-weight: bold; font-size: 12px;');
      
    } catch (error) {
      console.error('%c❌ NAVBAR LOADER ERROR', 'background: red; color: white; font-weight: bold; padding: 3px 8px; border-radius: 3px;', error);
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
  } else {
    loadNavbar();
  }

})();