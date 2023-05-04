// task class
class Task {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes
    }
}

// project class
class Project {
    constructor(name, description, dueDate) {
        this.name = name,
        this.description = description,
        this.dueDate = dueDate
    }

    let tasks = [];
    const pushNewTask = (taskObj) => this.tasks.push(taskObj); 
}

const task1 = new Task('cry', 'in the bathroom', '05/05/2023', 'high', 'bring tissues');
const project1 = new Project('Mental Health', 'tasks to keep me sane', '31/12/2023');

console.log(task1);
console.log(project1);

project1.push(task1);

console.log(project1);




