import projects from './projectsData.js'

document.querySelector('.portfolio-card').innerHTML = projects.map((project) =>
   `<div class="project-container">
      <div class="project-img-container">
         <a href="#" aria-label="Tonic Project">
            <img src="${project.screenshot}" alt="tonic-project" class="project-img">
         </a>
      </div>
      <div class="about-project flex">
         <div class="project-title">
            <h2>${project.title}</h2>
         </div>
         <div class="project-info">
            <ul class="flex">
               <li class="client-name">${project.info.client}</li>
               <li class="counter"></li>
               <li class="role">${project.info.role}</li>
               <li class="counter"></li>
               <li class="year">${project.info.year}</li>
            </ul>
         </div>
         <div class="project-description">
            <p>${project.description}</p>
         </div>
         <div class="tags">
            <ul class="flex">
               <li>${project.skills[0]}</li>
               <li>${project.skills[1]}</li>
               <li>${project.skills[2]}</li>
            </ul>
         </div>
         <div class="btn-container">
            <button type="submit" class="view-btn" data-bs-toggle="modal" data-bs-target="#projectModal" id="${project.id}" >See Project</button>
         </div>
      </div>
   </div>`).join('');


document.querySelectorAll('.view-btn').forEach((viewBtn) => {
   viewBtn.onclick = (event) => {
      viewProject(event.target.id)
   };
})

function viewProject(id) {
   projects.map((project) => {
      if (id == project.id) {
         document.querySelector('.project-content').innerHTML = `<div class="modal-header" id="modal-header">
            <div class="project-title">
               <h2 class="modal-title" id="title">${project.title}</h2>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body" id="modal-body">
            <div class="project-info">
               <ul class="flex">
                  <li class="client-name" id="clientName">${project.info.client}</li>
                  <li class="counter"></li>
                  <li class="role" id="role">${project.info.role}</li>
                  <li class="counter"></li>
                  <li class="year" id="year">${project.info.year}</li>
               </ul>
            </div>
            <div class="project-img-container modal-img-size">
               <a href="#" aria-label="Tonic Project">
                  <img src="${project.screenshot}" alt="tonic-project" id="project-img" class="project-img">
               </a>
            </div>
            <div class="project-description-container">
               <div class="project-description" id="description">
                  <p>${project.description}</p>
               </div>
               <div class="footer flex" id="footer">
                  <div class="tags">
                     <ul class="flex" id="technologies">
                        <li>${project.skills[0]}</li>
                        <li>${project.skills[1]}</li>
                        <li>${project.skills[2]}</li>
                     </ul>
                  </div>
                  <div class="btn-container">
                     <button type="submit" class="view-btn modal-view-btn" onclick="location.href = '${project.liveLink}'">
                        <span>See Live</span>
                        <span><i class="bi bi-box-arrow-up-right"></i></span>
                     </button>
                     <button type="submit" class="view-btn modal-view-btn" onclick="location.href = '${project.sourceLink}'">
                        <span>Source</span>
                        <span><i class="bi bi-github"></i></span>
                     </button>
                  </div>
               </div>
            </div>

         </div>`
      }
   }).join('');
}
