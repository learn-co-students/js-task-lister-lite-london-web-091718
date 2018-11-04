class Task {
  constructor (task, list) {
    this.id = Task.id()
    this.description = task
    this.list = list
    this.list.tasks.push(this)
  };

  static id() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  };

  render() {
    return `
      <li>
        ${this.description}
        <button data-description="${this.description}">X</button>
      </li>
      `;
  };
}
