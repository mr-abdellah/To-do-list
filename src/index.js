// import Css ,images sources =>
import './style.css';
import refresh from './img/refresh.png';
import returny from './img/return.png';

import { input, myTasks, addTask } from './modules/addBookFunction';
import pushFunction from './modules/pushFunction';

const refreshImg = document.querySelector('#refresh');
const returnImg = document.querySelector('#return');

refreshImg.src = refresh;
returnImg.src = returny;

input.addEventListener('change', pushFunction());