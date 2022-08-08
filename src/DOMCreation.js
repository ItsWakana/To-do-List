export function addProject(projectName) {

    const projects = document.querySelector('.projects');
    const newProject = document.createElement('div');
    newProject.className = 'project';

    const projectHeading = document.createElement('h3');
    projectHeading.innerText = projectName;

    projects.append(newProject);
    newProject.append(projectHeading);
}

export function addTask(taskName) {

    const tasks = document.querySelector('.tasks');
    const newTask = document.createElement('div');
    newTask.className = 'task';

    const taskTitle = document.createElement('h3');
    taskTitle.innerText = taskName;

    tasks.append(newTask);
    newTask.append(taskTitle);
}