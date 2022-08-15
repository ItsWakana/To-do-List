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

function removeDOMTasks(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
}

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

export function renderTaskOnProjClick(projectArray) {

    const projectElements = [...document.querySelectorAll('.project')];
    const lastIndex = projectElements.length - 1;

    const projectObj = projectArray[lastIndex];
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
        taskDetailsBtn.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                const container = document.querySelector('.task-details');
                removeDOMTasks(container);
                renderTaskDetails(container,projectObj,i);
            });
        });
    });
}

function renderTaskDetails(container,obj,indexOfTask) {
    const { tasks } = obj;

    const titleHead = document.createElement('h3');
    const descHead = document.createElement('h3');
    const dateHead = document.createElement('h3');
    const priorityHead = document.createElement('h3');

    titleHead.innerText = 'Title:'
    descHead.innerText = 'Description:'
    dateHead.innerText = 'Due date:'
    priorityHead.innerText = 'Priority:'

    const title = document.createElement('p');
    title.innerText = tasks[indexOfTask].title;

    const desc = document.createElement('p');
    desc.innerText = tasks[indexOfTask].description;

    const date = document.createElement('p');
    date.innerText = tasks[indexOfTask].dueDate;

    const priority = document.createElement('p');
    priority.innerText = tasks[indexOfTask].priority;

    const exitBtn = document.createElement('button');
    exitBtn.innerText = 'Close';
    exitBtn.className = 'close-button';

    exitBtn.addEventListener('click', () => {
        closeModal(container);
    });
    
    openModal(container);

    container.append(titleHead,title,descHead,desc,
        dateHead,date,priorityHead,priority, exitBtn);
}


export function renderDropDown(array, arrayNumber) {
    const dropDownMenu = document.getElementById('project');

    if (array.length === 0) return;

    const option = document.createElement('option');
    option.value = arrayNumber; 
    option.innerText = `Project ${arrayNumber}`;
    dropDownMenu.append(option);

}