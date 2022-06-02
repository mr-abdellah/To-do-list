import Tasks from "./tasksClass";
import createEl from "./addRemove";
let myTasks = [];
let savedTasks = [];
savedTasks = JSON.parse(localStorage.getItem('myTasks'));

const save = () => {
    savedTasks.forEach((ele) => {
        const Task = new Tasks(ele.description,ele.completed,ele.index);
        myTasks.push(Task);
        createEl(Task.description);
    });
}

export { myTasks, savedTasks, save }