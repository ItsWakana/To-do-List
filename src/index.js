import './style.css';
import { addProjectToDOM, renderDropDown, taskToDOMOnClick, addTaskToDOM } from './DOMCreation';
import { borderOnClick, openModal, closeModal } from './onClickStyling';
import { createTask, taskIncrementor, Project } from './projectLogic';

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
    borderOnClick();
    renderDropDown(projects, projectNumber);
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
    taskToDOMOnClick(task.title, addTaskToDOM);

    closeModal();
});
