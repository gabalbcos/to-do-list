
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
        projectTasks.filter(task => task.taskName !== taskName);
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


let project1 = createProject('primeiro','testar essa bosta','never');
console.log(project1)

project1.addNewTask('teste1', 'tentar add uma tarefa', 'hoje', 'high', 'nope');
console.log(project1.getTasks())



