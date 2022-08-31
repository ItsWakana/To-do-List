export function borderOnClick() {

    const projects = [...document.querySelectorAll('.project')];
            projects.forEach(e => e.classList.remove('active'));
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