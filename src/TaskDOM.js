import { openModal, closeModal } from "./utilities";
import { createTaskObj } from "./projectLogic";

import { formatDistanceToNow } from "date-fns";

export function openTaskInput(modal) {
    document.querySelector('input[id="title"]').value = '';
    document.querySelector('textarea[id="desc"]').value = '';
    openModal(modal);
}

export function clearPreviousTasks(element) {

    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
}

export function submitTheTask(projects) {
    const modal = document.querySelector('.task-form');

    if (projects.length == 0) {
        alert('You must create a project first');
        closeModal(modal);
        return;
    }
    if (document.querySelector('input[name="priority"]:checked') === null) {
        alert('Please select a priority');
        return;
    }

    const task = getUserInputFromDOM();

    projects.forEach(project => {
        if (task.projectParent === project.title) {
            project.addTask(task);
        }
    });

    closeModal(modal);
}

export function addTaskToDOM(obj, projectObj) {

    const tasks = document.querySelector('.tasks');

    const newTask = document.createElement('div');
    newTask.className = 'task';

    const taskTitle = document.createElement('h3');
    taskTitle.innerText = obj.title;

    const dueDate = document.createElement('p');
    
    dueDate.innerText = obj.dueDate;

    const detailsButton = document.createElement('button');
    detailsButton.innerText = 'Details';
    detailsButton.className = 'details-btn';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete-button';

    const completedIcon = document.createElement('img');
    completedIcon.src = '../src/assets/tick.svg';
    completedIcon.className = 'icon';

    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    detailsButton.addEventListener('click', () => {
        const container = document.querySelector('.task-details');
        renderTaskDetails(container, obj);
    });

    deleteBtn.addEventListener('click', () => {
        newTask.remove();
        projectObj.removeTask(obj);
    });

    if (obj.completed == true) {
        newTask.classList.add('active');
    }

    completedIcon.addEventListener('click', () => {
        if (obj.completed == false) {
            newTask.classList.add('active');
            obj.completed = true;
            return;
        }
        obj.completed = false;
        newTask.classList.remove('active');
    });

    btnContainer.append(detailsButton, deleteBtn, completedIcon);

    tasks.append(newTask);
    newTask.append(taskTitle,dueDate, timeTillTaskElement(obj), btnContainer);
}

export function renderTaskDetails(container,task) {

    clearPreviousTasks(container);

    const titleHead = document.createElement('h3');
    const descHead = document.createElement('h3');
    const dateHead = document.createElement('h3');
    const priorityHead = document.createElement('h3');

    titleHead.innerText = 'Title:'
    descHead.innerText = 'Description:'
    dateHead.innerText = 'Due date:'
    priorityHead.innerText = 'Priority:'

    const title = document.createElement('p');
    title.innerText = task.title;

    const desc = document.createElement('p');
    desc.innerText = task.description;

    const date = document.createElement('p');

    date.innerText = task.dueDate;

    const priority = document.createElement('p');
    priority.innerText = task.priority;

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

export function getUserInputFromDOM() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('desc').value;
    const priority = document.querySelector('input[name="priority"]:checked').id;
    const projectSelection = document.getElementById('project');
    const projectParent = projectSelection.options[projectSelection.selectedIndex].text;
    const dueDate = document.getElementById('date').value;
    
    const taskObj = createTaskObj(title,description,priority,
        projectSelection,projectParent,dueDate);
    return taskObj;
}

function timeTillTaskElement(obj) {
    const timeTillTask = document.createElement('p');

    const reworked = obj.dueDate;
    const year = reworked.slice(0,4);
    const month = reworked.slice(5,7);
    const day = reworked.slice(8,11);

    const result = formatDistanceToNow(new Date(year,month -1,day))
    timeTillTask.style.fontWeight = 'bold';
    timeTillTask.innerText = `To-do in ${result}`;

    return timeTillTask;
}