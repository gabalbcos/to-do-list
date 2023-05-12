


// project class

// task method


// logic to access the project inside the array
const projectsFileD = projectsFiles();
projectsFileD.addNewProject('proj1', 'test this', '12/05');
projectsFileD.addNewProject('proj2', 'test this 2', '11/05');
projectsFileD.addNewProject('proj3', 'test this 3', '14/05');
console.log(projectsFileD.getProjectList())


projectsFileD.projectList[0]
projectsFileD.accessProjects('proj1','addNewTask', 'soltar pum', 'ir ao banheiro soltar pum', '22/05', 'high', 'no notes')
