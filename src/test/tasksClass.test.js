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
});
