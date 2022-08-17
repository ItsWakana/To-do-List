export function borderOnClick() {

    const projects = [...document.querySelectorAll('.project')];

    projects.forEach(project => {
        project.addEventListener('click', (e) => {
            projects.forEach(e => e.classList.remove('active'));
            project.classList.add('active');
        });
    });
}

export const openModal = (modal) => {
    // const modal = document.querySelector('.modal');
    const overlay = document.getElementById('overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
}

export const closeModal = (modal) => {
    // const modal = document.querySelector('.modal');
    const overlay = document.getElementById('overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
}