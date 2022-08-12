import { closeModal, openModal } from "./onClickStyling";

export function addProjectToDOM(projectName) {

    const projects = document.querySelector('.projects');
    const newProject = document.createElement('div');
    newProject.className = 'project';

    const projectHeading = document.createElement('h3');
    projectHeading.innerText = projectName;

    projects.append(newProject);
    newProject.append(projectHeading);
}

export function taskToDOMOnClick(projectObjArray) {

    function addTaskToDOM(title, date) {

        const tasks = document.querySelector('.tasks');
        const newTask = document.createElement('div');
        newTask.className = 'task';
    
        const taskTitle = document.createElement('h3');
        taskTitle.innerText = title;

        const dueDate = document.createElement('p');
        dueDate.innerText = date;

        const detailsButton = document.createElement('button');
        detailsButton.innerText = 'Details';
        detailsButton.className = 'details-btn';

    
        tasks.append(newTask);
        newTask.append(taskTitle,dueDate,detailsButton);
    }

    function removeDOMTasks(element) {
        while (element.hasChildNodes()) {
            element.removeChild(element.lastChild);
        }
    }
    //get the latest project
    const projectElements = [...document.querySelectorAll('.project')];
    const lastIndex = projectElements.length - 1;

    //apply event listener to the newest project, which removes the previous tasks
    const projectObj = projectObjArray[lastIndex];
    projectElements[lastIndex].addEventListener('click', () => {
        const taskElements = document.querySelector('.tasks');
        removeDOMTasks(taskElements);

    //get variable of the tasks in that project
        const { tasks } = projectObj;
        // const { tasks: [{task: task} ] } = projectObj;

    //for each task inside the object we append it to the DOM
        tasks.forEach(task => addTaskToDOM(task.title,task.dueDate));

    //loop through all our task details buttons and render the task details on click
        const taskSelection = document.querySelector('.tasks');
        const taskDetailsBtn = taskSelection.querySelectorAll('button');
        taskDetailsBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                const container = document.querySelector('.task-details');
                renderTaskDetails(container);
            });
        });
    });
}

function renderTaskDetails(container) {
    openModal(container);

    const heading = document.createElement('h3');
    heading.innerText = 'Task';

    container.append(heading);
}


export function renderDropDown(array, arrayNumber) {
    const dropDownMenu = document.getElementById('project');

    if (array.length === 0) return;

    const option = document.createElement('option');
    option.value = arrayNumber; 
    option.innerText = `Project ${arrayNumber}`;
    dropDownMenu.append(option);

}