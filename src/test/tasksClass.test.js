import Tasks from '../modules/tasksClass.js';

describe('test to do list:', () => {
  const task = new Tasks([]);

  test('todo task added:', () => {
    const newTodo = 'new todo list item';

    task.add(newTodo);

    const { description } = task.items[task.items.length - 1];
    expect(newTodo).toBe(description);
  });
});