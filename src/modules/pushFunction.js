import { input, myTasks, addTask } from "./addBookFunction";
import Tasks from "./tasksClass";
const ul = document.querySelector('ul');

const pushFunction = () => {
    const task = new Tasks(input.value, false, myTasks.length+1);
    myTasks.push(task);
    const displayTasks = myTasks.map((task) => addTask(task)).join('');
    ul.innerHTML = displayTasks;
}

export default pushFunction;