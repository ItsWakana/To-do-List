export const createTask = (id) => {

    const title = document.getElementById('title').value;
    const description = document.getElementById('desc').value;
    const priority = document.querySelector('input[name="priority"]:checked').id;
    const projectSelection = document.getElementById('project');
    const projectParent = projectSelection.options[projectSelection.selectedIndex].text;

    return { title, id, description, priority, projectParent }
}


export const Project = (title, id) => {


    return { title, id, tasks: [] } 

}

export const pushTaskToArray = (taskObject, array) => {
    array.push(taskObject);
}