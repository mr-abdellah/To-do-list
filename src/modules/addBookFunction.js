import Tasks from "./tasksClass";

const myTasks = [];
const input = document.querySelector('#task');

// const task = new Tasks(input.value, false, myTasks.length);

const addTask = ({description, completed, index}) => {
    // create element =>
    const listParent = document.querySelector('ul');
    const listChild = document.createElement('li');
    const checkBox = document.createElement('input');
    let heading = document.createElement('h2');
    const dotsButton = document.createElement('button');

    // 
    heading.textContent = description;
    // Assign attributes =>

    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('name', 'check');
    dotsButton.setAttribute('type', 'submit');

    // Assing id/classes =>

    listChild.classList.add('oneTask');
    checkBox.setAttribute('id', 'check');
    dotsButton.classList.add('dots');

    // appending elements =>

    listParent.appendChild(listChild);
    listChild.appendChild(checkBox);
    listChild.appendChild(heading);
    listChild.appendChild(dotsButton)
}

export { input, myTasks ,addTask }