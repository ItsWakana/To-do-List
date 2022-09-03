import { addTaskToDOM } from './TaskDOM';

export const createTaskObj = (title,description,priority,projSelection,projectParent,dueDate ) => {

    let id = 0;
    let completed = false;

    return { id, title, description, priority, projSelection, projectParent,dueDate, completed }
}

export let projectNumCount = JSON.parse(localStorage.getItem("projectNumCount")) || 0;

export const Project = (title, id) => {

    let tasks = [];

    const addProject = (array,project) => {
        array.push(project);
    }

    return { title, id, tasks, addProject }
}

export const projectMethods = {

    addProject: (array,project) => {
        array.push(project);
    },
    addTask: (task, {tasks}) => {
        task.id = tasks.length +1;
        tasks.push(task);
    },
    sortTasks: ({tasks}) => {
        tasks = tasks.sort((a,b) => {
            if (b.dueDate > a.dueDate) {
                return -1;
            } else {
                return 1;
            }
        });
    },
    renderTasks: (projectObj) => {
        projectObj.tasks.forEach(task => addTaskToDOM(task, projectObj));
    },
    removeTask: (task, {tasks}) => {
        const index = tasks.indexOf(task);
        tasks.splice(index,1);
    }

}