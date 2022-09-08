import { projectMethods } from "./projectLogic";
import { clearPreviousTasks } from "./TaskDOM";
import { borderOnClick } from "./utilities";
import { createFormElement, createNewElement, createNewImg } from "./elementCreation";
import plus from './assets/plus.svg';

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

export function renderTitleInput() {
    const container = document.querySelector('.projects');

    const inputContainer = createNewElement('div', 'input-container', '');
    const input = createFormElement('input', 'text', 'project-name', 'project-name', 'Project title');

    const plusIcon = createNewImg('img', 'plus-icon', plus);

    container.appendChild(inputContainer.el);
    inputContainer.el.append(input.el,plusIcon.el);

    
    const projectTitle = getProjectTitleName(input);
    return projectTitle;
}

export function getProjectTitleName(inputElement) {
    return inputElement.value;
}