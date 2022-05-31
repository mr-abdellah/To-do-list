import './style.css';
import generateTasks from './modules/generateTasks.js';

const myTasks = [
  {
    description: 'one',
    bool: true,
    index: 0,
  },

  {
    description: 'two',
    bool: true,
    index: 2,
  },
  {
    description: 'three',
    bool: true,
    index: 3,
  },
];

const ul = document.querySelector('ul');

const displayTasks = myTasks.map((task) => generateTasks(task)).join('');
ul.innerHTML = displayTasks;