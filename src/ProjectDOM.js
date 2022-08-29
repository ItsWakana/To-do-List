import { Project, projectNumCount, projectMethods } from "./projectLogic";
import { clearPreviousTasks, addTaskToDOM } from "./TaskDOM";

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
        console.log(projectObj.tasks);
        // projectObj.sortTasks();
        // projectObj.renderTask(projectObj);
        // sortTaskss(projectObj);
        // renderTaskss(projectObj);

        projectMethods.sortTasks(projectObj);
        projectMethods.renderTasks(projectObj);
    });
}

// const sortTaskss = ({tasks}) => {
//     tasks = tasks.sort((a,b) => {
//         if (b.dueDate > a.dueDate) {
//             return -1;
//         } else {
//             return 1;
//         }
//     });
// }

// const renderTaskss = ({tasks}, projectObj) => {
//     tasks.forEach(task => addTaskToDOM(task, projectObj));
// }

// export function renderDropDown(array, arrayNumber) {
//     const dropDownMenu = document.getElementById('project');

//     if (array.length === 0) return;

//     const option = document.createElement('option');
//     option.value = arrayNumber; 
//     option.innerText = `Project ${arrayNumber}`;
//     dropDownMenu.append(option);

// }