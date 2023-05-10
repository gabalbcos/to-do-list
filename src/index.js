function projectsFiles() {
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


// project class
function createProject(name, description, dueDate) {
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
const projectsFileD = projectsFiles();
projectsFileD.addNewProject('proj1', 'test this', '12/05');
projectsFileD.addNewProject('proj2', 'test this 2', '11/05');
projectsFileD.addNewProject('proj3', 'test this 3', '14/05');
console.log(projectsFileD.getProjectList())


projectsFileD.projectList[0]
projectsFileD.accessProjects('proj1','addNewTask', 'soltar pum', 'ir ao banheiro soltar pum', '22/05', 'high', 'no notes')
