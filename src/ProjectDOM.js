import { projectMethods } from "./projectLogic";
import { clearPreviousTasks } from "./TaskDOM";
import { borderOnClick } from "./utilities";

export function addProjectToDOM(projectObj) {

    const projects = document.querySelector('.projects');
    const newProject = document.createElement('div');
    newProject.dataset.selected = false;
    newProject.className = 'project';
    newProject.classList.remove('active');

    const projectHeading = document.createElement('h3');
    projectHeading.innerText = projectObj.title;

    projects.append(newProject);
    newProject.append(projectHeading);

    newProject.addEventListener('click', () => { 
        const container = document.querySelector('.tasks');
        clearPreviousTasks(container);
        projectMethods.renderTasks(projectObj);
        borderOnClick(projects);
        newProject.classList.add('active');
        newProject.dataset.selected = true;

    });
}