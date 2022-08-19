import './style.css';
import {  submitTheTask, openTaskInput } from './TaskDOM';
import { closeModal, borderOnClick } from './utilities';
import { projectNumCount } from './projectLogic';
import { addProjectToDOM, renderDropDown } from './ProjectDOM';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');
const submitTask = document.querySelector('.submit');

const projects = [];

createProject.addEventListener('click', () => {
    //calls our project factory and uses that object to render to the DOM.
    addProjectToDOM(projects);
    borderOnClick();
    renderDropDown(projects,projectNumCount);
});


taskButton.addEventListener('click', () => {
    const modal = document.querySelector('.task-form');
    openTaskInput(modal);
});
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        closeModal(modal);
    })
});

submitTask.addEventListener('click', (e) => {
    e.preventDefault();
    submitTheTask(projects);
});
