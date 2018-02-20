class Task {
  description: string;
  priority: string;
  done: boolean;

  constructor(descriptionParameter: string, priorityParameter: string){
    this.done = false;
    this.description = descriptionParameter;
    this.priority = priorityParameter;
  }
}

let tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);
