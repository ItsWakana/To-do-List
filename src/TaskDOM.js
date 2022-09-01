import { openModal, closeModal, saveToLocalStorage } from "./utilities";
import { createTaskObj, projectMethods } from "./projectLogic";
import { formatDistanceToNow } from "date-fns";
import { numberForDropDown, projects } from ".";
import { createFormElement, createNewElement, createNewImg, createOption, createSelectElement } from "./elementCreation";

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

    const task = getUserInputFromDOM();

    if (task.title === '') {
        return;
    }

    projects.forEach(project => {
        if (task.projectParent === project.title) {
            const container = document.querySelector('.tasks');
            clearPreviousTasks(container);
            projectMethods.addTask(task, project);
            projectMethods.renderTasks(project);
            saveToLocalStorage("projects", projects);
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
        const container = document.querySelector('.task-form');
        renderTaskEditForm(container, obj, numberForDropDown);

    });

    deleteBtn.el.addEventListener('click', () => {
        newTask.el.remove();
        projectMethods.removeTask(obj, projectObj);
        saveToLocalStorage("projects", projects);
    });

    if (obj.completed == true) {
        newTask.el.classList.add('active');
    }

    completedIcon.el.addEventListener('click', () => {
        if (obj.completed == false) {
            newTask.el.classList.add('active');
            obj.completed = true;
            saveToLocalStorage("projects", projects);
            return;
        }
        obj.completed = false;
        saveToLocalStorage("projects", projects);
        newTask.el.classList.remove('active');

    });

    btnContainer.el.append(detailsButton.el, editButton.el, deleteBtn.el, completedIcon.el);

    tasks.append(newTask.el);
    newTask.el.append(taskTitle.el,dueDate.el, timeTillTaskElement(obj), btnContainer.el);
}



export function renderTaskForm(container,projects,dropDownArray) {
    clearPreviousTasks(container);

    const form = createNewElement('form', 'inner', '');
    const title = createFormElement('input', 'text', 'title', 'title', 'Title');
    const textarea = createFormElement('textarea', undefined, 'desc', 'desc', 'Brief description of task');
    const prioritySelect = createSelectElement('priority', 'priority');

    for (let i=0; i<3; i++) {
        const titles = ['Low', 'Normal', 'High'];
        const option = createOption(i, titles[i]);
        prioritySelect.el.append(option.el);
    }

    const select = createSelectElement('project', 'project');

    for (let i=1; i<=dropDownArray.length; i++) {

        const option = createOption(i, `Project ${i}`);
        select.el.append(option.el);
    }

    const date = createFormElement('input', 'date', 'date', 'date');
    const submit = createNewElement('button', 'add-task', 'Add the task');
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

    form.el.append(title.el,textarea.el,prioritySelect.el,select.el,date.el,submit.el);
    container.append(form.el,closeIcon.el);
}

export function renderTaskEditForm(container, taskObj) {
    clearPreviousTasks(container);

    const form = createNewElement('form', 'inner', '');
    const title = createFormElement('input', 'text', 'title', 'title', 'Title');
    title.el.value = taskObj.title;

    const textarea = createFormElement('textarea', undefined, 'desc', 'desc', 'Brief description of task');
    textarea.el.value = taskObj.description;
    const prioritySelect = createSelectElement('priority', 'priority');

    const titles = ['Low', 'Normal', 'High'];
    for (let i=0; i<3; i++) {
        const option = createOption(titles[i], titles[i]);
        prioritySelect.el.append(option.el);
    }

    for(let i=0; i<3; i++) {
        if (taskObj.priority === titles[i]) {
            prioritySelect.el.selectedIndex = i;
        }
    }

    const date = createFormElement('input', 'date', 'date', 'date');
    date.el.value = taskObj.dueDate;

    const edit = createNewElement('button', 'edit-task', 'Edit task');
    const closeIcon = createNewImg('img', 'icon', '../src/assets/close.svg');

    edit.el.addEventListener('click', (e) => {
        e.preventDefault();
        taskObj.title = title.el.value;
        taskObj.description = textarea.el.value;
        taskObj.dueDate = date.el.value;
        taskObj.priority = titles[prioritySelect.el.selectedIndex];
        closeModal(container);
        saveToLocalStorage("projects", projects);

        projects.forEach(project => {
            if (taskObj.projectParent === project.title) {
                const container = document.querySelector('.tasks');
                clearPreviousTasks(container);
                projectMethods.renderTasks(project);
            }
        });
    });

    closeIcon.el.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            closeModal(modal);
        })
    });

    openModal(container);


    form.el.append(title.el,textarea.el,prioritySelect.el,date.el,edit.el);
    container.append(form.el,closeIcon.el);
}

export function renderTaskDetails(container,task) {

    clearPreviousTasks(container);

    const titleHead = document.createElement('h3');
    const descHead = document.createElement('h3');
    const dateHead = document.createElement('h3');
    const priorityHead = document.createElement('h3');

    titleHead.innerText = 'Title:';
    descHead.innerText = 'Description:';
    dateHead.innerText = 'Due date:';
    priorityHead.innerText = 'Priority:';

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
    const priority = document.getElementById('priority');
    const prioritySelection = priority.options[priority.selectedIndex].text;

    const projectSelection = document.getElementById('project');
    const projectParent = projectSelection.options[projectSelection.selectedIndex].text;
    const dueDate = document.getElementById('date').value;
    
    const taskObj = createTaskObj(title,description,prioritySelection,
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