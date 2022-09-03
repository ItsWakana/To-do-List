import './style.css';
import { openTaskInput, renderTaskForm } from './TaskDOM';
import { closeModal, saveToLocalStorage } from './utilities';
import { projectNumCount, Project } from './projectLogic';
import { addProjectToDOM } from './ProjectDOM';
import { timeTillTaskElement } from './elementCreation';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.create-task');
export const projects = JSON.parse(localStorage.getItem("projects")) || [];
export let numberForDropDown = JSON.parse(localStorage.getItem("numberForDropDown")) || [];

createProject.addEventListener('click', () => {
    if (projects.length === 5) {
     return;       
    }
    projectNumCount++;
    saveToLocalStorage("projectNumCount", projectNumCount);
    const projectObj = Project(`Project ${projectNumCount}`, projectNumCount);
    projectObj.addProject(projects, projectObj);
    addProjectToDOM(projectObj);
    saveToLocalStorage("projects", projects);
    numberForDropDown.push(projectNumCount);
    saveToLocalStorage("numberForDropDown", numberForDropDown);
});
projects.forEach(addProjectToDOM);


taskButton.addEventListener('click', () => {
    const modal = document.querySelector('.task-form');
    openTaskInput(modal);
    renderTaskForm(modal, projects, numberForDropDown);
});
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        closeModal(modal);
    })
});


