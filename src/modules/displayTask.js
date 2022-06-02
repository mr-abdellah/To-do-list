import { myTasks, savedTasks} from "./saveTasks";
import Tasks from "./tasksClass";
import createEl from "./addRemove";
const displayTask = () => {
    const input = document.querySelector('#task');
    input.addEventListener('change', () => {
        const Task = new Tasks(input.value, false, myTasks.length+1);
        createEl(Task.description);
        let listChild = document.createElement('li');
        listChild = Task;
        myTasks.push(Task)
        input.value = '';
        savedTasks = localStorage.setItem('myTasks', JSON.stringify(myTasks));
    });
}
export default displayTask;