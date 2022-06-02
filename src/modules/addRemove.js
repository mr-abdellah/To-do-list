import displayTask from "./displayTask";
import dltImg from '../img/trash.png';
import moreImg from '../img/more.png';
const listParent = document.querySelector('ul');

const createEl = (description) => {
    let listChild = document.createElement('li');
    const checkBox = document.createElement('input');
    let heading = document.createElement('h2');
    const dotsButton = document.createElement('button');
    const dots = document.createElement('img');

    // 
    heading.textContent = description;
    // Assign attributes =>

    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('name', 'check');
    checkBox.classList.add('check');
    dotsButton.setAttribute('type', 'submit');
    dots.setAttribute('src', moreImg);
    dots.setAttribute('alt', 'Do you want to delete this task?');
    
    // Assing id/classes =>
    
    listChild.classList.add('oneTask');
    checkBox.setAttribute('id', 'check');
    dotsButton.classList.add('dots');
    dotsButton.append(dots)

    // appending elements =>
    listParent.appendChild(listChild)
    listChild.appendChild(checkBox);
    listChild.appendChild(heading);
    listChild.appendChild(dotsButton)

    dots.addEventListener('click', (e) => {
        // dots.setAttribute('id', 'trash');
        // dots.setAttribute('src', '/img/trash.png').addEventListener('click', () => {
        //     listChild.remove()
        // });
        dotsButton.style.display = 'none';
        const trashBtn = document.createElement('button');
        const trashImg = document.createElement('img');
        trashBtn.classList.add('trashBtn');
        trashImg.setAttribute('src', dltImg);
        trashBtn.appendChild(trashImg);
        listChild.appendChild(trashBtn);
        trashBtn.addEventListener('click', () => {
            listChild.remove()
        })
    })
};

export default createEl;