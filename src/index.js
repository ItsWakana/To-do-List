import './style.css';
import { addProjectToDOM, renderDropDown, addTaskToDOM } from './DOMCreation';
import { borderOnClick, openModal, closeModal } from './onClickStyling';
import { createTask, pushTaskToArray, Project } from './projectLogic';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');
const submitTask = document.querySelector('.submit');
let projectNumber = 0;

const projects = [];

createProject.addEventListener('click', () => {
    projectNumber++;
    addProjectToDOM(`Project ${projectNumber}`);
    const projectObj = Project(`Project ${projectNumber}`, projectNumber);
    projects.push(projectObj);
    console.log(projects);
    borderOnClick();
    renderDropDown(projects, projectNumber);
});

taskButton.addEventListener('click', openModal)
overlay.addEventListener('click', closeModal)

submitTask.addEventListener('click', (e) => {
    e.preventDefault();
    const task = createTask(projectNumber);
    console.log(task);
    closeModal();
});
