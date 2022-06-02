// import Css ,images sources =>
import './style.css';
import refresh from './img/refresh.png';
import returny from './img/return.png';

const refreshImg = document.querySelector('#refresh');
const returnImg = document.querySelector('#return');

refreshImg.src = refresh;
returnImg.src = returny;

import createEl from './modules/addRemove';
import { save } from './modules/saveTasks';
import displayTask from './modules/displayTask';

createEl();
save();
displayTask();
