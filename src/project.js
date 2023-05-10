export function createProject(name, description, dueDate) {
    let projectName = name;
    let projectDescription = description;
    let projectDueDate = dueDate;
    let projectTasks = [];


function addNewTask(taskName, description, dueDate, priority, notes) {
    const newTask = createTask(taskName, description, dueDate, priority, notes);
    projectTasks.push(newTask);
    console.log(`Task ${taskName} added to ${projectName}`);
};

function removeTask(taskName) {
    for (let i = 0; i < projectTasks.length; i++) {
        if (projectTasks[i].taskName === taskName) {
          projectTasks.splice(i, 1);
          console.log(`${taskName} removed from ${projectName}`);
          break;
        }
      }
    }

function editTask(taskName, taskKey, newValue){
    for (let i = 0; i < projectTasks.length; i++) {
        if (projectTasks[i].taskName === taskName) {
            projectTasks[i][taskKey] = newValue; 
            console.log(`${projectName}: ${taskKey} from ${taskName} changed to ${newValue}`);
            break;
        } console.log('task not found')
    }    
}

// getter
function getProject() {
    return {projectName, projectDescription, projectDueDate};
}

function getTasks() {
    return projectTasks;
}

return {
    projectName,
    projectDescription,
    projectDueDate,
    projectTasks,
    addNewTask,
    removeTask,
    editTask,
    getTasks,
    getProject
}
};