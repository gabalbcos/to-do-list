function newProjectList() {
let projectList = [];

function addNewProject(name, description, dueDate) {
        const newProject = createProject(name, description, dueDate);
        projectList.push(newProject);
}

function removeProject(projectName) {
        projectList = projectList.filter(project => project.projectName !== projectName)
}

function getProjectList() {
        return projectList;
    }
    return {
        projectList,
        addNewProject,
        removeProject,
        getProjectList
    }
}
// project class
function createProject(name, description, dueDate) {
        let projectName = name;
        let projectDescription = description;
        let projectDueDate = dueDate;
        let projectTasks = [];

    
    function addNewTask(name, description, dueDate, priority, notes) {
        const newTask = createTask(name, description, dueDate, priority, notes);
        projectTasks.push(newTask);
    };

    function removeTask(taskName) {
        projectTasks = projectTasks.filter(task => task.taskName !== taskName);
    }
// getter
    function getProject() {
        return {projectName, projectDescription, projectDueDate};
    }

    function getTasks() {
        return projectTasks;
    }

    return {
        addNewTask,
        removeTask,
        getTasks,
        getProject
    }
};
// task method
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


// logic to access the project inside the array
function addTaskToProject(projectName, method, ...args) {
  const project = projectList.find(project => project.getProject().name === projectName);
  if (project) {
    project[method](...args);
    console.log(`Task added to project: ${projectName}`);
  } else {
    console.log(`Project not found: ${projectName}`);
  }
}



addNewProject('pum', 'soltar pum', 10/10/02);
addNewProject('xixi', 'fazer xixi', 09/12/02);

console.log(projectList);

