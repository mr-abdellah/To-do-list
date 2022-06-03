import { myTasks } from './arrayTasks.js';
import dltImg from '../img/trash.png';
import moreImg from '../img/more.png';
import applyImg from '../img/apply.png';

const listParent = document.querySelector('ul');
const createEl = (description, index) => {
  const listChild = document.createElement('li');
  const checkBox = document.createElement('input');
  const heading = document.createElement('h2');
  const dotsButton = document.createElement('button');
  const applyButton = document.createElement('button');
  const dots = document.createElement('img');
  const apply = document.createElement('img');

  //
  heading.textContent = description;
  // Assign attributes =>

  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('name', 'check');
  checkBox.classList.add('check');
  dotsButton.setAttribute('type', 'submit');
  dots.setAttribute('src', moreImg);
  dots.setAttribute('alt', 'Do you want to delete this task?');
  apply.setAttribute('src', applyImg);

  // Assing id/classes =>

  listChild.classList.add('oneTask');
  checkBox.setAttribute('id', 'check');
  applyButton.classList.add('applyBtn');
  applyButton.append(apply);
  dotsButton.classList.add('dots');
  dotsButton.append(dots);

  // appending elements =>
  listParent.appendChild(listChild);
  listChild.appendChild(checkBox);
  listChild.appendChild(heading);
  listChild.appendChild(dotsButton);
  listChild.appendChild(applyButton);

  const trashBtn = document.createElement('button');
  trashBtn.setAttribute('id', index);

  dots.addEventListener('click', () => {
    listChild.style.gridTemplateColumns = '1fr 4fr 1fr 1fr';
    applyButton.style.display = 'block';
    heading.setAttribute('contenteditable', 'true');
    // apply button to save description changes
    applyButton.addEventListener('click', () => {
      applyButton.style.display = 'none';
      trashBtn.style.display = 'none';
      dotsButton.style.display = 'block';
      listChild.style.gridTemplateColumns = '1fr 4fr 1fr';
      heading.setAttribute('contenteditable', 'false');
      for (let i = 0; i < myTasks.length; i += 1) {
        if (myTasks[i].index === index) {
          myTasks[i].description = heading.textContent;
          localStorage.setItem('myTasks', JSON.stringify(myTasks));
        }
      }
    });
    dotsButton.style.display = 'none';
    const trashImg = document.createElement('img');
    trashBtn.classList.add('trashBtn');
    trashImg.setAttribute('src', dltImg);
    trashBtn.appendChild(trashImg);
    listChild.appendChild(trashBtn);

    // Remove func

    trashBtn.addEventListener('click', () => {
      if (myTasks === []) return;
      listChild.remove();
      myTasks.splice(index - 1, 1);
      localStorage.setItem('myTasks', JSON.stringify(myTasks));

      for (let i = index - 1; i < myTasks.length; i += 1) {
        myTasks[i].index -= 1;
        localStorage.setItem('myTasks', JSON.stringify(myTasks));
      }
      listParent.innerHTML = '';
      myTasks.forEach((task) => {
        listParent.appendChild(createEl(task.description, task.index));
      });
    });
  });
  return listChild;
};

export default createEl;