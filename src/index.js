import './style.css';
import { addProjectToDOM, renderDropDown, getUserInputFromDOM } from './DOMCreation';
import { openModal, closeModal, borderOnClick } from './utilities';
import { Project, projectNumCount } from './projectLogic';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');
const submitTask = document.querySelector('.submit');

const projects = [];

createProject.addEventListener('click', () => {
    projectNumCount++;
    const projectObj = Project(`Project ${projectNumCount}`, projectNumCount);
    projectObj.addProject(projects,projectObj);
    addProjectToDOM(projectObj);
    borderOnClick();
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

    if (projects.length == 0) {
        alert('You must create a project first');
        closeModal(modal);
        return;
    }
    const task = getUserInputFromDOM();

    projects.forEach(project => {
        if (task.projectParent === project.title) {
            project.addTask(task);
        }
    });

    closeModal(modal);

});
