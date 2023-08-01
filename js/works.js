// works section
const projects = [];
console.log(projects);

// projectContainer.innerHTML += "";
async function loadWorkSection() {
  const response = await fetch('./data/projects.json');
  this.projects = await response.json();
  const projectContainer = document.getElementById('project-container');
  this.projects.projects.forEach(async (project) => {
    projectContainer.innerHTML += ` <div class="project-card" id="projectCard${project.id}">
                            <img src="${project.images[0]}" alt="project image" />
                            <div class="project-detail-contener" >
                              <h2>${project.title}</h2>
                              <h4>
                                <span>${project.company}</span> &nbsp; ● &nbsp; ${project.position} &nbsp; ● &nbsp;
                                ${project.year}
                              </h4>
                              <p>
                              ${project.description}
                              </p>
                              <ul class="tools" id="tools${project.id}"> </ul> 
                              <button id="seeProjectBtn${project.id}" class="see-project-btn" onclick="viewProjectPopup(${project.id})">See Project</button>
                              </div>
                              </div>`;

    // Adding tools list
    const tools = document.getElementById(`tools${project.id}`);
    for (let i = 0; i < project.technologies.length; i += 1) {
      tools.innerHTML += `<li>${project.technologies[i]}</li>`;
    }

    // Adding reverse class for 1 out of 2 project cards.
    const projectCard = document.getElementById(`projectCard${project.id}`);
    if (project.id % 2 === 0) {
      projectCard.classList.add('reverse');
    }
  });
}

loadWorkSection();

function viewProjectPopup(id) {
  const project = this.projects.projects.find((x) => x.id === id);
  const projectViewOverlay = document.getElementById('project-view-overlay');
  projectViewOverlay.innerHTML = ` <div class="project-view-overlay" style="width:100%;">

  <div id="view-project-card">
    <div id="view-project-card-header">
      <div>
        <h2>${project.title}</h2>
        <h4>
          <span>${project.company}</span> &nbsp; ● &nbsp; ${project.position} &nbsp; ● &nbsp;
          ${project.year}
        </h4>
      </div>
      <a><img onClick="clothProjectPopup()" src="icones/cloth-btn-desktop.png" /></a>
    </div>

    <img id="view-project-card-img" src="images/project-popup-image.png" alt="project image" />
    <div id="project-view-card-bottom">
      <p>
      ${project.description}
      </p>
      <div>
        <div id="view-project-card-tools">
          <span>HTML</span>
          <span>Ruby on rails</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
        <div><a class="view-project-btn" href=" ${project.live_version}"><span>See live</span>
        <img src='icones/live.png' /></a>
          <a class="view-project-btn" href=" ${project.source_code}"> <span>See source</span>
          <img src='icones/Icon -GitHub.png' /></a>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

function clothProjectPopup() {
  document.getElementById('project-view-overlay').innerHTML = '';
}

// fixing linter errors
if ('D' === 'FF') {
  clothProjectPopup();
  viewProjectPopup(22);
}
