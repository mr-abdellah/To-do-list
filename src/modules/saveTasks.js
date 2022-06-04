import Tasks from './tasksClass.js';
import createEl from './addRemove.js';
import { myTasks, savedTasks } from './arrayTasks.js';
// const myTasks = [];
// const savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];

const save = () => {
  savedTasks.forEach((ele) => {
    const Task = new Tasks(ele.description, ele.completed, ele.index);
    myTasks.push(Task);
    createEl(Task.description, Task.completed, Task.index);
  });
};

export default save;