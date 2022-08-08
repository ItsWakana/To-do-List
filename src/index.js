import './style.css';
import {addProject} from './addProjectDOM';
import { borderOnClick } from './addProjectDOM';

const createProject = document.querySelector('.create');

createProject.addEventListener('click', () => {
    addProject('Project 3');
    borderOnClick();
});


