// import Css ,images sources =>
import './style.css';
import refresh from './img/refresh.png';
import returny from './img/return.png';
import save from './modules/saveTasks.js';
import displayTask from './modules/displayTask.js';

const refreshImg = document.querySelector('#refresh');
const returnImg = document.querySelector('#return');

refreshImg.src = refresh;
returnImg.src = returny;

save();
displayTask();

const refreshBtn = document.querySelector('#btnRefresh');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});