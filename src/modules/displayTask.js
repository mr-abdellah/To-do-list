import { myTasks } from './arrayTasks.js';
import createEl from './addRemove.js';
import Tasks from './tasksClass.js';

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