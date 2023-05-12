/*export function projectsFiles() {
    let projectList = [];

function addNewProject(projectName, description, dueDate) {
        const newProject = createProject(projectName, description, dueDate);
        projectList.push(newProject);
        console.log(`${projectName} added to project list`);
}

function removeProject(projectName) {
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].projectName === projectName) {
          projectList.splice(i, 1);
          console.log(`Project ${projectName} removed.`);
        }
      }
}

function accessProjects(projectName, method, ...args) {
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].projectName === projectName) {
            projectList[i][method](...args);
            console.log(`${projectName}: ${method} with ${args}`);
        } 
        console.log('not found proj');
    }
}

function getProjectList() {
    function selectKeys(project){
        const {projectName, projectDescription, projectDueDate} = project;
        return {projectName, projectDescription, projectDueDate};
    }

    const projectListShort = projectList.map(selectKeys);
    return projectListShort;
}

    return {
        projectList,
        addNewProject,
        removeProject,
        getProjectList,
        accessProjects
    }
  }
*/
let projectList = [];

function createProject(name, description, dueDate) {
    let projectName = name;
    let projectDescription = description;
    let projectDueDate = dueDate;
    let projectTasks = [];
    projectList.push(name);

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

function createTask(name, description, dueDate, priority, notes) {
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
