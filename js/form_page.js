document.addEventListener('DOMContentLoaded', function () {
  // Add initial entries for each section
  addProject();
  addAchievement();
  addEducation();
  addExperience();

  // Set up event listeners for add buttons
  document.getElementById('add-project').addEventListener('click', addProject);
  document.getElementById('add-achievement').addEventListener('click', addAchievement);
  document.getElementById('add-education').addEventListener('click', addEducation);
  document.getElementById('add-experience').addEventListener('click', addExperience);

  // Handle form submission
  document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      // Here you would collect all the form data and do something with it
      alert('Form submitted! In a real application, this would save your portfolio data.');
  });
});

// Counter for unique IDs
let projectCounter = 0;
let achievementCounter = 0;
let educationCounter = 0;
let experienceCounter = 0;

function addProject() {
  projectCounter++;
  const projectsContainer = document.getElementById('projects-container');

  const projectSection = document.createElement('div');
  projectSection.className = 'section-container fadeIn';
  projectSection.dataset.id = `project-${projectCounter}`;

  projectSection.innerHTML = `
  <div class="section-header">
    <h4>Project ${projectCounter}</h4>
    <button type="button" class="remove-section" onclick="removeSection('${projectSection.dataset.id}')">Remove</button>
  </div>
  <div class="form-group">
    <input type="text" id="projectTitle-${projectCounter}" name="projects[${projectCounter}][title]" required placeholder=" " />
    <label for="projectTitle-${projectCounter}">Project Title</label>
  </div>
  <div class="form-group">
    <textarea id="projectDescription-${projectCounter}" name="projects[${projectCounter}][description]" rows="3" required placeholder=" "></textarea>
    <label for="projectDescription-${projectCounter}">Project Description</label>
  </div>
  <div class="form-group">
    <input type="url" id="projectGithub-${projectCounter}" name="projects[${projectCounter}][github]" required placeholder=" " />
    <label for="projectGithub-${projectCounter}">Project GitHub Link</label>
  </div>
  <div class="form-group">
    <input type="url" id="projectView-${projectCounter}" name="projects[${projectCounter}][view]" required placeholder=" " />
    <label for="projectView-${projectCounter}">Project Live/View Link</label>
  </div>
`;

  projectsContainer.appendChild(projectSection);
}

function addEducation() {
  educationCounter++;
  const educationContainer = document.getElementById('education-container');

  const educationSection = document.createElement('div');
  educationSection.className = 'section-container fadeIn';
  educationSection.dataset.id = `education-${educationCounter}`;

  educationSection.innerHTML = `
  <div class="section-header">
    <h4>Education ${educationCounter}</h4>
    <button type="button" class="remove-section" onclick="removeSection('${educationSection.dataset.id}')">Remove</button>
  </div>
  <div class="form-group">
    <input type="text" id="institutionName-${educationCounter}" name="education[${educationCounter}][institution]" required placeholder=" " />
    <label for="institutionName-${educationCounter}">Institution Name</label>
  </div>
  <div class="form-group">
    <input type="text" id="cgpa-${educationCounter}" name="education[${educationCounter}][cgpa]" required placeholder=" " />
    <label for="cgpa-${educationCounter}">CGPA/Percentage</label>
  </div>
  <div class="form-group">
    <input type="text" id="eduLocation-${educationCounter}" name="education[${educationCounter}][location]" required placeholder=" " />
    <label for="eduLocation-${educationCounter}">Location</label>
  </div>
`;

  educationContainer.appendChild(educationSection);
}

function addExperience() {
  experienceCounter++;
  const experienceContainer = document.getElementById('experience-container');

  const experienceSection = document.createElement('div');
  experienceSection.className = 'section-container fadeIn';
  experienceSection.dataset.id = `experience-${experienceCounter}`;

  experienceSection.innerHTML = `
  <div class="section-header">
    <h4>Experience ${experienceCounter}</h4>
    <button type="button" class="remove-section" onclick="removeSection('${experienceSection.dataset.id}')">Remove</button>
  </div>
  <div class="form-group">
    <input type="text" id="expTitle-${experienceCounter}" name="experience[${experienceCounter}][title]" required placeholder=" " />
    <label for="expTitle-${experienceCounter}">Job Title</label>
  </div>
  <div class="form-group">
    <textarea id="expDescription-${experienceCounter}" name="experience[${experienceCounter}][description]" rows="3" required placeholder=" "></textarea>
    <label for="expDescription-${experienceCounter}">Job Description</label>
  </div>
`;

  experienceContainer.appendChild(experienceSection);
}

function addAchievement() {
  achievementCounter++;
  const achievementsContainer = document.getElementById('achievements-container');

  const achievementSection = document.createElement('div');
  achievementSection.className = 'section-container fadeIn';
  achievementSection.dataset.id = `achievement-${achievementCounter}`;

  achievementSection.innerHTML = `
  <div class="section-header">
    <h4>Achievement ${achievementCounter}</h4>
    <button type="button" class="remove-section" onclick="removeSection('${achievementSection.dataset.id}')">Remove</button>
  </div>
  <div class="form-group">
    <input type="text" id="achievementTitle-${achievementCounter}" name="achievements[${achievementCounter}][title]" required placeholder=" " />
    <label for="achievementTitle-${achievementCounter}">Achievement Title</label>
  </div>
  <div class="form-group">
    <textarea id="achievementDescription-${achievementCounter}" name="achievements[${achievementCounter}][description]" rows="2" required placeholder=" "></textarea>
    <label for="achievementDescription-${achievementCounter}">Achievement Description (1–2 lines)</label>
  </div>
`;

  achievementsContainer.appendChild(achievementSection);
}

function removeSection(id) {
  const section = document.querySelector(`[data-id="${id}"]`);
  if (section) {
      // Add a fadeOut effect
      section.style.opacity = '0';
      section.style.transform = 'translateY(-10px)';
      section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

      // Remove after animation
      setTimeout(() => {
          section.remove();
      }, 300);
  }
}