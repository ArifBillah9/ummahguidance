// ===== NAVBAR INITIALIZATION =====
console.log('%c✨ Initializing Navbar', 'color: cyan; font-weight: bold; font-size: 14px;');

const navbarMenuBtn = document.getElementById('navbar-menu-btn');
const navbarSidebar = document.getElementById('navbar-sidebar');
const navbarSidebarBackdrop = document.getElementById('navbar-sidebar-backdrop');
const navbarSidebarClose = document.getElementById('navbar-sidebar-close');
const navbarSearchBtn = document.getElementById('navbar-search-btn');
const navbarSidebarLinks = document.querySelectorAll('.navbar-sidebar-link');

// ===== SIDEBAR FUNCTIONS =====

function openSidebar() {
  console.log('%c🟢 OPENING SIDEBAR', 'background: #90EE90; color: black; padding: 3px 8px; font-weight: bold; border-radius: 3px;');
  
  if (navbarSidebar) {
    navbarSidebar.classList.add('active');
  }
  
  if (navbarSidebarBackdrop) {
    navbarSidebarBackdrop.classList.add('active');
  }
  
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  console.log('%c🔴 CLOSING SIDEBAR', 'background: #FFB6C6; color: black; padding: 3px 8px; font-weight: bold; border-radius: 3px;');
  
  if (navbarSidebar) {
    navbarSidebar.classList.remove('active');
  }
  
  if (navbarSidebarBackdrop) {
    navbarSidebarBackdrop.classList.remove('active');
  }
  
  document.body.style.overflow = 'auto';
}

// ===== EVENT LISTENERS =====
console.log('%c🔗 Attaching Event Listeners', 'color: cyan; font-weight: bold;');

// Menu Button
if (navbarMenuBtn) {
  navbarMenuBtn.addEventListener('click', function(e) {
    console.log('%c🍔 MENU BUTTON CLICKED', 'background: yellow; color: black; font-weight: bold; padding: 3px 8px; border-radius: 3px;');
    e.preventDefault();
    openSidebar();
  });
  console.log('✅ Menu button listener attached');
}

// Close Button
if (navbarSidebarClose) {
  navbarSidebarClose.addEventListener('click', function(e) {
    console.log('%c❌ CLOSE BUTTON CLICKED', 'background: orange; color: white; font-weight: bold; padding: 3px 8px; border-radius: 3px;');
    e.preventDefault();
    closeSidebar();
  });
  console.log('✅ Close button listener attached');
}

// Backdrop Click
if (navbarSidebarBackdrop) {
  navbarSidebarBackdrop.addEventListener('click', function(e) {
    console.log('%c⬛ BACKDROP CLICKED', 'background: gray; color: white; font-weight: bold; padding: 3px 8px; border-radius: 3px;');
    closeSidebar();
  });
  console.log('✅ Backdrop listener attached');
}

// Sidebar Links Click
navbarSidebarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    console.log('%c🔗 SIDEBAR LINK CLICKED:', 'background: blue; color: white; font-weight: bold; padding: 3px 8px; border-radius: 3px;', this.textContent);
    setTimeout(closeSidebar, 150);
  });
});
console.log(`✅ ${navbarSidebarLinks.length} sidebar links listeners attached`);

// Search Button
if (navbarSearchBtn) {
  navbarSearchBtn.addEventListener('click', function(e) {
    console.log('%c🔍 SEARCH BUTTON CLICKED', 'background: purple; color: white; font-weight: bold; padding: 3px 8px; border-radius: 3px;');
    e.preventDefault();
  });
  console.log('✅ Search button listener attached');
}

// ESC Key to Close Sidebar
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && navbarSidebar && navbarSidebar.classList.contains('active')) {
    console.log('%c⌨️ ESC KEY PRESSED', 'background: brown; color: white; font-weight: bold; padding: 3px 8px; border-radius: 3px;');
    closeSidebar();
  }
});
console.log('✅ ESC key listener attached');

// ===== ACTIVE LINK HIGHLIGHTING =====
function updateActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navbarSidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === '/index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

updateActiveLink();
window.addEventListener('hashchange', updateActiveLink);
console.log('✅ Active link highlighting enabled');

// ===== DEBUG FUNCTION =====
window.debugNavbar = function() {
  console.log('%c🐛 NAVBAR DEBUG INFO', 'color: orange; font-size: 14px; font-weight: bold; background: lightyellow; padding: 8px; border-radius: 4px;');
  console.log('='.repeat(50));
  
  console.log('%c✅ ELEMENTS:', 'color: green; font-weight: bold;');
  console.log('Menu Button:', navbarMenuBtn ? '✅ Found' : '❌ Missing');
  console.log('Sidebar:', navbarSidebar ? '✅ Found' : '❌ Missing');
  console.log('Backdrop:', navbarSidebarBackdrop ? '✅ Found' : '❌ Missing');
  console.log('Close Button:', navbarSidebarClose ? '✅ Found' : '❌ Missing');
  console.log('Search Button:', navbarSearchBtn ? '✅ Found' : '❌ Missing');
  
  console.log('%c📋 SIDEBAR INFO:', 'color: blue; font-weight: bold;');
  if (navbarSidebar) {
    console.log('Sidebar is active:', navbarSidebar.classList.contains('active'));
    console.log('Sidebar classes:', navbarSidebar.className);
  }
  
  console.log('%c🎮 MANUAL COMMANDS:', 'color: purple; font-weight: bold;');
  console.log('• debugNavbar.open() - Open sidebar');
  console.log('• debugNavbar.close() - Close sidebar');
  
  console.log('%c✅ DEBUG COMPLETE', 'color: green; font-size: 12px; font-weight: bold;');
};

window.debugNavbar.open = openSidebar;
window.debugNavbar.close = closeSidebar;

console.log('%c✅ NAVBAR LOADED SUCCESSFULLY!', 'color: green; font-size: 14px; font-weight: bold; background: lightgreen; padding: 8px; border-radius: 4px;');
console.log('%c💡 Run debugNavbar() to check navbar status', 'color: blue; font-size: 12px;');