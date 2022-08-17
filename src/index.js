import './style.css';
import { addProjectToDOM, renderDropDown } from './DOMCreation';
import { openModal, closeModal } from './utilities';
import { createTask, Project, projectNumCount, renderTaskOnProjClick } from './projectLogic';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');
const submitTask = document.querySelector('.submit');

const projects = [];

createProject.addEventListener('click', () => {
    projectNumCount++;
    const projectObj = Project(`Project ${projectNumCount}`, projectNumCount);
    projectObj.renderProject(projectObj.title);
    projects.push(projectObj);
    const elements = document.querySelectorAll('.project');
    //each time we create a project it renders the added project to our drop down selector.
    renderDropDown(projects, projectNumCount);
    
    

});

taskButton.addEventListener('click', () => {
    document.querySelector('input[id="title"]').value = '';
    document.querySelector('textarea[id="desc"]').value = '';
    const modal = document.querySelector('.task-form');
    openModal(modal);
});
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        closeModal(modal);
    })
});

submitTask.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector('.task-form');


    const projectElements = [...document.querySelectorAll('.project')];

    if (projectElements.length == 0) {
        alert('You must create a project first');
        closeModal(modal);
        return;
    }
    const task = createTask();

    projects.forEach(project => {
        if (task.projectParent === project.title) {
            project.tasks.push(task);
        }
    });

    closeModal(modal);

});
