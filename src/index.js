import './style.css';
import { addProjectToDOM, renderDropDown, 
         addTaskToDOM, taskToDOMOnClick } from './DOMCreation';
import { borderOnClick, openModal, closeModal } from './onClickStyling';
import { createTask, Project, projectNumCount, taskIncrementor } from './projectLogic';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');
const submitTask = document.querySelector('.submit');

const projects = [];

createProject.addEventListener('click', () => {
    projectNumCount++;
    addProjectToDOM(`Project ${projectNumCount}`);
    const projectObj = Project(`Project ${projectNumCount}`, projectNumCount);
    projects.push(projectObj);
    borderOnClick();
    renderDropDown(projects, projectNumCount);
    taskToDOMOnClick(projects);

});

taskButton.addEventListener('click', () => {
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
    const task = createTask();

    projects.forEach(project => {
        if (task.projectParent === project.title) {
            // project.tasks = { ...project.tasks, [task.title]: task };
            // project.tasks.push({ 'task': task });
            project.tasks.push(task);


        }
    });
    const modal = document.querySelector('.task-form');
    closeModal(modal);

});
