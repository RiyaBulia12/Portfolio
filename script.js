const menuOverlay = document.querySelector('.menu-overlay');
function openMenu() {
   const menuOverlay = document.querySelector('.menu-overlay');
   menuOverlay.style.cssText = `width: 100%; display: block;`;
}

function closeMenu() {
   const menuOverlay = document.querySelector('.menu-overlay');
   menuOverlay.style.cssText = `width: 0%; display: none;`;
}
