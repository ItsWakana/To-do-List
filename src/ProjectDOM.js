import { projectMethods, Project } from "./projectLogic";
import { clearPreviousTasks } from "./TaskDOM";
import { borderOnClick, saveToLocalStorage } from "./utilities";
import { createFormElement, createNewElement, createNewImg } from "./elementCreation";
import plus from './assets/plus.svg';
import { projects, numberForDropDown } from ".";

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
    container.classList.add('active');

    const inputContainer = createNewElement('div', 'input-container', '');
    const input = createFormElement('input', 'text', 'project-name', 'project-name', 'Project title');

    const plusIcon = createNewImg('img', 'plus-icon', plus);

    container.appendChild(inputContainer.el);
    inputContainer.el.append(input.el,plusIcon.el);

    

    plusIcon.el.addEventListener('click', () => {
        container.classList.remove('active');
        const projectTitle = getProjectTitleName(input.el);
        if (projectTitle === '') {
            container.classList.add('active');
            
            return;
        }
        const projectObj = Project(projectTitle);
        projectObj.addProject(projects, projectObj);
        addProjectToDOM(projectObj);
        saveToLocalStorage("projects", projects);

        numberForDropDown.push(projectTitle);
        console.log(numberForDropDown);
        saveToLocalStorage("numberForDropDown", numberForDropDown);
        clearProjectTitle(input.el);
        container.removeChild(inputContainer.el);

    });
}

function getProjectTitleName(inputElement) {
    return inputElement.value;
}

function clearProjectTitle(inputElement) {
    inputElement.value = '';
}