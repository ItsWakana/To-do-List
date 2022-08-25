import './style.css';
import { openTaskInput, renderTaskForm } from './TaskDOM';
import { closeModal, borderOnClick } from './utilities';
import { projectNumCount } from './projectLogic';
import { addProjectToDOM } from './ProjectDOM';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');

// const projects = [];
localStorage.setItem('projects', []);

export let numberForDropDown = [];

createProject.addEventListener('click', () => {

    console.log(localStorage.getItem('projects'));


    addProjectToDOM(projects);
    borderOnClick();
    numberForDropDown.push(projectNumCount);


    let storedProjects = JSON.parse(localStorage.getItem('projects'));
    console.log(storedProjects);
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


