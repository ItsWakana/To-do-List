export function addProject(projectName) {

    const projects = document.querySelector('.projects');
    const newProject = document.createElement('div');
    newProject.className = 'project';

    const projectHeading = document.createElement('h3');
    projectHeading.innerText = projectName;

    projects.append(newProject);
    newProject.append(projectHeading);
}

export function borderOnClick() {

    const projects = [...document.querySelectorAll('.project')];

    projects.forEach(project => {
        project.addEventListener('click', (e) => {
            projects.forEach(e => e.classList.remove('active'));
            project.classList.add('active');
        });
    });
}