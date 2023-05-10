export function createTask(name, description, dueDate, priority, notes) {
    let taskName = name;
    let taskDescription = description;
    let taskDueDate = dueDate;
    let taskPriority = priority;
    let taskNotes = notes;
    return {
        taskName,
        taskDescription,
        taskDueDate,
        taskPriority,
        taskNotes
      };
}
