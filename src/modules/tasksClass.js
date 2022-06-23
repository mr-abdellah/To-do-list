class Tasks {
  items = [];

  constructor(items) {
    this.items = [...items];
  }

  add(description) {
    const newIndex = this.getNewIndex();
    const newTodo = {
      index: newIndex,
      completed: false,
      description,
    };

    this.items.push(newTodo);

    return newTodo;
  }

  delete(idx) {
    const deleteIndex = this.items.findIndex(({ index }) => index === idx);

    if (deleteIndex > -1) this.items.splice(deleteIndex, 1);
  }

  clearAll(indexes) {
    indexes.forEach((idx) => {
      this.delete(idx);
    });
  }

  edit(idx, newTodo) {
    const index = this.items.findIndex(({ index }) => index === idx);

    this.items[index].description = newTodo;
  }

  completed(idx, checked) {
    const index = this.items.findIndex(({ index }) => index === idx);

    this.items[index].completed = checked;
  }

  sort() {
    this.items = this.items.sort((a, b) => a.index - b.index);
    this.items.forEach((item, idx) => {
      item.index = idx + 1;
    });
  }

  getNewIndex() {
    let index = this.items.length + 1;

    this.items.forEach(({ index: currentIndex }) => {
      if (currentIndex >= index) index = currentIndex + 1;
    });

    return index;
  }
}
export default Tasks;