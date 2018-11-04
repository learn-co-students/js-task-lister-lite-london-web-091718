class TaskList {
  constructor (name) {
    this.id = TaskList.id()
    this.name = name
    this.tasks = []
    this.show()
  };

  createNewTask(description) {
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }

  static id() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  };
}
