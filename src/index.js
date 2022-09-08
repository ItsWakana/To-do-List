import './style.css';
import { openTaskInput, renderTaskForm } from './TaskDOM';
import { closeModal } from './utilities';
import { addProjectToDOM, renderTitleInput } from './ProjectDOM';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.create-task');
export const projects = JSON.parse(localStorage.getItem("projects")) || [];
export let numberForDropDown = JSON.parse(localStorage.getItem("numberForDropDown")) || [];

createProject.addEventListener('click', () => {
    if (projects.length === 5) {
        alert('Too many projects already');
        return;       
       }
    renderTitleInput();
});
projects.forEach(addProjectToDOM);


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


