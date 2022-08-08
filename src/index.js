import './style.css';
import {addProject} from './DOMCreation';
import {addTask} from './DOMCreation';
import { borderOnClick } from './onClickStyling';
import { openModal } from './onClickStyling';
import { closeModal } from './onClickStyling';

const createProject = document.querySelector('.create');
const taskButton = document.querySelector('.add-task');

let projectNumber = 0;

createProject.addEventListener('click', () => {
    projectNumber++;
    addProject(`Project ${projectNumber}`);
    borderOnClick();
});

taskButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const overlay = document.getElementById('overlay');
    openModal(modal, overlay);

    overlay.addEventListener('click', () => {
        closeModal(modal, overlay);
    });

});
