class Task {
  description: string;
  priority: string;
  done: boolean;

  constructor(public description: string, public priority: string){
    this.done = false;
  }
}

let tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);
