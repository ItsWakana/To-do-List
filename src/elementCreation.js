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

export function createFormElement(element, eleType, eleName, id, elePlaceholder) {
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