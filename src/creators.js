import todoObject from './todo';
import projectObject from './project';
import { saveProjects } from './storage'
import { selectProject, domObjects } from './domElements'
import { selectOption } from './utils'
// import { allProjects, currentProject, displayCurrentProjects } from './index'

//  allProjects = []; 
//  currentProject = '';

const createProjectName = (project, allProjects) => {
  const newProject = projectObject(project);
  allProjects.push(newProject);
  saveProjects(allProjects);
  domObjects.errorMsgsAlert('The Project has been created successfully');
  if (selectProject) {
    selectProject.innerHTML = '';
  }
  selectOption(allProjects);
  domObjects.hideProjectForm();
  if (selectProject) {
    currentProject = selectProject.value;
  }
};


const createTodoObject = (title, description, dueDate, priority, currentProject, allProjects) => {
  if (currentProject == '') {
    createProjectName('Default Project', allProjects);
  }

  const newTodo = todoObject(title, description, dueDate, priority);

  allProjects.forEach((project) => {
    if (project.projectName === currentProject) {
      project.todoList.push(newTodo);
      saveProjects(allProjects);
      displayCurrentProjects();
      domObjects.hideTodoForm();
    }
  });
};

export { createProjectName, createTodoObject }
