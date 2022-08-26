import { Project, projectNumCount } from "./projectLogic";
import { clearPreviousTasks } from "./TaskDOM";

export function addProjectToDOM(projectObj) {

    const projects = document.querySelector('.projects');
    const newProject = document.createElement('div');
    newProject.className = 'project';

    const projectHeading = document.createElement('h3');
    projectHeading.innerText = projectObj.title;

    projects.append(newProject);
    newProject.append(projectHeading);

    newProject.addEventListener('click', () => { 
        const container = document.querySelector('.tasks');
        clearPreviousTasks(container);
        projectObj.sortTasks();
        projectObj.renderTask(projectObj);
    });
}

// export function renderDropDown(array, arrayNumber) {
//     const dropDownMenu = document.getElementById('project');

//     if (array.length === 0) return;

//     const option = document.createElement('option');
//     option.value = arrayNumber; 
//     option.innerText = `Project ${arrayNumber}`;
//     dropDownMenu.append(option);

// }