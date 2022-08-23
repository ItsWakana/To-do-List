import './style.css';
import { openTaskInput, renderTaskForm } from './TaskDOM';
import { closeModal, borderOnClick } from './utilities';
import { projectNumCount } from './projectLogic';
import { addProjectToDOM } from './ProjectDOM';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');
const closeIcon = document.querySelector('.icon');

const projects = [];

export let numberForDropDown = [];

createProject.addEventListener('click', () => {
    addProjectToDOM(projects);
    borderOnClick();
    numberForDropDown.push(projectNumCount);
});


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


