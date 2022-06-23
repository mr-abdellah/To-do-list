import Tasks from '../modules/tasksClass.js';

describe('test to do list:', () => {
  const task = new Tasks([]);

  test('todo task added:', () => {
    const newTodo = 'new todo list item';

    task.add(newTodo);

    const { description } = task.items[task.items.length - 1];
    expect(newTodo).toBe(description);
  });
  test('should delete item from to-do-list', () => {
    task.add('Cycling');
    const tasksLength = task.items.length;
    task.delete(task.items[0].index);
    expect(task.items.length).toBe(tasksLength - 1);
  });
  test('should edit task description', () => {
    task.add('Eating');
    const newTask = 'drinking';
    const { index } = task.items[task.items.length - 1];
    task.edit(index, newTask);
    const { description } = task.items[task.items.length - 1];
    expect(description).toBe(newTask);
  });
  test('todolist update function test', () => {
    task.add('create portfolio');
    const { index } = task.items[task.items.length - 1];
    task.completed(index, true);
    const { completed } = task.items[task.items.length - 1];
    expect(completed).toBe(true);
  });
});
