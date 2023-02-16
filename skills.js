const techStack = [{
  skillTitle: "Languages",
  skillSet: [{
    image: "images/icons/javascript.png",
    title: "JavaScript"
  },
  {
    image: "images/icons/typescript.png",
    title: "TypeScript"
  },
  {
    image: "images/icons/html5.png",
    title: "HTML5",
  },
  {
    image: "images/icons/css3.png",
    title: "CSS3",
  }],
}, {
  skillTitle: "Technologies",
  skillSet: [
    {
      image: "images/icons/bootstrap.png",
      title: "Bootstrap5",
    },
    {
      image: "images/icons/tailwind.png",
      title: "TailwindCSS",
    },
    {
      image: "images/icons/angular.png",
      title: "Angular",
    },
    {
      image: "images/icons/react.png",
      title: "React",
    },
    {
      image: "images/icons/redux.png",
      title: "Redux",
    }]
}, {
  skillTitle: "Backend",
  skillSet: [
    {
      image: "images/icons/ror.png",
      title: "Ruby on Rails"
    },
    {
      image: "images/icons/postgresql.png",
      title: "Postgres"
    },
    {
      image: "images/icons/mysql.png",
      title: "SQL"
    }],
}, {
  skillTitle: "Devops",
  skillSet: [
    {
      image: "images/icons/docker.png",
      title: "Docker",
    },
    {
      image: "images/icons/kubernetes.png",
      title: "Kubernetes"
    }]
}]

document.querySelector('.skill-content').innerHTML = techStack.map((tech, index) => {
  return (
    `<div class="skill-container">
      <div id="collapsible skill-title">
        <div class="card" id="skill-card">
            <div class="skill-title flex">
              <h3>${tech.skillTitle}</h3>
              <a href="#collapsibleChevron-${index}" class="card-header collapse-indicator-chevron" id="collapse-chevron" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapsibleChevron">
                  <img src="images/icons/collapse.png" alt="collapsed chevron" class="collapse-icon">
              </a>
            </div>

            <div id="collapsibleChevron-${index}" class="collapse" aria-labelledby="collapsibleChevron" data-bs-parent="#collapsible">
              <div class="card-body" id="card-body">
                  <div class="skill-content" id="collapse">
                    <ul>
                    ${tech.skillSet.map((skill) =>
                      `<li class="flex">
                        <img src="${skill.image}" alt="$${skill.title} Icon">
                        <p>${skill.title}</p>
                      </li>`).join('')
                    }
                    </ul>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <span class="separator"></span>`)
}).join('')
