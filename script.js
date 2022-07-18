const menuBtn = document.querySelector('.menu-icon');
const menuOverlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-icon');

if(menuBtn){
   menuBtn.addEventListener('click', () => {
      menuOverlay.style.cssText = `width: 100%; display: block;`;
   })
}

if(closeBtn)  {
   closeBtn.addEventListener('click', () => {
      menuOverlay.style.cssText = `width: 0%; display: none;`;
   })
}
