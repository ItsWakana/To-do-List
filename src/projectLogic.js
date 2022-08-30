import { addTaskToDOM } from './TaskDOM';

export const createTaskObj = (title,description,priority,projSelection,projectParent,dueDate ) => {

    let id = 0;
    let completed = false;

    return { id, title, description, priority, projSelection, projectParent,dueDate, completed }
}

export let projectNumCount = 0;
// export let projectNumCount = JSON.parse(localStorage.getItem("projectNumCount")) || 0;

export const Project = (title, id) => {

    let tasks = [];
    // let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const addProject = (array,project) => {
        array.push(project);
    }

    // const addTask = (task) => {
    //     task.id = tasks.length +1;
    //     tasks.push(task)
    //     // localStorage.setItem("tasks", JSON.stringify(tasks));
    // }

    // const sortTasks = () => {
    //     tasks = tasks.sort((a,b) => {
    //         if (b.dueDate > a.dueDate) {
    //             return -1;
    //         } else {
    //             return 1;
    //         }
    //     });
    // }

    // const renderTask = (projectObj) => {
    //     tasks.forEach(task => addTaskToDOM(task, projectObj));
    
    // }

    // const removeTask = (task) => {
    //     const index = tasks.indexOf(task);
    //     tasks.splice(index,1);
    // }
    
    // return { title, id, tasks, renderTask, addTask, addProject, removeTask, sortTasks } 
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
    renderTasks: ({tasks}, projectObj) => {
        tasks.forEach(task => addTaskToDOM(task, projectObj));
    },

}

export const addTask = (task, {tasks}) => {
    task.id = tasks.length +1;
    tasks.push(task);

}