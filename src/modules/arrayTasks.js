const myTasks = [];
const savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];

export { myTasks, savedTasks };