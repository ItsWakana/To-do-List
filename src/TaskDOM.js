import { openModal, closeModal } from "./utilities";
import { createTaskObj, projectMethods, addTask } from "./projectLogic";

import { formatDistanceToNow } from "date-fns";
import { numberForDropDown } from ".";
import { createFormElement, createLabel, createNewElement, createNewImg, createOption, createSelectElement } from "./elementCreation";

export function openTaskInput(modal) {
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

    if (task.title === '') {
        return;
    }

    projects.forEach(project => {
        if (task.projectParent === project.title) {
            project.addTask(task);
            // addTask(task, project);
            // projectMethods.addTask(task, project);
        }
    });

    closeModal(modal);
}

export function addTaskToDOM(obj, projectObj) {

    const tasks = document.querySelector('.tasks');

    const newTask = createNewElement('div', 'task','');
    const taskTitle = createNewElement('h3', undefined, obj.title);
    const dueDate = createNewElement('p',undefined,obj.dueDate);
    const detailsButton = createNewElement('button','details-btn','Details');
    const deleteBtn = createNewElement('button', 'delete-button', 'Delete');
    const editButton = createNewElement('button', 'edit-button', 'Edit');
    const completedIcon = createNewImg('img', 'icon', '../src/assets/tick.svg');
    const btnContainer = createNewElement('div', 'btn-container', '');

    detailsButton.el.addEventListener('click', () => {
        const container = document.querySelector('.task-details');
        renderTaskDetails(container, obj);
    });

    editButton.el.addEventListener('click', () => {
        const container = document.querySelector('.task-details');
        renderTaskEditForm(container, obj, numberForDropDown);

    });

    deleteBtn.el.addEventListener('click', () => {
        newTask.el.remove();
        projectObj.removeTask(obj);
    });

    if (obj.completed == true) {
        newTask.el.classList.add('active');
    }

    completedIcon.el.addEventListener('click', () => {
        if (obj.completed == false) {
            newTask.el.classList.add('active');
            obj.completed = true;
            return;
        }
        obj.completed = false;
        newTask.el.classList.remove('active');
    });

    btnContainer.el.append(detailsButton.el, deleteBtn.el, editButton.el, completedIcon.el);

    tasks.append(newTask.el);
    newTask.el.append(taskTitle.el,dueDate.el, timeTillTaskElement(obj), btnContainer.el);
}



export function renderTaskForm(container,projects,dropDownArray) {
    clearPreviousTasks(container);

    const form = createNewElement('form', 'inner', '');
    const title = createFormElement('input', 'text', 'title', 'title', 'Title');
    const textarea = createFormElement('textarea', undefined, 'desc', 'desc', 'Brief description of task');
    const priorityContainer = createNewElement('div', 'priority', '');

    for (let i=0; i<5; i++) {

        const label = createLabel('priority1', i+1);
        priorityContainer.el.append(label.el);
        const input = createFormElement('input', 'radio', 'priority', i +1, undefined);
        priorityContainer.el.append(input.el);
    }

    const select = createSelectElement('project', 'project');

    for (let i=1; i<=dropDownArray.length; i++) {

        const option = createOption(i, `Project ${i}`);
        select.el.append(option.el);
    }

    const date = createFormElement('input', 'date', 'date', 'date');
    const submit = createNewElement('button', undefined, 'Add the task');
    const closeIcon = createNewImg('img', 'icon', '../src/assets/close.svg');

    submit.el.addEventListener('click', (e) => {
        e.preventDefault();
        submitTheTask(projects);
    });

    closeIcon.el.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            closeModal(modal);
        })
    });

    form.el.append(title.el,textarea.el,priorityContainer.el,select.el,date.el,submit.el);
    container.append(form.el,closeIcon.el);
}

export function renderTaskEditForm(container, taskObj, dropDownArray) {
    clearPreviousTasks(container);

    const form = document.createElement('form');
    form.className = 'inner';

    const title = document.createElement('input');
    title.type = 'text'; title.name = 'title'; title.id = 'title';
    title.value = taskObj.title;

    const textarea = document.createElement('textarea');
    textarea.name = 'desc'; textarea.id = 'desc'; 
    textarea.value = taskObj.description;

    const priorityContainer = document.createElement('div');
    priorityContainer.className = 'priority';

    for (let i=0; i<5; i++) {
        const label = document.createElement('label');
        label.for = 'priority1'
        label.textContent = i +1;

        priorityContainer.append(label);

        const input = document.createElement('input');
        input.type = 'radio'; input.name = 'priority'; input.id = i +1;

        priorityContainer.append(input);
    }

    const select = document.createElement('select');
    select.name = 'project'; select.id = 'project';

    for (let i=1; i<=dropDownArray.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = `Project ${i}`;
        select.append(option);
    }
    
    const date = document.createElement('input');
    date.type = 'date'; date.name = 'date'; date.id = 'date';
    date.value = taskObj.dueDate;

    const edit = document.createElement('button');
    edit.innerText = 'Edit task';

    const closeIcon = document.createElement('img');
    closeIcon.className = 'icon';
    closeIcon.src = '../src/assets/close.svg';

    edit.addEventListener('click', (e) => {
        e.preventDefault();
        taskObj.title = title.value;
        taskObj.description = textarea.value;
        taskObj.dueDate = date.value;
        closeModal(container);
    });

    closeIcon.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            closeModal(modal);
        })
    });

    openModal(container);


    form.append(title,textarea,priorityContainer,select,date,edit);
    container.append(form,closeIcon);


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