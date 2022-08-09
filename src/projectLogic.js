export const createTask = (id) => {

    const title = document.getElementById('title').value;
    const description = document.getElementById('desc').value;
    const priority = document.querySelector('input[name="priority"]:checked').id;
    const projectSelection = document.getElementById('project');
    const project = projectSelection.options[projectSelection.selectedIndex].text;

    return { title, id, description, priority, project }
}


export const Project = (title, id, task) => {


    return { title, id, tasks: {task} } 

}

export const pushTaskToArray = (taskObject, array) => {
    array.push(taskObject);
}