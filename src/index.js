import './style.css';
import { addProjectToDOM, renderDropDown, 
         addTaskToDOM, taskToDOMOnClick } from './DOMCreation';
import { borderOnClick, openModal, closeModal } from './onClickStyling';
import { createTask, Project, projectNumCount } from './projectLogic';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');
const submitTask = document.querySelector('.submit');

const projects = [];

createProject.addEventListener('click', () => {
    addProjectToDOM(`Project ${projectNumCount}`);
    const projectObj = Project(`Project ${projectNumCount}`, projectNumCount);
    projectObj.incrementProjectNo();
    projects.push(projectObj);
    borderOnClick();
    renderDropDown(projects, projectNumCount);
});

taskButton.addEventListener('click', openModal)
overlay.addEventListener('click', closeModal)

submitTask.addEventListener('click', (e) => {
    e.preventDefault();
    const task = createTask();

    projects.forEach(project => {
        if (task.projectParent === project.title) {
            project.tasks = { ...project.tasks, [task.title]: task };
        }
    });

    closeModal();
});

// taskToDOMOnClick(projects, task.title, addTaskToDOM);

