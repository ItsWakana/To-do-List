import { removeDOMTasks, addTaskToDOM, renderTaskDetails } from './DOMCreation'

export let taskIncrementor = 0;

export const createTask = () => {

    const title = document.getElementById('title').value;
    const description = document.getElementById('desc').value;
    const priority = document.querySelector('input[name="priority"]:checked').id;
    const projectSelection = document.getElementById('project');
    const projectParent = projectSelection.options[projectSelection.selectedIndex].text;

    const dueDate = document.getElementById('date').value;

    let id = taskIncrementor;

    return { id, title, description, priority, projectParent, dueDate }
}

export let projectNumCount = 0;

export const Project = (title, id) => {
    let tasks = [];

    const renderTask = () => {
        // const projectElements = Array.from(document.querySelectorAll('.project'));

        // const projectObj = projectArray.at(-1);
        // projectElements.at(-1).addEventListener('click', () => {
        //     // const taskElements = document.querySelector('.tasks');
        //     // removeDOMTasks(taskElements);
        //     console.log(projectObj);
        //     const { tasks } = projectObj;
    
            tasks.forEach(task => addTaskToDOM(task.title,task.dueDate));

        //     const taskSelection = document.querySelector('.tasks');
        //     const taskDetailsBtn = taskSelection.querySelectorAll('.details-btn');
        //     taskDetailsBtn.forEach((btn, i) => {
        //         btn.addEventListener('click', () => {
        //             const container = document.querySelector('.task-details');
        //             removeDOMTasks(container);
        //             renderTaskDetails(container,projectObj,i);
        //         });
        //     });
    
        //     const allTasks = document.querySelectorAll('.task');
        //     const deleteTaskBtn = taskSelection.querySelectorAll('.delete-button');
        //     deleteTaskBtn.forEach((btn, i) => {
        //         btn.addEventListener('click', () => {
        //             allTasks[i].remove();
        //             tasks.splice(i, 1);
        //         });
        //     });
        // });
    }

    return { title, id, renderTask, tasks } 
    // return { title, id, tasks : [], renderTask } 

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