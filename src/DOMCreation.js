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

    function addTaskToDOM(taskName) {

        const tasks = document.querySelector('.tasks');
        const newTask = document.createElement('div');
        newTask.className = 'task';
    
        const taskTitle = document.createElement('h3');
        taskTitle.innerText = taskName;
    
        tasks.append(newTask);
        newTask.append(taskTitle);
    }

    const projectElements = [...document.querySelectorAll('.project')];
    const arrIndex = projectElements.length - 1;

    // const taskArray = [];

    const projectObj = projectObjArray[arrIndex];
    projectElements[arrIndex].addEventListener('click', () => {
        // taskArray.push(projectObj.tasks)
        const t = projectObj.tasks
        console.log(projectObj);
        // addTaskToDOM(projectObj.task);
    });
}

// export function addTaskToDOM(taskName) {

//     const tasks = document.querySelector('.tasks');
//     const newTask = document.createElement('div');
//     newTask.className = 'task';

//     const taskTitle = document.createElement('h3');
//     taskTitle.innerText = taskName;

//     tasks.append(newTask);
//     newTask.append(taskTitle);
// }

export function renderDropDown(array, arrayNumber) {
    const dropDownMenu = document.getElementById('project');

    if (array.length === 0) return;

    const option = document.createElement('option');
    option.value = arrayNumber; 
    option.innerText = `Project ${arrayNumber}`;
    dropDownMenu.append(option);

}