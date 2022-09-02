export function borderOnClick() {

    const projects = [...document.querySelectorAll('.project')];
            // projects.forEach(project => e.classList.remove('active'));
            projects.forEach(project => {
                project.classList.remove('active');
                project.dataset.selected = false;
            });
}

export const openModal = (modal) => {
    const overlay = document.getElementById('overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
}

export const closeModal = (modal) => {
    const overlay = document.getElementById('overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

export const saveToLocalStorage = (string, obj) => {
    localStorage.setItem(string, JSON.stringify(obj));
}