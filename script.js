if (screen.width <= 768) {
   const menuBtn = document.querySelector('.menu-icon');
   const menuOverlay = document.querySelector('.menu-overlay');
   const menuOption = document.querySelectorAll('.menu-option li');
   const closeBtn = document.querySelector('.close-icon');

   if(menuBtn){
      menuBtn.addEventListener('click', () => {
         menuOverlay.style.cssText = `width: 100%; display: block;`;
         document.body.style.overflow = 'hidden';
      })
   }

   if(menuOption){
      menuOption.forEach(element => {
         element.addEventListener('click', ()=>{
            document.body.style.overflow = 'auto';
            closeNav();
         })
      });
   }

   if(closeBtn)  {
      closeBtn.addEventListener('click', () => {
         closeNav();
      })
   }

   function closeNav() {
      menuOverlay.style.cssText = `width: 0%; display: none;`;
   }
}
