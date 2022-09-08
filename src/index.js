import './style.css';
import { openTaskInput, renderTaskForm } from './TaskDOM';
import { closeModal, saveToLocalStorage } from './utilities';
import { projectNumCount, Project } from './projectLogic';
import { addProjectToDOM, renderTitleInput } from './ProjectDOM';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.create-task');
export const projects = JSON.parse(localStorage.getItem("projects")) || [];
export let numberForDropDown = JSON.parse(localStorage.getItem("numberForDropDown")) || [];

createProject.addEventListener('click', () => {
    if (projects.length === 5) {
        alert('Too many projects already');
        return;       
       }
    renderTitleInput();
    // projectNumCount++;
    // saveToLocalStorage("projectNumCount", projectNumCount);
    // const projectObj = Project(`Project ${projectNumCount}`, projectNumCount);
    // projectObj.addProject(projects, projectObj);
    // addProjectToDOM(projectObj);
    // numberForDropDown.push(projectNumCount);
    // saveToLocalStorage("numberForDropDown", numberForDropDown);
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


