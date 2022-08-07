import './style.css';

const projects = [...document.querySelectorAll('.project')];

projects.forEach(project => {
    project.addEventListener('click', (e) => {
        projects.forEach(e => e.classList.remove('active'));
        project.classList.add('active');
    });
});