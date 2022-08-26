import './style.css';
import { openTaskInput, renderTaskForm } from './TaskDOM';
import { closeModal, borderOnClick } from './utilities';
import { projectNumCount, Project } from './projectLogic';
import { addProjectToDOM } from './ProjectDOM';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');

const projects = [];
// const projects = JSON.parse(localStorage.getItem("projects")) || [];

// export let numberForDropDown = JSON.parse(localStorage.getItem("numberForDropDown")) || [];
export let numberForDropDown = [];

createProject.addEventListener('click', () => {
    projectNumCount++;
    // localStorage.setItem("projectNumCount", JSON.stringify(projectNumCount));
    const projectObj = Project(`Project ${projectNumCount}`, projectNumCount);
    projectObj.addProject(projects, projectObj);
    addProjectToDOM(projectObj);
    // localStorage.setItem("projects", JSON.stringify(projects));
    borderOnClick();
    numberForDropDown.push(projectNumCount);
    // localStorage.setItem("numberForDropDown", JSON.stringify(numberForDropDown));
});

// projects.forEach(addProjectToDOM);


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


