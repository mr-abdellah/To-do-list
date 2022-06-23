class SaveTasks {
    STORE_KEY = 'todo-list';

    items = [];

    constructor() {
      this.items = this.getItems();
    }

    add(item) {
      this.items.push(item);
      this.store(this.items);
    }

    edit(idx, newTodo) {
      const index = this.items.findIndex(({ index }) => index === idx);

      this.items[index].description = newTodo;
      this.store(this.items);
    }

    delete(idx) {
      const deleteIndex = this.items.findIndex(({ index }) => index === idx);

      if (deleteIndex > -1) this.items.splice(deleteIndex, 1);
      this.store(this.items);
    }

    completed(idx, checked) {
      const index = this.items.findIndex(({ index }) => index === idx);

      this.items[index].completed = checked;
      this.store(this.items);
    }

    store(items) {
      const data = JSON.stringify(items);

      localStorage.setItem(this.STORE_KEY, data);
    }

    getItems() {
      const items = localStorage.getItem(this.STORE_KEY);

      return items ? JSON.parse(items) : [];
    }
}

export default SaveTasks;