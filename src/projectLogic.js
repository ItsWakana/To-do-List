import { addTaskToDOM, addProjectToDOM, clearTasks } from './DOMCreation'
import { borderOnClick } from './utilities';

export const createTaskObj = (title,description,priority,projSelection,projectParent,dueDate ) => {

    let id = 0;

    return { id, title, description, priority, projSelection,projectParent,dueDate }
}

export let projectNumCount = 0;

export const Project = (title, id) => {

    const tasks = [];

    const addProject = (array,project) => {
        array.push(project);
    }

    const addTask = (task) => {
        task.id = tasks.length +1;
        tasks.push(task)
    }

    const renderTask = (projectObj) => {
        tasks.forEach(task => addTaskToDOM(task.title,task.dueDate,task, projectObj));
    
    }

    const removeTask = (task) => {
        const index = tasks.indexOf(task);
        tasks.splice(index,1);
    }
    
    return { title, id, tasks, renderTask, addTask, addProject,removeTask } 
}

// export function renderTaskOnProjClick(projectArray) {

//     // const projectElements = Array.from(document.querySelectorAll('.project'));

//     // const projectObj = projectArray.at(-1);
//     // projectElements.at(-1).addEventListener('click', () => {
//     //     const taskElements = document.querySelector('.tasks');
//     //     removeDOMTasks(taskElements);

//     //     const { tasks } = projectObj;

//     //     tasks.forEach(task => addTaskToDOM(task.title,task.dueDate));

//         const taskSelection = document.querySelector('.tasks');
//         const taskDetailsBtn = taskSelection.querySelectorAll('.details-btn');
//         taskDetailsBtn.forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 const container = document.querySelector('.task-details');
//                 removeDOMTasks(container);
//                 renderTaskDetails(container,projectObj,i);
//             });
//         });

//         const allTasks = document.querySelectorAll('.task');
//         const deleteTaskBtn = taskSelection.querySelectorAll('.delete-button');
//         deleteTaskBtn.forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 allTasks[i].remove();
//                 tasks.splice(i, 1);
//             });
//         });

//     });
// };