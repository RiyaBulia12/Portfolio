const menuBtn = document.querySelector('.menu-icon');
const menuOverlay = document.querySelector('.menu-overlay');
const menuOption = document.querySelectorAll('.menu-option li');
const closeBtn = document.querySelector('.close-icon');
const contactForm = document.getElementById('conatct-form');

function closeNav() {
   menuOverlay.style.cssText = `width: 0%; display: none;`;
}

if (screen.width <= 768) {
   if (menuBtn) {
      menuBtn.addEventListener('click', () => {
         menuOverlay.style.cssText = `width: 100%; display: block;`;
         document.body.style.overflow = 'hidden';
      })
   }
   if (menuOption) {
      menuOption.forEach(element => {
         element.addEventListener('click', () => {
            document.body.style.overflow = 'auto';
            closeNav();
         })
      });
   }
   if (closeBtn) {
      closeBtn.addEventListener('click', () => {
         document.body.style.overflow = 'auto';
         closeNav();
      })
   }
}

contactForm.addEventListener('click', function () {
   const email = contactForm.elements['email'].value;
   const error = document.querySelector('.error');
   if (email !== email.toLowerCase()) {
      error.style.cssText = `visibility: visible; opacity: 1`;
      error.innerHTML = 'Please enter email in lowercase'
   } else {
      error.style.cssText = `visibility: hidden; opacity: 0`;
   }
})

document.querySelectorAll('.social-media-container').forEach((elem) => {
   elem.innerHTML = `
<h2 class="social-media-title">Let's Connect</h2>
            <ul class="social-media-content flex">
               <li>
                  <a href="https://www.linkedin.com/in/riya-bulia/" aria-label="LinkedIn Icon">
                     <img class="social-media-icons" src="images/icons/linkedin.png" alt="LinkedIn Icon">
                  </a>
               </li>
               <li>
                  <a href="mailto:riyabulia12@gmail.com" aria-label="Gmail Icon">
                     <img class="social-media-icons" src="images/icons/gmail.png" alt="Gmail Icon">
                  </a>
               </li>
               <li>
                  <a href="https://github.com/RiyaBulia12" aria-label="Github Icon">
                     <img class="social-media-icons" src="images/icons/github.png" alt="Github Icon">
                  </a>
               </li>
               <li>
                  <a href="https://leetcode.com/RiyaBulia/" aria-label="Leetcode Icon">
                     <img class="social-media-icons" src="images/icons/leetcode.png" alt="Leetcode Icon">
                  </a>
               </li>
            </ul>
            `
});
