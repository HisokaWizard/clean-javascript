function addTask() {
    const list = document.getElementById('list');
    const task = document.createElement('div');
    const inputElem = document.getElementById('task-input');
    const textNode = document.createTextNode(inputElem.value);

    const spanClose = document.createElement('span');
    spanClose.classList = 'close';
    const closeTextNode = document.createTextNode('\u00D7');
    spanClose.appendChild(closeTextNode);

    const spanTask = document.createElement('span');
    spanTask.classList = 'text-task';
    spanTask.appendChild(textNode);

    task.classList = 'list-item';
    if (inputElem && inputElem.value === '') {
        alert('This field can`t be empty!');
        return;
    } else {
        task.appendChild(spanTask);
        task.appendChild(spanClose);
        list.appendChild(task);
        inputElem.value = null;
    }

    spanClose.onclick = (event) => {
        removeTask(event);
    }

    task.onclick = (event) => {
        checkedTask(event);
    }
}

function removeTask(event) {
    const list = document.getElementById('list');
    list.removeChild(event.currentTarget.parentNode);
}

function checkedTask(event) {
    const task = event.currentTarget;
    if (task.classList.value === 'list-item') {
        task.classList = 'list-item, after-action';
    } else {
        task.classList = 'list-item';
    }
}