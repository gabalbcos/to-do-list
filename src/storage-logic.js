export function projectsFiles() {
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