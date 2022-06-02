import './style.css';
import refresh from './img/refresh.png';
import returny from './img/return.png'
import generateTasks from './modules/generateTasks.js';

const refreshImg = document.querySelector('#refresh');
const returnImg = document.querySelector('#return');

refreshImg.src = refresh;
returnImg.src = returny;

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
