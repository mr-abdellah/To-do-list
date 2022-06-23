// import Css ,images sources =>
import './style.css';

import Tasks from './modules/tasksClass.js';
import TodoDOM from './modules/create.js';
import SaveTasks from './modules/saveTasks.js';

const todoStore = new SaveTasks();
const todoList = new Tasks(todoStore.items);
const todoDOM = new TodoDOM();

todoDOM.onCheckBoxChange = (event) => {
  const index = parseInt(event.target.dataset.index, 10);
  const { checked } = event.currentTarget;

  todoList.completed(index, checked);
  todoStore.completed(index, checked);
};

todoDOM.onInputChange = (event) => {
  const index = parseInt(event.target.dataset.index, 10);
  const newTodo = event.target.value;

  todoList.edit(index, newTodo);
  todoStore.edit(index, newTodo);
};

todoDOM.onRemoveItemClick = (event) => {
  const index = parseInt(event.currentTarget.dataset.index, 10);

  todoList.delete(index);
  todoStore.delete(index);
  todoDOM.remove(index);
};

todoDOM.render(todoList.items);

todoDOM.on('enter', (todo) => {
  const newTodo = todoList.add(todo);
  todoStore.add(newTodo);
  todoDOM.add(newTodo);
});

todoDOM.on('clear-all', (indexes) => {
  todoList.clearAll(indexes);
  todoStore.store(todoList.items);
  todoDOM.render(todoList.items);
});
