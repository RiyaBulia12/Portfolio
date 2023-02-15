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
                     <img class="social-media-icons opaque" src="images/icons/github.png" alt="Github Icon">
                  </a>
               </li>
               <li>
                  <a href="https://leetcode.com/RiyaBulia/" aria-label="Leetcode Icon">
                     <img class="social-media-icons opaque" src="images/icons/leetcode.png" alt="Leetcode Icon">
                  </a>
               </li>
            </ul>
            `
});
