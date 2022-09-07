import { formatDistanceToNow } from "date-fns";

export function createNewElement(element,className = undefined, text = undefined) {
    const el = document.createElement(element);
    el.className = className;
    el.innerText = text;

    return { el }
}

export function createNewImg(element,className = undefined, source) {
    const el = document.createElement(element);
    el.src = source;
    el.className = className;

    return { el }
}

export function createFormElement(element, eleType, eleName, id, elePlaceholder = '') {
    const el = document.createElement(element);
    el.setAttribute('type',eleType);
    el.setAttribute('name', eleName);
    el.id = id;
    el.setAttribute('placeholder',elePlaceholder);

    return { el }
}

export function createSelectElement(eleName,id) {
    const el = document.createElement('select');

    el.setAttribute('name', eleName);
    el.id = id;

    return { el }
}

export function createLabel(target, text) {
    const el = document.createElement('label');
    el.for = target;
    el.textContent = text;

    return { el }
}

export function createOption(value, text) {
    const el = document.createElement('option');
    el.value = value;
    el.innerText = text;

    return { el }
}

export function timeTillTaskElement(obj) {
    const el = document.createElement('p');

    const reworked = obj.dueDate;
    const year = reworked.slice(0,4); 
    const month = reworked.slice(5,7);
    const day = reworked.slice(8,11);

    const result = formatDistanceToNow(new Date(year,month -1,day));
    el.style.fontWeight = 'bold';

    if (obj.completed === false) {
    el.innerText = `To-do in ${result}`;
    } else {
        el.innerText = 'Completed';
        el.style.color = 'green';
    }
    const setCountdown = () => {
        el.innerText = `To-do in ${result}`;
        el.style.color = 'white';
    }

    const setCompleted = () => {
        el.innerText = 'Completed';
        el.style.color = 'green';
    }

    return { el, setCountdown, setCompleted }
}