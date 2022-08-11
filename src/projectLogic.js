export let taskIncrementor = 0;

export const createTask = () => {

    const title = document.getElementById('title').value;
    const description = document.getElementById('desc').value;
    const priority = document.querySelector('input[name="priority"]:checked').id;
    const projectSelection = document.getElementById('project');
    const projectParent = projectSelection.options[projectSelection.selectedIndex].text;

    let id = taskIncrementor;

    return { id, title, description, priority, projectParent }
}

export let projectNumCount = 0;
export const Project = (title, id) => {

    return { title, id, tasks : [] } 

}