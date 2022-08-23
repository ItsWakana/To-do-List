import './style.css';
import {  submitTheTask, openTaskInput, renderTaskForm } from './TaskDOM';
import { closeModal, borderOnClick } from './utilities';
import { projectNumCount } from './projectLogic';
import { addProjectToDOM, renderDropDown } from './ProjectDOM';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');
// const submitTask = document.querySelector('.submit');
const closeIcon = document.querySelector('.icon');

const projects = [];

let numberForDropDown = [];

createProject.addEventListener('click', () => {
    addProjectToDOM(projects);
    borderOnClick();
    // renderDropDown(projects,projectNumCount);
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

// closeIcon.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal');
//     modals.forEach(modal => {
//         closeModal(modal);
//     })
// });

// submitTask.addEventListener('click', (e) => {
//     e.preventDefault();
//     submitTheTask(projects);
// });


