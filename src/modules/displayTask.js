import { myTasks } from './arrayTasks';
import Tasks from './TasksClass.js';
import { createEl } from './addRemove.js';

const displayTask = () => {
  const input = document.querySelector('#task');
  input.addEventListener('change', () => {
    const Task = new Tasks(input.value, false, myTasks.length + 1);
    createEl(Task.description, Task.index);
    let listChild = document.createElement('li');
    listChild = Task;
    myTasks.push(listChild);
    input.value = '';
    localStorage.setItem('myTasks', JSON.stringify(myTasks));
  });
};
export default displayTask;